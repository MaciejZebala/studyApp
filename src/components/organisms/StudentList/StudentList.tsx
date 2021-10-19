import { StudentListItem } from 'components/molecules/StudentListItem/StudentListItem';
import { users } from 'constant/data/users';
import React, { FC } from 'react';
import { List } from './StudentList.styles';

export const StudentList: FC = () => {
  return (
    <List>
      {users.map((user) => (
        <StudentListItem user={user} key={user.id}></StudentListItem>
      ))}
    </List>
  );
};
