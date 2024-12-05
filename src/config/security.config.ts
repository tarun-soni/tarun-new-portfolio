export const securityConfig = {
  // Rate limiting
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  },

  // Allowed origins for CORS
  allowedOrigins: [
    'https://tarun.website',
    'https://www.tarun.website'
  ],

  // Trusted image domains
  trustedImageDomains: [
    'res.cloudinary.com'
  ],

  // API endpoints that don't require authentication
  publicEndpoints: [
    '/api/amplitude'
  ],

  // Security-related environment variables
  requiredEnvVars: [
    'NEXT_PUBLIC_AMPLITUDE',
    'NEXT_PUBLIC_GA_ID'
  ]
} 