import { NextResponse, NextRequest } from "next/server";
import { Pool } from "pg";

// db接続
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

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
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(ret.rows[0]);
  } catch (error) {
    console.error("Error executing query", error);
    return NextResponse.json(
      { error: "Error executing query" },
      { status: 500 }
    );
  } finally {
    client.release();
  }
}
