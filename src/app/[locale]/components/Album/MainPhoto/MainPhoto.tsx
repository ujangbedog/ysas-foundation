// MainPhoto.tsx
import React from "react";
import { Photo, CommonClassProps } from "~/types";
import Image from "next/image";
import cl from "classnames";
import style from "./index.module.scss";

interface MainPhotoProps extends CommonClassProps {
  prevPhoto?: Photo;
  activePhoto: Photo | undefined;
  nextPhoto?: Photo;
}

const MainPhoto: React.FC<MainPhotoProps> = ({
  prevPhoto,
  activePhoto,
  nextPhoto,
  className,
}) => (
  <div className={cl(className, style.mainPhoto)}>
    {prevPhoto && (
      <Image
        className={style.mainPhotoImagePrev}
        src={prevPhoto.src}
        alt={prevPhoto.description}
        width={3840}
        height={2160}
    />
    )}
    {activePhoto && (
      <Image
        className={style.mainPhotoImage}
        src={activePhoto.src}
        alt={activePhoto.description}
        width={3840}
        height={2160}
      />
    )}
    {nextPhoto && (
      <Image
        className={style.mainPhotoImageNext}
        src={nextPhoto.src}
        alt={nextPhoto.description}
        width={3840}
        height={2160}
      />
    )}
  </div>
);

export { MainPhoto };
