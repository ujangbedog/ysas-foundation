/* eslint-disable @typescript-eslint/no-unsafe-assignment */

"use client";

import {
  Footer,
  Main,
  NavigationBar,
  PageSection,
} from "../components";

import { About, AboutFull } from "../landing-page/components/PageSection";

export default function AboutPage() {

  return (
    <Main>
      <NavigationBar scrollThreshold={10} light />
      <PageSection isFirstSection>
        <About />
        <AboutFull />
      </PageSection>
      <Footer />
    </Main>
  );
}
