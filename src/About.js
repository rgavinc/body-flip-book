import React from "react";
import styled from "styled-components";

const P = styled.p`
  font-size: 1.5rem;
  margin: 3rem;
  max-width: 500px;
  color: #912f40;
  @media screen and (min-width: 800px) {
    font-size: 2rem;
  }
`;

const About = () => (
  <P>
    Hi, I am a senior full stack web developer currently living in the Salt Lake
    City area. I love my wife, music, hiking, cycling, and programming.
  </P>
);

export default About;
