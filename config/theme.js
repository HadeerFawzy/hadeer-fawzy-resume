import { createMuiTheme } from "@material-ui/core/styles";

const defaultTheme = createMuiTheme();

let theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 600,
      lg: 1024,
      xl: 1200,
      xxl: 1920,
    },
  },
  palette: {
    primary: {
      lightt: '#bbdfc8',
      main: "#75cfb8",
    },
    secondary: {
      light: '#f0e5d8',
      main: "#ffc478"
    },
    typography: {
      light: '#EFEFEF',
      main: '#3A3A3A',
      dark: '#111111',
    }
  },
  typography: {
    fontFamily: "'Rubik', sans-serif",
    fontFamilySecondary: "'Roboto Slab', serif",
    body1: {
      fontFamily: "'Rubik', sans-serif",
      fontSize: "1rem",
    },
  },
  props: {
    MuiLink: {
      underline: "none",
      color: "textPrimary",
    },
    MuiContainer: {
      maxWidth: "xl",
    }
  },
  spacing: (factor) => `${0.5 * factor}rem`,
});

export default theme;
