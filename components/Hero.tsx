'use client';
import Link from 'next/link';
import { Box, Container, Typography, Button, Stack, IconButton, Paper, Chip } from '@mui/material';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { siteConfig } from '../siteConfig';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0B0F19 0%, #071018 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pt: 12,
        pb: 8,
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, alignItems: 'center' }}>
          <Box>
            <Stack spacing={4}>
              <Box>
                <Chip
                  label="Welcome to my portfolio"
                  sx={{
                    background: 'rgba(0, 217, 255, 0.1)',
                    color: '#00D9FF',
                    borderColor: 'rgba(0, 217, 255, 0.2)',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                  }}
                  variant="outlined"
                />
              </Box>

              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #00D9FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    mb: 1,
                  }}
                >
                  {siteConfig.name}
                </Typography>
              </Box>

              <Box>
                <Typography variant="h3" sx={{ color: '#FFFFFF', mb: 2 }}>
                  Senior <span style={{ color: '#00D9FF' }}>Frontend Developer</span>
                </Typography>
                <Typography variant="body1" sx={{ color: '#B0B9C3' }}>
                  Building exceptional digital experiences with React and Next.js
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  color: '#B0B9C3',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  maxWidth: 500,
                }}
              >
                With 7+ years of experience, I build scalable frontend systems for e-commerce and enterprise products. I
                focus on performance, maintainable architecture, and user-centered interfaces.
              </Typography>

              <Stack direction="row" spacing={2}>
                <IconButton
                  component="a"
                  href={`mailto:${siteConfig.social.email}`}
                  sx={{
                    width: 50,
                    height: 50,
                    border: '1px solid rgba(0, 217, 255, 0.3)',
                    color: '#B0B9C3',
                    '&:hover': {
                      borderColor: '#00D9FF',
                      color: '#00D9FF',
                      boxShadow: '0 0 15px rgba(0, 217, 255, 0.3)',
                    },
                  }}
                >
                  <FaEnvelope size={20} />
                </IconButton>
                <IconButton
                  component="a"
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 50,
                    height: 50,
                    border: '1px solid rgba(0, 217, 255, 0.3)',
                    color: '#B0B9C3',
                    '&:hover': {
                      borderColor: '#00D9FF',
                      color: '#00D9FF',
                      boxShadow: '0 0 15px rgba(0, 217, 255, 0.3)',
                    },
                  }}
                >
                  <FaGithub size={20} />
                </IconButton>
                <IconButton
                  component="a"
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 50,
                    height: 50,
                    border: '1px solid rgba(0, 217, 255, 0.3)',
                    color: '#B0B9C3',
                    '&:hover': {
                      borderColor: '#00D9FF',
                      color: '#00D9FF',
                      boxShadow: '0 0 15px rgba(0, 217, 255, 0.3)',
                    },
                  }}
                >
                  <FaLinkedin size={20} />
                </IconButton>
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} pt={2}>
                <Button component={Link} href="#projects" variant="contained" endIcon={<FaArrowRight />} sx={{ py: 1.5, px: 3 }}>
                  View My Work
                </Button>
                <Button component={Link} href="#contact" variant="outlined" sx={{ py: 1.5, px: 3 }}>
                  Get in Touch
                </Button>
              </Stack>
            </Stack>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ position: 'relative', width: { xs: 280, sm: 320, md: 380 }, height: { xs: 280, sm: 320, md: 380 } }}>
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(0, 217, 255, 0.3) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                  animation: 'glow-pulse 2s ease-in-out infinite',
                }}
              />

              <Paper
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  border: '3px solid #00D9FF',
                  overflow: 'hidden',
                  boxShadow: '0 0 50px rgba(0, 217, 255, 0.3)',
                  background: 'linear-gradient(135deg, #1A1F2E 0%, #0B0F19 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h2" sx={{ fontSize: '4rem' }}>
                  RY
                </Typography>

                <Paper
                  sx={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                    px: 2,
                    py: 1,
                    background: 'rgba(11, 15, 25, 0.9)',
                    border: '1px solid rgba(0, 217, 255, 0.5)',
                    borderRadius: 3,
                  }}
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: '#00D9FF',
                        animation: 'pulse 2s ease-in-out infinite',
                      }}
                    />
                    <Typography variant="caption" sx={{ color: '#00D9FF', fontWeight: 600 }}>
                      Available for hire
                    </Typography>
                  </Stack>
                </Paper>
              </Paper>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            bottom: 30,
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            animation: 'bounce 2s infinite',
          }}
        >
          <Typography variant="body2" sx={{ color: '#B0B9C3', mb: 1 }}>
            Scroll to explore
          </Typography>
          <KeyboardArrowDownIcon
            sx={{
              color: '#00D9FF',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </Box>

        <style>{`
          @keyframes glow-pulse {
            0%, 100% {
              box-shadow: 0 0 30px rgba(0, 217, 255, 0.5);
            }
            50% {
              box-shadow: 0 0 50px rgba(0, 217, 255, 0.7);
            }
          }
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(10px);
            }
          }
        `}</style>
      </Container>
    </Box>
  );
}
