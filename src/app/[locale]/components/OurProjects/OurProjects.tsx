"use client";

import Image from "next/image";

import { useTranslations } from "next-intl";
import { useRouter } from "next-intl/client";

import { Button, eButtonColor } from "../Button";

import styles from "./OurProjects.module.scss";

export const OurProjects = () => {
  const t = useTranslations("ourProjects");
  const y = useTranslations("ourProjects2");
  const u = useTranslations("ourProjects3");
  const i = useTranslations("ourProjects4");
  const router = useRouter();

  return (
    <article className={styles.ourProjects}>
      {/* Project 1 */}
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

      {/* Project 2 */}
      <div className={styles["ourProjects__image-container"]}>
        <Image
          src="/project/goodness.jpg"
          alt="Three women"
          width={600}
          height={700}
        />
      </div>
      <div className={styles.ourProjects__content}>
        <p className={styles.ourProjects__subtitle}>{y("title")}</p>
        <h2 className={styles.ourProjects__title}>{y("description")}</h2>
        <p className={styles.ourProjects__body}>{y("content")}</p>
        <Button
          color={eButtonColor.purple}
          onClick={() => router.push("/projects")}
        >
          {t("learn-more")}
        </Button>
      </div>

      {/* Project 3 */}
      <div className={styles["ourProjects__image-container"]}>
        <Image
          src="/project/integra-madani.jpg"
          alt="Three women"
          width={600}
          height={700}
        />
      </div>
      <div className={styles.ourProjects__content}>
        <p className={styles.ourProjects__subtitle}>{u("title")}</p>
        <h2 className={styles.ourProjects__title}>{u("description")}</h2>
        <p className={styles.ourProjects__body}>{u("content")}</p>
        <Button
          color={eButtonColor.purple}
          onClick={() => router.push("/projects")}
        >
          {t("learn-more")}
        </Button>
      </div>

      {/* Project 4 */}
      <div className={styles["ourProjects__image-container"]}>
        <Image
          src="/project/all-we-can-repair.jpg"
          alt="Three women"
          width={600}
          height={700}
        />
      </div>
      <div className={styles.ourProjects__content}>
        <p className={styles.ourProjects__subtitle}>{i("title")}</p>
        <h2 className={styles.ourProjects__title}>{i("description")}</h2>
        <p className={styles.ourProjects__body}>{i("content")}</p>
        <Button
          color={eButtonColor.purple}
          onClick={() => router.push("/projects")}
        >
          {t("learn-more")}
        </Button>
      </div>

      {/* End Project */}
    </article>
  );
};
