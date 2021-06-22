import React, { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from './themes/globalStyles';
import themes from "./themes/schema.json";
import 'semantic-ui-css/semantic.min.css'

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState(themes.data.dark)
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <button onClick={() => setSelectedTheme(themes.data.light)}>Light</button>
      <button onClick={() => setSelectedTheme(themes.data.dark)}>Dark</button>
    </ThemeProvider>
  );
}

export default App;