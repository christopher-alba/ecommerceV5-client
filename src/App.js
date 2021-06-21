// 1: Import
import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from './themes/globalStyles';
import themes from "./themes/schema.json";
// 2: Create a cotainer
const Container = styled.div`
  margin: 5px auto 5px auto;
`;

const App = () => {
  const selectedTheme = themes.data.seaWave
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Container style={{ fontFamily: selectedTheme.font }}>
        <h1>Theme Builder</h1>
        <p>
          This is a theming system with a Theme Switcher and Theme Builder.
          Do you want to see the source code? <a href="https://github.com/atapas/theme-builder" target="_blank" rel="noreferrer">Click here.</a>
        </p>
      </Container>
    </ThemeProvider>
  );
}

export default App;