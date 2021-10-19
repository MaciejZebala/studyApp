import React, { FC } from 'react';
import { Nav, Header, NavItem } from './Navigation.styles';

export const Navigation: FC = () => {
  return (
    <Nav>
      <Header>
        <h1>Study Buddy</h1>
      </Header>

      <NavItem exact to="/">
        Dashboard
      </NavItem>
      <NavItem to="/add-user">Add student</NavItem>
      {/* <NavItem to="/">Settings</NavItem>
      <NavItem to="/">Logout</NavItem> */}
    </Nav>
  );
};
