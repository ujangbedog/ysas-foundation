"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next-intl/client";
import Image from "next/image";

import { Button, eButtonColor } from "../../../../components/Button";

import styles from "./Therapy.module.scss";

export const Therapy = () => {
  const t = useTranslations("therapy");
  const router = useRouter();

  const paintList = ["/paints/planet.png", "/paints/green.png"] as const;

  return (
    ""
  );
};
