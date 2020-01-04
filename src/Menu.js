import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  color: #912f40;
`;
const StyledLink = styled(Link)`
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
    <StyledLink to="/about">About</StyledLink>
    {/* ●
    <StyledLink to="/contact">Contact</StyledLink> */}
  </Wrapper>
);

export default Menu;
