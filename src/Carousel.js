import React from "react";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";

const Wrapper = styled.div`
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &[class] .image-gallery-slide img {
    width: 100%;
    max-height: 20vh;
  }
`;

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/"
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/"
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/"
  }
];

const Carousel = () => (
  <Wrapper>
    <ImageGallery
      showPlayButton={false}
      showFullscreenButton={false}
      showThumbnails={false}
      items={images}
    />
    <ImageGallery
      showPlayButton={false}
      showFullscreenButton={false}
      showThumbnails={false}
      items={images}
    />
    <ImageGallery
      showPlayButton={false}
      showFullscreenButton={false}
      showThumbnails={false}
      items={images}
    />
  </Wrapper>
);

export default Carousel;
