import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const LinkStyled = styled(NavLink)`
  font-size: 3rem;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s linear;

  &:not(:first-of-type) {
    margin-left: 2rem;
  }

  &.active {
    color: blue;
  }

  &:hover {
    color: blue;
  }
`;
