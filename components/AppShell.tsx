'use client';

import { ThemeProvider, createTheme, CssBaseline, Box, Container, Typography } from '@mui/material';
import Navbar from './Navbar';
import siteConfig from '../siteConfig';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00D9FF',
      light: '#4DFFFF',
      dark: '#00A3CC',
    },
    secondary: {
      main: '#FF1493',
      light: '#FF69B4',
      dark: '#C71585',
    },
    background: {
      default: '#0B0F19',
      paper: '#1A1F2E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B9C3',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 800,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 12,
          padding: '12px 24px',
          transition: 'all 0.3s ease',
        },
        contained: {
          background: 'linear-gradient(135deg, #00D9FF 0%, #00A3CC 100%)',
          color: '#0B0F19',
          '&:hover': {
            boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)',
          },
        },
        outlined: {
          borderColor: 'rgba(0, 217, 255, 0.5)',
          '&:hover': {
            borderColor: '#00D9FF',
            backgroundColor: 'rgba(0, 217, 255, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1A1F2E',
          border: '1px solid rgba(0, 217, 255, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: 'rgba(0, 217, 255, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 217, 255, 0.1)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 217, 255, 0.1)',
          color: '#00D9FF',
          borderColor: 'rgba(0, 217, 255, 0.2)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(11, 15, 25, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0, 217, 255, 0.1)',
        },
      },
    },
  },
});

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main id="main">{children}</main>
      <Box
        component="footer"
        sx={{
          borderTop: '1px solid rgba(0, 217, 255, 0.1)',
          backgroundColor: 'rgba(11, 15, 25, 0.5)',
          py: 6,
          mt: 10,
        }}
      >
        <Container maxWidth="lg">
          <Typography align="center" variant="body2" sx={{ color: '#B0B9C3' }}>
            (c) {new Date().getFullYear()} {siteConfig.name}. Built with Next.js and Material UI.
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

