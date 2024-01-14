"use client";

import { Fragment } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { api } from "~/src/trpc/react";

import {
  Footer,
  Main,
  NavigationBar,
  Galery,
  PageSection
} from "../components";

import styles from "./galery.module.scss";

export default function ProductsPage() {
  const t = useTranslations("galery");
  const { data: projects } = api.projects.getAll.useQuery();

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
          <Galery />
      </PageSection>
  
      <Footer />
    </Main>
  );
}
