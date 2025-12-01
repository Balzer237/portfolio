import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Langues supportées
  const locales = ["en", "fr"];

  const PUBLIC_FILE = /\.(.*)$/;

  // On ignore les fichiers statiques et l'API
  if (
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Vérifie si l'URL contient déjà une locale
  const hasLocale = locales.some((locale) =>
    pathname.startsWith(`/${locale}`)
  );

  if (!hasLocale) {
    // détection simple de la langue par navigateur
    const lang = req.headers
      .get("accept-language")
      ?.split(",")[0]
      ?.slice(0, 2);

    const locale = locales.includes(lang!) ? lang : "fr";

    // redirection vers la bonne langue
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, req.url)
    );
  }

  return NextResponse.next();
}
