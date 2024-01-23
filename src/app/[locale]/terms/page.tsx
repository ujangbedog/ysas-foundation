/* eslint-disable @typescript-eslint/no-unsafe-assignment */

"use client";

import {
  Footer,
  Main,
  NavigationBar,
  PageSection,
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
