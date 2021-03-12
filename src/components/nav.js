import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../store/appContext";
import { routes } from "../routes";
import Link from "../components/link";

const Nav = styled.nav`
  background-color: lightgray;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 10px;
  align-items: center;
`;

const ListItem = styled.li`
  &:nth-child(1) {
    margin-right: auto;
  }
`;

const Button = styled.button`
  padding: 0 10px;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const MobileNavLinks = styled.div`
  display: flex;
  margin-right: 5px;
  @media (min-width: 600px) {
    display: none;
  }
`;

export default function () {
  const { auth, login, logout } = useContext(AppContext);

  return (
    <Nav>
      <List>
        <ListItem>
          <Logo>Company name</Logo>
        </ListItem>
        {auth && (
          <MobileNavLinks>
            <ListItem>
              <Link href={routes.pageOne.cards}>Page One</Link>
            </ListItem>
            <ListItem>
              <Link href={routes.pageTwo.counter}>Page Two</Link>
            </ListItem>
          </MobileNavLinks>
        )}
        {auth ? (
          <ListItem>
            <Button onClick={() => logout(routes.root)}>Logout</Button>
          </ListItem>
        ) : (
          <ListItem>
            <Button onClick={() => login(routes.pageOne.cards)}>Login</Button>
          </ListItem>
        )}
      </List>
    </Nav>
  );
}
