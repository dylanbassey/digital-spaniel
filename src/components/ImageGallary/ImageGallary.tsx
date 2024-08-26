import React from "react";
import { GridItem, ImageGrid, ImageOverlay } from "./ImageGallaryStyles";

interface ImageProps {
  images: { area: string; src: string }[];
  overlay: boolean;
}

const ImageGallery: React.FC<ImageProps> = ({ images, overlay }) => {
  return (
    <ImageGrid>
      {images.map((image, index) => (
        <GridItem key={index} area={image.area}>
          <img src={image.src} alt={`Gallery Image ${index + 1}`} />
          {overlay ? (
            <ImageOverlay>
              <h4>Make ideas happen</h4>
              <p>
                A local paper with big ideas needed A sharp new brand to inspire
                readers.
              </p>
              <a href="/project">Full project</a>
            </ImageOverlay>
          ) : (
            <></>
          )}
        </GridItem>
      ))}
    </ImageGrid>
  );
};
export default ImageGallery;
