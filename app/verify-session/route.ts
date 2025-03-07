import jwt from "jsonwebtoken"
import { cookies } from "next/headers"
import { prisma } from "../lib/prisma"
export async function GET() {
  console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiit")
  const cookieStore = await cookies()
  const token = cookieStore.get("aji")?.value
  if (!token) {
    console.log("NO TOKEN", token)
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
    const user = await prisma.user.findUnique({ where: { email: email } })
    if (!user) {
      console.log("no user")

      return new Response(
        JSON.stringify({ error: "Invalid or expired token" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        },
      )
    }
    console.log("successsssssssssssssssssss")
    return new Response(JSON.stringify({ message: "Success", user }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid or expired token" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    })
  }
}
