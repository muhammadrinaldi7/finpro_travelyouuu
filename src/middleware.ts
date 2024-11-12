import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {jwtDecode} from 'jwt-decode';

const protectedRoutes = ['/dashboard', '/user/profile'];
const adminRoutes = ['/admin/dashboard', '/admin/manage-users'];

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  console.log(token)

  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL('/', req.url));
    }

    try {
      const decodedToken: { role?: string } = jwtDecode(token);
      const userRole = decodedToken.role;

      if (adminRoutes.some((route) => req.nextUrl.pathname.startsWith(route)) && userRole !== 'admin') {
        return NextResponse.redirect(new URL('/unauthorized', req.url));
      }
    } catch {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/user/profile', '/admin/:path*'],
};
