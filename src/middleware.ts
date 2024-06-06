import { NextRequest, NextResponse } from "next/server";
import { getToken, JWT } from "next-auth/jwt";

export default async function middleware(req: NextRequest) {
  const routesNeedAuth: string[] = ["/profile", "/checkout"];
  const authRoutes: string[] = ["/signup", "/login"];
  const currentPath: string = req.nextUrl.pathname;

  const matchesRoute = (path: string, routes: string[]): boolean => {
    return routes.some(
      (route) => path === route || path.startsWith(`${route}/`),
    );
  };

  const token: JWT | null = await getToken({ req });

  if (token && matchesRoute(currentPath, authRoutes)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (matchesRoute(currentPath, routesNeedAuth) && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
