/* eslint-disable @typescript-eslint/no-unsafe-assignment */

"use client";

import {
  Footer,
  Main,
  NavigationBar,
  PageSection,
} from "../components";

import { Adart } from "../landing-page/components/PageSection";

export default function ReportPage() {

  return (
    <Main>
      <NavigationBar scrollThreshold={10} light />
      <PageSection isFirstSection>
        <Adart />
      </PageSection>
      <Footer />
    </Main>
  );
}
