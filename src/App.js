import React, { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from './themes/globalStyles';
import themes from "./themes/schema.json";

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState(themes.data.light)
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <button onClick={() => setSelectedTheme(themes.data.light)}>Light</button>
      <button onClick={() => setSelectedTheme(themes.data.dark)}>Dark</button>
    </ThemeProvider>
  );
}

export default App;