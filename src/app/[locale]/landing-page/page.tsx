"use client";

import { useState } from "react";

import { ModalContext } from "~/src/contexts";

import { Footer, Main, Modal, NavigationBar } from "../components";
import { Contact, PageSection } from "../components/PageSection";

import {
  AboutUs,
  Goals,
  Hero,
  Mission,
  Numbers,
  WhyUs,
} from "./components/PageSection";

export default function LandingPage() {
  const [modalContent, setModalContent] = useState<null | React.ReactNode>(
    null
  );

  return (
    <ModalContext.Provider
      value={{ content: modalContent, setContent: setModalContent }}
    >
      <Main isModalOpen={!!modalContent}>
        <NavigationBar />
        <Hero />
        <PageSection>
          <Mission />
        </PageSection>
        <PageSection>
          <AboutUs />
        </PageSection>
        <PageSection bgImage="/issue.jpg" bgDefaultColor="#6432c8">
          <Numbers />
        </PageSection>
        <PageSection>
          <Goals />
        </PageSection>
        <PageSection
          bgImage="/bg-projects-and-therapy.jpg"
          bgDefaultColor="#494a4d"
        >
          <WhyUs />
        </PageSection>
        <PageSection bgDefaultColor="#1c1d20">
          <Contact />
        </PageSection>
        <Footer />
      </Main>

      {modalContent && <Modal />}
    </ModalContext.Provider>
  );
}