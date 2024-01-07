"use client";

import { useTranslations } from "next-intl";

import styles from "./Terms.module.scss";

export const Terms = () => {
  const t = useTranslations("terms");
  return (
    <article className={styles["about-us"]}>
      <h2 className={styles["about-us__title"]}>{t("title")}</h2>
      <p className={styles["about-us__body"]}>{t("description")}</p>
        <div className={styles["about-us__content"]}>
          <h4 className={styles["about-us__sub"]}> <b>{t("sub-1.title")}</b> </h4> <br />
            <ul>
              <li>
                {t("sub-1.point-1")}
              </li>
              <li>
                {t("sub-1.point-2")}
              </li>
            </ul>
          <h4 className={styles["about-us__sub"]}> <b>{t("sub-2.title")}</b> </h4> <br />
            <ul>
              <li>
                {t("sub-2.point-1")}
              </li>
            </ul>
          <h4 className={styles["about-us__sub"]}> <b>{t("sub-3.title")}</b> </h4> <br />
            <ul>
              <li>
                {t("sub-3.point-1")}
              </li>
              <li>
                {t("sub-3.point-2")}
              </li>
            </ul>
          <h4 className={styles["about-us__sub"]}> <b>{t("sub-4.title")}</b> </h4> <br />
          <ul>
            <li>
              {t("sub-4.point-1")}
            </li>
            <li>
              {t("sub-4.point-2")}
            </li>
          </ul>
          <h4 className={styles["about-us__sub"]}> <b>{t("sub-5.title")}</b> </h4> <br />
          <ul>
            <li>
              {t("sub-5.point-1")}
            </li>
          </ul>
          <h4 className={styles["about-us__sub"]}> <b>{t("sub-6.title")}</b> </h4> <br />
          <ul>
            <li>
              {t("sub-6.point-1")}
            </li>
          </ul>
        </div>
        <br /><br /><br /><br />
        <p className={styles["about-us__body"]}>{t("foot")}</p>
    </article>
  );
};
