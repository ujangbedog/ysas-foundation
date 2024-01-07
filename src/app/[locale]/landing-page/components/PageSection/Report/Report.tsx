"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next-intl/link";

import { Button } from "../../../../components/Button";

import styles from "./Report.module.scss";

export const Report = () => {
  const t = useTranslations("report");
  return (
    <article className={styles["about-us"]}>
      <h2 className={styles["about-us__title"]}>{t("title")}</h2>
      <p className={styles["about-us__body"]}>{t("description")}</p>
      <div className={styles["about-us__cards"]}>
        <article className={styles.card}>
          <Image
            className={styles.card__image}
            src="/paints/planet.png"
            alt="paint splatter decoration"
            width={150}
            height={150}
          />
          <h5 className={styles.card__title}>{t("financial")}</h5>
          <Link
            href="https://docs.google.com/spreadsheets/d/1LIZlRpRhIf113gaCKLzqzjeCTR7CajXjpScRKgGXpLo/edit#gid=148581188"
            target="_blank"
          >
          <Button
            fullWidth
          >
            {t("btn-go")}
          </Button>
          </Link>
        </article>
        <article className={styles.card}>
          <Image
            className={styles.card__image}
            src="/paints/rainbow.png"
            alt="paint splatter decoration"
            width={150}
            height={150}
          />
          <h5 className={styles.card__title}>{t("programs")}</h5>
          <Link
            href="#"
            target="_blank"
          >
          <Button
            fullWidth
          >
            {t("btn-go")}
          </Button>
          </Link>
        </article>
      </div>
    </article>
  );
};
