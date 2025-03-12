import { headers } from "next/headers"
import { NextRequest } from "next/server"
export default async function middleware(req: NextRequest) {
  const header = await headers()
  const protectedRoutes = "/dashboard"
  const currentPath = req.nextUrl.pathname
  if (currentPath.includes(protectedRoutes)) {
    try {
      const res = await fetch(`${process.env.API_URL}/verify-session`, {
        headers: header,
      })
      if (!res.ok) {
        throw new Error("Unauthorized access")
      }
    } catch (error: any) {
      // return NextResponse.redirect(new URL("/signin", req.nextUrl.origin))
    }
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|manual/*|favicon.ico|/terms&conditions|sitemap.xml|robots.txt).*)",
  ],
}
