import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Calendar, Coffee, Sparkles, Zap, Heart, Phone, Mail, MapPin } from "lucide-react";
import { mockData } from "../mock";
import AnimatedSlider from "./AnimatedSlider";
import ColorSwitcher from "./ColorSwitcher";
import AnimatedText from "./AnimatedText";

const Home = () => {
  const heroImages = [
    {
      url: mockData.heroImages.main,
      title: "Gestion d'Événements Créative",
      description: "Transformez vos idées en expériences inoubliables"
    },
    {
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop&crop=center",
      title: "Conférences & Congrès",
      description: "Organisation professionnelle de vos événements scientifiques"
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop&crop=center",
      title: "Événements Sportifs",
      description: "Compétitions et tournois avec équipements de pointe"
    },
    {
      url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop&crop=center",
      title: "Sonorisation & Éclairage",
      description: "Technologies avancées pour des événements exceptionnels"
    }
  ];

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
      
      {/* Hero Section - Delight Event Style */}
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
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1080&fit=crop&crop=center"
          alt="Modern Conference Hall"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1519167758481-83f1426e4b3e?w=1920&h=1080&fit=crop&crop=center';
          }}
        />
        
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
              Créer des événements exceptionnels qui inspirent et enchantent.<br />
              Votre vision, notre expertise, des expériences inoubliables.
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
                to="/portfolio" 
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
                Voir Nos Réalisations
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

      {/* Portfolio Preview Section - Delight Event Style */}
      <section style={{ padding: '120px 0', background: '#fafafa' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '300',
              color: '#1a1a1a',
              marginBottom: '1rem',
              letterSpacing: '0.5px'
            }}>
              Nos Réalisations
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Découvrez quelques-uns de nos événements les plus exceptionnels et voyez comment nous donnons vie aux visions.
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '40px',
            marginBottom: '60px'
          }}>
            {[
              {
                image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop&crop=center',
                title: 'Mariage de Luxe - Milan',
                category: 'Événement de Luxe'
              },
              {
                image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&crop=center',
                title: 'Conférence Internationale - Genève',
                category: 'Événement Corporate'
              },
              {
                image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center',
                title: 'Événement Culturel - Marrakech',
                category: 'Événement Culturel'
              },
              {
                image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&crop=center',
                title: 'Défilé de Mode - Paris',
                category: 'Événement Mode'
              },
              {
                image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop&crop=center',
                title: 'Gala Corporate - New York',
                category: 'Événement Corporate'
              },
              {
                image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop&crop=center',
                title: 'Lancement Produit - Londres',
                category: 'Lancement Produit'
              }
            ].map((item, index) => (
              <div 
                key={index}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  onError={(e) => {
                    // Fallback to a different image if the original fails
                    const fallbackImages = [
                      'https://images.unsplash.com/photo-1519167758481-83f1426e4b3e?w=600&h=400&fit=crop&crop=center',
                      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&crop=center',
                      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center'
                    ];
                    const randomFallback = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
                    e.target.src = randomFallback;
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  color: 'white',
                  padding: '30px 20px 20px',
                  transform: 'translateY(100%)',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(0)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(100%)';
                }}
                >
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', fontWeight: '400' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <Link 
              to="/portfolio"
              style={{
                padding: '15px 30px',
                background: 'transparent',
                border: '1px solid #1a1a1a',
                color: '#1a1a1a',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '400',
                letterSpacing: '0.5px',
                textTransform: 'none',
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
              Voir Tous les Projets
            </Link>
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