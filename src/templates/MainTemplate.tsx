import React, { FC } from 'react';
import { Wrapper } from './MainTemplate.styles';

export const MainTemplate: FC<React.ReactNode> = ({ children }) => {
  return (
    <Wrapper>
      <div>Siema</div>
      {children}
    </Wrapper>
  );
};
