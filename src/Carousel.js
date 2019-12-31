import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";
import { withWindowDimensions } from "./hoc-functions";
import "./Carousel.scss";

const Wrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &[class] .image-gallery-slide img {
    width: 100%;
    max-height: 20vh;
    max-width: 50vw;
    @media screen and (min-width: 1000px) {
      max-height: 30vh;
    }
  }
`;

const torso = [
  {
    original: `${process.env.PUBLIC_URL}/body-images/torso1.png`
  },
  {
    original: `${process.env.PUBLIC_URL}/body-images/torso2.png`
  },
  {
    original: `${process.env.PUBLIC_URL}/body-images/torso3.png`
  }
];

const pants = [
  {
    original: `${process.env.PUBLIC_URL}/body-images/pants1.png`
  },
  {
    original: `${process.env.PUBLIC_URL}/body-images/pants2.png`
  },
  {
    original: `${process.env.PUBLIC_URL}/body-images/pants3.png`
  }
];

const shuffle = array => array.sort(() => Math.random() - 0.5);

const createImageGallery = (isMobileSized, items) => (
  <ImageGallery
    slideInterval={4000}
    showPlayButton={false}
    showFullscreenButton={false}
    showThumbnails={false}
    items={shuffle(items)}
  />
);

const Carousel = ({ isMobileSized }) => {
  return (
    <Wrapper>
      {createImageGallery(isMobileSized, torso)}
      {createImageGallery(isMobileSized, pants)}
    </Wrapper>
  );
};

export default withWindowDimensions(Carousel);
