import { Box, Container, Typography, Paper, Link } from '@mui/material';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
          py: 8,
        }}
      >
        <Typography
          component={motion.h1}
          variant="h2"
          sx={{
            background: 'linear-gradient(45deg, #9c27b0 30%, #ba68c8 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Welcome to bmur.uk
        </Typography>
        
        <Typography
          component={motion.p}
          variant="h5"
          color="text.secondary"
          textAlign="center"
          sx={{ maxWidth: '600px', mb: 4 }}
        >
          Your central hub for all bmur.uk applications
        </Typography>

        <Paper
          component={motion.div}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          sx={{
            p: 3,
            width: '100%',
            maxWidth: '800px',
            background: 'rgba(156, 39, 176, 0.1)',
            borderRadius: 2,
            border: '1px solid rgba(156, 39, 176, 0.2)',
            mb: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Blair Murray's Portfolio
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            Personal portfolio and about me website showcasing my work and experience.
          </Typography>
          <Link 
            href="https://blair.scot" 
            target="_blank" 
            rel="noopener noreferrer"
            sx={{
              color: '#ba68c8',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Visit blair.scot →
          </Link>
        </Paper>

        <Paper
          component={motion.div}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          sx={{
            p: 3,
            width: '100%',
            maxWidth: '800px',
            background: 'rgba(156, 39, 176, 0.1)',
            borderRadius: 2,
            border: '1px solid rgba(156, 39, 176, 0.2)',
          }}
        >
          <Typography variant="h6" gutterBottom>
            More Coming Soon
          </Typography>
          <Typography color="text.secondary">
            Additional applications will be added here as they become available.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default LandingPage; 