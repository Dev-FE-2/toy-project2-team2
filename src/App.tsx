import Router from './router';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globalStyles';
import { theme } from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={Router} />
    </ThemeProvider>
  );
};

export default App;
