import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  font-size: 2.5rem;
  text-decoration: none;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #912f40;
  @media screen and (min-width: 1000px) {
    font-size: 4rem;
  }
`;

const Title = () => <StyledLink to="/">Gavin Robertson</StyledLink>;

export default Title;
