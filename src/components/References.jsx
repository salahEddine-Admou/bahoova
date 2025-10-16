import React from "react";
import { Quote, Star, Award, Users, Globe, Building } from "lucide-react";

const References = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      position: "Director of International Relations",
      company: "World Health Organization",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      text: "BAHOOVA Events delivered an exceptional international conference that exceeded all our expectations. Their attention to detail and professional execution made our event a resounding success.",
      rating: 5,
      event: "Global Health Summit 2023"
    },
    {
      id: 2,
      name: "Ahmed Al-Rashid",
      position: "CEO",
      company: "Moroccan Investment Group",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "The team's creativity and local expertise helped us create a memorable corporate event that perfectly represented our brand values. Highly recommended for any business looking for excellence.",
      rating: 5,
      event: "Annual Corporate Gala 2023"
    },
    {
      id: 3,
      name: "Marie Dubois",
      position: "Event Director",
      company: "Luxury Fashion House",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "Working with BAHOOVA Events was a pleasure from start to finish. They understood our vision and brought it to life with incredible attention to detail and flawless execution.",
      rating: 5,
      event: "Fashion Week Launch Event 2023"
    },
    {
      id: 4,
      name: "Prof. Hassan Benali",
      position: "Conference Chair",
      company: "Moroccan Academy of Sciences",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      text: "The scientific conference they organized was outstanding. Every detail was perfectly planned, from the technical setup to the catering. Our international delegates were impressed.",
      rating: 5,
      event: "International Science Symposium 2023"
    },
    {
      id: 5,
      name: "Isabella Rodriguez",
      position: "Wedding Planner",
      company: "Elite Weddings International",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      text: "BAHOOVA Events made our destination wedding in Morocco absolutely magical. Their local knowledge and attention to cultural details created an unforgettable experience for our clients.",
      rating: 5,
      event: "Luxury Destination Wedding 2023"
    },
    {
      id: 6,
      name: "James Mitchell",
      position: "Marketing Director",
      company: "Tech Innovation Corp",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      text: "The product launch event they organized was a complete success. Their technical expertise and creative approach helped us make a significant impact in the market.",
      rating: 5,
      event: "Product Launch Conference 2023"
    }
  ];

  const stats = [
    {
      icon: <Users size={32} />,
      number: "500+",
      label: "Événements Organisés",
      description: "Événements planifiés et exécutés avec succès de toutes tailles"
    },
    {
      icon: <Globe size={32} />,
      number: "25+",
      label: "Pays Desservis",
      description: "Expérience internationale sur plusieurs continents"
    },
    {
      icon: <Award size={32} />,
      number: "98%",
      label: "Satisfaction Client",
      description: "Évaluations constamment élevées de nos clients"
    },
    {
      icon: <Building size={32} />,
      number: "200+",
      label: "Clients Corporatifs",
      description: "Fait confiance par les entreprises leaders mondiales"
    }
  ];

  const clients = [
    "Organisation Mondiale de la Santé",
    "Nations Unies",
    "Groupe d'Investissement Marocain",
    "Maisons de Mode de Luxe",
    "Tech Innovation Corp",
    "Académie des Sciences du Maroc",
    "Elite Weddings International",
    "Banques Internationales",
    "Institutions Gouvernementales",
    "ONG et Fondations"
  ];

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
              Références
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              lineHeight: '1.6',
              fontWeight: '300'
            }}>
              Découvrez ce que nos clients disent de leur collaboration avec BAHOOVA Events et 
              explorez notre historique d'événements réussis.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '80px 0', background: '#fafafa' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '40px' 
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: '#f8f8f8',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  color: '#1a1a1a'
                }}>
                  {stat.icon}
                </div>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '300',
                  color: '#1a1a1a',
                  marginBottom: '8px'
                }}>
                  {stat.number}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '400',
                  color: '#1a1a1a',
                  marginBottom: '8px'
                }}>
                  {stat.label}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#666',
                  lineHeight: '1.4'
                }}>
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Témoignages Clients
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Écoutez nos clients satisfaits parler de leur expérience avec BAHOOVA Events
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '40px' 
          }}>
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                style={{
                  background: '#fafafa',
                  padding: '40px',
                  position: 'relative',
                  border: '1px solid #f0f0f0'
                }}
              >
                <Quote 
                  size={32} 
                  style={{ 
                    color: '#ddd', 
                    position: 'absolute', 
                    top: '20px', 
                    right: '20px' 
                  }} 
                />
                
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#ffd700" color="#ffd700" />
                    ))}
                  </div>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    color: '#666',
                    fontStyle: 'italic',
                    marginBottom: '20px'
                  }}>
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '16px',
                  borderTop: '1px solid #eee',
                  paddingTop: '20px'
                }}>
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  <div>
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: '500',
                      color: '#1a1a1a',
                      marginBottom: '4px'
                    }}>
                      {testimonial.name}
                    </h4>
                    <p style={{
                      fontSize: '0.85rem',
                      color: '#666',
                      marginBottom: '2px'
                    }}>
                      {testimonial.position}
                    </p>
                    <p style={{
                      fontSize: '0.85rem',
                      color: '#666',
                      marginBottom: '4px'
                    }}>
                      {testimonial.company}
                    </p>
                    <p style={{
                      fontSize: '0.8rem',
                      color: '#999',
                      fontStyle: 'italic'
                    }}>
                      {testimonial.event}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
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
              Nos Clients
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Nous sommes fiers de travailler avec des organisations leaders dans diverses industries
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '30px',
            alignItems: 'center'
          }}>
            {clients.map((client, index) => (
              <div 
                key={index}
                style={{
                  textAlign: 'center',
                  padding: '20px',
                  background: 'white',
                  border: '1px solid #f0f0f0',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '400',
                  color: '#666',
                  margin: 0
                }}>
                  {client}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
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
              Reconnaissance & Récompenses
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Notre engagement envers l'excellence a été reconnu par les leaders de l'industrie
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '40px' 
          }}>
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <Award size={48} style={{ color: '#ffd700', marginBottom: '20px' }} />
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '400',
                color: '#1a1a1a',
                marginBottom: '12px'
              }}>
                Meilleure Agence de Gestion d'Événements
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#666',
                marginBottom: '8px'
              }}>
                Morocco Business Awards 2023
              </p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <Star size={48} style={{ color: '#ffd700', marginBottom: '20px' }} />
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '400',
                color: '#1a1a1a',
                marginBottom: '12px'
              }}>
                Excellence dans les Événements Internationaux
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#666',
                marginBottom: '8px'
              }}>
                Global Event Industry Awards 2023
              </p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <Building size={48} style={{ color: '#ffd700', marginBottom: '20px' }} />
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '400',
                color: '#1a1a1a',
                marginBottom: '12px'
              }}>
                Événements Corporatifs Exceptionnels
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#666',
                marginBottom: '8px'
              }}>
                MENA Business Excellence Awards 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 0', background: '#fafafa' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '300',
              color: '#1a1a1a',
              marginBottom: '2rem',
              letterSpacing: '0.5px'
            }}>
              Prêt à rejoindre nos histoires de succès ?
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Laissez-nous créer un événement exceptionnel qui sera mémorable pour les années à venir.
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
                Démarrer Votre Projet
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
    </main>
  );
};

export default References;
