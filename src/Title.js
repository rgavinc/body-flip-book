import React from "react";
import styled from "styled-components";

const A = styled.a`
  font-size: 2.5rem;
  text-decoration: none;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #912f40;
  @media screen and (min-width: 1000px) {
    font-size: 4rem;
  }
`;

const A11y = styled.a`
  background: 0;
  border: 0;
  padding: 0;
  text-align: inherit;
  font-family: "Reenie Beanie", cursive;
`;

const Title = () => (
  // <A11y>
  <A href="/">Gavin Robertson</A>
  // </A11y>
);

export default Title;
