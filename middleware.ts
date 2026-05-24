import { NextRequest, NextResponse } from "next/server";
import { TAGMANGO_URL, TAGMANGO_LOGIN_URL } from "@/modules/tagmango/redirect";

const LOGIN_ROUTES = ["/login"];
const DASHBOARD_ROUTES = ["/dashboard", "/member", "/account"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (LOGIN_ROUTES.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    return NextResponse.redirect(TAGMANGO_LOGIN_URL);
  }
  if (DASHBOARD_ROUTES.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    return NextResponse.redirect(TAGMANGO_URL);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/login/:path*", "/dashboard/:path*", "/member/:path*", "/account/:path*"],
};
