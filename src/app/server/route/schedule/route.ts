// scheduleモデルのAPIを定義
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

// db接続情報
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

interface Schedule {
    schedule_id: number;
    screen_id: number;
    movie_id: number;
    seat_id: number;
    movie_start: string;
}

// GETメソッドの処理
export async function GET() {
    const client = await pool.connect();
    try {
        const ret = await client.query('SELECT * FROM "Schedule"',[]);
        return NextResponse.json(ret.rows);
    } catch (error) {
        console.error('Error executing query', error);
        return NextResponse.json(
            { error: "Error executing query" },
            { status: 500 }
        );
    } finally {
        client.release();
    }
}

// POSTメソッドの処理
export async function POST(req:NextRequest) {
    try{
        const { screen_id, movie_id, seat_id, movie_start }: Schedule = await req.json();
        const client = await pool.connect();
        try {
            const query = `
            INSERT INTO "Schedule" (screen_id, movie_id, seat_id, movie_start)
            VALUES ($1,$2,$3,$4)
            RETURNING *`;
            const values = [screen_id, movie_id, seat_id, movie_start];
            const result = await client.query(query,values);
            return NextResponse.json(result.rows[0], { status: 201 });
        } catch (error) {
            console.error("Error executing query", error);
            return NextResponse.json(
                { error: "Error executing query" },
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
