import { rateLimiter, securityConfig, corsOptions } from '../utils/security';

export const setupSecurityMiddleware = (app) => {
  // Apply rate limiting
  app.use('/api/', rateLimiter);
  
  // Apply Helmet security headers
  app.use(securityConfig);
  
  // Enable CORS with config
  app.use(cors(corsOptions));
  
  // Prevent XSS attacks
  app.use(xssPreventionMiddleware);
  
  // Prevent HTTP Parameter Pollution
  app.use(hppPreventionMiddleware);
  
  // Request validation middleware
  app.use(validateRequests);
};

// Request validation middleware
const validateRequests = (req, res, next) => {
  // Validate content type
  if (req.method === 'POST' && !req.is('application/json')) {
    return res.status(415).json({ 
      error: 'Unsupported Media Type. Please send JSON.' 
    });
  }
  
  // Validate request size
  const contentLength = parseInt(req.headers['content-length'], 10);
  if (contentLength > 1000000) { // 1MB limit
    return res.status(413).json({ 
      error: 'Payload too large' 
    });
  }
  
  next();
}; 