import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("next-auth.session-token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  const payload = JSON.parse(atob(token.split(".")[1]));
  const isExpired = payload.exp < Date.now() / 1000;

  if (isExpired) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/invoices/:path*",
    "/help/:path*",
    "/settings/:path*",
    "/clients/:path*",
    "/calculator/:path*",
    "/payments/:path*",
    "/market/:path*",
    "/wallet/:path*",
  ],
};
