import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
  padding: 20px 0;
  overflow: hidden;
`;

export const Header = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  padding: 10px 15px;
  margin-bottom: 40px;
  > h1 {
    text-align: right;
    color: ${({ theme }) => theme.colors.white};
  }
`;
const activeClassName = 'active-link';
export const NavItem = styled(NavLink).attrs({ activeClassName })`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 0 50px 15px 0;
  text-decoration: none;
  text-align: right;
  position: relative;

  &.${activeClassName} {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.darkGrey};
    top: 50%;
    transform: translateY(-50%);
    right: -30px;
    opacity: 0;
    transition: 0.1s linear;
  }
`;
