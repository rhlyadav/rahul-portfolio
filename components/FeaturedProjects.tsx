'use client';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import { siteConfig } from '../siteConfig';
import ProjectCard from './ProjectCard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function FeaturedProjects() {
  const featuredProjects = siteConfig.projects.slice(0, 3);

  return (
    <Box sx={{ py: 12, backgroundColor: '#0B0F19' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="flex-start" sx={{ mb: 6 }}>
          <Stack spacing={2} sx={{ mb: { xs: 4, md: 0 } }}>
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
              Featured Work
            </Typography>
            <Typography variant="h2" sx={{ maxWidth: 600 }}>
              Projects That Made an Impact
            </Typography>
          </Stack>
          <Button
            component={Link}
            href="/projects"
            endIcon={<ArrowForwardIcon />}
            sx={{
              color: '#00D9FF',
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: 'transparent',
                color: '#FFFFFF',
              },
            }}
          >
            View All
          </Button>
        </Stack>

        {/* Projects Grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: 'repeat(3, 1fr)' }, gap: 3, mb: 4 }}>
          {featuredProjects.map((project) => (
            <Box key={project.id}>
              <ProjectCard project={project} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
