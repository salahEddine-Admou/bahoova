import React, { useState, useEffect } from 'react';
import { Mail, Clock, User, MessageSquare, X } from 'lucide-react';

const EmailDebugger = () => {
  const [emails, setEmails] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Load emails from localStorage
    const loadEmails = () => {
      const lastEmail = localStorage.getItem('lastEmailSent');
      if (lastEmail) {
        try {
          const emailData = JSON.parse(lastEmail);
          setEmails(prev => [emailData, ...prev.slice(0, 4)]); // Keep last 5 emails
        } catch (error) {
          console.error('Error parsing email data:', error);
        }
      }
    };

    loadEmails();
    
    // Listen for new emails
    const handleStorageChange = (e) => {
      if (e.key === 'lastEmailSent') {
        loadEmails();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Check for new emails every 2 seconds
    const interval = setInterval(loadEmails, 2000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  if (emails.length === 0) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 9999,
      maxWidth: '400px',
      background: 'white',
      border: '2px solid #667eea',
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        color: 'white',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Mail size={16} />
          <span style={{ fontWeight: '600' }}>Emails Reçus ({emails.length})</span>
        </div>
        <button
          onClick={() => setIsVisible(!isVisible)}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            padding: '4px'
          }}
        >
          {isVisible ? '−' : '+'}
        </button>
      </div>

      {/* Email List */}
      {isVisible && (
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
          {emails.map((email, index) => (
            <div
              key={index}
              style={{
                padding: '16px',
                borderBottom: index < emails.length - 1 ? '1px solid #eee' : 'none',
                background: index === 0 ? '#f8f9ff' : 'white'
              }}
            >
              {/* Email Header */}
              <div style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <User size={14} color="#667eea" />
                  <span style={{ fontWeight: '600', fontSize: '14px' }}>{email.from}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <Mail size={14} color="#666" />
                  <span style={{ fontSize: '12px', color: '#666' }}>À: {email.to}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={14} color="#666" />
                  <span style={{ fontSize: '12px', color: '#666' }}>{email.timestamp}</span>
                </div>
              </div>

              {/* Subject */}
              <div style={{ marginBottom: '8px' }}>
                <strong style={{ fontSize: '14px', color: '#333' }}>{email.subject}</strong>
              </div>

              {/* Body Preview */}
              <div style={{
                fontSize: '12px',
                color: '#666',
                maxHeight: '60px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                lineHeight: '1.4'
              }}>
                {email.body.substring(0, 150)}...
              </div>

              {/* View Full Button */}
              <button
                onClick={() => {
                  const fullEmail = `À: ${email.to}\nDe: ${email.from}\nSujet: ${email.subject}\n\n${email.body}`;
                  navigator.clipboard.writeText(fullEmail);
                  alert('Email copié dans le presse-papiers !');
                }}
                style={{
                  marginTop: '8px',
                  padding: '4px 8px',
                  background: '#667eea',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '11px',
                  cursor: 'pointer'
                }}
              >
                Copier l'email
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmailDebugger;
