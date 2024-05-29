import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#18A9E1",
      light: "#89CFF3",
      dark: "#4084C4",
    },
    text: {
      primary: "#333333",
      secondary: "#8C8E8E",
      disabled: "#aaaaaa",
    },
    background: {
      default: "#f5f5f5",
    },
  },
});

export default Theme;
