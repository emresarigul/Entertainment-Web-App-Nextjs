import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BANNED_BOTS = [
  "meta-externalagent",
  "facebookexternalhit",
  "facebookbot",
  "instagram",
  "whatsapp",
  "python-requests",
  "node-fetch",
  "bytespider",
  "ahrefsbot",
  "semrushbot",
  "dotbot",
  "mj12bot",
  "blexbot",
  "petalbot",
  "yandexbot",
  "baiduspider",
  "applebot",
  "discordbot",
  "telegrambot",
];

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent")?.toLowerCase() || "";

  const isBot = BANNED_BOTS.some((bot) =>
    userAgent.includes(bot.toLowerCase())
  );

  if (isBot) {
    return new NextResponse("Access Denied", {
      status: 403,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Tüm rotalar, sadece bunlar HARİÇ:
     * - _next/static (CSS, JS dosyaları)
     * - _next/image (resim optimizasyonu)
     * - favicon.ico
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
