"use client";

import Image from "next/image";

import { useTranslations } from "next-intl";
import { useRouter } from "next-intl/client";

import styles from "./About.module.scss";

export const About = () => {
  const t = useTranslations("about-info");
  const router = useRouter();

  return (
    <article className={styles.mission}>
      <div className={styles["mission__image-container"]}>
        <Image
          src="/paints/planet-artist-half.png"
          alt="Paint Decoration"
          loading="lazy"
          width={300}
          height={250}
          className={styles["paint-top"]}
        />
        <Image
          src="/founder.jpg"
          alt="Three women"
          width={600}
          height={700}
        />
        <Image
          src="/paints/planet-artist.png"
          alt="Paint Decoration"
          loading="lazy"
          width={320}
          height={350}
          className={styles["paint-bottom"]}
        />
      </div>
      <div className={styles.mission__content}>
        <p className={styles.mission__subtitle}>{t("title")}</p>
        <h2 className={styles.mission__title}>{t("name")}</h2>
        <p className={styles.mission__body}>{t("desc")}</p>
      </div>
    </article>
  );
};
