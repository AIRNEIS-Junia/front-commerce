import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

const authMiddleware = withAuth(
  function onSuccess(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: "/login",
    },
  },
);

export default function middleware(req: NextRequest) {
  const routesNeedAuth = ["profile", "order"];
  const currentPath = req.nextUrl.pathname;

  const requiresAuth = routesNeedAuth.includes(currentPath.substring(1));

  if (requiresAuth) {
    return (authMiddleware as any)(req);
  }
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
