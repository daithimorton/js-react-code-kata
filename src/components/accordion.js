import React, { useState } from "react";
import styled from "styled-components";

const Accordion = styled.div`
  background-color: white;
`;

const ItemTitle = styled.div``;

const ItemContent = styled.p`
  padding: 0 10px 0 10px;
`;

export default function ({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <ItemTitle
          className={`title ${isActive}`}
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </ItemTitle>
        <div className={`content ${isActive}`}>
          <ItemContent>{item.content}</ItemContent>
        </div>
      </React.Fragment>
    );
  });
  return <Accordion className="ui accordion">{renderedItems}</Accordion>;
}
