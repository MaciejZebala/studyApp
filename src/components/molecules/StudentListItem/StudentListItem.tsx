import { Button } from 'components/atomos/Button/Button';
import React, { FC } from 'react';
import { Info, ListItem } from './StudentListItem.styles';
import { GiCancel } from 'react-icons/gi';
import { Avarage } from 'components/atomos/Avarage/Avarage';

interface StudentListProp {
  user: {
    name: string;
    attendance: string;
    average: string;
    id?: number;
  };
}

export const StudentListItem: FC<StudentListProp> = ({ user }) => {
  return (
    <ListItem>
      <Avarage average={user.average} />
      <Info>
        <p>{user.name}</p>
        <p>attendance: {user.attendance}</p>
      </Info>
      <Button>
        <GiCancel />
      </Button>
    </ListItem>
  );
};
