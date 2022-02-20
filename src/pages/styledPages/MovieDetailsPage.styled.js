import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const HeaderNav = styled.nav`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 4rem 0;
  box-shadow: 0 0.4rem 1rem 0 rgba(0, 0, 0, 0.75);
`;

export const Item = styled(NavLink)`
  font-size: 2rem;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.2s linear;
  &:not(:first-of-type) {
    margin-left: 2rem;
  }
  &:hover,
  &.active {
    color: blue;
  }
`;
