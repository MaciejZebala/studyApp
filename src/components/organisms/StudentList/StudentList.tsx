import { StudentListItem } from 'components/molecules/StudentListItem/StudentListItem';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { users } from 'constant/data/users';
import React, { FC } from 'react';

export const StudentList: FC = () => {
  return (
    <ViewWrapper>
      {users.map((user) => (
        <StudentListItem user={user} key={user.id}></StudentListItem>
      ))}
    </ViewWrapper>
  );
};
