import React from "react";
import styled from "styled-components";
import PageOne from "../pages/page-one";
import PageTwo from "../pages/page-two";

const Content = styled.section`
  background-color: lightskyblue;
  flex: 1;
  padding: 1rem;
`;

export default function () {
  return (
    <Content>
      <PageOne />
      <PageTwo />
    </Content>
  );
}
