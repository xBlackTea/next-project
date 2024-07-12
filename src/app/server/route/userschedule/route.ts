import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

// db接続
const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
});

interface UserSchedule {
	user_id: number;
	schedule_id: number;
}

// 全件取得メソッド
export async function GET() {
	const client = await pool.connect();
	try {
		const ret = await client.query('SELECT * FROM "UserSchedule"', []);
		return NextResponse.json(ret.rows);
	} catch (error) {
		console.error('Error executing query', error);
		return NextResponse.json(
			{ error: 'Error executing query' },
			{ status: 500 }
		);
	} finally {
		client.release();
	}
}

// POSTメソッドの処理
export async function POST(req: NextRequest) {
	try {
		const { user_id, schedule_id }: UserSchedule = await req.json();
		const client = await pool.connect();
		try {
			const query = `
            INSERT INTO "UserSchedule" (user_id,schedule_id)
            VALUES ($1,$2)
            RETURNING *`;
			const values = [user_id, schedule_id];
			const result = await client.query(query, values);
			return NextResponse.json(result.rows[0], { status: 201 });
		} catch (error) {
			console.error('Error executing query', error);
			return NextResponse.json(
				{ error: 'Error executing query' },
				{ status: 500 }
			);
		} finally {
			client.release();
		}
	} catch (error) {
		console.error('Invalid request error', error);
		return NextResponse.json(
			{ error: 'Invalid request error' },
			{ status: 400 }
		);
	}
}
