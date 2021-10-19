import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  position: relative;
  padding: 25px 20px;
  cursor: pointer;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
  &:nth-last-child(0) {
    align-self: flex-start;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
  p:first-child {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
