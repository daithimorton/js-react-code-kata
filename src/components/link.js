import React from "react";
import styled from "styled-components";

const Link = styled.a`
  color: black;
  padding: 5px;
`;

export default function ({ href, children }) {
  const onClick = (e) => {
    e.preventDefault();

    if (e.metaKey || e.ctrlKey) return;

    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <Link href={href} onClick={onClick}>
      {children}
    </Link>
  );
}
