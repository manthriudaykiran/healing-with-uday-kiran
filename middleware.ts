import { NextRequest, NextResponse } from "next/server";
import { TAGMANGO_URL } from "@/modules/tagmango/redirect";

const EXTERNAL_AUTH_ROUTES = ["/login", "/dashboard", "/member", "/account"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (EXTERNAL_AUTH_ROUTES.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    return NextResponse.redirect(TAGMANGO_URL);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/login/:path*", "/dashboard/:path*", "/member/:path*", "/account/:path*"],
};
