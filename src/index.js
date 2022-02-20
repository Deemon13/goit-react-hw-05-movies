import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';

import { GlobalStyles, Normalize } from 'components/GlobalStyle';
import { App } from 'components/App';
import { theme } from 'constants/theme';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={Normalize} />
    <Global styles={GlobalStyles} />
    <BrowserRouter basename="/goit-react-hw-05-movies/">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
