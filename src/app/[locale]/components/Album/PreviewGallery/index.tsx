import type { Photo, CommonClassProps } from "~/types";
import style from "./index.module.scss";
import cl from "classnames";
import { useRef } from "react";
import Image from "next/image";

interface PreviewGalleryProps extends CommonClassProps {
  activePhotoIndex: number;
  photos: Photo[];
}

export const PreviewGallery: React.FC<PreviewGalleryProps> = ({
  activePhotoIndex,
  photos,
  className,
}) => {
  const previewContainer = useRef<HTMLUListElement>(null);

  if (!photos.length) {
    return null;
  }

  return (
    <div className={cl(style.previewGallery, className)}>
      <ul className={style.previewGalleryTrack} ref={previewContainer}>
        {photos.map((photo) => (
          <li key={photo.id} className={style.previewGalleryPreview}>
            {/* Use the Image component for better optimization */}
            <Image
              src={photo.preview}
              alt={photo.description}
              className={style.previewGalleryImage}
              width={640}
              height={420}
            />
          </li>
        ))}
      </ul>
      <div className={style.previewGalleryCover}>
        {activePhotoIndex + 1}/{photos.length}
      </div>
    </div>
  );
};
