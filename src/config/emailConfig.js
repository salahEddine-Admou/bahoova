// EmailJS Configuration
// This file contains all EmailJS settings for easy management

export const EMAILJS_CONFIG = {
  // Service ID from EmailJS dashboard
  serviceId: 'service_20b75lb',
  
  // Template IDs (you'll need to create these in EmailJS dashboard)
  templates: {
    contact: 'template_contact', // For contact form submissions
    newsletter: 'template_newsletter', // For newsletter subscriptions
    eventInquiry: 'template_event_inquiry' // For event-specific inquiries
  },
  
  // Public Key from EmailJS dashboard (REPLACE WITH VALID KEY)
  publicKey: 'YOUR_VALID_PUBLIC_KEY_HERE',
  
  // Destination email address
  userEmail: 'contact@bahoova.com',
  
  // Company information
  company: {
    name: 'BAHOOVA Events',
    email: 'contact@bahoova.com',
    phone: '+212662017389',
    address: '123 Avenue Mohammed V, Casablanca, Maroc'
  }
};

// Template parameter mappings for different email types
export const EMAIL_TEMPLATES = {
  contact: {
    to_email: EMAILJS_CONFIG.userEmail,
    from_name: '{{from_name}}',
    from_email: '{{from_email}}',
    subject: '{{subject}}',
    message: '{{message}}',
    reply_to: '{{from_email}}'
  },
  
  newsletter: {
    to_email: EMAILJS_CONFIG.userEmail,
    from_email: '{{from_email}}',
    subject: 'Newsletter Subscription',
    message: 'New newsletter subscription request from {{from_email}}',
    reply_to: '{{from_email}}'
  },
  
  eventInquiry: {
    to_email: EMAILJS_CONFIG.userEmail,
    from_name: '{{from_name}}',
    from_email: '{{from_email}}',
    event_type: '{{event_type}}',
    subject: '{{subject}}',
    message: '{{message}}',
    reply_to: '{{from_email}}'
  }
};

// Email validation settings
export const EMAIL_VALIDATION = {
  regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  maxLength: 254,
  minLength: 5
};

// Rate limiting settings (for future implementation)
export const RATE_LIMITING = {
  maxEmailsPerHour: 10,
  maxEmailsPerDay: 50,
  cooldownPeriod: 60000 // 1 minute in milliseconds
};

export default EMAILJS_CONFIG;
