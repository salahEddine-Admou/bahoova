// Email Service Configuration
// This file handles email sending functionality

import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, EMAIL_TEMPLATES } from './config/emailConfig';

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.publicKey);

// For development/testing - shows email details in console
export const simulateEmail = (emailData) => {
  console.log('=== EMAIL SIMULATION ===');
  console.log('To:', emailData.to);
  console.log('From:', emailData.from);
  console.log('Subject:', emailData.subject);
  console.log('Body:', emailData.body);
  console.log('Timestamp:', new Date().toLocaleString('fr-FR'));
  console.log('========================');
  
  // Only store in localStorage for development testing
  if (process.env.NODE_ENV === 'development') {
    localStorage.setItem('lastEmailSent', JSON.stringify({
      ...emailData,
      timestamp: new Date().toLocaleString('fr-FR')
    }));
  }
  
  return Promise.resolve({
    success: true,
    message: 'Email simulé envoyé avec succès ! (Mode développement)'
  });
};

// For production - using EmailJS
export const sendEmailWithEmailJS = async (emailData, templateType = 'contact') => {
  try {
    console.log('Sending email via EmailJS:', emailData);
    
    // Get template configuration
    const templateConfig = EMAIL_TEMPLATES[templateType] || EMAIL_TEMPLATES.contact;
    
    // Prepare template parameters for EmailJS
    const templateParams = {
      ...templateConfig,
      from_name: emailData.fromName || emailData.from,
      from_email: emailData.from,
      subject: emailData.subject,
      message: emailData.body,
      reply_to: emailData.from
    };

    // Use appropriate template ID
    const templateId = EMAILJS_CONFIG.templates[templateType] || EMAILJS_CONFIG.templates.contact;

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      templateId,
      templateParams
    );

    console.log('EmailJS SUCCESS!', response.status, response.text);
    
    return {
      success: true,
      message: 'Email envoyé avec succès via EmailJS !',
      response: response
    };
  } catch (error) {
    console.error('EmailJS error:', error);
    return {
      success: false,
      message: `Erreur lors de l'envoi de l'email: ${error.text || error.message}`,
      error: error
    };
  }
};

// For production - using a backend API
export const sendEmailWithAPI = async (emailData) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData)
    });
    
    if (response.ok) {
      return {
        success: true,
        message: 'Email envoyé avec succès !'
      };
    } else {
      throw new Error('API Error');
    }
  } catch (error) {
    console.error('API error:', error);
    return {
      success: false,
      message: 'Erreur lors de l\'envoi de l\'email'
    };
  }
};

// Main email sending function
export const sendEmail = async (emailData, templateType = 'contact') => {
  // Always try to send real email first, fallback to simulation only in development
  try {
    console.log('Attempting to send email via EmailJS...');
    const result = await sendEmailWithEmailJS(emailData, templateType);
    
    if (result.success) {
      console.log('Email sent successfully via EmailJS');
      return result;
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error('EmailJS failed, falling back to simulation:', error);
    
    // Only use simulation in development mode
    if (process.env.NODE_ENV === 'development') {
      console.log('Development mode: Using email simulation as fallback');
      return await simulateEmail(emailData);
    } else {
      // In production, return the error
      return {
        success: false,
        message: `Erreur lors de l'envoi de l'email: ${error.message}`,
        error: error
      };
    }
  }
};

// Export configuration for debugging
export const getEmailJSConfig = () => EMAILJS_CONFIG;

// Helper function to send contact form emails
export const sendContactEmail = async (emailData) => {
  return await sendEmail(emailData, 'contact');
};

// Helper function to send newsletter subscription emails
export const sendNewsletterEmail = async (emailData) => {
  return await sendEmail(emailData, 'newsletter');
};

// Helper function to send event inquiry emails
export const sendEventInquiryEmail = async (emailData) => {
  return await sendEmail(emailData, 'eventInquiry');
};
