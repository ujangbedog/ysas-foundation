"use client";

import { useState, useEffect } from "react";
import { ModalContext } from "~/src/contexts";

import { Footer, Main, Modal, NavigationBar, Loading } from "../components";
import { Contact, PageSection } from "../components/PageSection";

import {
  AboutUs,
  Ambassadors,
  Projects,
  Goals,
  Hero,
  Mission,
  Numbers,
  Therapy,
  WhyUs,
} from "./components/PageSection";

export default function LandingPage() {
  const [modalContent, setModalContent] = useState<null | React.ReactNode>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // await new Promise(resolve => setTimeout(resolve, 5000));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  
  return (
    <ModalContext.Provider value={{ content: modalContent, setContent: setModalContent }}>
      {loading ? (
        // Display a loading component while waiting for data
        <Loading />
      ) : (
        // Render the actual content once loading is false
        <Main isModalOpen={!!modalContent}>
          <NavigationBar />
          <Hero />
          <PageSection>
            <Mission />
          </PageSection>
          <PageSection>
            <AboutUs />
          </PageSection>
          <PageSection>
            <Ambassadors />
          </PageSection>
          <PageSection bgImage="/bg-numbers.jpg" bgDefaultColor="#6432c8">
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
            <Therapy />
          </PageSection>
          <PageSection>
            <Projects />
          </PageSection>
          <PageSection bgDefaultColor="#1c1d20">
            <Contact />
          </PageSection>
          <Footer />
        </Main>
      )}

      {modalContent && <Modal />}
    </ModalContext.Provider>
  );
}
