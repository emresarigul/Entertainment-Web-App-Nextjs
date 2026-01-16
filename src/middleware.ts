import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Engellemek istediğin botların listesi
const BANNED_BOTS = [
  "meta-externalagent",
  "facebookexternalhit",
  "facebookbot",
  "instagram",
  "whatsapp",
  "python-requests",
  "node-fetch",
  "bytespider", // TikTok
  "ahrefsbot",
  "semrushbot",
  "dotbot", // Moz
  "mj12bot",
  "blexbot",
  "petalbot", // Huawei
  "yandexbot",
  "baiduspider",
  "applebot",
  "discordbot",
  "telegrambot",
];

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent")?.toLowerCase() || "";

  // Eğer User-Agent yasaklı listeden birini içeriyorsa isteği engelle
  const isBot = BANNED_BOTS.some((bot) =>
    userAgent.includes(bot.toLowerCase())
  );

  if (isBot) {
    // 403 Forbidden - Bot hiçbir şey göremesin
    return new NextResponse("Access Denied", {
      status: 403,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  return NextResponse.next();
}

// BÜTÜN sayfalara uygula (sadece Next.js sistem dosyaları hariç)
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
