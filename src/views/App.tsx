import { StudentList } from 'components/organisms/StudentList/StudentList';
import React, { FC } from 'react';
import { theme } from 'theme/theme';
import { ThemeProvider } from 'styled-components';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StudentList />
    </ThemeProvider>
  );
};

export default App;
