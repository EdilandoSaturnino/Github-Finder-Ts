import GlobalStyles from './styles/global';
import { HashRouter } from 'react-router-dom';
import { Router } from './Router';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HashRouter>
        <Router />
      </HashRouter>

      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
