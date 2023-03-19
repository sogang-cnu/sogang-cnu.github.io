import { ThemeProvider } from "styled-components";

import { MainPage } from "landing/main-page";

import { theme } from "./theme";

import "css/fonts.css";
import "css/reset.css";
import "css/global.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
};

export default App;
