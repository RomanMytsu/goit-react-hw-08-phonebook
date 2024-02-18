
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const MenuLink = styled(NavLink)`
  font-size: 20px;
  &.active {
    color: rgb(230, 179, 51);
    text-decoration: underline;
  }
`;
