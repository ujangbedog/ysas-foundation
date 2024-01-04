"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useRouter } from "next-intl/client";
import Link from "next-intl/link";

import { Button, eButtonColor, eButtonType } from "../Button";
import { Icon, eIcons } from "../Icon";
import { Logo, eLogoType } from "../Logo";
import { LanguageSelection } from "./LanguajeSelection";
import { Hamburguer } from "./Hamburger";

import styles from "./NavigationBar.module.scss";
import { MainScrollContext } from "~/src/contexts";
import { color } from "html2canvas/dist/types/css/types/color";

export const NavigationBar = ({ light = false, scrollThreshold = 220 }) => {
  const [selectedLocale, setSelectedLocale] = useState(useLocale());
  const [isDisplayingAbout, setDisplayingAbout] = useState(false);
  const [isDisplayingInformation, setDisplayingInformation] = useState(false);
  const [isDisplayingService, setDisplayingService] = useState(false);
  const t = useTranslations("nav");
  const [isScroll, setScroll] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [logoType, setLogoType] = useState(
    light ? eLogoType.color : eLogoType.white
  );
  const [secondaryCtaColor, setSecondaryCtaColor] = useState(
    light ? eButtonColor.purple : eButtonColor.white
  );
  const router = useRouter();
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const scroll = useContext(MainScrollContext);

  const handleSelect = (locale: string) => {
    setSelectedLocale(locale);
    setDisplayingAbout(false);
  };

  const menuItems = [
    { value: "home", link: "/" },
    // { value: "about", link: "/about" },
    // { value: "contact", link: "/contact" },
    // { value: "faqs", link: "/faqs" },
  ] as const;

  const getClassName = () => {
    return [
      styles["navigation-bar"],
      light ? styles["navigation-bar--light"] : "",
      isScroll ? styles["navigation-bar--on-scroll"] : "",
      isMenuOpen ? styles["navigation-bar--menu-open"] : "",
    ].join(" ");
  };

  const handleMouseLeave = () => {
    // Implement the logic to handle mouse leave
    // For example, you can close all dropdowns by resetting their states
    setDisplayingAbout(false);
    setDisplayingInformation(false);
    setDisplayingService(false);
    // ... (reset other states for other menu items)
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scroll > scrollThreshold) {
        setScroll(true);
        setSecondaryCtaColor(eButtonColor.purple);
        setLogoType(eLogoType.color);
      } else {
        setScroll(false);

        if (!isMenuOpen && !light) {
          setSecondaryCtaColor(eButtonColor.white);
          setLogoType(eLogoType.white);
        }
      }
    };

    const handleEscPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    if (light) {
      setLogoType(eLogoType.color);
      setSecondaryCtaColor(eButtonColor.purple);
    } else if (!isMenuOpen && !isScroll) {
      setLogoType(eLogoType.white);
      setSecondaryCtaColor(eButtonColor.white);
    } else {
      setLogoType(eLogoType.color);
      setSecondaryCtaColor(eButtonColor.purple);
    }

    handleScroll();

    window.addEventListener("keydown", handleEscPress);

    return () => {
      window.removeEventListener("keydown", handleEscPress);
    };
  }, [isMenuOpen, isScroll, light, scroll, scrollThreshold]);

  const handleProjectsCtaClick = () => {
    setMenuOpen(false);
    // router.push("/projects");
    window.open("https://sociabuzz.com/hidayatulmutaqqin/tribe", '_blank');
  };

  const handleTherapyCtaClick = () => {
    setMenuOpen(false);
    router.push("/projects");
  };

  const product = () => {
    setMenuOpen(false);
    router.push("/products");
  };

  const renderMenu = (modifier = "", isResponsive = false) => {
    const style = `navigation-bar__menu-items${modifier !== "" ? `--${modifier}` : ""}`;

    return (
      <article className={styles[style]} ref={menuRef}>

        {/* <ul>
          {menuItems.map((item) => {
            return (
              <li key={item.value} className={styles[item.value]}>
                <Link onClick={() => setMenuOpen(false)} href={item.link}>
                  {t(item.value)}
                </Link>
              </li>
            );
          })}
        </ul> */}
        <ul>
          {menuItems.map((item) => {
            return (
              <li key={item.value} className={styles[item.value]}>
                <Link onClick={() => setMenuOpen(false)} href={item.link}>
                  {t(item.value)}
                </Link>
              </li>
            );
          })}
          
          <div className={styles["menu-selection"]} onMouseLeave={() => handleMouseLeave()}>
          <li key="about" className={styles["home"]}>
            <div className="onMouse" onMouseEnter={() => setDisplayingAbout(true)}>
              <div className={styles["menu-selection__selected"]} onClick={() => setDisplayingAbout(!isDisplayingAbout)}>
                About Us
                <Icon icon={eIcons.chevronDown} className={styles["menu-selection__icon"]} />
              </div>
            </div>
          </li>
          <li>
            <div className="onMouse" onMouseEnter={() => setDisplayingInformation(true)}>
              <div className={styles["menu-selection__selected"]} onClick={() => setDisplayingInformation(!isDisplayingInformation)}>
                Informasi Publik
                <Icon icon={eIcons.chevronDown} className={styles["menu-selection__icon"]} />
              </div>
            </div>
          </li>
          <li>
            <div className="onMouse" onMouseEnter={() => setDisplayingService(true)}>
              <div className={styles["menu-selection__selected"]} onClick={() => setDisplayingService(!isDisplayingService)}>
                Layanan Kami
                <Icon icon={eIcons.chevronDown} className={styles["menu-selection__icon"]} />
              </div>
            </div>
          </li>
          
          {isDisplayingAbout && (
            <div className={styles["menu-selection__list"]} onMouseEnter={() => setDisplayingAbout(true)}>
              <div className={styles["menu-selection__con"]}>
                <h1>About</h1>
                <ul>
                    <li>
                      asdasdasd
                    </li>
                    <li>
                      asdasdasd
                    </li>
                </ul>
              </div>
            </div>
          )}
          {isDisplayingInformation && (
            <div className={styles["menu-selection__list"]} onMouseEnter={() => setDisplayingInformation(true)}>
              <div className={styles["menu-selection__con"]}>
                <h1>Informasi Publik</h1>
                <ul>
                    <li>
                      asdasdasd
                    </li>
                    <li>
                      asdasdasd
                    </li>
                </ul>
              </div>
            </div>
          )}
          {isDisplayingService && (
            <div className={styles["menu-selection__list"]} onMouseEnter={() => setDisplayingService(true)}>
              <div className={styles["menu-selection__con"]}>
                <h1>Service</h1>
                <ul>
                    <li>
                      asdasdasd
                    </li>
                    <li>
                      asdasdasd
                    </li>
                </ul>
              </div>
            </div>
          )}
          </div>
        </ul>

        
        {isResponsive && (
          <>
            <LanguageSelection />
            <Button
              type={eButtonType.secondary}
              color={secondaryCtaColor}
              fullWidth
              onClick={() => handleTherapyCtaClick()}
            >
              {t("request-therapy-cta")}
            </Button>

            <Button
              type={eButtonType.secondary}
              color={secondaryCtaColor}
              fullWidth
              onClick={() => product()}
            >
              {t("product")}
            </Button>
          </>
        )}
      </article>
    );
  };

  return (
    <header className={getClassName()} ref={headerRef}>
      <div className={styles["navigation-bar__wrapper"]}>
        
        <Hamburguer
          isOpen={isMenuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        />
        <Link
          href="/"
          className={styles["navigation-bar__logo-container"]}
          onClick={() => setMenuOpen(false)}
        >
          <Logo type={logoType} />
        </Link>
        
        {renderMenu()}
        <section className={styles["navigation-bar__contents"]}>
          <div className={styles["navigation-bar__actions"]}>
            <LanguageSelection />
            <Button onClick={() => handleProjectsCtaClick()}>
              {t("projects-cta")}
            </Button>
            <Button
              id={styles["more-info-btn"]}
              type={eButtonType.secondary}
              color={secondaryCtaColor}
              onClick={() => handleTherapyCtaClick()}
            >
              {t("request-therapy-cta")}
            </Button>

            <Button
              id={styles["more-info-btn"]}
              type={eButtonType.secondary}
              color={secondaryCtaColor}
              onClick={() => product()}
            >
              {t("product")}
            </Button>
          </div>
        </section>
        <section className={styles["navigation-bar__responsive-menu"]}>
          {renderMenu("responsive-menu", true)}
        </section>
      </div>
    </header>
  );
};
