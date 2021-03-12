import React from "react";
import Cards from "../components/cards";
import Accordion from "../components/accordion";
import Route from "../components/route";
import InPageNavigation from "../components/page-navigation";
import { routes } from "../routes";

const accordionItems = [
  {
    title: "What is React?",
    content: "React is a front end JS framework"
  },
  {
    title: "Why use React?",
    content: "React makes building UI component easy"
  },
  {
    title: "Why is React useful for engineers?",
    content:
      "React abstracts alot of low level DOM manipulation which takes time"
  }
];

const pageOneNavItems = [
  {
    href: routes.pageOne.cards,
    label: "Cards"
  },
  {
    href: routes.pageOne.accordion,
    label: "Accordion"
  }
];

export default function () {
  return (
    <>
      <Route path={`${routes.pageOne.root}/*`}>
        <InPageNavigation navItems={pageOneNavItems} />
        <h1>Page One</h1>
      </Route>
      <Route path={routes.pageOne.cards}>
        <h2>Cards</h2>
        <Cards />
      </Route>
      <Route path={routes.pageOne.accordion}>
        <h2>Accordion</h2>
        <Accordion items={accordionItems} />
      </Route>
    </>
  );
}
