import React from "react";
import Title from "./Title";
import Carousel from "./Carousel";
import Menu from "./Menu";
import styled, { createGlobalStyle } from "styled-components";
import "./App.css";
import Media from "./Media";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Reenie Beanie", cursive;
  }
`;

const P = styled.p`
  color: #912f40;
  margin: 1rem;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 1rem;
  max-width: 1500px;
  display: flex;
  background-color: #fffffa;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  background-color: #fffffa;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Carousel />
      <InnerWrapper>
        <Title />
        <Menu />
        <P>________________________________</P>
        <Media />
      </InnerWrapper>
    </Wrapper>
  );
}

export default App;
