
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const Block = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Link = styled(NavLink)`
  font-size: 20px;
  &.active {
    color: rgb(230, 179, 51);
    text-decoration: underline;
  }
`;