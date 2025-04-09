import React from "react";
import {Locale, NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";

import {manrope} from "@/app/fonts/manrope";
import {cn} from "@/utils/cn";

type BaseLayoutProps = {
  children: React.ReactNode;
  locale: Locale;
};

async function BaseLayout({children, locale}: BaseLayoutProps) {
  const messages = await getMessages();

  return (
    <html lang={locale} translate="no">
      <NextIntlClientProvider messages={messages}>
        <body
          className={cn(manrope.className, "grid min-h-dvh grid-rows-[auto_1fr_auto] antialiased")}
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}

export default BaseLayout;

function Header() {
  return <header className="bg-blue-100">this is a header</header>;
}

function Footer() {
  return <header className="bg-blue-100">this is a footer</header>;
}
