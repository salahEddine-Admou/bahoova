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
      
      {/* Hero Section - Delight Light Style */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: `url('https://delight-event.com/wp-content/uploads/2020/01/palazzo-reale-milan-2019-1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255, 255, 255, 0.7)',
          zIndex: 1
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{
              fontSize: '4rem',
              fontWeight: '300',
              color: '#333',
              marginBottom: '2rem',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
                  BAHOOVA Events
                </h1>
            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              marginBottom: '3rem',
              lineHeight: '1.6',
              fontWeight: '300'
            }}>
              L'agence événementielle de référence au Maroc.<br />
              Nous créons des événements exceptionnels qui marquent les esprits.
            </p>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link 
                to="/contact" 
                style={{
                  padding: '15px 30px',
                  background: 'transparent',
                  border: '2px solid #333',
                  color: '#333',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '300',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#333';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#333';
                }}
              >
                Contactez-nous
              </Link>
              <Link 
                to="/gallery" 
                style={{
                  padding: '15px 30px',
                  background: '#333',
                  border: '2px solid #333',
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '300',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#333';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#333';
                  e.target.style.color = 'white';
                }}
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Delight Light Style */}
      <section style={{ padding: '100px 0', background: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '300',
              color: '#333',
              marginBottom: '2rem',
              letterSpacing: '1px'
            }}>
              L'agence
            </h2>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#666',
              marginBottom: '3rem'
            }}>
              Basée à Casablanca, BAHOOVA Events est une agence événementielle spécialisée dans la conception et la production d'événements sur mesure pour des entreprises de renom ainsi que pour une large clientèle privée. Nous mettons tout notre savoir-faire à la disposition de nos clients pour réaliser des événements uniques et personnalisés.
            </p>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#666',
              marginBottom: '3rem'
            }}>
              La société a été créée en 2008 par une équipe d'experts, rompue à l'exigence de l'excellence en tant que responsable événementiel au sein d'organisations prestigieuses. Le maître mot de BAHOOVA Events est de faire de chaque événement un moment exceptionnel et sur-mesure.
            </p>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#666'
            }}>
              Fort d'une équipe dédiée et spécialisée regroupant tous les domaines de compétences nécessaires, l'agence englobe ainsi tout le savoir-faire indispensable au succès de chacun des projets qui lui est confié. BAHOOVA Events opère aujourd'hui sur le marché local au Maroc mais également à l'international.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section - Delight Light Style */}
      <section style={{ padding: '100px 0', background: '#fafafa' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '300',
              color: '#333',
              marginBottom: '1rem',
              letterSpacing: '1px'
            }}>
              Nos réalisations
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Découvrez quelques-unes de nos plus belles réalisations à travers une sélection d'événements exceptionnels.
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {[
              {
                image: 'https://delight-event.com/wp-content/uploads/2020/01/palazzo-reale-milan-2019-1.jpg',
                title: 'Palazzo Reale - Milan',
                category: 'Événement de Luxe'
              },
              {
                image: 'https://delight-event.com/wp-content/uploads/2020/01/office-nations-unies-geneve-2017-1.jpg',
                title: 'Office des Nations Unies - Genève',
                category: 'Événement International'
              },
              {
                image: 'https://delight-event.com/wp-content/uploads/2020/01/palais-bahia-marrakech-2019-1.jpg',
                title: 'Palais de la Bahia - Marrakech',
                category: 'Événement Maroc'
              },
              {
                image: 'https://delight-event.com/wp-content/uploads/2020/01/palais-el-badi-marrakech-2015-1.jpg',
                title: 'Palais El Badi - Marrakech',
                category: 'Événement Historique'
              },
              {
                image: 'https://delight-event.com/wp-content/uploads/2020/01/diner-haute-joaillerie-milan.jpg',
                title: 'Dîner Haute Joaillerie - Milan',
                category: 'Événement Prestige'
              },
              {
                image: 'https://delight-event.com/wp-content/uploads/2020/01/diner-presse-dior-marrakech.jpg',
                title: 'Dîner Presse Dior - Marrakech',
                category: 'Événement Mode'
              }
            ].map((item, index) => (
              <div 
                key={index}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  color: 'white',
                  padding: '2rem 1rem 1rem',
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
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
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
              to="/gallery"
              style={{
                padding: '15px 30px',
                background: 'transparent',
                border: '2px solid #333',
                color: '#333',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '500',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#333';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#333';
              }}
            >
              Voir toutes nos réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section - Delight Light Style */}
      <section style={{ padding: '100px 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '300',
              color: '#333',
              marginBottom: '1rem',
              letterSpacing: '1px'
            }}>
              Contact
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Prêt à donner vie à votre événement de rêve ? Notre équipe d'experts est là pour vous accompagner.
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '3rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#333',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem',
                color: 'white'
              }}>
                <Phone size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>
                Téléphone
              </h3>
              <p style={{ color: '#666', fontSize: '1.1rem' }}>
                {mockData.company.contact.phone}
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#333',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem',
                color: 'white'
              }}>
                <Mail size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>
                Email
              </h3>
              <p style={{ color: '#666', fontSize: '1.1rem' }}>
                {mockData.company.contact.email}
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#333',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem',
                color: 'white'
              }}>
                <MapPin size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>
                Adresse
              </h3>
              <p style={{ color: '#666', fontSize: '1.1rem' }}>
                {mockData.company.contact.address}
              </p>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link 
              to="/contact"
              style={{
                padding: '15px 30px',
                background: '#333',
                border: '2px solid #333',
                color: 'white',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '500',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#333';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#333';
                e.target.style.color = 'white';
              }}
            >
              Nous contacter
              </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;