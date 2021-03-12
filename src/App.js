import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import LandingPage from "./components/landing-page";
import styled, { createGlobalStyle } from "styled-components";
import { AppContext } from "./store/appContext";
import { useContext } from "react";
import { routes } from "./routes";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;    
  }  
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  background-color: lightblue;
  height: 100vh;
`;

export default function App() {
  const { auth } = useContext(AppContext);

  // if the user is not authenticated then reset the URL to root
  if (!auth) {
    window.history.pushState({}, "", routes.root);
  }

  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      {auth ? <Main /> : <LandingPage />}
      <Footer />
    </Wrapper>
  );
}
