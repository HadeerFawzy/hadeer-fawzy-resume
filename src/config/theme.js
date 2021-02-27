import { createMuiTheme } from "@material-ui/core/styles";

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
      main: "#16697a",
    },
    secondary: {
      light: '#f0e5d8',
      main: "#db6400"
    },
    grey:{
      light: '#F9F9F9',
    },
    typography: {
      light: '#EFEFEF',
      main: '#3A3A3A',
      dark: '#111111',
    }
  },
  typography: {
    fontFamily: "'Nunito', sans-serif",
    fontFamilySecondary: "'Roboto Slab', serif",
    h1: {
      fontFamily: "'Lobster Two', cursive",
      fontSize: "4rem",
    },
    h2: {
      fontSize: "2rem",
    },
    body1: {
      fontFamily: "'Nunito', sans-serif",
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
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          fontFamily: "'Nunito', sans-serif",
          margin: 0,
        },
      },
    },
  },
  spacing: (factor) => `${0.5 * factor}rem`,
});

export default theme;
