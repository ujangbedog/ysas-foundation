"use client";

import { useTranslations } from "next-intl";
import Link from "next-intl/link";


import {
  Footer,
  Icon,
  Main,
  NavigationBar,
  PageSection,
  eIcons,
} from "../components";

import styles from "./galery.module.scss";
import { galeryData } from "~/src/constants";

export default function GaleryPage() {
  const t = useTranslations("galerys");

  return (
    <Main>
      <NavigationBar scrollThreshold={10} light />
        <PageSection
          bgImage="/paints/faqs-banner.jpg"
          bgDefaultColor="#1c1d20"
          isFirstSection
        >
        <div className={styles.header} />
      </PageSection>

      <PageSection isLastSection>
        <article className={styles.documents}>
          <div className={styles.documents__content}>
            <h2 className={styles.documents__title}>{t("title")}</h2>
            <p className={styles.documents__update}>
              {t.rich("last-update", { date: "21/12/2023" })}
            </p>
          </div>
          <ul className={styles.documents__list}>
            {galeryData.map(({ album, displayName, date }) => (
              <li key={album} className={styles.link}>
                <hr />
                <Link href={"/galery/" + album} className={styles.link__main}>
                  <Icon icon={eIcons.arrowRight} />
                  <div className={styles.link__content}>
                    <div className={styles.link__name}>{displayName}</div>
                    <div className={styles.link__date}>{date}</div>
                  </div>
                </Link>
                
              </li>
            ))}
          </ul>
        </article>
      </PageSection>
  
      <Footer />
    </Main>
  );
}
