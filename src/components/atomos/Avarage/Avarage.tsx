import React, { FC } from 'react';
import { AvarageWrapper } from './Avarage.styles';

interface AverageProps {
  average: string;
}

export const Avarage: FC<AverageProps> = ({ average }) => {
  return <AvarageWrapper value={parseInt(average)}>{average}</AvarageWrapper>;
};
