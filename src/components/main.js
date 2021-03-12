import React from "react";
import styled from "styled-components";
import SideNav from "./side-nav";
import Content from "./content";

const Main = styled.main`
  background-color: lightcoral;
  display: flex;
  height: 100%;
`;

export default function () {
  return (
    <Main>
      <SideNav />
      <Content />
    </Main>
  );
}
