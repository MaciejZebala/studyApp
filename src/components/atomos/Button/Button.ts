import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 50px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.l};
`;
