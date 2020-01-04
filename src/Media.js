import React from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styled from "styled-components";

const Wrapper = styled.div``;
const IconLink = styled.a`
  transition: all 0.2s ease-out;
  margin: 0 1rem;
  color: #912f40;
  &:hover {
    color: #702632;
  }
  @media screen and (min-width: 1000px) {
    margin: 0 2rem;
  }
`;

const Media = () => (
  <Wrapper>
    <IconLink href="https://www.instagram.com/gavinrob92">
      <FaInstagram size="2rem" />
    </IconLink>
    <IconLink href="https://github.com/rgavinc">
      <FaGithub size="2rem" />
    </IconLink>
    <IconLink href="https://www.linkedin.com/in/gavinrob">
      <FaLinkedin size="2rem" />
    </IconLink>
    <IconLink href="mailto:gavinrob92@gmail.com">
      <FaEnvelope size="2rem" />
    </IconLink>
  </Wrapper>
);

export default Media;
