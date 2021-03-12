import React from "react";
import Nav from "./nav";
import styled from "styled-components";

const Header = styled.header`
  background-color: hotpink;
`;

export default function () {
  return (
    <Header>
      <Nav />
    </Header>
  );
}
