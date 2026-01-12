// src/ThemeProvider.js
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { theme } from './theme'; // Import your custom theme
import CssBaseline from '@mui/material/CssBaseline';

export default function AppThemeProvider({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}