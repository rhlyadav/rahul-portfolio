'use client';

import siteConfig, { Project } from '../../siteConfig';
import ProjectCard from '../../components/ProjectCard';
import { Box, Container, Typography, Stack } from '@mui/material';

export default function Projects() {
  const projects: Project[] = siteConfig.projects;
  
  return (
    <Box sx={{ py: 12, backgroundColor: '#0B0F19', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Stack spacing={2} sx={{ mb: 8 }}>
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
            Portfolio
          </Typography>
          <Typography variant="h2">All Projects</Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#B0B9C3',
              fontSize: '1.1rem',
              maxWidth: 600,
            }}
          >
            A selection of projects I have worked on, showcasing my expertise in modern web development.
          </Typography>
        </Stack>

        {/* Projects Grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
          {projects.map((project) => (
            <Box key={project.id}>
              <ProjectCard project={project} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
