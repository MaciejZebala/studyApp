import { Navigation } from 'components/organisms/Navigation/Navigation';
import React, { FC } from 'react';
import { Wrapper } from './MainTemplate.styles';

export const MainTemplate: FC<React.ReactNode> = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};
