"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useRouter } from "next-intl/client";
import Link from "next-intl/link";

import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button, eButtonColor, eButtonType } from "../Button";
import { Logo, eLogoType } from "../Logo";
import { LanguageSelection } from "./LanguajeSelection";
import { Hamburguer } from "./Hamburger";

import styles from "./NavigationBar.module.scss";
import { MainScrollContext } from "~/src/contexts";

export const NavigationBar = ({ light = false, scrollThreshold = 220 }) => {
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showInformationDropdown, setShowInformationDropdown] = useState(false);
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
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

  const menuItems = [
    { value: "home", link: "/" },
    { value: "about", link: "/about" },
    { value: "information", link: "/contact" },
    { value: "service", link: "/faqs" },
  ] as const;

  const getClassName = () => {
    return [
      styles["navigation-bar"],
      light ? styles["navigation-bar--light"] : "",
      isScroll ? styles["navigation-bar--on-scroll"] : "",
      isMenuOpen ? styles["navigation-bar--menu-open"] : "",
    ].join(" ");
  };

  const handleMouseLeaveDropdown = () => {
    setShowAboutDropdown(false);
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
    window.open("https://sociabuzz.com/hidayatulmutaqqin/tribe", '_blank');
  };

  const blog = () => {
    setMenuOpen(false);
    router.push("/blog");
  };

  const home = () => {
    setMenuOpen(false);
    router.push("/");
  };

  const renderMenu = (modifier = "", isResponsive = false) => {
    const style = `navigation-bar__menu-items${modifier !== "" ? `--${modifier}` : ""}`;

    return (
      <article className={styles[style]} ref={menuRef}>
        <div className={isResponsive ? styles["menu-selection-responsive"] : styles["menu-selection"]} onMouseLeave={() => handleMouseLeaveDropdown()}>
          <ul>
            {menuItems.map((item) => {
              return (
                <li key={item.value} className={styles[item.value]}>
                  {item.value === "home" && (
                      <p onClick={() => home()}>
                        {t(item.value)}
                      </p>
                  )}
                  {item.value === "about" && (
                    <div
                      className="onMouse"
                      onClick={() => setShowAboutDropdown(!showAboutDropdown)}
                      onMouseEnter={() => setShowAboutDropdown(true)}
                      onMouseLeave={() => setShowAboutDropdown(false)}
                    >
                      <Dropdown show={showAboutDropdown} onMouseLeave={() => setShowAboutDropdown(false)}>
                        <Dropdown.Toggle as="div" className="ase" variant="success" id="dropdown-basic">
                          {t(item.value)}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <Link href="/about">{t("profile")}</Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="adart">{t("adrt")}</Link>  
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/documents">{t("legal")}</Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/contact">{t("contact")}</Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/terms">{t("tnc")}</Link>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  )}
                  {item.value === "information" && (
                    <div className="onMouse" 
                      onClick={() => setShowInformationDropdown(!showInformationDropdown)}
                      onMouseEnter={() => setShowInformationDropdown(true)} 
                      onMouseLeave={() => setShowInformationDropdown(false)}>
                      <Dropdown show={showInformationDropdown} onMouseLeave={() => setShowInformationDropdown(false)}>
                        <Dropdown.Toggle as="div" variant="success" id="dropdown-basic">
                        {t(item.value)}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <Link href="/report">{t("report")}</Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/galery">{t("galery")}</Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/agenda">{t("agenda")}</Link>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  )}
                  {item.value === "service" && (
                    <div className="onMouse" 
                      onClick={() => setShowServiceDropdown(!showServiceDropdown)}
                      onMouseEnter={() => setShowServiceDropdown(true)} 
                      onMouseLeave={() => setShowServiceDropdown(false)}>
                      <Dropdown show={showServiceDropdown} onMouseLeave={() => setShowServiceDropdown(false)}>
                        <Dropdown.Toggle as="div" variant="success" id="dropdown-basic">
                          {t(item.value)}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <Link href="/projects">{t("program")}</Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/products">{t("product")}</Link>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        
        {isResponsive && (
          <>
            <LanguageSelection />

            <Button
              type={eButtonType.secondary}
              color={secondaryCtaColor}
              fullWidth
              onClick={() => blog()}
            >
              {t("blog")}
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
              onClick={() => blog()}
            >
              {t("blog")}
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
