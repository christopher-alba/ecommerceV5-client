import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/globalStyles";
import themes from "./themes/schema.json";
import { Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1500,
});

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState(themes.data.light);
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Navbar
        setSelectedTheme={setSelectedTheme}
        themes={themes}
        selectedTheme={selectedTheme}
      />
      <Route
        exact
        path="/"
        component={() => (
          <div data-aos="fade-in">
            <Home />
          </div>
        )}
      />
      <Route
        exact
        path="/shop"
        component={() => (
          <div data-aos="fade-in">
            <Shop />
          </div>
        )}
      />
      <Route
        exact
        path="/product/:id"
        component={() => (
          <div data-aos="fade-in">
            <Product />
          </div>
        )}
      />
      <Route />
    </ThemeProvider>
  );
};

export default App;
