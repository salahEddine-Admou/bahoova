import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Calendar, Coffee, Sparkles, Zap, Heart, Phone, Mail, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { mockData } from "../mock";
import AnimatedSlider from "./AnimatedSlider";
import ColorSwitcher from "./ColorSwitcher";
import AnimatedText from "./AnimatedText";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    {
      url: "/images/banner/1.png",
      title: "Événements d'Entreprise",
      description: "Conférences et séminaires professionnels"
    },
    {
      url: "/images/banner/2.png",
      title: "Mariages de Luxe",
      description: "Cérémonies d'exception et réceptions exclusives"
    },
    {
      url: "/images/banner/3.png",
      title: "Événements Culturels",
      description: "Festivals et célébrations artistiques"
    }
  ];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <main>
      
      {/* Structured Data for Local SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "BAHOOVA Events",
          "description": "Organisation événements Maroc - BAHOOVA Events, event management, planificateur d'événements, événementielle mariage, dîner gala, séminaire au Maroc",
          "url": "https://bahoovaevents.com",
          "telephone": "0662017389",
          "email": "contact@bahoova.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Avenue Mohammed V",
            "addressLocality": "Casablanca",
            "addressRegion": "Casablanca-Settat",
            "postalCode": "20000",
            "addressCountry": "MA"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "33.5731",
            "longitude": "-7.5898"
          },
          "openingHours": "Mo-Fr 08:00-18:00",
          "priceRange": "$$",
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": "33.5731",
              "longitude": "-7.5898"
            },
            "geoRadius": "500000"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services de Gestion d'Événements",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Organisation de Congrès",
                  "description": "Planification complète de congrès scientifiques et médicaux"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Forums de Recherche",
                  "description": "Organisation de forums académiques et colloques scientifiques"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Événements Corporate",
                  "description": "Gestion d'événements d'entreprise et lancements de produits"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Mariages & Cérémonies",
                  "description": "Organisation complète de mariages et cérémonies romantiques"
                }
              }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150"
          },
          "sameAs": [
            "https://www.facebook.com/share/16xRvhf7z8/",
            "https://www.instagram.com/bahoovaevents/",
            "https://www.linkedin.com/company/bahoovaevents"
          ]
        })}
      </script>
      
      {/* Hero Section - Image Carousel */}
      <section 
        className="hero-section"
        style={{
          height: '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        {/* Background Images Carousel */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}>
          {heroImages.map((image, index) => (
            <img 
              key={index}
              src={image.url}
              alt={image.title}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: index === currentImageIndex ? 1 : 0,
                transition: 'opacity 1s ease-in-out'
              }}
              onError={(e) => {
                const fallbackImages = [
                  '/images/banner/1.png',
                  '/images/banner/2.png',
                  '/images/banner/3.png'
                ];
                const randomFallback = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
                e.target.src = randomFallback;
              }}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          style={{
            position: 'absolute',
            left: '30px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            cursor: 'pointer',
            zIndex: 3,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.2)';
          }}
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextImage}
          style={{
            position: 'absolute',
            right: '30px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            cursor: 'pointer',
            zIndex: 3,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.2)';
          }}
        >
          <ChevronRight size={24} />
        </button>

        {/* Image Indicators */}
        <div style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '10px',
          zIndex: 3
        }}>
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: index === currentImageIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
        
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1
        }}></div>
        
        {/* Content */}
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: '300',
              color: 'white',
              marginBottom: '2rem',
              letterSpacing: '1px',
              textTransform: 'none'
            }}>
              BAHOOVA Events
            </h1>
              <p style={{
                fontSize: '1.3rem',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '3rem',
                lineHeight: '1.6',
                fontWeight: '300'
              }}>
                L'éphémère transformé en mémorable
              </p>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link 
                to="/contact" 
                style={{
                  padding: '15px 30px',
                  background: 'transparent',
                  border: '1px solid white',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '400',
                  letterSpacing: '0.5px',
                  textTransform: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'white';
                  e.target.style.color = '#1a1a1a';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = 'white';
                }}
              >
                Nous Contacter
              </Link>
              <Link 
                to="/gallery" 
                style={{
                  padding: '15px 30px',
                  background: 'white',
                  border: '1px solid white',
                  color: '#1a1a1a',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '400',
                  letterSpacing: '0.5px',
                  textTransform: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'white';
                  e.target.style.color = '#1a1a1a';
                }}
              >
                Voir Notre Galerie
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Delight Event Style */}
      <section style={{ padding: '120px 0', background: 'white' }}>
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
                  À Propos de Nous
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: '#666',
                  marginBottom: '2rem'
                }}>
                  Basée à Casablanca, BAHOOVA Events est une agence de gestion d'événements à service complet 
                  spécialisée dans la création d'expériences exceptionnelles pour les clients corporatifs et privés 
                  au Maroc et à l'international.
                </p>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: '#666'
                }}>
                  Fondée en 2008 par une équipe de professionnels expérimentés, nous allions 
                  créativité, précision et expertise locale pour livrer des événements inoubliables 
                  qui dépassent les attentes.
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
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1519167758481-83f1426e4b3e?w=600&h=400&fit=crop&crop=center';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section - Delight Event Style */}
      <section style={{ padding: '120px 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '300',
              color: '#1a1a1a',
              marginBottom: '1rem',
              letterSpacing: '0.5px'
            }}>
              Contact
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Prêt à donner vie à votre vision ? Notre équipe d'experts est là pour vous aider à créer 
              un événement inoubliable.
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '40px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#f8f8f8',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem',
                color: '#1a1a1a'
              }}>
                <Phone size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#1a1a1a', fontWeight: '400' }}>
                Téléphone
              </h3>
              <p style={{ color: '#666', fontSize: '1rem' }}>
                {mockData.company.contact.phone}
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#f8f8f8',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem',
                color: '#1a1a1a'
              }}>
                <Mail size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#1a1a1a', fontWeight: '400' }}>
                Email
              </h3>
              <p style={{ color: '#666', fontSize: '1rem' }}>
                {mockData.company.contact.email}
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#f8f8f8',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem',
                color: '#1a1a1a'
              }}>
                <MapPin size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#1a1a1a', fontWeight: '400' }}>
                Adresse
              </h3>
              <p style={{ color: '#666', fontSize: '1rem' }}>
                {mockData.company.contact.address}
              </p>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link 
              to="/contact"
              style={{
                padding: '15px 30px',
                background: '#1a1a1a',
                border: '1px solid #1a1a1a',
                color: 'white',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '400',
                letterSpacing: '0.5px',
                textTransform: 'none',
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
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;