import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyle } from './helpers/Themes';
import { utilService } from './service/utilService';
import Switch from './helpers/Switch';

import HomePage from './pages/HomePage';

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const App = () => {
  const userPref = utilService.load('theme') || 'light';

  const [theme, setTheme] = useState(userPref);
  const [isToggled, setIsToggled] = useState(false);

  const themeTogglerHandler = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    utilService.save('theme', newTheme);
  };
  return (
    // <div className="app-container">
    //   <HomePage />
    // </div>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <StyledApp className="app-style">
        <Switch
          themeTogglerHandler={themeTogglerHandler}
          isToggled={isToggled}
          onToggle={() => setIsToggled(!isToggled)}
          userPref={userPref}></Switch>
        <HomePage />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
