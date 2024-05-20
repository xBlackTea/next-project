// usersモデルのAPIを定義
import { NextResponse } from "next/server";

import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined,
  database: process.env.DB_NAME,
  // ssl:
  //   (process.env.DB_SSL && process.env.DB_SSL.toLowerCase() == "true") || false
  //     ? { rejectUnauthorized: false }
  //     : false,
});

// APIテスト用（userデータ全部GETしてくる）
export async function GET() {
  const client = await pool.connect();
  const ret = await client.query('SELECT * FROM "User"', []);
  await client.release(true);

  console.log(ret);

  return NextResponse.json(ret.rows);
}

// export async function CreateUser(req: Request) {
//   const client = await pool.connect();
//   const ret = await client.query('SELECT * FROM "User"', []);
//   await client.release(true);

//   console.log(ret);

//   return NextResponse.json(ret.rows);
// }
