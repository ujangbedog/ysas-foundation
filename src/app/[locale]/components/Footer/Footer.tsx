"use client";

import { useTranslations } from "next-intl";
import Link from "next-intl/link";

import { Logo, eLogoType } from "../Logo";
import { Icon, eIcons } from "../Icon";

import styles from "./Footer.module.scss";

export const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className={styles.footer}>
      <article className={styles.footer__content}>
        <div className={styles.footer__rights}>
          <span>&copy; 2023 all rights reserved.</span>
          <span>
            <b>YSAS Foundation.</b>
          </span>
        </div>
        <ul className={styles.footer__socials}>
          <li>
            <Link
              href="https://www.facebook.com/profile.php?id=61554136967158"
              target="_blank"
            >
              <Icon icon={eIcons.socialFacebook}></Icon>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/@YSASOfficial"
              target="_blank"
            >
              <Icon icon={eIcons.socialYoutube}></Icon>
            </Link>
          </li>
        </ul>
      </article>
      <p className={styles.footer__disclaimer}>
        {t.rich("tax-disclaimer", {
          docs: (chunks) => <Link href="/documents">{chunks}</Link>,
        })}
      </p>
    </footer>
  );
};
