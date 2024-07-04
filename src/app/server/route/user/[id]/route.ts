import { NextResponse, NextRequest } from 'next/server';
import { Pool } from 'pg';

// db接続
const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
});

interface User {
	user_id: number;
	first_name: string;
	last_name: string;
	schedule_id: number;
	e_mail: string;
	password: string;
}

export async function GET(
	req: NextRequest,
	{ params }: { params: { id: number } }
) {
	const client = await pool.connect();
	const { id } = params;

	try {
		const ret = await client.query('SELECT * FROM "User" WHERE user_id = $1', [
			id,
		]);
		if (ret.rows.length === 0) {
			return NextResponse.json({ error: 'User not found' }, { status: 404 });
		}
		return NextResponse.json(ret.rows[0]);
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

export async function PATCH(
	req: NextRequest,
	{ params }: { params: { id: number } }
) {
	try {
		const { schedule_id }: User = await req.json();
		const client = await pool.connect();
		const { id } = params;
		try {
			const query = `
			UPDATE "User"
			SET schedule_id = $1
			WHERE user_id = $2
			RETURNING *`;
			const values = [schedule_id, id];
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
