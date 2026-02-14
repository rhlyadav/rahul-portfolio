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
import BusinessIcon from '@mui/icons-material/Business';
import EventIcon from '@mui/icons-material/Event';

const experiences = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'Infogain',
    duration: 'Mar 2025 - Present',
    type: 'Full-time',
    description: 'Developing and scaling the Neighborly customer portal using React, TypeScript, Redux, and Redux-Saga with a focus on maintainable architecture, secure auth, and production reliability.',
    highlights: ['Redux-Saga', 'Azure AD (MSAL)', 'Bearer Token Flows', 'Datadog Monitoring', 'Payment iFrame Integration']
  },
  {
    id: 2,
    title: 'Software Development Engineer II',
    company: 'Hopscotch',
    duration: 'Feb 2023 - Mar 2025',
    type: 'Full-time',
    description: 'Owned major parts of the e-commerce funnel including PLP, PDP, Cart, and Checkout. Led AngularJS-to-Next.js PDP migration with measurable performance gains and improved developer experience.',
    highlights: ['50% Faster PDP', 'Next.js + TypeScript Migration', 'Jest + RTL', 'Storybook Components', 'GoKwik, Shopflo, Juspay']
  },
  {
    id: 3,
    title: 'Software Development Engineer I',
    company: 'Hopscotch',
    duration: 'Nov 2019 - Feb 2023',
    type: 'Full-time',
    description: 'Built and enhanced the Site Merch platform with data-driven merchandising features and improved internal workflows for merchandising and supply-side operations.',
    highlights: ['JSP to React Migration', 'Collection Doorways', 'PLP Grid + Hero Carousel', 'Pagination / Filtering / Search', 'Supply-side Workflow Tools']
  },
  {
    id: 4,
    title: 'Software Engineer',
    company: 'Bright Path Technology',
    duration: 'May 2018 - Nov 2019',
    type: 'Full-time',
    description: 'Contributed to rentmystay.com and internal real-estate CRM products, improving SEO, UX, and operational dashboards for lead and ticket management.',
    highlights: ['SEO Optimization', 'PHP to AngularJS Migration', 'Lead Tracking Dashboard', 'Ticketing System', 'RBAC']
  }
];

export default function Experience() {
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
            Career Journey
          </Typography>
          <Typography variant="h2">Professional Experience</Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#B0B9C3',
              fontSize: '1.1rem',
            }}
          >
            A journey of growth, learning, and impactful contributions across leading tech companies.
          </Typography>
        </Stack>

        {/* Timeline */}
        <Stack spacing={4} sx={{ position: 'relative', pl: { xs: 0, md: 4 } }}>
          {/* Timeline Line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 0, md: 8 },
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(180deg, rgba(0, 217, 255, 0.5) 0%, transparent 100%)',
              display: { xs: 'none', md: 'block' },
            }}
          />

          {/* Experience Items */}
          {experiences.map((exp) => (
            <Box key={exp.id} sx={{ position: 'relative', pl: { xs: 0, md: 4 } }}>
              {/* Timeline Dot */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: -12, md: -24 },
                  top: 6,
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  border: '3px solid #00D9FF',
                  backgroundColor: '#0B0F19',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1,
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: '#00D9FF',
                    animation: 'pulse 2s ease-in-out infinite',
                  }}
                />
              </Box>

              {/* Content */}
              <Card>
                <CardContent>
                  {/* Company Badge */}
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                    <BusinessIcon sx={{ color: '#00D9FF', fontSize: '1.2rem' }} />
                    <Chip
                      label={exp.company}
                      size="small"
                      sx={{
                        background: 'transparent',
                        color: '#00D9FF',
                        fontWeight: 700,
                        fontSize: '0.875rem',
                      }}
                    />
                  </Stack>

                  {/* Title */}
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {exp.title}
                  </Typography>

                  {/* Duration */}
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                    <EventIcon sx={{ color: '#B0B9C3', fontSize: '1rem' }} />
                    <Typography variant="body2" sx={{ color: '#B0B9C3' }}>
                      {exp.duration}
                    </Typography>
                    <Chip
                      label={exp.type}
                      size="small"
                      sx={{
                        background: 'rgba(0, 217, 255, 0.1)',
                        color: '#00D9FF',
                        fontWeight: 600,
                        fontSize: '0.7rem',
                      }}
                    />
                  </Stack>

                  {/* Description */}
                  <Typography variant="body2" sx={{ color: '#B0B9C3', mb: 2, lineHeight: 1.8 }}>
                    {exp.description}
                  </Typography>

                  {/* Highlights */}
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {exp.highlights.map((highlight, i) => (
                      <Chip
                        key={i}
                        label={highlight}
                        size="small"
                        sx={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: '#B0B9C3',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          fontSize: '0.75rem',
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Stack>

        {/* Education Section */}
        <Box sx={{ mt: 12, pt: 8, borderTop: '1px solid rgba(0, 217, 255, 0.1)' }}>
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
              Education
            </Typography>
            <Typography variant="h3">Academic Background</Typography>
          </Stack>

          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr', gap: 2 }}>
            {siteConfig.education.map((edu) => (
              <Box key={edu.id}>
                <Card>
                  <CardContent>
                    <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={2}>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                          {edu.degree}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#00D9FF', fontWeight: 700 }}>
                          {edu.institution}
                        </Typography>
                      </Box>
                      <Chip
                        label={edu.year}
                        sx={{
                          background: 'rgba(0, 217, 255, 0.1)',
                          color: '#00D9FF',
                          fontWeight: 700,
                          width: 'fit-content',
                        }}
                      />
                    </Stack>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        <style>{`
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
        `}</style>
      </Container>
    </Box>
  );
}
