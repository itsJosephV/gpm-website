import {getRequestConfig} from "next-intl/server";

import {routing} from "./routing";

type Locale = "es" | "en";

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (
      await (locale === "es" ? import(`../messages/es.json`) : import(`../messages/${locale}.json`))
    ).default,
  };
});
