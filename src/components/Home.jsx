import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Calendar, Coffee, Sparkles, Zap, Heart } from "lucide-react";
import { mockData } from "../mock";
import AnimatedSlider from "./AnimatedSlider";
import ColorSwitcher from "./ColorSwitcher";
import FloatingElements from "./FloatingElements";
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
      <FloatingElements />
      
      {/* Structured Data for Local SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "BAHOOVA Events",
          "description": "Expert gestion événements Maroc - BAHOOVA Events, organisation de congrès, forums, séminaires, réunions d'entreprises et dîners de gala au Maroc",
          "url": "https://bahoovaevents.com",
          "telephone": "+212-662-017-389",
          "email": "bahoovaevents@gmail.com",
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
                  "name": "Séminaires d'Entreprise",
                  "description": "Organisation de séminaires et réunions d'entreprises professionnelles"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Dîners de Gala",
                  "description": "Organisation de dîners de gala et événements prestigieux"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Événements Corporate",
                  "description": "Gestion d'événements d'entreprise et lancements de produits"
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
            "https://www.facebook.com/bahoovaevents",
            "https://www.instagram.com/bahoovaevents",
            "https://www.linkedin.com/company/bahoovaevents"
          ]
        })}
      </script>
      
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{
          backgroundImage: `url('${mockData.heroImages.main}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-overlay"></div>
        <ColorSwitcher className="hero-color-switcher">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text-container">
                <h1 className="hero-title">
                  Expert Gestion Événements Maroc - BAHOOVA Events
                </h1>
                <p className="hero-description">
                  <strong>Expert gestion événements Maroc</strong> - BAHOOVA Events est votre partenaire de confiance pour l'organisation d'événements, congrès, forums, séminaires, réunions d'entreprises et dîners de gala au Maroc. Planification complète, technologies avancées, 15 ans d'expérience dans l'événementiel professionnel.
                </p>
                <div className="hero-actions">
                  <Link to="/contact" className="btn-primary creative-btn">
                    <Sparkles size={20} />
                    Planifier un événement
                    <Zap size={16} />
                  </Link>
                  <Link to="/services" className="btn-secondary creative-btn">
                    Voir nos services
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ColorSwitcher>
      </section>

      {/* Core Values Section */}
      <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2 className="heading-1">Expert Gestion Événements Maroc - Notre Expertise</h2>
            <p className="body-large" style={{ marginTop: "16px", color: "var(--text-secondary)" }}>
              Spécialistes de l'organisation d'événements, congrès, forums, séminaires, réunions d'entreprises et dîners de gala au Maroc
            </p>
          </div>
          
          <div className="grid-product-showcase">
            {mockData.coreValues.map((value, index) => (
              <div key={index} className="service-card hover-lift">
                <div style={{ padding: "32px 24px", textAlign: "center" }}>
                  <div style={{ 
                    width: "60px", 
                    height: "60px", 
                    background: "var(--bg-primary)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                    border: "1px solid var(--border-light)"
                  }}>
                    {index === 0 && <Award size={24} color="var(--text-primary)" />}
                    {index === 1 && <Users size={24} color="var(--text-primary)" />}
                    {index === 2 && <Calendar size={24} color="var(--text-primary)" />}
                    {index === 3 && <Coffee size={24} color="var(--text-primary)" />}
                  </div>
                  <h3 className="heading-3" style={{ marginBottom: "16px" }}>
                    {value.title}
                  </h3>
                  <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding-small">
        <div className="container">
          <div className="grid-two-column">
            <div>
              <h2 className="hero-medium" style={{ marginBottom: "24px" }}>
                Une expertise reconnue
              </h2>
              <p className="body-large" style={{ color: "var(--text-secondary)", marginBottom: "32px" }}>
                {mockData.company.vision}
              </p>
              <Link to="/about" className="btn-icon">
                En savoir plus sur nous
                <ArrowRight size={16} />
              </Link>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
              <div style={{ textAlign: "center" }}>
                <div className="hero-medium" style={{ color: "var(--interactive-base)", marginBottom: "8px" }}>
                  15+
                </div>
                <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                  Années d'expérience
                </p>
              </div>
              
              <div style={{ textAlign: "center" }}>
                <div className="hero-medium" style={{ color: "var(--interactive-base)", marginBottom: "8px" }}>
                  350+
                </div>
                <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                  Employés dédiés
                </p>
              </div>
              
              <div style={{ textAlign: "center" }}>
                <div className="hero-medium" style={{ color: "var(--interactive-base)", marginBottom: "8px" }}>
                  25+
                </div>
                <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                  Événements par an
                </p>
              </div>
              
              <div style={{ textAlign: "center" }}>
                <div className="hero-medium" style={{ color: "var(--interactive-base)", marginBottom: "8px" }}>
                  720+
                </div>
                <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                  Services par jour
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2 className="heading-1">Expert Gestion Événements Maroc - Nos Services</h2>
            <p className="body-large" style={{ marginTop: "16px", color: "var(--text-secondary)" }}>
              Organisation complète de congrès, forums, séminaires, réunions d'entreprises, dîners de gala et événements scientifiques avec technologies avancées
            </p>
          </div>
          
          <div className="grid-product-showcase">
            {mockData.services.slice(0, 4).map((service, index) => (
              <div key={index} className="service-card hover-lift">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="service-card-image"
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&crop=center&t=${Date.now()}`;
                  }}
                  loading="lazy"
                />
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link to="/services" className="btn-primary">
              Découvrir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding-small" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="heading-1" style={{ 
              background: "linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "gradientShift 3s ease-in-out infinite"
            }}>
              Témoignages clients
            </h2>
            <p className="body-large" style={{ 
              marginTop: "16px", 
              color: "var(--text-secondary)",
              fontSize: "1.2rem",
              fontWeight: "500"
            }}>
              Ce que disent nos clients de leur expérience BAHOOVA
            </p>
          </div>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", 
            gap: "32px",
            maxWidth: "1200px",
            margin: "0 auto"
          }}>
            {mockData.testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="fade-in"
                style={{ 
                  padding: "40px 32px", 
                  background: "white", 
                  border: "1px solid var(--border-light)",
                  borderRadius: "16px",
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-10px)";
                  e.target.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
                }}
              >
                {/* Quote Icon */}
                <div style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  fontSize: "2rem",
                  color: "var(--interactive-base)",
                  opacity: 0.3
                }}>
                  "
                </div>
                
                {/* Profile Image */}
                <div style={{ position: "relative", marginBottom: "24px" }}>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    style={{ 
                      width: "100px", 
                      height: "100px", 
                      borderRadius: "50%", 
                      objectFit: "cover",
                      border: "4px solid var(--interactive-base)",
                      boxShadow: "0 8px 25px rgba(102, 126, 234, 0.3)"
                    }}
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&t=${Date.now()}`;
                    }}
                    loading="lazy"
                  />
                  {/* Decorative Ring */}
                  <div style={{
                    position: "absolute",
                    top: "-8px",
                    left: "-8px",
                    right: "-8px",
                    bottom: "-8px",
                    border: "2px solid var(--interactive-base)",
                    borderRadius: "50%",
                    opacity: 0.3,
                    animation: "rotate 10s linear infinite"
                  }} />
                </div>
                
                {/* Testimonial Text */}
                <p className="body-regular" style={{ 
                  color: "var(--text-primary)", 
                  marginBottom: "24px",
                  fontStyle: "italic",
                  fontSize: "1.1rem",
                  lineHeight: "1.6"
                }}>
                  "{testimonial.text}"
                </p>
                
                {/* Author Info */}
                <div>
                  <h4 className="heading-3" style={{ 
                    marginBottom: "4px",
                    color: "var(--text-primary)",
                    fontWeight: "700"
                  }}>
                    {testimonial.name}
                  </h4>
                  <p className="body-small" style={{ 
                    color: "var(--interactive-base)",
                    fontWeight: "500"
                  }}>
                    {testimonial.role}
                  </p>
                </div>
                
                {/* Decorative Bottom Border */}
                <div style={{
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60px",
                  height: "4px",
                  background: "linear-gradient(45deg, #667eea, #764ba2)",
                  borderRadius: "2px"
                }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-small">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
            <h2 className="hero-medium" style={{ marginBottom: "24px" }}>
              Prêt à créer votre événement de rêve ?
            </h2>
            <p className="body-large" style={{ color: "var(--text-secondary)", marginBottom: "32px" }}>
              Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons le transformer en réalité.
            </p>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/contact" className="btn-primary">
                Planifiez votre événement
              </Link>
              <Link to="/gallery" className="btn-secondary">
                Voir notre galerie
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;