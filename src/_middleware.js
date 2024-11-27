import { NextResponse } from "next/server";

const supportedLanguages = ["en", "ar"];

export function middleware(req) {
    const { pathname } = req.nextUrl;
    console.log("Request Method:", req.method);
    console.log("Request URL:", req.url);

    if (pathname === "/") {
        const url = req.nextUrl.clone();
        url.pathname = "/app/en";
        return NextResponse.rewrite(url);
    }

    const pathSegments = pathname.split("/").filter(Boolean);
    const lang = pathSegments[1];

    if (lang && !supportedLanguages.includes(lang)) {
        const url = req.nextUrl.clone();
        url.pathname = "/app/en";
        return NextResponse.rewrite(url);
    }

    return NextResponse.next();
}
