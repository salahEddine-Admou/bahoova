import React from "react";
import { mockData } from "../mock";

const Agency = () => {
  return (
    <main style={{ paddingTop: '120px' }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '120px 0 80px',
        background: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: '300',
              color: '#1a1a1a',
              marginBottom: '2rem',
              letterSpacing: '1px'
            }}>
              Agency
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              lineHeight: '1.6',
              fontWeight: '300'
            }}>
              BAHOOVA Events is a full-service event management agency based in Morocco, 
              specializing in creating exceptional experiences for corporate and private clients.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: '80px 0', background: '#fafafa' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
              <div>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '300',
                  color: '#1a1a1a',
                  marginBottom: '2rem',
                  letterSpacing: '0.5px'
                }}>
                  Our Story
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: '#666',
                  marginBottom: '2rem'
                }}>
                  Founded in 2008, BAHOOVA Events has established itself as a leading event management 
                  agency in Morocco. Our team of experienced professionals brings together creativity, 
                  precision, and local expertise to deliver unforgettable events.
                </p>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: '#666'
                }}>
                  From intimate gatherings to large-scale corporate events, we approach each project 
                  with the same level of dedication and attention to detail that has made us the 
                  preferred choice for discerning clients across Morocco and internationally.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop&crop=center"
                  alt="BAHOOVA Events Team"
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '300',
              color: '#1a1a1a',
              marginBottom: '1rem',
              letterSpacing: '0.5px'
            }}>
              Our Values
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              The principles that guide everything we do
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '40px' 
          }}>
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#f8f8f8',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                fontSize: '2rem'
              }}>
                ✨
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '400',
                color: '#1a1a1a',
                marginBottom: '16px'
              }}>
                Excellence
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#666'
              }}>
                We strive for perfection in every detail, ensuring that each event exceeds expectations 
                and creates lasting memories.
              </p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#f8f8f8',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                fontSize: '2rem'
              }}>
                🎨
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '400',
                color: '#1a1a1a',
                marginBottom: '16px'
              }}>
                Creativity
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#666'
              }}>
                We bring fresh ideas and innovative concepts to every project, creating unique 
                experiences that stand out from the ordinary.
              </p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#f8f8f8',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                fontSize: '2rem'
              }}>
                🤝
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '400',
                color: '#1a1a1a',
                marginBottom: '16px'
              }}>
                Partnership
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#666'
              }}>
                We work closely with our clients as trusted partners, understanding their vision 
                and bringing it to life with professionalism and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: '80px 0', background: '#fafafa' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '300',
              color: '#1a1a1a',
              marginBottom: '1rem',
              letterSpacing: '0.5px'
            }}>
              Our Team
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Meet the passionate professionals behind BAHOOVA Events
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '40px' 
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '200px',
                height: '200px',
                background: '#f0f0f0',
                borderRadius: '50%',
                margin: '0 auto 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem'
              }}>
                👨‍💼
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '400',
                color: '#1a1a1a',
                marginBottom: '8px'
              }}>
                Leadership Team
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#666'
              }}>
                Experienced professionals with decades of combined expertise in event management
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '200px',
                height: '200px',
                background: '#f0f0f0',
                borderRadius: '50%',
                margin: '0 auto 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem'
              }}>
                🎨
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '400',
                color: '#1a1a1a',
                marginBottom: '8px'
              }}>
                Creative Team
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#666'
              }}>
                Talented designers and creative minds who bring your vision to life
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '200px',
                height: '200px',
                background: '#f0f0f0',
                borderRadius: '50%',
                margin: '0 auto 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem'
              }}>
                ⚙️
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '400',
                color: '#1a1a1a',
                marginBottom: '8px'
              }}>
                Operations Team
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#666'
              }}>
                Dedicated professionals ensuring flawless execution of every event
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '300',
              color: '#1a1a1a',
              marginBottom: '2rem',
              letterSpacing: '0.5px'
            }}>
              Ready to work with us?
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Let's discuss your next event and create something extraordinary together.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="/contact"
                style={{
                  padding: '15px 30px',
                  background: 'transparent',
                  border: '1px solid #1a1a1a',
                  color: '#1a1a1a',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '400',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#1a1a1a';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#1a1a1a';
                }}
              >
                Get in Touch
              </a>
              <a 
                href="/portfolio"
                style={{
                  padding: '15px 30px',
                  background: '#1a1a1a',
                  border: '1px solid #1a1a1a',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '400',
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#1a1a1a';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#1a1a1a';
                  e.target.style.color = 'white';
                }}
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Agency;
