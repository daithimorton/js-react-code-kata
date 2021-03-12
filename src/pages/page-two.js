import React from "react";
import Route from "../components/route";
import InPageNavigation from "../components/page-navigation";
import { routes } from "../routes";

const pageOneNavItems = [
  {
    href: routes.pageTwo.counter,
    label: "Counter"
  },
  {
    href: routes.pageTwo.fetch,
    label: "Fetch"
  }
];

export default function () {
  return (
    <>
      <Route path={`${routes.pageTwo.root}/*`}>
        <InPageNavigation navItems={pageOneNavItems} />
        <h1>Page Two</h1>
      </Route>
      <Route path={routes.pageTwo.counter}>
        <h2>Counter</h2>
      </Route>
      <Route path={routes.pageTwo.fetch}>
        <h2>Fetch</h2>
      </Route>
    </>
  );
}
