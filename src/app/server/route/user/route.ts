// usersモデルのAPIを定義
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse, NextRequest } from 'next/server';
import { Pool } from 'pg';
import bcrypt from 'bcrypt';

// PSQL接続情報
const pool = new Pool({
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined,
	database: process.env.DB_NAME,
});

interface User {
	user_id: number;
	user_name: string;
	password: string;
	e_mail: string;
	age: number;
	student: boolean;
	created_at: Date;
	updated_at: Date;
}

// GETメソッドの処理
export async function GET() {
	const client = await pool.connect();
	try {
		const ret = await client.query('SELECT * FROM "User"', []);
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
		const { user_name, e_mail, age, password, student }: User =
			await req.json();

		// パスワードのハッシュ化
		const hashedPassword = await bcrypt.hash(password, 10);

		const client = await pool.connect();
		try {
			const query = `
        INSERT INTO "User" (user_name, password, e_mail, age, student, created_at, updated_at) 
        VALUES ($1, $2, $3, $4, $5, NOW(), NOW()) 
        RETURNING *`;
			const values = [user_name, hashedPassword, e_mail, age, student];
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
		console.error('Invalid request payload', error);
		return NextResponse.json(
			{ error: 'Invalid request payload' },
			{ status: 400 }
		);
	}
}

export async function PUT(req: NextRequest) {
	try {
		const { user_id, user_name, e_mail, age, password, student }: User =
			await req.json();

		// パスワードのハッシュ化
		const hashedPassword = await bcrypt.hash(password, 10);

		const client = await pool.connect();
		try {
			const query = `
        UPDATE "User" 
        SET user_name = $1, password = $2, e_mail = $3, age = $4, student = $5, updated_at = NOW()
        WHERE user_id = $6
        RETURNING *`;
			const values = [user_name, hashedPassword, e_mail, age, student, user_id];
			const result = await client.query(query, values);
			return NextResponse.json(result.rows[0], { status: 200 });
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
		console.error('Invalid request payload', error);
		return NextResponse.json(
			{ error: 'Invalid request payload' },
			{ status: 400 }
		);
	}
}

export async function DELETE(req: NextRequest) {
	try {
		const { user_id }: User = await req.json();

		const client = await pool.connect();
		try {
			const query = `
        DELETE FROM "User" 
        WHERE user_id = $1
        RETURNING *`;
			const values = [user_id];
			const result = await client.query(query, values);
			return NextResponse.json(result.rows[0], { status: 200 });
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
		console.error('Invalid request payload', error);
		return NextResponse.json(
			{ error: 'Invalid request payload' },
			{ status: 400 }
		);
	}
}
