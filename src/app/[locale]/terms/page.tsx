/* eslint-disable @typescript-eslint/no-unsafe-assignment */

"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter } from "next-intl/client";
import { api } from "~/src/trpc/react";

import {
  Button,
  Contact,
  Footer,
  Icon,
  Main,
  NavigationBar,
  PageSection,
  eButtonType,
  eIcons,
} from "../components";

import { Terms } from "../landing-page/components/PageSection";

export default function TermsPage() {

  return (
    <Main>
      <NavigationBar scrollThreshold={10} light />
      <PageSection isFirstSection>
        <Terms />
      </PageSection>
      <Footer />
    </Main>
  );
}
