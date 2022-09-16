import { ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Router } from './routes/useRoutes';
import { materialTheme } from './style';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <ThemeProvider theme={materialTheme}>
    <Router />
  </ThemeProvider>
  // </React.StrictMode>
)
