import { StudentList } from 'components/organisms/StudentList/StudentList';
import React, { FC } from 'react';
import { theme } from 'theme/theme';
import { ThemeProvider } from 'styled-components';
import { MainTemplate } from 'templates/MainTemplate';
import { GlobalStyle } from 'theme/GlobalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Wrapper } from './App.styles';

const App: FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Switch>
              <Route exact path="/" component={StudentList} />
            </Switch>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default App;
