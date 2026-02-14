"use client";
import { useState } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Stack, Chip, IconButton, Box } from '@mui/material';
import type { Project } from '../siteConfig';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function ProjectCard({ project }: { project: Project }) {
  const [liked, setLiked] = useState(false);

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <CardMedia
        sx={{
          height: 200,
          background: 'linear-gradient(135deg, #1A1F2E 0%, #0B0F19 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3rem',
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      >
        <Typography variant="subtitle1" sx={{ color: '#00D9FF', fontWeight: 700, letterSpacing: 1 }}>
          PROJECT
        </Typography>
      </CardMedia>

      <CardContent sx={{ flexGrow: 1 }}>
        <Chip
          label={project.company}
          size="small"
          sx={{
            mb: 1.5,
            background: 'rgba(0, 217, 255, 0.1)',
            color: '#00D9FF',
            fontWeight: 600,
            fontSize: '0.75rem',
          }}
        />

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 0.5,
            color: '#FFFFFF',
            wordBreak: 'break-word',
          }}
        >
          {project.title}
        </Typography>

        <Typography variant="caption" sx={{ color: '#B0B9C3', display: 'block', mb: 1 }}>
          {project.year}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: '#B0B9C3',
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: 1.6,
          }}
        >
          {project.description}
        </Typography>

        <Stack direction="row" spacing={0.5} flexWrap="wrap" sx={{ mb: 2 }}>
          {project.tech.slice(0, 3).map((t) => (
            <Chip
              key={t}
              label={t}
              size="small"
              sx={{
                height: 24,
                fontSize: '0.75rem',
                background: 'rgba(0, 217, 255, 0.1)',
                color: '#00D9FF',
                border: '1px solid rgba(0, 217, 255, 0.2)',
              }}
            />
          ))}
          {project.tech.length > 3 && (
            <Chip
              label={`+${project.tech.length - 3}`}
              size="small"
              sx={{
                height: 24,
                fontSize: '0.75rem',
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#B0B9C3',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            />
          )}
        </Stack>
      </CardContent>

      <CardActions
        sx={{
          borderTop: '1px solid rgba(0, 217, 255, 0.1)',
          pt: 1.5,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <IconButton
            size="small"
            onClick={() => setLiked(!liked)}
            sx={{
              color: liked ? '#00D9FF' : '#B0B9C3',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: '#00D9FF',
              },
            }}
          >
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Box>
        <Stack direction="row" spacing={0.5}>
          <IconButton
            size="small"
            href="#"
            sx={{
              color: '#B0B9C3',
              '&:hover': {
                color: '#00D9FF',
              },
            }}
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            href="#"
            sx={{
              color: '#B0B9C3',
              '&:hover': {
                color: '#00D9FF',
              },
            }}
          >
            <OpenInNewIcon fontSize="small" />
          </IconButton>
        </Stack>
      </CardActions>
    </Card>
  );
}
