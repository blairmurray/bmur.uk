import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme/theme';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App; 