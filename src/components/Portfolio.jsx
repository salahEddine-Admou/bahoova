import React, { useState } from "react";
import { X, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Palazzo Reale - Milan",
      category: "Événement de Luxe",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop&crop=center",
      description: "Un événement de luxe exclusif organisé au prestigieux Palazzo Reale de Milan, alliant design élégant et service impeccable.",
      details: "Cet événement haut de gamme a démontré notre capacité à travailler dans des lieux internationaux prestigieux, offrant une expérience sophistiquée à une clientèle exigeante."
    },
    {
      id: 2,
      title: "Office des Nations Unies - Genève",
      category: "Conférence Internationale",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&crop=center",
      description: "Une conférence internationale majeure au Bureau des Nations Unies à Genève, démontrant notre expertise dans les événements diplomatiques de grande envergure.",
      details: "Organisation d'une conférence complexe de plusieurs jours avec des délégués de plus de 50 pays, incluant traduction simultanée et technologie de pointe."
    },
    {
      id: 3,
      title: "Palais de la Bahia - Marrakech",
      category: "Événement Culturel",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
      description: "Une célébration culturelle au Palais de la Bahia de Marrakech, alliant architecture marocaine traditionnelle et design d'événement moderne.",
      details: "Création d'une expérience culturelle immersive qui honore l'héritage marocain tout en offrant des services contemporains aux invités internationaux."
    },
    {
      id: 4,
      title: "Palais El Badi - Marrakech",
      category: "Lieu Historique",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&crop=center",
      description: "Un événement élégant au Palais El Badi, démontrant notre capacité à travailler avec des lieux historiques tout en maintenant des standards modernes.",
      details: "Gestion réussie des défis d'organisation d'un événement contemporain dans un site du patrimoine mondial de l'UNESCO, assurant préservation et fonctionnalité."
    },
    {
      id: 5,
      title: "Dîner Haute Joaillerie - Milan",
      category: "Événement Mode",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop&crop=center",
      description: "Un dîner exclusif de haute joaillerie à Milan, mettant en vedette des marques de luxe et un divertissement sophistiqué.",
      details: "Coordination avec les plus grandes marques de luxe pour créer une soirée inoubliable alliant gastronomie raffinée, haute couture et divertissement exclusif."
    },
    {
      id: 6,
      title: "Dîner Presse Dior - Marrakech",
      category: "Mode & Médias",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop&crop=center",
      description: "Un dîner de presse prestigieux pour Dior à Marrakech, démontrant notre expertise dans les événements de marques de luxe et les relations médias.",
      details: "Gestion d'un événement médiatique de haut profil pour une grande maison de mode, coordination avec la presse internationale et exécution parfaite sous forte pression."
    }
  ];

  const categories = ["Tous", "Événement de Luxe", "Conférence Internationale", "Événement Culturel", "Lieu Historique", "Événement Mode", "Mode & Médias"];
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects = activeCategory === "Tous" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
              Portfolio
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              lineHeight: '1.6',
              fontWeight: '300'
            }}>
              Découvrez notre portfolio d'événements exceptionnels, des rassemblements intimes aux 
              conférences internationales de grande envergure au Maroc et au-delà.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section style={{ padding: '40px 0', background: '#fafafa' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              flexWrap: 'wrap', 
              gap: '20px' 
            }}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  style={{
                    padding: '12px 24px',
                    background: activeCategory === category ? '#1a1a1a' : 'transparent',
                    color: activeCategory === category ? 'white' : '#666',
                    border: '1px solid #ddd',
                    borderRadius: '0',
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    fontWeight: '400',
                    letterSpacing: '0.3px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (activeCategory !== category) {
                      e.target.style.borderColor = '#1a1a1a';
                      e.target.style.color = '#1a1a1a';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeCategory !== category) {
                      e.target.style.borderColor = '#ddd';
                      e.target.style.color = '#666';
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '40px' 
          }}>
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
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
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.image}
                  alt={project.title}
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
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    marginBottom: '8px',
                    fontWeight: '400'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{ 
                    fontSize: '0.9rem', 
                    opacity: 0.9,
                    marginBottom: '12px'
                  }}>
                    {project.category}
                  </p>
                  <p style={{ 
                    fontSize: '0.85rem', 
                    opacity: 0.8,
                    lineHeight: '1.4'
                  }}>
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '8px',
            maxWidth: '900px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative'
          }}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                zIndex: 1001,
                color: '#666',
                padding: '10px'
              }}
            >
              <X size={24} />
            </button>

            {/* Modal Content */}
            <div>
              <img 
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover'
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
              <div style={{ padding: '40px' }}>
                <div style={{ marginBottom: '20px' }}>
                  <span style={{
                    fontSize: '0.9rem',
                    color: '#666',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {selectedProject.category}
                  </span>
                </div>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: '300',
                  color: '#1a1a1a',
                  marginBottom: '20px',
                  letterSpacing: '0.5px'
                }}>
                  {selectedProject.title}
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  color: '#666',
                  marginBottom: '20px'
                }}>
                  {selectedProject.description}
                </p>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#666'
                }}>
                  {selectedProject.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

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
              Prêt à créer votre prochain événement ?
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Discutons de votre vision et donnons-lui vie avec notre expertise et créativité.
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
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
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
                <ExternalLink size={16} />
              </a>
              <a 
                href="/gallery"
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
                Voir la Galerie
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
