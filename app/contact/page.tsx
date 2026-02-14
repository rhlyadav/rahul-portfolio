'use client';
import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  Link as MuiLink,
  Alert,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { siteConfig } from '../../siteConfig';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Box sx={{ backgroundColor: '#0B0F19', minHeight: '100vh', py: 12 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Stack spacing={2} sx={{ mb: 10, textAlign: 'center' }}>
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
            Get In Touch
          </Typography>
          <Typography variant="h2">Let us Start a Conversation</Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#B0B9C3',
              fontSize: '1.1rem',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            I am always open to new opportunities, collaborations, and interesting conversations. Feel free to
            reach out!
          </Typography>
        </Stack>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, mb: 10 }}>
          {/* Contact Form */}
          <Box>
            <Card>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                  Send Me a Message
                </Typography>

                <Stack component="form" onSubmit={handleSubmit} spacing={3}>
                  {/* Name Input */}
                  <TextField
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    fullWidth
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#FFFFFF',
                        '& fieldset': {
                          borderColor: 'rgba(0, 217, 255, 0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(0, 217, 255, 0.4)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00D9FF',
                        },
                      },
                      '& .MuiInputBase-input::placeholder': {
                        color: '#B0B9C3',
                        opacity: 1,
                      },
                    }}
                  />

                  {/* Email Input */}
                  <TextField
                    label="Your Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    fullWidth
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#FFFFFF',
                        '& fieldset': {
                          borderColor: 'rgba(0, 217, 255, 0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(0, 217, 255, 0.4)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00D9FF',
                        },
                      },
                    }}
                  />

                  {/* Message Input */}
                  <TextField
                    label="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or inquiry..."
                    multiline
                    rows={5}
                    fullWidth
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#FFFFFF',
                        '& fieldset': {
                          borderColor: 'rgba(0, 217, 255, 0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(0, 217, 255, 0.4)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00D9FF',
                        },
                      },
                    }}
                  />

                  {/* Submit Button */}
                  <Button type="submit" variant="contained" fullWidth sx={{ py: 1.5 }}>
                    Send Message
                  </Button>

                  {submitted && (
                    <Alert severity="success">
                      Thank you for your message. I will get back to you soon.
                    </Alert>
                  )}
                </Stack>
              </CardContent>
            </Card>
          </Box>

          {/* Contact Info */}
          <Box>
            <Stack spacing={3}>
              {/* Direct Contact */}
              <Card>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                    Contact Info
                  </Typography>

                  <Stack spacing={3}>
                    {/* Email */}
                    <MuiLink
                      href={`mailto:${siteConfig.social.email}`}
                      sx={{ textDecoration: 'none', cursor: 'pointer' }}
                    >
                      <Stack direction="row" spacing={2} alignItems="flex-start">
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            background: 'linear-gradient(135deg, #00D9FF 0%, #00A3CC 100%)',
                            borderRadius: 1.5,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <EmailIcon sx={{ color: '#0B0F19', fontSize: '1.5rem' }} />
                        </Box>
                        <Box>
                          <Typography variant="caption" sx={{ color: '#B0B9C3', fontWeight: 700, display: 'block' }}>
                            Email
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: '#FFFFFF',
                              fontWeight: 700,
                              '&:hover': { color: '#00D9FF' },
                            }}
                          >
                            {siteConfig.social.email}
                          </Typography>
                        </Box>
                      </Stack>
                    </MuiLink>

                    {/* Location */}
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          background: 'linear-gradient(135deg, #00D9FF 0%, #00A3CC 100%)',
                          borderRadius: 1.5,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <LocationOnIcon sx={{ color: '#0B0F19', fontSize: '1.5rem' }} />
                      </Box>
                      <Box>
                        <Typography variant="caption" sx={{ color: '#B0B9C3', fontWeight: 700, display: 'block' }}>
                          Location
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                          {siteConfig.location}
                        </Typography>
                      </Box>
                    </Stack>

                    {/* Availability */}
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          background: 'linear-gradient(135deg, #00D9FF 0%, #00A3CC 100%)',
                          borderRadius: 1.5,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <AccessTimeIcon sx={{ color: '#0B0F19', fontSize: '1.5rem' }} />
                      </Box>
                      <Box>
                        <Typography variant="caption" sx={{ color: '#B0B9C3', fontWeight: 700, display: 'block' }}>
                          Availability
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                          Available for hire
                        </Typography>
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                    Connect On Social
                  </Typography>
                  <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
                    <Box>
                      <IconButton
                        component="a"
                        href={siteConfig.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          width: '100%',
                          border: '1px solid rgba(0, 217, 255, 0.2)',
                          borderRadius: 1,
                          color: '#B0B9C3',
                          '&:hover': {
                            borderColor: '#00D9FF',
                            backgroundColor: 'rgba(0, 217, 255, 0.05)',
                            color: '#00D9FF',
                          },
                        }}
                      >
                        <GitHubIcon />
                      </IconButton>
                    </Box>
                    <Box>
                      <IconButton
                        component="a"
                        href={siteConfig.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          width: '100%',
                          border: '1px solid rgba(0, 217, 255, 0.2)',
                          borderRadius: 1,
                          color: '#B0B9C3',
                          '&:hover': {
                            borderColor: '#00D9FF',
                            backgroundColor: 'rgba(0, 217, 255, 0.05)',
                            color: '#00D9FF',
                          },
                        }}
                      >
                        <LinkedInIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Stack>
          </Box>
        </Box>

        {/* CTA Footer */}
        <Box sx={{ borderTop: '1px solid rgba(0, 217, 255, 0.1)', pt: 8, textAlign: 'center' }}>
          <Typography variant="body1" sx={{ color: '#B0B9C3', fontSize: '1.1rem', mb: 2 }}>
            Whether you have a project in mind or just want to chat, I would love to hear from you!
          </Typography>
          <Typography variant="body2" sx={{ color: '#B0B9C3' }}>
            Response time: Usually within 24 hours
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

