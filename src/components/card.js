import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  padding: 1rem;
`;

export default function ({ children }) {
  return <Card>{children}</Card>;
}
