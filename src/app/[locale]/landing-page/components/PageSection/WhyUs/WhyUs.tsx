"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next-intl/client";
import Image from "next/image";

import { Button, eButtonColor } from "../../../../components/Button";

import styles from "./WhyUs.module.scss";

export const WhyUs = () => {
  const t = useTranslations("why-us");
  const router = useRouter();

  const paintList = [
    "/paints/artist.png",
    "/paints/rainbow.png",
    "/paints/cold.png",
  ] as const;

  return (
    <article className={styles["why-us"]}>
      <div className={styles["why-us__overlay"]}></div>
      <p className={styles["why-us__subtitle"]}>{t("subtitle")}</p>
      <h2 className={styles["why-us__title"]}>{t("title")}</h2>
      <ul className={styles["why-us__cards"]}>
        {paintList.map((paint, index) => (
          <li className={styles.card} key={paint}>
            <div className={styles.card__bg}></div>
            <Image
              className={styles.card__image}
              src={paint}
              alt="paint splatter decoration"
              width={200}
              height={150}
            />
            <span className={styles.card__title}>
              {t(`${index + 1}.title`)}
            </span>
            <p className={styles.card__description}>
              {t(`${index + 1}.description`)}
            </p>
          </li>
        ))}
      </ul>
      <Button
        color={eButtonColor.purple}
        onClick={() => router.push("/projects")}
      >
        {t("cta")}
      </Button>
    </article>
  );
};
