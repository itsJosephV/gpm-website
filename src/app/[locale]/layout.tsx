import type {Locale} from "@/i18n/routing";

import React, {ReactNode} from "react";
import {notFound} from "next/navigation";
import {setRequestLocale} from "next-intl/server";

import BaseLayout from "@/components/layout/BaseLayout";
import {routing} from "@/i18n/routing";

type RootLayoutProps = {
  children: ReactNode;
  params: {locale: string};
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

async function Layout({children, params}: RootLayoutProps) {
  const {locale} = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return <BaseLayout locale={locale}>{children}</BaseLayout>;
}

export default Layout;
