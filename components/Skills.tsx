'use client';
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  Stack,
  Chip,
} from '@mui/material';
import { siteConfig } from '../siteConfig';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const skillCategories = [
  {
    icon: CodeIcon,
    category: 'Languages & Frameworks',
    skills: [...siteConfig.skills.languages, ...siteConfig.skills.frameworks]
  },
  {
    icon: StorageIcon,
    category: 'State Management & Data',
    skills: [...siteConfig.skills.stateManagement]
  },
  {
    icon: BrushIcon,
    category: 'Styling & Tools',
    skills: [...siteConfig.skills.styling, ...siteConfig.skills.tools]
  },
  {
    icon: RocketLaunchIcon,
    category: 'Testing & Deployment',
    skills: [...siteConfig.skills.testing, ...siteConfig.skills.authCloud]
  }
];

export default function Skills() {
  return (
    <Box sx={{ py: 12, backgroundColor: '#0B0F19' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Stack
          spacing={2}
          sx={{ mb: 8, textAlign: 'center', alignItems: 'center', maxWidth: 980, mx: 'auto' }}
        >
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
            Skills & Expertise
          </Typography>
          <Typography
            variant="h2"
            sx={{
              maxWidth: 760,
              mx: 'auto',
              lineHeight: 1.2,
              textWrap: 'balance',
              fontSize: { xs: '2.1rem', md: '3rem' },
            }}
          >
            Technologies I Work With
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#B0B9C3',
              maxWidth: 680,
              mx: 'auto',
              fontSize: { xs: '1.05rem', md: '1.2rem' },
              lineHeight: 1.7,
              textWrap: 'balance',
            }}
          >
            A comprehensive toolkit built over 7+ years of professional frontend development.
          </Typography>
        </Stack>

        {/* Skills Grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 3 }}>
          {skillCategories.map((category, idx) => {
            const IconComponent = category.icon;
            return (
              <Box key={idx}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    {/* Icon */}
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        background: 'linear-gradient(135deg, #00D9FF 0%, #00A3CC 100%)',
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      <IconComponent sx={{ color: '#0B0F19', fontSize: '1.5rem' }} />
                    </Box>

                    {/* Category Title */}
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 2,
                        fontWeight: 700,
                        color: '#FFFFFF',
                      }}
                    >
                      {category.category}
                    </Typography>

                    {/* Skills List */}
                    <Stack spacing={1}>
                      {category.skills.map((skill, i) => (
                        <Stack key={i} direction="row" spacing={1} alignItems="center">
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              background: '#00D9FF',
                              flexShrink: 0,
                            }}
                          />
                          <Typography variant="body2" sx={{ color: '#B0B9C3' }}>
                            {skill}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
