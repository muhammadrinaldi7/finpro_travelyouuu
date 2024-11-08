import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const isAuthenticated = request.cookies.get("token"); // Anggap token tersimpan di cookie
    
    // Misal, halaman admin dilindungi
    if (request.nextUrl.pathname.startsWith("/admin") && !isAuthenticated) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // Jika halaman user, arahkan ke login jika tidak ada token
    if (request.nextUrl.pathname.startsWith("/user") && !isAuthenticated) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
}