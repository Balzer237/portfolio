'use client';

import LenisProvider from "@/src/lib/lenis/lenisProvider";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return <LenisProvider>{children}</LenisProvider>;
}
