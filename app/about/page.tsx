'use client';

import siteConfig from '../../siteConfig';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Stack,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function About() {
  return (
    <Box sx={{ backgroundColor: '#0B0F19', minHeight: '100vh', py: 12 }}>
      <Container maxWidth="lg">
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
            About Me
          </Typography>
          <Typography variant="h2">Senior Frontend Developer</Typography>
        </Stack>

        {/* Two Column Layout */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, mb: 8 }}>
          {/* Left Column - Main Content */}
          <Box>
            <Stack spacing={4}>
              <Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                  Who I Am
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#B0B9C3',
                    fontSize: '1.05rem',
                    lineHeight: 1.8,
                  }}
                >
                  I am a frontend engineer with 7+ years of experience delivering high-performance web
                  applications across e-commerce and enterprise products. I specialize in React, Next.js,
                  TypeScript, and scalable UI architecture.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                  My Journey
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#B0B9C3',
                    fontSize: '1.05rem',
                    lineHeight: 1.8,
                  }}
                >
                  Starting with a B.Tech in Computer Science and Engineering from PSIT (2012-2016), I have
                  grown from building CRM and internal tools to leading major customer-facing initiatives.
                  My work includes AngularJS-to-Next.js migrations, checkout and payment integrations,
                  SEO-driven development, and frontend performance optimization.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                  What I Do Best
                </Typography>
                <List sx={{ pl: 0 }}>
                  {[
                    'Build responsive and accessible applications with React and Next.js',
                    'Improve performance, page load times, and Core Web Vitals',
                    'Design maintainable frontend architecture and reusable UI systems',
                    'Integrate payments, authentication, and third-party services',
                    'Write reliable testable code using Jest and React Testing Library',
                    'Collaborate closely with product, backend, and QA teams in Agile delivery'
                  ].map((item, idx) => (
                    <ListItem key={idx} sx={{ pl: 0 }}>
                      <ListItemIcon sx={{ minWidth: 32, color: '#00D9FF' }}>
                        <CheckCircleIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        sx={{
                          '& .MuiListItemText-primary': {
                            color: '#B0B9C3',
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Stack>
          </Box>

          {/* Right Column - Stats & Info */}
          <Box>
            <Stack spacing={3}>
              {/* Stats Cards */}
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                {[
                  { number: '7+', label: 'Years Experience' },
                  { number: '25+', label: 'Projects Delivered' },
                  { number: '4', label: 'Core Organizations' },
                  { number: '50%', label: 'PDP Performance Gain' }
                ].map((stat, idx) => (
                  <Card key={idx} sx={{ textAlign: 'center', py: 3 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: '#00D9FF',
                        fontWeight: 700,
                        mb: 1,
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#B0B9C3' }}>
                      {stat.label}
                    </Typography>
                  </Card>
                ))}
              </Box>

              {/* Location & Connect Card */}
              <Card sx={{ pb: 3 }}>
                <CardContent>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="caption" sx={{ color: '#B0B9C3', fontWeight: 700, mb: 1, display: 'block', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                      Location
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                      {siteConfig.location}
                    </Typography>
                  </Box>
                  <Box sx={{ borderTop: '1px solid rgba(0, 217, 255, 0.1)', pt: 3 }}>
                    <Typography variant="caption" sx={{ color: '#B0B9C3', fontWeight: 700, mb: 1, display: 'block', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                      Let us Connect
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#B0B9C3', mb: 2 }}>
                      I am open to impactful frontend roles and product-focused engineering collaborations.
                    </Typography>
                    <Button
                      component={Link}
                      href="#contact"
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                    >
                      Get in Touch
                    </Button>
                  </Box>
                </CardContent>
              </Card>

              {/* Interests */}
              <Card>
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                    Beyond Coding
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#B0B9C3', lineHeight: 1.8 }}>
                    I actively explore modern frontend tooling, architecture patterns, and product analytics
                    to build user experiences that scale with business growth.
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Box>
        </Box>

        {/* CTA Section */}
        <Box sx={{ borderTop: '1px solid rgba(0, 217, 255, 0.1)', pt: 8, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
            Want to know more about what I have accomplished?
          </Typography>
          <Button
            component={Link}
            href="/projects"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
          >
            Explore My Work
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

