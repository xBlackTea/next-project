// scheduleモデルのAPIを定義
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

// db接続情報
const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
});

interface Schedule {
	schedule_id: number;
	screen_id: number;
	movie_id: number;
	seat_id: number[];
	time_id: number;
}

// GETメソッドの処理
export async function GET() {
	const client = await pool.connect();
	try {
		const ret = await client.query('SELECT * FROM "Schedule"', []);
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
		const { screen_id, movie_id, seat_id, time_id }: Schedule =
			await req.json();
		const client = await pool.connect();
		try {
			// seat_idをPostgreSQLの配列形式に変換
			const seatIdArray = `{${seat_id.join(',')}}`;
			// 配列の長さに応じて複数のINSERT文を生成
			const insertQueries = {
				text: `
                    INSERT INTO "Schedule" (screen_id, movie_id, seat_id, time_id)
                    VALUES ($1, $2, $3::int[], $4)
                    RETURNING *`,
				values: [screen_id, movie_id, seatIdArray, time_id],
			};

			// トランザクションを開始
			await client.query('BEGIN');

			// 各INSERT文を順番に実行して結果を取得
			const result = await client.query(
				insertQueries.text,
				insertQueries.values
			);

			// トランザクションをコミット
			await client.query('COMMIT');

			return NextResponse.json(result.rows[0], { status: 201 });
		} catch (error) {
			console.error('Error executing queries', error);
			// ロールバック
			await client.query('ROLLBACK');
			return NextResponse.json(
				{ error: 'Error executing queries' },
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
