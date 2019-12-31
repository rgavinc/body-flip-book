import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const Wrapper = styled.div`
  color: #912f40;
`;
const Link = styled.a`
  margin: 0 2rem;
  color: #912f40;
  font-size: 2rem;
  text-decoration: none;
  &:hover {
    color: #702632;
  }
`;

const Menu = () => (
  <Wrapper>
    <Link href="#">About</Link>●<Link href="#">Contact</Link>
  </Wrapper>
);

export default Menu;
