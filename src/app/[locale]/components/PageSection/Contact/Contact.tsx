"use client";

import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import Image from "next/image";

import styles from "./Contact.module.scss";

import { Icon, eIcons } from "../../../components/Icon";
import { Button } from "../../../components/Button";

export const Contact = ({ pageType = "contact-us" }) => {
  const t = useTranslations(pageType);

  return (
    <article className={styles.contact}>
      <div className={styles.contact__content}>
        <h2 className={styles.contact__content__title}>{t("title")}</h2>
        <p className={styles.contact__content__body}>{t("description")}</p>
      </div>
      <div className={styles.contact__form}>
        {/* Facebook */}
        <div className={styles.contact__card}>
          <div className={styles.contact__content}>
            <div className={styles.icon}>
              <Icon icon={eIcons.ContactFacebook}></Icon> <p className={styles.nameVendor}> Facebook</p>
            </div>
            <p className={styles.contact__content__body}>{t("facebook")}</p>
          </div>
          <br />
          <Link
            href="https://www.facebook.com/profile.php?id=61554136967158"
            target="_blank"
          >
          <Button
            fullWidth
          >
            {t("contact-me")}
          </Button>
          </Link>
        </div>

        {/* No Hp */}
        <div className={styles.contact__card}>
          <div className={styles.contact__content}>
            <div className={styles.icon}>
              <Icon icon={eIcons.ContactFacebook}></Icon> <p className={styles.nameVendor}> Facebook</p>
            </div>
            <p className={styles.contact__content__body}>{t("facebook")}</p>
          </div>
          <br />
          <Link
            href="https://www.facebook.com/profile.php?id=61554136967158"
            target="_blank"
          >
          <Button
            fullWidth
          >
            {t("contact-me")}
          </Button>
          </Link>
        </div>
      </div>
      
      <Image
        className={styles["contact__paint-top"]}
        src="/paints/contact-top.png"
        alt="Paint splatter decoration"
        width={220}
        height={120}
      />
      <Image
        className={styles["contact__paint-bottom"]}
        src="/paints/contact-bottom.png"
        alt="Paint splatter decoration"
        width={360}
        height={200}
      />
    </article>
  );
};
