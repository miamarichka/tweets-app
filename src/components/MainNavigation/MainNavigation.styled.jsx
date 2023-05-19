import { styled } from "styled-components";
import {NavLink} from 'react-router-dom'

export const NavWrapper = styled.nav`
  padding: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  &.active {
    font-size: 24px;
    font-weight: 700;
    color: blue;
  }
  &:hover,
  &:focus {
    text-shadow: 2px 2px 4px ${(props) => props.theme.colors.yellow};
  }
`;