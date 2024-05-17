import { NextRequest, NextResponse } from "next/server";
import { getToken, JWT } from "next-auth/jwt";

export default async function middleware(req: NextRequest) {
  const routesNeedAuth: string[] = ["/profile", "/order"];
  const authRoutes: string[] = ["/signup", "/login"];
  const currentPath: string = req.nextUrl.pathname;

  const token: JWT | null = await getToken({ req });

  if (token && authRoutes.includes(currentPath)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (routesNeedAuth.includes(currentPath) && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
