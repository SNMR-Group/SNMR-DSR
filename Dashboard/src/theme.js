import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        primary: {
          main: '#00ADB5',
          light: '#40CCD1',
          dark: '#00797F',
          contrastText: '#FFFFFF',
        },
        secondary: {
          main: '#393E46',
          contrastText: '#FFFFFF',
        },
        info: {
          main: '#222831',
          contrastText: '#FFFFFF',
        },
        background: {
          default: '#EEEEEE',
          paper: '#FFFFFF',
        },
        text: {
          primary: '#222831',
          secondary: '#393E46',
          disabled: '#9E9E9E',
        },
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: '#00ADB5',
          light: '#40CCD1',
          dark: '#00797F',
          contrastText: '#000000',
        },
        secondary: {
          main: '#EEEEEE',
          contrastText: '#000000',
        },
        info: {
          main: '#393E46',
          contrastText: '#EEEEEE',
        },
        background: {
          default: '#222831',
          paper: '#393E46',
        },
        text: {
          primary: '#EEEEEE',
          secondary: '#B0BEC5',
          disabled: '#757575',
        },
      },
    },
  },

  typography: {
    fontFamily: '"Inter", "Roboto", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem',
      letterSpacing: '-0.5px',
      color: 'inherit',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.125rem',
      color: 'inherit',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: 'text.primary',
    },
    subtitle1: {
      fontSize: '0.95rem',
      color: 'text.secondary',
    },
    button: {
      textTransform: 'capitalize',
      fontWeight: 600,
      letterSpacing: '0.5px',
    },
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'background.paper',
          color: 'text.primary',
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 22px',
          fontWeight: 600,
          textTransform: 'capitalize',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          backgroundColor: '#00ADB5',
          '&:hover': {
            backgroundColor: '#00797F',
          },
        },
        containedSecondary: {
          backgroundColor: '#393E46',
          '&:hover': {
            backgroundColor: '#2A2E33',
          },
        },
        outlinedPrimary: {
          borderColor: '#00ADB5',
          color: '#00ADB5',
          '&:hover': {
            backgroundColor: 'rgba(0, 173, 181, 0.08)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'background.paper',
          borderRadius: 12,
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
          transition: 'box-shadow 0.3s ease',
          '&:hover': {
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: 'transform 0.3s, box-shadow 0.3s',
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#00ADB5',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&.Mui-selected': {
            backgroundColor: 'rgba(0, 173, 181, 0.12)',
            '&:hover': {
              backgroundColor: 'rgba(0, 173, 181, 0.16)',
            },
          },
        },
      },
    },
  },
});
