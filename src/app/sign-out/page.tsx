"use client";
import { useEffect } from "react";
import RedirectOverlay from "@/components/site/RedirectOverlay";

export default function SignOutPage() {
  useEffect(() => {
    try {
      const preservedLang = localStorage.getItem("lang");
      const preservedTheme = localStorage.getItem("theme");
      localStorage.clear();
      if (preservedLang) localStorage.setItem("lang", preservedLang);
      if (preservedTheme) localStorage.setItem("theme", preservedTheme);
    } catch {}
    try {
      document.cookie.split(";").forEach((c) => {
        const eqIdx = c.indexOf("=");
        const name = eqIdx > -1 ? c.slice(0, eqIdx).trim() : c.trim();
        if (!name) return;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
      });
    } catch {}
  }, []);

  return <RedirectOverlay to="/welcome" label="Signing you out…" delayMs={300} />;
}


