import { createTheme } from "@suid/material";
import colors from "./colors";
// import "../style/App.module.css";

const mainTheme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#1C1B1F",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
      paper:   "#FFFFFF"
    },
  },
  typography: {
    // fontFamily: "'Edu SA Beginner', 'Courier New', Roboto, Helvetica, Arial, sans-serif",
    h1: { 
      fontFamily: "Caprasimo",
      fontSize: "10vw",
      textAlign: "left",
      color: colors.white,
    },
    h2: {
      fontFamily: "'Work Sans', sans-serif",
      fontWeight: 500,
      fontSize: "24px",
      textAlign: "left",
      cursor: "pointer",
      color: colors.white,
    },
    h3: {
    },
    h4: {
    },
    h5: {
    },
    h6: {
    },
    subtitle1: {
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "20px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    subtitle2: {
    },
    body1: {
      fontFamily: "'Work Sans', sans-serif",
      fontSize: "26px",
      fontWeight: 400,
      textAlign: "left",
      color: colors.white,
    },
    body2: {
      fontSize: "22px",
      fontWeight: 600,
      lineHeight: "22px",
      letterSpacing: "0em",
      textAlign: "left",
    }
  },
  shape: {
    borderRadius: 20
  }
});


export {
  // themeColors,
  mainTheme,
  // navbarTheme
};