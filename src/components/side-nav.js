import React from "react";
import styled from "styled-components";
import Link from "./link";
import { routes } from "../routes";

const SideNav = styled.nav`
  background-color: lightyellow;
  height: 100%;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export default function () {
  return (
    <SideNav>
      <Link href={routes.pageOne.cards}>Page One</Link>
      <Link href={routes.pageTwo.counter}>Page Two</Link>
    </SideNav>
  );
}
