import styled from "styled-components";
import Link from "../components/link";

const Navigation = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 0 10px 0;
  padding: 5px;
  background-color: white;
`;

const NavItem = styled.li`
  margin: 0 10px;
`;

export default function ({ navItems }) {
  return (
    <Navigation>
      {navItems.map((item) => {
        return (
          <NavItem key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </NavItem>
        );
      })}
    </Navigation>
  );
}
