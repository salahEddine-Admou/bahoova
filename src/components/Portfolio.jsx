import React, { useState } from "react";
import { X, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Palazzo Reale - Milan",
      category: "Luxury Event",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop&crop=center",
      description: "An exclusive luxury event held at the prestigious Palazzo Reale in Milan, featuring elegant design and impeccable service.",
      details: "This high-end event showcased our ability to work in prestigious international venues, delivering a sophisticated experience for discerning clients."
    },
    {
      id: 2,
      title: "Office des Nations Unies - Genève",
      category: "International Conference",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&crop=center",
      description: "A major international conference at the United Nations Office in Geneva, demonstrating our expertise in large-scale diplomatic events.",
      details: "Organized a complex multi-day conference with delegates from over 50 countries, featuring simultaneous translation and state-of-the-art technology."
    },
    {
      id: 3,
      title: "Palais de la Bahia - Marrakech",
      category: "Cultural Event",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
      description: "A cultural celebration at the historic Palais de la Bahia in Marrakech, blending traditional Moroccan architecture with modern event design.",
      details: "Created an immersive cultural experience that honored Moroccan heritage while providing contemporary amenities and services for international guests."
    },
    {
      id: 4,
      title: "Palais El Badi - Marrakech",
      category: "Historical Venue",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&crop=center",
      description: "An elegant event at the ancient Palais El Badi, showcasing our ability to work with historical venues while maintaining modern standards.",
      details: "Successfully managed the challenges of organizing a contemporary event in a UNESCO World Heritage site, ensuring both preservation and functionality."
    },
    {
      id: 5,
      title: "Dîner Haute Joaillerie - Milan",
      category: "Fashion Event",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop&crop=center",
      description: "An exclusive haute joaillerie dinner in Milan, featuring luxury brands and sophisticated entertainment.",
      details: "Coordinated with top luxury brands to create an unforgettable evening that combined fine dining, high fashion, and exclusive entertainment."
    },
    {
      id: 6,
      title: "Dîner Presse Dior - Marrakech",
      category: "Fashion & Media",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop&crop=center",
      description: "A prestigious press dinner for Dior in Marrakech, demonstrating our expertise in luxury brand events and media relations.",
      details: "Managed a high-profile media event for a major fashion house, coordinating with international press and ensuring flawless execution under intense scrutiny."
    }
  ];

  const categories = ["All", "Luxury Event", "International Conference", "Cultural Event", "Historical Venue", "Fashion Event", "Fashion & Media"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
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
              Discover our portfolio of exceptional events, from intimate gatherings to large-scale 
              international conferences across Morocco and beyond.
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
              Ready to create your next event?
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Let's discuss your vision and bring it to life with our expertise and creativity.
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
                Start Your Project
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
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
