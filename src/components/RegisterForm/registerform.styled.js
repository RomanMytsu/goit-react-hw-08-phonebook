import { styled } from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

export const StyledForm = styled.form`
  border-radius: 4px;
  border: 1px solid rgb(255, 255, 255);
  padding: 48px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  width: 320px;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 4px 12px;
  font-weight: 600;
  line-height: 1.5;
  border-radius: 4px;
`;

export const StyledBtn = styled.button`
  padding: 8px 24px;
  margin-top: 16px;
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
