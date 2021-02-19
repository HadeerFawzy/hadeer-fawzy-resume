import React from 'react'
import { ThemeProvider } from "@material-ui/core";
import theme from "config/theme";
import Header from 'components/Header'

function App() {
  return ( 
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header/>
      </div>
    </ThemeProvider>
  );
}

export default App;
