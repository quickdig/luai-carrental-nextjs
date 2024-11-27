// components/RedirectComponent.js
"use client"; // This ensures it's a Client Component

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { i18n } from '../i18n.config'; // Adjust path if needed

const RedirectComponent = () => {
  const router = useRouter();
  const { defaultLocale } = i18n;

  useEffect(() => {
    const { pathname } = window.location;
    if (pathname === `/${defaultLocale}`) {
      if (!pathname.startsWith(`/${defaultLocale}`)) {
        router.push(`/${defaultLocale}${pathname}`);
      }
    }
  }, [router, defaultLocale]);

  return null;
};

export default RedirectComponent;
