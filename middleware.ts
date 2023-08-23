import { NextResponse, NextRequest } from 'next/server'


export const config = {
    matcher: ['/']
}


export function middleware(req: NextRequest) {
    const msg = `${new Date().toISOString()} ${req.method} ${req.url}`;
    console.log(msg);
    
    const newURL = req.nextUrl.clone();
    newURL.pathname = `/test`;
    return NextResponse.redirect(newURL);    
}