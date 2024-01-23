/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import {
  Footer,
  Main,
  NavigationBar,
  PageSection,
} from "../components";

import { Report } from "../landing-page/components/PageSection";

export default function ReportPage() {

  return (
    <Main>
      <NavigationBar scrollThreshold={10} light />
      <PageSection isFirstSection>
        <Report />
      </PageSection>
      <Footer />
    </Main>
  );
}
