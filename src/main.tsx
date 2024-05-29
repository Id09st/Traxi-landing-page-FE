import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Theme from "./layout/Theme/theme.ts";
import { ThemeProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={Theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
