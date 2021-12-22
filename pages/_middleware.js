import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET, });
  const { pathname } = req.nextUrl;
  // always allow access to index page
  if (pathname === "/") {
    return NextResponse.next();
  }
  // if no token, only allows access to login/sigup page and req to auth
  if (!token && (pathname.includes('/api/auth') || pathname.includes('/auth'))) {
    return NextResponse.next();
  } else if (!token && !pathname.includes('/auth')) {
    return NextResponse.redirect('/auth/signin');
  }
  // if token, allow access to all pages except /auth
  if (token && (pathname === '/auth/signin' || pathname === '/auth/signup')) {
    return NextResponse.redirect('/');
  } else {
    return NextResponse.next();
  }
}