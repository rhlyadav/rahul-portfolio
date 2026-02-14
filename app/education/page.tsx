'use client';

import siteConfig from '../../siteConfig';
import {
  Box,
  Container,
  Typography,
  Stack,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export default function Education() {
  return (
    <Box sx={{ backgroundColor: '#0B0F19', minHeight: '100vh', py: 12 }}>
      <Container maxWidth="md">
        {/* Header */}
        <Stack spacing={2} sx={{ mb: 10 }}>
          <Typography
            variant="caption"
            sx={{
              color: '#00D9FF',
              fontWeight: 700,
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}
          >
            Academic Journey
          </Typography>
          <Typography variant="h2">Education</Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#B0B9C3',
              fontSize: '1.1rem',
            }}
          >
            Formal education and continuous learning that shaped my career.
          </Typography>
        </Stack>

        {/* Education Cards */}
        <Stack spacing={3} sx={{ mb: 10 }}>
          {siteConfig.education.map((edu) => (
            <Card key={edu.id}>
              <CardContent>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems={{ xs: 'flex-start', sm: 'center' }}>
                  {/* Icon */}
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      background: 'linear-gradient(135deg, #00D9FF 0%, #00A3CC 100%)',
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <SchoolIcon sx={{ color: '#0B0F19', fontSize: '2rem' }} />
                  </Box>

                  {/* Content */}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                      {edu.degree}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#00D9FF', fontWeight: 700, mb: 0.5 }}>
                      {edu.institution}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#B0B9C3' }}>
                      Completed in {edu.year}
                    </Typography>
                  </Box>

                  {/* Year Badge */}
                  <Chip
                    label={edu.year}
                    sx={{
                      background: 'rgba(0, 217, 255, 0.1)',
                      color: '#00D9FF',
                      fontWeight: 700,
                    }}
                  />
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>

        {/* Learning & Certifications */}
        <Box sx={{ borderTop: '1px solid rgba(0, 217, 255, 0.1)', pt: 10 }}>
          <Stack spacing={2} sx={{ mb: 6 }}>
            <Typography
              variant="caption"
              sx={{
                color: '#00D9FF',
                fontWeight: 700,
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}
            >
              Continuous Learning
            </Typography>
            <Typography variant="h3">Certifications & Skills</Typography>
          </Stack>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3, mb: 10 }}>
            {[
              { title: 'React & Modern JavaScript', desc: 'Advanced concepts and best practices' },
              { title: 'TypeScript Mastery', desc: 'Type system deep dive and practical patterns' },
              { title: 'Performance Optimization', desc: 'Web vitals, bundling, and rendering strategies' },
              { title: 'Testing & QA', desc: 'Unit, integration, and E2E testing frameworks' }
            ].map((cert, idx) => (
              <Box key={idx}>
                <Card>
                  <CardContent>
                    <MenuBookIcon sx={{ color: '#00D9FF', fontSize: '1.5rem', mb: 1 }} />
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                      {cert.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#B0B9C3', lineHeight: 1.6 }}>
                      {cert.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Quick Stats */}
        <Box sx={{ borderTop: '1px solid rgba(0, 217, 255, 0.1)', pt: 10 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(4, 1fr)' }, gap: 2 }}>
            {[
              { number: '2012', label: 'Started Learning' },
              { number: '200+', label: 'Projects Built' },
              { number: '50+', label: 'Technologies' },
              { number: 'Always', label: 'Growing' }
            ].map((stat, idx) => (
              <Box key={idx}>
                <Card sx={{ textAlign: 'center' }}>
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{
                        color: '#00D9FF',
                        fontWeight: 700,
                        mb: 0.5,
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#B0B9C3' }}>
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
