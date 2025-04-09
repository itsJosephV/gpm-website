import React from "react";

import BaseLayout from "@/components/layout/BaseLayout";
import {routing} from "@/i18n/routing";
import NotFoundPage from "@/components/not-found-page";

function NotFound() {
  return (
    <BaseLayout locale={routing.defaultLocale}>
      <NotFoundPage />
    </BaseLayout>
  );
}

export default NotFound;
