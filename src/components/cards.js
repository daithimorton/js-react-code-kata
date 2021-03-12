import React from "react";
import styled from "styled-components";
import Card from "./card";

const Cards = styled.section`
  display: grid;
  grid-gap: 1rem;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default function () {
  return (
    <Cards>
      <Card>
        <h2>Card</h2>
        <p>This is the card content</p>
      </Card>
      <Card>
        <h2>Card</h2>
        <p>This is the card content</p>
      </Card>
      <Card>
        <h2>Card</h2>
        <p>This is the card content</p>
      </Card>
    </Cards>
  );
}
