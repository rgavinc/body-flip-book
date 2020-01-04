import React from "react";
import Title from "./Title";
import Carousel from "./Carousel";
import Menu from "./Menu";
import styled, { createGlobalStyle } from "styled-components";
import "./App.css";
import Media from "./Media";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

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
  margin: auto;
  padding: 1rem;
  height: 80vh;
  max-width: 1500px;
  display: flex;
  background-color: #fffffa;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    padding: 5rem;
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
    <Router>
      <Wrapper>
        <GlobalStyle />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Carousel />
          </Route>
        </Switch>
        <InnerWrapper>
          <Title />
          <Menu />
          <P>________________________________</P>
          <Media />
        </InnerWrapper>
      </Wrapper>
    </Router>
  );
}

export default App;
