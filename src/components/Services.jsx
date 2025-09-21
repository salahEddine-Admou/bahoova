import React from "react";
import { ArrowRight, Heart, Building, Users, Palette, Target, Plane, Star, Wifi, Coffee, Car, Gift, MapPin, Phone, Monitor, Handshake, BookOpen, Rocket, Network, Globe, Settings, Award, BarChart, Leaf, Sparkles, Zap } from "lucide-react";
import { mockData } from "../mock";
import AnimatedSlider from "./AnimatedSlider";
import ColorSwitcher from "./ColorSwitcher";
import AnimatedText from "./AnimatedText";
import FloatingElements from "./FloatingElements";

const Services = () => {
  const serviceFeatures = [
    {
      icon: <Heart size={24} />,
      title: "Expertise reconnue",
      description: "Plus de 10 ans d'expérience dans l'organisation d'événements d'exception"
    },
    {
      icon: <Palette size={24} />,
      title: "Créativité unique",
      description: "Des concepts innovants et personnalisés pour chaque événement"
    },
    {
      icon: <Building size={24} />,
      title: "Gestion complète",
      description: "De la conception à l'exécution, nous gérons tous les aspects"
    },
    {
      icon: <Users size={24} />,
      title: "Partenaires fiables",
      description: "Un réseau de prestataires de qualité pour garantir l'excellence"
    }
  ];

  return (
    <main>
      <FloatingElements />
      {/* Hero Section */}
      <section className="section-padding">
        <ColorSwitcher>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}>
              <AnimatedText 
                text="Planification d'événements"
                type="gradient"
                className="hero-large"
                style={{ 
                  marginBottom: "32px",
                  display: "block",
                  fontSize: "3rem",
                  fontWeight: "700"
                }}
              />
              <div 
                className="fade-in"
                style={{ 
                  color: "#4a90e2", 
                  fontSize: "1.25rem",
                  lineHeight: "1.6",
                  marginBottom: "32px",
                  padding: "20px",
                  backgroundColor: "rgba(74, 144, 226, 0.1)",
                  borderRadius: "12px",
                  border: "2px solid rgba(74, 144, 226, 0.2)",
                  animation: "fadeIn 1s ease-in-out 0.5s both"
                }}
              >
                De la conception créative à l'exécution parfaite, nous transformons vos idées en événements mémorables. Notre expertise couvre tous les types d'événements, du mariage intime au gala corporatif.
              </div>
            </div>
          </div>
        </ColorSwitcher>
      </section>

      {/* Animated Service Images Slider */}
      <section className="section-padding" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div className="creative-header">
            <AnimatedText 
              text="Nos Services en Action"
              type="bounce"
              className="heading-1"
            />
            <p className="body-large" style={{ marginTop: "16px", color: "var(--text-secondary)" }}>
              Découvrez nos réalisations créatives et innovantes
            </p>
          </div>
          
          <AnimatedSlider 
            images={mockData.services.map(service => ({
              url: service.image,
              title: service.title,
              description: service.description
            }))}
            autoPlay={true}
            interval={3000}
            className="services-slider"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding-small" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="heading-1">Nos services d'exception</h2>
            <p className="body-large" style={{ marginTop: "16px", color: "var(--text-secondary)" }}>
              Une gamme complète de services pour tous vos événements
            </p>
          </div>
          
          <div className="grid-product-showcase">
            {mockData.services.map((service, index) => (
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
                <div style={{ padding: "24px" }}>
                  <h3 className="service-card-title" style={{ padding: 0, marginBottom: "12px" }}>
                    {service.title}
                  </h3>
                  <p className="service-card-description" style={{ padding: 0, marginBottom: "16px" }}>
                    {service.description}
                  </p>
                  <button className="btn-icon" style={{ padding: 0 }}>
                    En savoir plus
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-two-column">
            <div>
              <h2 className="hero-medium" style={{ marginBottom: "24px" }}>
                Notre processus d'excellence
              </h2>
              <p className="body-large" style={{ color: "var(--text-secondary)", marginBottom: "32px" }}>
                Une approche structurée et personnalisée pour garantir le succès de chaque événement.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div>
                  <h3 className="heading-3" style={{ marginBottom: "8px" }}>
                    1. Consultation initiale
                  </h3>
                  <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                    Compréhension de vos besoins, objectifs et vision de l'événement
                  </p>
                </div>
                
                <div>
                  <h3 className="heading-3" style={{ marginBottom: "8px" }}>
                    2. Conception créative
                  </h3>
                  <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                    Développement du concept, design et planification détaillée
                  </p>
                </div>
                
                <div>
                  <h3 className="heading-3" style={{ marginBottom: "8px" }}>
                    3. Coordination & gestion
                  </h3>
                  <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                    Gestion des prestataires, logistique et suivi du projet
                  </p>
                </div>
                
                <div>
                  <h3 className="heading-3" style={{ marginBottom: "8px" }}>
                    4. Exécution parfaite
                  </h3>
                  <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                    Supervision complète le jour J pour un événement sans faille
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src={mockData.heroImages.services}
                alt="Processus de planification"
                style={{ 
                  width: "100%", 
                  height: "500px", 
                  objectFit: "cover",
                  border: "1px solid var(--border-light)"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding-small" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="heading-1">Pourquoi choisir BAHOOVA Events ?</h2>
            <p className="body-large" style={{ marginTop: "16px", color: "var(--text-secondary)" }}>
              Les atouts qui font notre différence
            </p>
          </div>
          
          <div className="grid-product-showcase">
            {serviceFeatures.map((feature, index) => (
              <div key={index} className="service-card hover-lift" style={{ textAlign: "center", padding: "40px 24px" }}>
                <div style={{ 
                  width: "60px", 
                  height: "60px", 
                  background: "var(--bg-primary)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  border: "1px solid var(--border-light)",
                  color: "var(--text-primary)"
                }}>
                  {feature.icon}
                </div>
                <h3 className="heading-3" style={{ marginBottom: "16px" }}>
                  {feature.title}
                </h3>
                <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="heading-1">Services complémentaires</h2>
            <p className="body-large" style={{ marginTop: "16px", color: "var(--text-secondary)" }}>
              Une offre complète pour tous vos besoins événementiels
            </p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "32px" }}>
            <div style={{ padding: "24px", border: "1px solid var(--border-light)", textAlign: "center" }}>
              <h3 className="heading-3" style={{ marginBottom: "16px" }}>
                Sélection de menus
              </h3>
              <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                Partenariats avec les meilleurs traiteurs pour une expérience gastronomique d'exception
              </p>
            </div>
            
            <div style={{ padding: "24px", border: "1px solid var(--border-light)", textAlign: "center" }}>
              <h3 className="heading-3" style={{ marginBottom: "16px" }}>
                Réservation de lieux
              </h3>
              <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                Accès à un réseau exclusif de venues prestigieuses adaptées à votre événement
              </p>
            </div>
            
            <div style={{ padding: "24px", border: "1px solid var(--border-light)", textAlign: "center" }}>
              <h3 className="heading-3" style={{ marginBottom: "16px" }}>
                Décoration & design
              </h3>
              <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                Conception et réalisation de décors sur mesure pour sublimer vos espaces
              </p>
            </div>
            
            <div style={{ padding: "24px", border: "1px solid var(--border-light)", textAlign: "center" }}>
              <h3 className="heading-3" style={{ marginBottom: "16px" }}>
                Gestion technique
              </h3>
              <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                Sonorisation, éclairage, audiovisuel et toute la logistique technique
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-small" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
            <h2 className="hero-medium" style={{ marginBottom: "24px" }}>
              Prêt à planifier votre événement ?
            </h2>
            <p className="body-large" style={{ color: "var(--text-secondary)", marginBottom: "32px" }}>
              Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons donner vie à vos idées.
            </p>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/contact" className="btn-primary">
                Demander un devis
              </a>
              <a href="/gallery" className="btn-secondary">
                Voir nos réalisations
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Packs Entreprise Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2 className="hero-medium" style={{ marginBottom: "24px" }}>
              Nos Packs Entreprise
            </h2>
            <p className="body-large" style={{ color: "var(--text-secondary)", marginBottom: "16px" }}>
              Offrez à votre équipe une expérience sur mesure
            </p>
            <p className="body-regular" style={{ color: "var(--text-secondary)", maxWidth: "800px", margin: "0 auto" }}>
              Chez BAHOOVA Events nous accompagnons les entreprises dans l'organisation de leurs événements 
              professionnels au Maroc, en vous proposant des packs tout compris adaptés à vos besoins, 
              que vous soyez basé au Maroc ou à l'étranger.
            </p>
          </div>

          {/* Pack Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "40px", marginBottom: "80px" }}>
            
            {/* Pack Essentiel */}
            <div style={{ 
              background: "var(--bg-primary)", 
              border: "2px solid var(--border-light)", 
              padding: "40px 32px",
              position: "relative"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ 
                  width: "48px", 
                  height: "48px", 
                  background: "var(--bg-secondary)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid var(--border-light)"
                }}>
                  <Target size={24} color="var(--text-primary)" />
                </div>
                <div>
                  <h3 className="heading-2" style={{ marginBottom: "4px" }}>
                    Pack Essentiel
                  </h3>
                  <p className="body-small" style={{ color: "var(--text-secondary)" }}>
                    L'efficacité avant tout
                  </p>
                </div>
              </div>
              
              <p className="body-regular" style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>
                Organisez vos réunions et séminaires en toute simplicité.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Wifi size={16} color="var(--text-primary)" />
                  <span className="body-regular">Salle équipée (Wi-Fi, projecteur, sonorisation)</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Coffee size={16} color="var(--text-primary)" />
                  <span className="body-regular">Pause-café & déjeuner sur place</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Users size={16} color="var(--text-primary)" />
                  <span className="body-regular">Accueil personnalisé & coordination logistique</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Heart size={16} color="var(--text-primary)" />
                  <span className="body-regular">Accompagnement professionnel</span>
                </div>
              </div>
              
              <div style={{ 
                background: "var(--bg-secondary)", 
                padding: "16px", 
                marginBottom: "24px",
                border: "1px solid var(--border-light)"
              }}>
                <p className="body-small" style={{ color: "var(--text-primary)" }}>
                  👉 Parfait pour les réunions d'équipe, les formations et les sessions de travail locales.
                </p>
              </div>
            </div>

            {/* Pack Business */}
            <div style={{ 
              background: "var(--bg-primary)", 
              border: "2px solid var(--interactive-base)", 
              padding: "40px 32px",
              position: "relative"
            }}>
              <div style={{ 
                position: "absolute", 
                top: "-1px", 
                right: "20px", 
                background: "var(--interactive-base)", 
                color: "var(--bg-primary)", 
                padding: "4px 12px", 
                fontSize: "12px",
                fontWeight: "600"
              }}>
                POPULAIRE
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ 
                  width: "48px", 
                  height: "48px", 
                  background: "var(--interactive-base)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <Plane size={24} color="var(--bg-primary)" />
                </div>
                <div>
                  <h3 className="heading-2" style={{ marginBottom: "4px" }}>
                    Pack Business
                  </h3>
                  <p className="body-small" style={{ color: "var(--text-secondary)" }}>
                    L'expérience complète
                  </p>
                </div>
              </div>
              
              <p className="body-regular" style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>
                Une formule pensée pour les entreprises souhaitant combiner efficacité et confort.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Target size={16} color="var(--text-primary)" />
                  <span className="body-regular">Tous les services du Pack Essentiel</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Plane size={16} color="var(--text-primary)" />
                  <span className="body-regular">Transferts aéroport A/R</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Building size={16} color="var(--text-primary)" />
                  <span className="body-regular">Hébergement 2 ou 3 nuits en hôtel 4★</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Coffee size={16} color="var(--text-primary)" />
                  <span className="body-regular">Dîners organisés dans des restaurants partenaires</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Users size={16} color="var(--text-primary)" />
                  <span className="body-regular">Gestion des inscriptions & assistance sur place</span>
                </div>
              </div>
              
              <div style={{ 
                background: "var(--bg-secondary)", 
                padding: "16px", 
                marginBottom: "24px",
                border: "1px solid var(--border-light)"
              }}>
                <p className="body-small" style={{ color: "var(--text-primary)" }}>
                  👉 Idéal pour les entreprises internationales ou les séminaires régionaux.
                </p>
              </div>
            </div>

            {/* Pack Prestige */}
            <div style={{ 
              background: "var(--bg-primary)", 
              border: "2px solid var(--border-light)", 
              padding: "40px 32px",
              position: "relative"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <div style={{ 
                  width: "48px", 
                  height: "48px", 
                  background: "linear-gradient(135deg, #FFD700, #FFA500)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <Star size={24} color="white" />
                </div>
                <div>
                  <h3 className="heading-2" style={{ marginBottom: "4px" }}>
                    Pack Prestige
                  </h3>
                  <p className="body-small" style={{ color: "var(--text-secondary)" }}>
                    L'excellence au service de vos événements
                  </p>
                </div>
              </div>
              
              <p className="body-regular" style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>
                Un accompagnement haut de gamme pour marquer les esprits.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Plane size={16} color="var(--text-primary)" />
                  <span className="body-regular">Tous les services du Pack Business</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Star size={16} color="var(--text-primary)" />
                  <span className="body-regular">Hébergement 5★ & accueil VIP</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Car size={16} color="var(--text-primary)" />
                  <span className="body-regular">Transport privé durant tout le séjour</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Users size={16} color="var(--text-primary)" />
                  <span className="body-regular">Activités team building exclusives (quad, escape game, cuisine, etc.)</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Palette size={16} color="var(--text-primary)" />
                  <span className="body-regular">Dîner de gala avec animation</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Gift size={16} color="var(--text-primary)" />
                  <span className="body-regular">Cadeaux de bienvenue personnalisés</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services personnalisables */}
          <div style={{ 
            background: "var(--bg-secondary)", 
            padding: "40px", 
            border: "1px solid var(--border-light)",
            textAlign: "center",
            marginBottom: "60px"
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
              <Gift size={32} color="var(--text-primary)" />
              <h3 className="heading-2">Services personnalisables sur demande</h3>
            </div>
            <p className="body-large" style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
              Tous nos packs peuvent être adaptés à vos objectifs, à votre secteur et à votre budget. 
              Contactez-nous et créons ensemble un événement unique.
            </p>
          </div>

          {/* Contact CTA */}
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
              <Phone size={24} color="var(--text-primary)" />
              <h3 className="heading-2">Contactez-nous dès aujourd'hui</h3>
            </div>
            <p className="body-large" style={{ color: "var(--text-secondary)", marginBottom: "32px" }}>
              Obtenez un devis ou programmez un événement sur mesure
            </p>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/contact" className="btn-primary">
                Demander un devis gratuit
              </a>
              <a 
                href={mockData.company.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp Direct
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Services Section */}
      <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2 className="hero-medium" style={{ marginBottom: "24px" }}>
              Services Corporate Spécialisés
            </h2>
            <p className="body-large" style={{ color: "var(--text-secondary)", marginBottom: "16px" }}>
              Solutions professionnelles pour entreprises exigeantes
            </p>
            <p className="body-regular" style={{ color: "var(--text-secondary)", maxWidth: "800px", margin: "0 auto" }}>
              Nos services corporate couvrent tous les aspects de vos événements d'entreprise, 
              des forums stratégiques aux lancements de produits, avec une expertise reconnue dans le secteur.
            </p>
          </div>

          {/* Corporate Services Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "32px", marginBottom: "60px" }}>
            
            {/* Corporate Forums & Conferences */}
            <div className="service-card hover-lift" style={{ padding: "32px 24px", textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <div style={{ 
                  width: "56px", 
                  height: "56px", 
                  background: "var(--bg-primary)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid var(--interactive-base)"
                }}>
                  <Monitor size={28} color="var(--interactive-base)" />
                </div>
                <div>
                  <h3 className="heading-3" style={{ marginBottom: "4px" }}>
                    Corporate Forums & Conferences
                  </h3>
                </div>
              </div>
              <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                Planning and executing forums, summits, and industry conferences with full logistics, 
                agenda management, and speaker coordination.
              </p>
            </div>

            {/* Enterprise Partnership Events */}
            <div className="service-card hover-lift" style={{ padding: "32px 24px", textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <div style={{ 
                  width: "56px", 
                  height: "56px", 
                  background: "var(--bg-primary)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid var(--interactive-base)"
                }}>
                  <Handshake size={28} color="var(--interactive-base)" />
                </div>
                <div>
                  <h3 className="heading-3" style={{ marginBottom: "4px" }}>
                    Enterprise Partnership Events
                  </h3>
                </div>
              </div>
              <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                Organizing strategic partner meetings, B2B networking events, and collaborative launches 
                to strengthen business relationships.
              </p>
            </div>

            {/* Corporate Seminars & Workshops */}
            <div className="service-card hover-lift" style={{ padding: "32px 24px", textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <div style={{ 
                  width: "56px", 
                  height: "56px", 
                  background: "var(--bg-primary)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid var(--interactive-base)"
                }}>
                  <BookOpen size={28} color="var(--interactive-base)" />
                </div>
                <div>
                  <h3 className="heading-3" style={{ marginBottom: "4px" }}>
                    Corporate Seminars & Workshops
                  </h3>
                </div>
              </div>
              <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                Professional training sessions, workshops, and internal corporate events 
                with custom content and materials.
              </p>
            </div>

            {/* Product Launches & Brand Activations */}
            <div className="service-card hover-lift" style={{ padding: "32px 24px", textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <div style={{ 
                  width: "56px", 
                  height: "56px", 
                  background: "var(--bg-primary)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid var(--interactive-base)"
                }}>
                  <Rocket size={28} color="var(--interactive-base)" />
                </div>
                <div>
                  <h3 className="heading-3" style={{ marginBottom: "4px" }}>
                    Product Launches & Brand Activations
                  </h3>
                </div>
              </div>
              <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                Event management for unveiling new products or services, including stage design, 
                audiovisual setup, and media coverage.
              </p>
            </div>

            {/* Networking & Business Gatherings */}
            <div className="service-card hover-lift" style={{ padding: "32px 24px", textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <div style={{ 
                  width: "56px", 
                  height: "56px", 
                  background: "var(--bg-primary)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid var(--interactive-base)"
                }}>
                  <Network size={28} color="var(--interactive-base)" />
                </div>
                <div>
                  <h3 className="heading-3" style={{ marginBottom: "4px" }}>
                    Networking & Business Gatherings
                  </h3>
                </div>
              </div>
              <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                Curating exclusive networking events for executives, investors, and stakeholders 
                to foster connections and collaboration.
              </p>
            </div>

            {/* Hybrid & Digital Corporate Events */}
            <div className="service-card hover-lift" style={{ padding: "32px 24px", textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <div style={{ 
                  width: "56px", 
                  height: "56px", 
                  background: "var(--bg-primary)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid var(--interactive-base)"
                }}>
                  <Globe size={28} color="var(--interactive-base)" />
                </div>
                <div>
                  <h3 className="heading-3" style={{ marginBottom: "4px" }}>
                    Hybrid & Digital Corporate Events
                  </h3>
                </div>
              </div>
              <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                Live-streamed conferences, webinars, and hybrid forums combining 
                in-person and virtual participation.
              </p>
            </div>

            {/* Corporate Event Logistics & Support */}
            <div className="service-card hover-lift" style={{ padding: "32px 24px", textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <div style={{ 
                  width: "56px", 
                  height: "56px", 
                  background: "var(--bg-primary)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid var(--interactive-base)"
                }}>
                  <Settings size={28} color="var(--interactive-base)" />
                </div>
                <div>
                  <h3 className="heading-3" style={{ marginBottom: "4px" }}>
                    Corporate Event Logistics & Support
                  </h3>
                </div>
              </div>
              <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                End-to-end event management: venue sourcing, technical setup, catering, 
                guest management, transportation, and security.
              </p>
            </div>
          </div>

          {/* Optional Extras */}
          <div style={{ 
            background: "var(--bg-primary)", 
            padding: "40px", 
            border: "2px solid var(--interactive-base)",
            marginBottom: "60px"
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "32px" }}>
              <Award size={32} color="var(--interactive-base)" />
              <h3 className="heading-2" style={{ color: "var(--interactive-base)" }}>
                Services Premium Optionnels
              </h3>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
              <div style={{ textAlign: "center", padding: "20px" }}>
                <div style={{ 
                  width: "48px", 
                  height: "48px", 
                  background: "var(--bg-secondary)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                  border: "1px solid var(--border-light)"
                }}>
                  <Star size={24} color="var(--text-primary)" />
                </div>
                <h4 className="heading-3" style={{ marginBottom: "8px" }}>
                  Executive VIP Services
                </h4>
                <p className="body-small" style={{ color: "var(--text-secondary)" }}>
                  Dedicated concierge & luxury transportation
                </p>
              </div>
              
              <div style={{ textAlign: "center", padding: "20px" }}>
                <div style={{ 
                  width: "48px", 
                  height: "48px", 
                  background: "var(--bg-secondary)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                  border: "1px solid var(--border-light)"
                }}>
                  <BarChart size={24} color="var(--text-primary)" />
                </div>
                <h4 className="heading-3" style={{ marginBottom: "8px" }}>
                  Event Analytics & Reporting
                </h4>
                <p className="body-small" style={{ color: "var(--text-secondary)" }}>
                  ROI tracking & performance analytics
                </p>
              </div>
              
              <div style={{ textAlign: "center", padding: "20px" }}>
                <div style={{ 
                  width: "48px", 
                  height: "48px", 
                  background: "var(--bg-secondary)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                  border: "1px solid var(--border-light)"
                }}>
                  <Leaf size={24} color="var(--text-primary)" />
                </div>
                <h4 className="heading-3" style={{ marginBottom: "8px" }}>
                  Green Corporate Events
                </h4>
                <p className="body-small" style={{ color: "var(--text-secondary)" }}>
                  Eco-friendly events for sustainability branding
                </p>
              </div>
            </div>
          </div>

          {/* Corporate CTA */}
          <div style={{ textAlign: "center" }}>
            <h3 className="heading-1" style={{ marginBottom: "20px" }}>
              Transformez vos événements corporate
            </h3>
            <p className="body-large" style={{ color: "var(--text-secondary)", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>
              Faites appel à notre expertise pour créer des événements corporate qui marquent les esprits 
              et renforcent votre image de marque.
            </p>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/contact" className="btn-primary">
                Consultation Corporate Gratuite
              </a>
              <a href="/venues" className="btn-secondary">
                Découvrir nos venues
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;