"use client";

import Image from "next/image";

import { useTranslations } from "next-intl";
import { useRouter } from "next-intl/client";

import { Button, eButtonColor } from "../Button";

import styles from "./OurProjects.module.scss";

export const OurProjects = () => {
  const t = useTranslations("ourProjects");
  const router = useRouter();

  return (
    <article className={styles.ourProjects}>
      <div className={styles["ourProjects__image-container"]}>
        <Image
          src="/project/hidayatul-mutaqqin.jpg"
          alt="Three women"
          width={600}
          height={700}
        />
      </div>
      <div className={styles.ourProjects__content}>
        <p className={styles.ourProjects__subtitle}>{t("title")}</p>
        <h2 className={styles.ourProjects__title}>{t("description")}</h2>
        <p className={styles.ourProjects__body}>{t("content")}</p>
        <Button
          color={eButtonColor.purple}
          onClick={() => router.push("/projects")}
        >
          {t("learn-more")}
        </Button>
      </div>
    </article>
  );
};
