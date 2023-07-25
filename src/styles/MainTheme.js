import { createTheme } from "@mui/material";

const mainTheme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
  palette: {
    info: {
      main: "#00263b",
      dark: "#06202a",
    },
  },
});

export default mainTheme;
