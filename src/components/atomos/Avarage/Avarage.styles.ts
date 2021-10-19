import styled from 'styled-components';

export const AvarageWrapper = styled.div<{ value: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50px;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  background: ${({ theme, value }) => {
    if (value >= 4) return theme.colors.success;
    if (value >= 3) return theme.colors.warning;
    if (value >= 1) return theme.colors.error;
    return theme.colors.grey;
  }};
`;
