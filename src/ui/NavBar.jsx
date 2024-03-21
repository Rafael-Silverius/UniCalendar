import styled, { css } from "styled-components";
import BlurryBox from "./BlurryBox";
import { NavLink } from "react-router-dom";
import Logout from "../features/authentication/Logout";

const StyledNavBar = styled.nav`
  width: fit-content;
  position: absolute;
  top: 0;
  right: 0;
  margin: 2rem;
  z-index: 100;
  font-weight: 600;
`;

const NavList = styled.ul`
  display: flex;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    gap: 1rem;
    padding: 0.6rem 2.4rem;
    border-radius: var(--border-radius-sm);
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    /* color: var(--color-grey-900); */
    background-color: var(--color-green-700);
  }

  ${(props) =>
    props.type === "green" &&
    css`
      background-color: #f1f1f1;
      color: var(--color-green-700);

      &:hover,
      &:active,
      &.active:link,
      &.active:visited {
        background-color: var(--color-green-700);
        color: var(--color-grey-0);
      }
    `}
`;

export default function NavBar() {
  return (
    <StyledNavBar>
      <BlurryBox>
        <NavList>
          <li>
            <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/login" type="green">
              Sign in
            </StyledNavLink>
          </li>
          <li>
            <Logout />
          </li>
        </NavList>
      </BlurryBox>
    </StyledNavBar>
  );
}
