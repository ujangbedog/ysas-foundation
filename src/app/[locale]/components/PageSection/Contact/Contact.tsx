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

        {/* No Hp */}
        <div className={styles.contact__card}>
          <div className={styles.contact__content}>
            <div className={styles.icon}>
              <Icon icon={eIcons.ContactPhone}></Icon> <p className={styles.nameVendor}>{t("contact-phone")}</p>
            </div> <br />
            <p className={styles.contact__content__body}>{t("phone")}</p>
          </div>
          <br />
        </div>

        {/* Whatsapp */}
        <div className={styles.contact__card}>
          <div className={styles.contact__content}>
            <div className={styles.icon}>
              <Icon icon={eIcons.ContactWhatsapp}></Icon> <p className={styles.nameVendor}>{t("contact-whatsapp")}</p>
            </div> <br />
            <p className={styles.contact__content__body}>{t("whatsapp")}</p>
          </div>
          <br />
          <Link
            href="https://wa.me/081313977111"
            target="_blank"
          >
          <Button
            fullWidth
          >
            {t("contact-me-whatsapp")}
          </Button>
          </Link>
        </div>

        {/* Email */}
        <div className={styles.contact__card}>
          <div className={styles.contact__content}>
            <div className={styles.icon}>
              <Icon icon={eIcons.ContactEmail}></Icon> <p className={styles.nameVendor}>{t("contact-email")}</p>
            </div> <br />
            <p className={styles.contact__content__body}>{t("email")}</p>
          </div>
          <br />
        </div>

        {/* Location */}
        <div className={styles.contact__card}>
          <div className={styles.contact__content}>
            <div className={styles.icon}>
              <Icon icon={eIcons.ContactLocation}></Icon> <p className={styles.nameVendor}>{t("contact-location")}</p>
            </div> <br />
            <p className={styles.contact__content__body}>{t("location")}</p>
          </div>
          <br />
          <Link
            href="https://maps.app.goo.gl/xgq9Kbm27ULuQsNN8"
            target="_blank"
          >
          <Button
            fullWidth
          >
            {t("contact-me-location")}
          </Button>
          </Link>
        </div>

        {/* Facebook */}
        <div className={styles.contact__card}>
          <div className={styles.contact__content}>
            <div className={styles.icon}>
              <Icon icon={eIcons.ContactFacebook}></Icon> <p className={styles.nameVendor}>{t("contact-facebook")}</p>
            </div> <br />
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
            {t("contact-me-facebook")}
          </Button>
          </Link>
        </div>

        {/* Youtube */}
        <div className={styles.contact__card}>
          <div className={styles.contact__content}>
            <div className={styles.icon}>
              <Icon icon={eIcons.ContactYoutube}></Icon> <p className={styles.nameVendor}>{t("contact-youtube")}</p>
            </div> <br />
            <p className={styles.contact__content__body}>{t("youtube")}</p>
          </div>
          <br />
          <Link
            href="https://www.youtube.com/@YSASOfficial"
            target="_blank"
          >
          <Button
            fullWidth
          >
            {t("contact-me-youtube")}
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
