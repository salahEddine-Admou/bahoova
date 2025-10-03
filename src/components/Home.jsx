import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Calendar, Coffee, Sparkles, Zap, Heart } from "lucide-react";
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
          "email": "amina.bahou@bahoova.com",
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
                <h1 className="hero-title" style={{ color: "white" }}>
                  Gestion Événements Maroc<br />
                  BAHOOVA Events
                </h1>
                <p className="hero-description">
                  <strong>Spécialiste gestion événements Maroc</strong> - BAHOOVA Events est votre partenaire de confiance pour l'organisation d'événements, congrès, forums, séminaires, réunions d'entreprises, dîners de gala et mariages au Maroc. Notre savoir-faire en gestion d'événements au Maroc couvre tous les secteurs : congrès scientifiques, forums de recherche, séminaires d'entreprises, dîners de gala, événements corporate et mariages de luxe. Planification complète, technologies avancées, 15 ans d'expérience dans l'événementiel professionnel au Maroc.
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
            <h2 className="heading-1">Gestion Événements Maroc - Notre Savoir-Faire Événementiel</h2>
            <p className="body-large" style={{ marginTop: "16px", color: "var(--text-secondary)" }}>
              <strong>Spécialiste gestion événements Maroc</strong> - BAHOOVA Events est le leader de l'organisation d'événements au Maroc. Notre savoir-faire événementiel couvre congrès, forums, séminaires, réunions d'entreprises et dîners de gala. Depuis 15 ans, nous sommes votre partenaire de confiance en gestion d'événements au Maroc, offrant des solutions sur mesure pour tous vos besoins événementiels.
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
                    {value.description}. Notre savoir-faire en gestion d'événements au Maroc garantit la réussite de vos projets événementiels.
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
                Gestion Événements Maroc - Une Expérience Reconnue
              </h2>
              <p className="body-large" style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>
                {mockData.company.vision}
              </p>
              <p className="body-regular" style={{ color: "var(--text-secondary)", marginBottom: "32px" }}>
                En tant que <strong>spécialiste gestion événements Maroc</strong>, BAHOOVA Events a développé un savoir-faire unique dans l'organisation d'événements au Maroc. Notre connaissance approfondie du marché local, de la culture marocaine et des spécificités régionales nous permet d'offrir des solutions événementielles parfaitement adaptées. Que ce soit pour des congrès scientifiques à Casablanca, des forums de recherche à Rabat, ou des séminaires d'entreprises à Marrakech, notre expérience événementielle au Maroc garantit le succès de vos événements.
              </p>
              <Link to="/about" className="btn-icon">
                En savoir plus sur notre expertise
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
            <h2 className="heading-1">Gestion Événements Maroc - Nos Services Événementiels</h2>
            <p className="body-large" style={{ marginTop: "16px", color: "var(--text-secondary)" }}>
              En tant que <strong>spécialiste gestion événements Maroc</strong>, BAHOOVA Events propose une organisation complète de congrès, forums, séminaires, réunions d'entreprises et événements professionnels. Notre savoir-faire événementiel au Maroc s'appuie sur des technologies avancées et une équipe de 350 professionnels dédiés à la réussite de vos événements.
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
            <h2 className="heading-1" style={{ color: "#333333" }}>
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

      {/* Pourquoi Choisir BAHOOVA Events - Expert Maroc */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2 className="heading-1">Pourquoi Choisir BAHOOVA Events - Spécialiste Gestion Événements Maroc ?</h2>
            <p className="body-large" style={{ marginTop: "16px", color: "var(--text-secondary)" }}>
              Découvrez les avantages de faire appel à notre savoir-faire événementiel au Maroc
            </p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px", marginBottom: "60px" }}>
            <div style={{ padding: "32px 24px", textAlign: "center", border: "1px solid var(--border-light)", borderRadius: "12px" }}>
              <h3 className="heading-3" style={{ marginBottom: "16px" }}>Expertise Locale Maroc</h3>
              <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                Notre <strong>expert gestion événements Maroc</strong> maîtrise parfaitement le marché local, les réglementations marocaines et les spécificités culturelles. Cette expertise locale garantit des événements parfaitement adaptés au contexte marocain.
              </p>
            </div>
            
            <div style={{ padding: "32px 24px", textAlign: "center", border: "1px solid var(--border-light)", borderRadius: "12px" }}>
              <h3 className="heading-3" style={{ marginBottom: "16px" }}>Réseau de Partenaires Maroc</h3>
              <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                En tant qu'<strong>expert gestion événements Maroc</strong>, nous disposons d'un réseau étendu de partenaires locaux : lieux, traiteurs, techniciens, artistes. Cette collaboration nous permet d'offrir des services de qualité supérieure.
              </p>
            </div>
            
            <div style={{ padding: "32px 24px", textAlign: "center", border: "1px solid var(--border-light)", borderRadius: "12px" }}>
              <h3 className="heading-3" style={{ marginBottom: "16px" }}>Technologies Avancées</h3>
              <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                Notre <strong>expertise événementielle au Maroc</strong> s'appuie sur les dernières technologies : sonorisation professionnelle, éclairage LED, écrans géants, live streaming. Nous garantissons des événements modernes et technologiquement avancés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-small">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
            <h2 className="hero-medium" style={{ marginBottom: "24px" }}>
              Prêt à créer votre événement de rêve au Maroc ?
            </h2>
            <p className="body-large" style={{ color: "var(--text-secondary)", marginBottom: "32px" }}>
              Contactez notre <strong>expert gestion événements Maroc</strong> dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons le transformer en réalité. Devis gratuit et conseil personnalisé.
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