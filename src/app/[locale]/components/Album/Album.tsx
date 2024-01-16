"use client"
// Import necessary dependencies
import { useState } from "react";
import { MainPhoto } from "./MainPhoto";
import { PreviewGallery } from "./PreviewGallery";
import { Navigation } from "./Navigation";
import type { Photo } from "~/types";
import style from "./index.module.scss";

// Define interface for component props
interface GalleryProps {
  photos: Photo[];
}

// Define the Album component
const Album: React.FC<GalleryProps> = ({ photos }) => {
  // Check if there are no photos, return null
  // State for the index of the active photo
  const [indexActivePhoto, setIndexActivePhoto] = useState(0);

  // State for message
  const [message, setMessage] = useState<string>('');

  // Check if there are no photos, return null
  if (!photos.length) {
    return null;
  }

  // Get the active, previous, and next photos based on the active index
  const activePhoto = photos[indexActivePhoto];
  const prevPhoto = photos[indexActivePhoto - 1];
  const nextPhoto = photos[indexActivePhoto + 1];

  // Render the component
  return (
    <div className={style.Gallery}>
      <div className={style.GalleryContainer}>
        {/* MainPhoto component */}
        <MainPhoto
          prevPhoto={prevPhoto}
          activePhoto={activePhoto}
          nextPhoto={nextPhoto}
        />

        {/* Navigation component */}
        <Navigation
          className={style.GalleryNavigation}
          disabledPrev={!prevPhoto}
          disabledNext={!nextPhoto}
          onPrevClick={() => {
            setIndexActivePhoto(indexActivePhoto - 1);
          }}
          onNextClick={() => {
            setIndexActivePhoto(indexActivePhoto + 1);
          }}
        />
      </div>

      {/* PreviewGallery component */}
      <PreviewGallery
        activePhotoIndex={indexActivePhoto}
        photos={photos}
        className={style.GalleryPreviewList}
      />
    </div>
  );
};

// Export the component as the default export
export { Album };
