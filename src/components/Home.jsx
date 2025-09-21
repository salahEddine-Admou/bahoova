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
                  {mockData.company.tagline}
                </h1>
                <p className="hero-description">
                  {mockData.company.intro}
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
            <h2 className="heading-1">Nos valeurs fondamentales</h2>
            <p className="body-large" style={{ marginTop: "16px", color: "var(--text-secondary)" }}>
              Ce qui nous distingue dans l'organisation d'événements exceptionnels
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
            <h2 className="heading-1">Nos services d'exception</h2>
            <p className="body-large" style={{ marginTop: "16px", color: "var(--text-secondary)" }}>
              De la conception à la réalisation, nous créons des événements inoubliables
            </p>
          </div>
          
          <div className="grid-product-showcase">
            {mockData.services.slice(0, 4).map((service, index) => (
              <div key={index} className="service-card hover-lift">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="service-card-image"
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
      <section className="section-padding-small">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="heading-1">Témoignages clients</h2>
            <p className="body-large" style={{ marginTop: "16px", color: "var(--text-secondary)" }}>
              Ce que disent nos clients de leur expérience BAHOOVA
            </p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
            {mockData.testimonials.map((testimonial, index) => (
              <div key={index} style={{ 
                padding: "32px 24px", 
                background: "var(--bg-secondary)", 
                border: "1px solid var(--border-light)",
                textAlign: "center"
              }}>
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  style={{ 
                    width: "80px", 
                    height: "80px", 
                    borderRadius: "50%", 
                    objectFit: "cover",
                    marginBottom: "20px",
                    border: "3px solid var(--bg-primary)"
                  }}
                />
                <p className="body-regular" style={{ 
                  color: "var(--text-primary)", 
                  marginBottom: "20px",
                  fontStyle: "italic"
                }}>
                  "{testimonial.text}"
                </p>
                <h4 className="heading-3" style={{ marginBottom: "4px" }}>
                  {testimonial.name}
                </h4>
                <p className="body-small" style={{ color: "var(--text-secondary)" }}>
                  {testimonial.role}
                </p>
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