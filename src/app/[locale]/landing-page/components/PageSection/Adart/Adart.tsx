"use client";

import { useTranslations } from "next-intl";

import styles from "./Adart.module.scss";

export const Adart = () => {
  const t = useTranslations("adart");
  return (
    <article className={styles["about-us"]}>
      <h2 className={styles["about-us__title"]}>{t("title")}</h2>

      <iframe
          className={styles.document}
          src={`/documents/sample.pdf`}
        />

    </article>
  );
};
