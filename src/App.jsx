import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/globalStyles";
import themes from "./themes/schema.json";
import { JCUXButton } from "./Components/JCUX/JCUXButton";
import "semantic-ui-css/semantic.min.css";

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState(themes.data.dark);
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <JCUXButton onClick={() => setSelectedTheme(themes.data.light)}>
        Light
      </JCUXButton>
      <JCUXButton onClick={() => setSelectedTheme(themes.data.dark)}>
        Dark
      </JCUXButton>
    </ThemeProvider>
  );
};

export default App;
