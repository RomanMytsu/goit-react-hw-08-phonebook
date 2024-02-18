import { styled } from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StyledBtn = styled.button`
  padding: 4px 12px;
  background-color: #e6b333;
  border-radius: 4px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #d3d3d3;
    box-shadow: -5px -5px 20px rgba(230, 179, 51, 0.5),
      5px 5px 20px rgba(201, 196, 196, 0.5);
  }
`;