"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

import NotFoundPage from "../../not-found";
import {
  Footer,
  Icon,
  Main,
  NavigationBar,
  PageSection,
  eIcons
} from "../../components";

import { Album } from "../../components/Album";

import { galeryData } from "~/src/constants";
import styles from "./document.module.scss";

export default function Galery({ params }: { params: { album: string } }) {
  const t = useTranslations("galerys");

  const galery = galeryData.find(({ album }) => album === params.album);

  if (!galery) {
    return <NotFoundPage />;
  }

  return (
    <Main>
      <NavigationBar scrollThreshold={10} light />
      <PageSection isFirstSection isLastSection>
        <div className={styles.back}>
          <Link href="/galery" replace>
            <Icon icon={eIcons.arrowRight} />
            {t("go-back-link")}
          </Link>
        </div>
        
        {galery.album === "mubes" && (
          <div className={styles.album}>
            <Album photos={[
              {id: 1, src: "/album/mubes-291223/1.jpg", preview: "/album/mubes-291223/preview/1.jpg", description: "Musyawarah Besar YSAS"},
              {id: 2, src: "/album/mubes-291223/2.jpg", preview: "/album/mubes-291223/preview/2.jpg", description: "Musyawarah Besar YSAS"},
              {id: 3, src: "/album/mubes-291223/3.jpg", preview: "/album/mubes-291223/preview/3.jpg", description: "Musyawarah Besar YSAS"},
              {id: 4, src: "/album/mubes-291223/4.jpg", preview: "/album/mubes-291223/preview/4.jpg", description: "Musyawarah Besar YSAS"},
              {id: 5, src: "/album/mubes-291223/5.jpg", preview: "/album/mubes-291223/preview/5.jpg", description: "Musyawarah Besar YSAS"},
              {id: 6, src: "/album/mubes-291223/6.jpg", preview: "/album/mubes-291223/preview/6.jpg", description: "Musyawarah Besar YSAS"},
              {id: 7, src: "/album/mubes-291223/7.jpg", preview: "/album/mubes-291223/preview/7.jpg", description: "Musyawarah Besar YSAS"},
              {id: 8, src: "/album/mubes-291223/8.jpg", preview: "/album/mubes-291223/preview/8.jpg", description: "Musyawarah Besar YSAS"},
              {id: 9, src: "/album/mubes-291223/9.jpg", preview: "/album/mubes-291223/preview/9.jpg", description: "Musyawarah Besar YSAS"},
              {id: 10, src: "/album/mubes-291223/10.jpg", preview: "/album/mubes-291223/preview/10.jpg", description: "Musyawarah Besar YSAS"},
              {id: 11, src: "/album/mubes-291223/11.jpg", preview: "/album/mubes-291223/preview/11.jpg", description: "Musyawarah Besar YSAS"},
              {id: 12, src: "/album/mubes-291223/12.jpg", preview: "/album/mubes-291223/preview/12.jpg", description: "Musyawarah Besar YSAS"},
              {id: 13, src: "/album/mubes-291223/13.jpg", preview: "/album/mubes-291223/preview/13.jpg", description: "Musyawarah Besar YSAS"},
              {id: 14, src: "/album/mubes-291223/14.jpg", preview: "/album/mubes-291223/preview/14.jpg", description: "Musyawarah Besar YSAS"},
              {id: 15, src: "/album/mubes-291223/15.jpg", preview: "/album/mubes-291223/preview/15.jpg", description: "Musyawarah Besar YSAS"},
              {id: 16, src: "/album/mubes-291223/16.jpg", preview: "/album/mubes-291223/preview/16.jpg", description: "Musyawarah Besar YSAS"},
              {id: 17, src: "/album/mubes-291223/17.jpg", preview: "/album/mubes-291223/preview/17.jpg", description: "Musyawarah Besar YSAS"},
              {id: 18, src: "/album/mubes-291223/18.jpg", preview: "/album/mubes-291223/preview/18.jpg", description: "Musyawarah Besar YSAS"},
              {id: 19, src: "/album/mubes-291223/19.jpg", preview: "/album/mubes-291223/preview/19.jpg", description: "Musyawarah Besar YSAS"},
              {id: 20, src: "/album/mubes-291223/20.jpg", preview: "/album/mubes-291223/preview/20.jpg", description: "Musyawarah Besar YSAS"},
              {id: 21, src: "/album/mubes-291223/21.jpg", preview: "/album/mubes-291223/preview/21.jpg", description: "Musyawarah Besar YSAS"},
              {id: 22, src: "/album/mubes-291223/22.jpg", preview: "/album/mubes-291223/preview/22.jpg", description: "Musyawarah Besar YSAS"},
              {id: 23, src: "/album/mubes-291223/23.jpg", preview: "/album/mubes-291223/preview/23.jpg", description: "Musyawarah Besar YSAS"},
              {id: 24, src: "/album/mubes-291223/24.jpg", preview: "/album/mubes-291223/preview/24.jpg", description: "Musyawarah Besar YSAS"},
              {id: 25, src: "/album/mubes-291223/25.jpg", preview: "/album/mubes-291223/preview/25.jpg", description: "Musyawarah Besar YSAS"},
              {id: 26, src: "/album/mubes-291223/26.jpg", preview: "/album/mubes-291223/preview/26.jpg", description: "Musyawarah Besar YSAS"},
              {id: 27, src: "/album/mubes-291223/27.jpg", preview: "/album/mubes-291223/preview/27.jpg", description: "Musyawarah Besar YSAS"},
              {id: 28, src: "/album/mubes-291223/28.jpg", preview: "/album/mubes-291223/preview/28.jpg", description: "Musyawarah Besar YSAS"},
              {id: 29, src: "/album/mubes-291223/29.jpg", preview: "/album/mubes-291223/preview/29.jpg", description: "Musyawarah Besar YSAS"},
              {id: 30, src: "/album/mubes-291223/30.jpg", preview: "/album/mubes-291223/preview/30.jpg", description: "Musyawarah Besar YSAS"},
              {id: 31, src: "/album/mubes-291223/31.jpg", preview: "/album/mubes-291223/preview/31.jpg", description: "Musyawarah Besar YSAS"},
              {id: 32, src: "/album/mubes-291223/32.jpg", preview: "/album/mubes-291223/preview/32.jpg", description: "Musyawarah Besar YSAS"},
              {id: 33, src: "/album/mubes-291223/33.jpg", preview: "/album/mubes-291223/preview/33.jpg", description: "Musyawarah Besar YSAS"},
              {id: 34, src: "/album/mubes-291223/34.jpg", preview: "/album/mubes-291223/preview/34.jpg", description: "Musyawarah Besar YSAS"},
            ]}/>
          </div>
        )}

        {/* {galery.album === "album2" && (
          <div className={styles.album}>
            <Album photos={[
                {id: 1, src: "/album/mubes2/1.jpg", preview: "/album/mubes2/preview/1.jpg", description: "Norway 1"},
                {id: 2, src: "/album/mubes2/2.jpg", preview: "/album/mubes2/preview/2.jpg", description: "Norway 2"},
                {id: 3, src: "/album/mubes2/3.jpg", preview: "/album/mubes2/preview/3.jpg", description: "Norway 3"},
                {id: 4, src: "/album/mubes2/4.jpg", preview: "/album/mubes2/preview/4.jpg", description: "Norway 4"},
                {id: 5, src: "/album/mubes2/5.jpg", preview: "/album/mubes2/preview/5.jpg", description: "Norway 5"},
                {id: 6, src: "/album/mubes2/6.jpg", preview: "/album/mubes2/preview/6.jpg", description: "Norway 6"},
                {id: 7, src: "/album/mubes2/7.jpg", preview: "/album/mubes2/preview/7.jpg", description: "Norway 7"},
            ]}/>
          </div>
        )} */}
        
      </PageSection>
      <Footer />
    </Main>
  );
}
