import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/globalStyles";
import themes from "./themes/schema.json";
import { JCUXButton } from "./Components/JCUX/JCUXButton";
import { Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Navbar from "./Components/Navbar";

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState(themes.data.light);
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Navbar />
      <Route exact path="/" />
      <Route />
    </ThemeProvider>
  );
};

export default App;
