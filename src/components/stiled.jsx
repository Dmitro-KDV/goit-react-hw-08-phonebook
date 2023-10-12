import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
  color: black;
  margin-left: 20px;
  text-decoration: none;
  &.active {
    color: red;
  }
`;

export const Nav = styled.nav`
  margin-bottom: 20px;
  margin-top: 20px;
  border-bottom: 2px;
  border-color: black;
`;

export const Inform = styled.li`
  text-decoration: underline;
  cursor: pointer;
  color: blue;
`;

export const Goback = styled.button`
  margin-bottom: 20px;
`;