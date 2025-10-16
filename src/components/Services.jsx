import React, { useState, useEffect } from "react";
import { ArrowRight, Heart, Building, Users, Palette, Target, Plane, Star, Wifi, Coffee, Car, Gift, MapPin, Phone, Monitor, Handshake, BookOpen, Rocket, Network, Globe, Settings, Award, BarChart, Leaf, Sparkles, Zap, X, CheckCircle, MessageCircle } from "lucide-react";
import { mockData } from "../mock";
import AnimatedSlider from "./AnimatedSlider";
import ColorSwitcher from "./ColorSwitcher";
import AnimatedText from "./AnimatedText";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    console.log("Service clicked:", service);
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  useEffect(() => {
    console.log("Selected service changed:", selectedService);
  }, [selectedService]);

  const serviceFeatures = [
    {
      icon: <Heart size={24} />,
      title: "Expérience reconnue",
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
      {/* Hero Section - Delight Event Style */}
      <section style={{ padding: '120px 0 80px', background: 'white', textAlign: 'center' }}>
          <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: '300',
              color: '#1a1a1a',
              marginBottom: '2rem',
              letterSpacing: '1px'
            }}>
              Notre Expertise
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              lineHeight: '1.6',
              fontWeight: '300'
            }}>
              Nous nous spécialisons dans la création d'événements exceptionnels qui dépassent les attentes. 
              Des rassemblements intimes aux conférences de grande envergure, notre expertise 
              couvre tous les aspects de la gestion d'événements.
            </p>
              </div>
            </div>
      </section>

      {/* Services Overview */}
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
              Ce Que Nous Faisons
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Nos services complets de gestion d'événements couvrent tous les aspects de votre événement, 
              du concept initial à l'exécution parfaite.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '40px' 
          }}>
            {mockData.services.map((service, index) => (
              <div 
                key={index}
                    style={{ 
                  background: '#fafafa',
                  padding: '40px',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                    onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                    }}
                    onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                onClick={() => handleServiceClick(service)}
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                style={{ 
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    marginBottom: '24px',
                    borderRadius: '8px'
                  }}
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&crop=center&t=${Date.now()}`;
                  }}
                />
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '400', 
                  color: '#1a1a1a', 
                  marginBottom: '12px' 
                }}>
                  {service.title}
                </h3>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: '1.6', 
                  color: '#666',
                  marginBottom: '20px'
                }}>
                  {service.description}
                </p>
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#1a1a1a',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  En Savoir Plus
                  <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Notre Processus
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Une approche structurée pour assurer le succès de chaque événement
            </p>
              </div>
              
              <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '40px' 
          }}>
            <div style={{ textAlign: 'center' }}>
            <div style={{ 
                width: '60px',
                height: '60px',
                background: '#1a1a1a',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                1
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '400',
                color: '#1a1a1a',
                marginBottom: '12px'
              }}>
                Consultation
                  </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#666'
              }}>
                Comprendre vos besoins, objectifs et vision pour l'événement
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
            <div style={{ 
                width: '60px',
                height: '60px',
                background: '#1a1a1a',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                2
                </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '400',
                color: '#1a1a1a',
                marginBottom: '12px'
              }}>
                Conception
                  </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#666'
              }}>
                Développer le concept, le design et la planification détaillée
            </p>
          </div>

            <div style={{ textAlign: 'center' }}>
                <div style={{ 
                width: '60px',
                height: '60px',
                background: '#1a1a1a',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                3
                </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '400',
                color: '#1a1a1a',
                marginBottom: '12px'
              }}>
                Coordination
                  </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#666'
              }}>
                Gestion des fournisseurs, logistique et suivi de projet
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
                <div style={{ 
                width: '60px',
                height: '60px',
                background: '#1a1a1a',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                4
                </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '400',
                color: '#1a1a1a',
                marginBottom: '12px'
              }}>
                Exécution
                  </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#666'
              }}>
                Supervision complète le jour J pour un événement parfait
              </p>
            </div>
                </div>
                </div>
      </section>

      {/* CTA Section */}
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
              Prêt à travailler avec nous ?
              </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Discutons de votre prochain événement et créons quelque chose d'extraordinaire ensemble.
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
                Nous Contacter
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
                Voir Nos Réalisations
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Service Details Modal */}
      {selectedService && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
          padding: "20px"
        }}>
          <div style={{
            backgroundColor: "var(--bg-primary)",
            borderRadius: "16px",
            maxWidth: "800px",
            width: "100%",
            maxHeight: "90vh",
            overflow: "auto",
            position: "relative",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)"
          }}>
            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "var(--interactive-base)",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 1001,
                color: "white"
              }}
            >
              <X size={20} />
            </button>

            {/* Modal Content */}
            <div style={{ padding: "40px" }}>
              <div style={{ display: "flex", gap: "30px", alignItems: "flex-start" }}>
                <img 
                  src={selectedService.image}
                  alt={selectedService.title}
                  style={{
                    width: "200px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    flexShrink: 0
                  }}
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&crop=center&t=${Date.now()}`;
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h2 className="heading-1" style={{ marginBottom: "16px", color: "var(--text-primary)" }}>
                    {selectedService.title}
                  </h2>
                  <p className="body-large" style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>
                    {selectedService.description}
                  </p>
                  
                  {/* Service Details */}
                  <div style={{ marginBottom: "24px" }}>
                    <h3 className="heading-3" style={{ marginBottom: "12px", color: "var(--text-primary)" }}>
                      Ce que nous offrons :
                    </h3>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {selectedService.title === "Congrès Scientifiques" && (
                        <>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                            <CheckCircle size={16} color="var(--success)" />
                            <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                              Organisation de congrès internationaux et symposiums
                            </span>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                            <CheckCircle size={16} color="var(--success)" />
                            <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                              Gestion des intervenants et du programme scientifique
                            </span>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                            <CheckCircle size={16} color="var(--success)" />
                            <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                              Technologies de pointe pour présentations
                            </span>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                            <CheckCircle size={16} color="var(--success)" />
                            <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                              Traduction simultanée multilingue
                            </span>
                          </li>
                        </>
                      )}
                      {selectedService.title === "Forums de Recherche" && (
                        <>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                            <CheckCircle size={16} color="var(--success)" />
                            <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                              Organisation de forums académiques et colloques
                            </span>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                            <CheckCircle size={16} color="var(--success)" />
                            <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                              Networking et sessions de collaboration
                            </span>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                            <CheckCircle size={16} color="var(--success)" />
                            <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                              Publication des actes et communications
                            </span>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                            <CheckCircle size={16} color="var(--success)" />
                            <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                              Accompagnement logistique complet
                            </span>
                          </li>
                        </>
                      )}
                      {selectedService.title === "Conférences Médicales" && (
                        <>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                            <CheckCircle size={16} color="var(--success)" />
                            <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                              Événements médicaux et pharmaceutiques
                            </span>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                            <CheckCircle size={16} color="var(--success)" />
                            <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                              Respect des normes médicales internationales
                            </span>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                            <CheckCircle size={16} color="var(--success)" />
                            <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                              Gestion des accréditations CME/CPD
                            </span>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                            <CheckCircle size={16} color="var(--success)" />
                            <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                              Support technique médical spécialisé
                            </span>
                          </li>
                        </>
                      )}
                      {selectedService.title === "Technologies Avancées" && (
                        <>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                            <CheckCircle size={16} color="var(--success)" />
                            <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                              Équipements de pointe et sonorisation professionnelle
                            </span>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                            <CheckCircle size={16} color="var(--success)" />
                            <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                              Éclairage LED et effets visuels
                            </span>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                            <CheckCircle size={16} color="var(--success)" />
                            <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                              Écrans géants et systèmes de projection
                            </span>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                            <CheckCircle size={16} color="var(--success)" />
                            <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                              Support technique 24/7
                            </span>
                          </li>
                        </>
                      )}
                      {selectedService.title === "Live Stream & Webinaire" && (
                        <>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                            <CheckCircle size={16} color="var(--success)" />
                            <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                              Diffusion en direct et événements hybrides
                            </span>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                            <CheckCircle size={16} color="var(--success)" />
                            <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                              Plateformes de webinaire professionnelles
                            </span>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                            <CheckCircle size={16} color="var(--success)" />
                            <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                              Interaction en temps réel avec les participants
                            </span>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                            <CheckCircle size={16} color="var(--success)" />
                            <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                              Enregistrement et archivage des sessions
                            </span>
                          </li>
                        </>
                      )}
                      {selectedService.title === "Mariages & Cérémonies" && (
                        <>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                            <CheckCircle size={16} color="var(--success)" />
                            <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                              Organisation complète de mariages de luxe
                            </span>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                            <CheckCircle size={16} color="var(--success)" />
                            <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                              Lieux d'exception et palais au Maroc
                            </span>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                            <CheckCircle size={16} color="var(--success)" />
                            <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                              Cérémonies traditionnelles et modernes
                            </span>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                            <CheckCircle size={16} color="var(--success)" />
                            <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                              Service haut de gamme et traiteur de luxe
                            </span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                    <a href="/contact" className="btn-primary">
                      Demander un devis
                    </a>
                    <a 
                      href={`https://wa.me/212662017389?text=Bonjour,%20je%20souhaite%20plus%20d'informations%20sur%20le%20service%20${encodeURIComponent(selectedService.title)}%20de%20BAHOOVA%20Events.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ 
                        backgroundColor: "#25D366", 
                        color: "white",
                        border: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px"
                      }}
                    >
                      <MessageCircle size={16} />
                      WhatsApp Direct
                    </a>
                    <a href="/venues" className="btn-secondary">
                      Voir nos lieux
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Services;