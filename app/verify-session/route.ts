import { pool } from "@/app/db"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

export async function GET() {
  const cookieStore = await cookies()
  const token = cookieStore.get("aji")?.value

  if (!token) {
    return new Response(JSON.stringify({ error: "Invalid or expired token" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    })
  }

  try {
    const decoded = jwt.verify(
      token as string,
      process.env.JWT_SECRET as string,
    )
    const email = (decoded as { email: string }).email

    const client = await pool.connect()
    try {
      const userRes = await client.query(
        'SELECT * FROM "User" WHERE email = $1',
        [email],
      )
      const user = userRes.rows[0]

      if (!user) {
        return new Response(
          JSON.stringify({ error: "Invalid or expired token" }),
          {
            status: 401,
            headers: { "Content-Type": "application/json" },
          },
        )
      }

      return new Response(JSON.stringify({ message: "Success", user }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      })
    } finally {
      client.release()
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid or expired token" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    })
  }
}
