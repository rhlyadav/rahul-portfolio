'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '../siteConfig';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

export default function Navbar() {
  const path = usePathname() || '/';
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 2,
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                cursor: 'pointer',
                '&:hover': { opacity: 0.8 },
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  background: 'linear-gradient(135deg, #00D9FF 0%, #00A3CC 100%)',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  color: '#0B0F19',
                }}
              >
                RY
              </Box>
              <Box sx={{ fontWeight: 700, fontSize: '1.2rem', display: { xs: 'none', sm: 'block' } }}>
                {siteConfig.name.split(' ')[0]}
              </Box>
            </Box>
          </Link>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center', flex: 1, ml: 6 }}>
              {siteConfig.nav.map((n) => (
                <Link key={n.href} href={n.href} style={{ textDecoration: 'none' }}>
                  <Button
                    sx={{
                      color: path === n.href ? '#00D9FF' : '#B0B9C3',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      borderBottom: path === n.href ? '2px solid #00D9FF' : 'none',
                      borderRadius: 0,
                      pb: 0.5,
                      '&:hover': {
                        color: '#00D9FF',
                      },
                    }}
                  >
                    {n.label}
                  </Button>
                </Link>
              ))}
            </Box>

          {/* Social Icons & Mobile Menu */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1 }}>
              <IconButton
                component="a"
                href={`mailto:${siteConfig.social.email}`}
                size="small"
                sx={{
                  border: '1px solid rgba(0, 217, 255, 0.3)',
                  color: '#B0B9C3',
                  '&:hover': {
                    borderColor: '#00D9FF',
                    color: '#00D9FF',
                  },
                }}
              >
                <FaEnvelope />
              </IconButton>
              <IconButton
                component="a"
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  border: '1px solid rgba(0, 217, 255, 0.3)',
                  color: '#B0B9C3',
                  '&:hover': {
                    borderColor: '#00D9FF',
                    color: '#00D9FF',
                  },
                }}
              >
                <FaGithub />
              </IconButton>
              <IconButton
                component="a"
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  border: '1px solid rgba(0, 217, 255, 0.3)',
                  color: '#B0B9C3',
                  '&:hover': {
                    borderColor: '#00D9FF',
                    color: '#00D9FF',
                  },
                }}
              >
                <FaLinkedin />
              </IconButton>
            </Box>

            {/* Mobile Menu */}
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton
                size="large"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {siteConfig.nav.map((n) => (
                  <MenuItem
                    key={n.href}
                    onClick={handleClose}
                    component={Link}
                    href={n.href}
                  >
                    {n.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
