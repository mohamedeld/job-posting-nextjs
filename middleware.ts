import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  try {
    const isPublicPage =
      request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/register";
    const token = request.cookies.get("token");
    if (!token && !isPublicPage) {
      return NextResponse.redirect(new URL("/login", request.nextUrl));
    }
    if (token && isPublicPage) {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
    return NextResponse.next();
  } catch (error: any) {
    return NextResponse.error();
  }
}

export const config = {
  matcher: ["/", "/login", "/register"],
};
