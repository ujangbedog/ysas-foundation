"use client";

import Image from "next/image";

import { useTranslations } from "next-intl";
import { useRouter } from "next-intl/client";

import styles from "./Galery.module.scss";

export const Galery = () => {
  const t = useTranslations("myGalery");
  const router = useRouter();

  return (
    <article className={styles.ourProjects}>

      
    </article>
  );
};
