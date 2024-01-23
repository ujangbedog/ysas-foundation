"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

import {
  Footer,
  Main,
  NavigationBar,
  OurProjects,
  PageSection
} from "../components";

import styles from "./projects.module.scss";

export default function ProjectsPage() {
  const t = useTranslations("projects");

  return (
    <Main>
      <NavigationBar scrollThreshold={10} />
      <PageSection bgImage="/bg-projects-page.jpg">
        <div className={styles.header}>
          <div className={styles.header__content}>
            <p className={styles.header__content__subtitle}>{t("title")}</p>
            <h2 className={styles.header__content__title}>
              {t("description")}
            </h2>
            <p className={styles.header__content__body}>{t("content")}</p>
          </div>
          <Image
            className={styles.header__paint}
            src={"/paints/hero.png"}
            alt="Paint splatter decoration"
            width={300}
            height={300}
          />
        </div>
      </PageSection>

      <PageSection>
          <OurProjects />
      </PageSection>
      
      <Footer />
    </Main>
  );
}
