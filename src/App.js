// 1: Import
import React, { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from './themes/globalStyles';
import themes from "./themes/schema.json";
// 2: Create a cotainer
const Container = styled.div`
  margin: 5px auto 5px auto;
`;

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState(themes.data.light)
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Container style={{ fontFamily: selectedTheme.font }}>
        <button onClick={() => setSelectedTheme(themes.data.light)}>Light</button>
        <button onClick={() => setSelectedTheme(themes.data.dark)}>Dark</button>
      </Container>
    </ThemeProvider>
  );
}

export default App;