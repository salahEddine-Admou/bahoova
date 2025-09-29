import React, { useState, useEffect } from "react";
import { X, ArrowLeft, ArrowRight, Sparkles, Zap, Heart, Star } from "lucide-react";
import { mockData } from "../mock";
import ColorSwitcher from "./ColorSwitcher";
import AnimatedText from "./AnimatedText";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % mockData.gallery.length;
    setSelectedImage(mockData.gallery[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + mockData.gallery.length) % mockData.gallery.length;
    setSelectedImage(mockData.gallery[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const categories = ["Tous", "Scientifique", "Médical", "Sportif", "Corporate", "Technique"];
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredGallery = activeCategory === "Tous" 
    ? mockData.gallery 
    : mockData.gallery.filter(item => item.category === activeCategory);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding" style={{ position: "relative", overflow: "hidden" }}>
        <ColorSwitcher>
          <div className="container">
            <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 2 }}>
              <AnimatedText 
                text="Galerie"
                type="gradient"
                className="hero-large"
                style={{ 
                  marginBottom: "32px",
                  fontSize: "4rem",
                  fontWeight: "700",
                  background: "linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "gradientShift 3s ease-in-out infinite"
                }}
              />
              <AnimatedText 
                text="Découvrez nos plus belles réalisations à travers une sélection d'événements exceptionnels que nous avons eu le privilège d'organiser pour nos clients."
                type="fadeIn"
                speed={20}
                className="body-large"
                style={{ 
                  color: "var(--text-secondary)", 
                  marginBottom: "48px",
                  fontSize: "1.25rem",
                  lineHeight: "1.6"
                }}
              />
              
              {/* Floating Icons */}
              <div style={{ 
                position: "absolute", 
                top: "20%", 
                left: "10%", 
                animation: "float 3s ease-in-out infinite",
                zIndex: 1
              }}>
                <Sparkles size={24} color="#667eea" />
              </div>
              <div style={{ 
                position: "absolute", 
                top: "30%", 
                right: "15%", 
                animation: "float 3s ease-in-out infinite 1s",
                zIndex: 1
              }}>
                <Zap size={20} color="#764ba2" />
              </div>
              <div style={{ 
                position: "absolute", 
                bottom: "20%", 
                left: "20%", 
                animation: "float 3s ease-in-out infinite 2s",
                zIndex: 1
              }}>
                <Heart size={18} color="#f093fb" />
              </div>
              <div style={{ 
                position: "absolute", 
                bottom: "30%", 
                right: "10%", 
                animation: "float 3s ease-in-out infinite 0.5s",
                zIndex: 1
              }}>
                <Star size={22} color="#f5576c" />
              </div>
            </div>
          </div>
        </ColorSwitcher>
      </section>

      {/* Category Filter */}
      <section style={{ background: "var(--bg-secondary)", padding: "40px 0", position: "relative" }}>
        <div className="container">
          <div 
            className="fade-in"
            style={{ 
              display: "flex", 
              justifyContent: "center", 
              gap: "16px", 
              flexWrap: "wrap",
              marginBottom: "20px",
              animation: "slideUp 0.8s ease-out 0.3s both"
            }}
          >
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`creative-btn ${activeCategory === category ? 'btn-primary' : 'btn-secondary'}`}
                style={{ 
                  minWidth: "auto",
                  padding: "12px 20px",
                  height: "auto",
                  animation: `slideUp 0.6s ease-out ${0.5 + index * 0.1}s both`,
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  color: activeCategory === category ? "white" : "var(--text-primary)"
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px) scale(1.05)";
                  e.target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0) scale(1)";
                  e.target.style.boxShadow = "none";
                }}
              >
                {activeCategory === category && (
                  <Sparkles 
                    size={16} 
                    style={{ 
                      position: "absolute", 
                      top: "-5px", 
                      right: "-5px",
                      animation: "bounce 1s ease-in-out infinite"
                    }} 
                  />
                )}
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding-small">
        <div className="container">
          {filteredGallery.length > 0 ? (
            <div className="gallery-grid">
              {filteredGallery.map((item, index) => (
                <div 
                  key={item.id} 
                  className="gallery-item creative-gallery-item"
                  onClick={() => openLightbox(item, index)}
                  style={{
                    animation: `slideInUp 0.8s ease-out ${index * 0.1}s both`,
                    transform: hoveredImage === item.id ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                  onMouseEnter={() => setHoveredImage(item.id)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="gallery-image"
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&crop=center&t=${Date.now()}`;
                    }}
                    loading="lazy"
                    style={{
                      transform: hoveredImage === item.id ? "scale(1.1)" : "scale(1)",
                      transition: "transform 0.4s ease"
                    }}
                  />
                  <div 
                    className="gallery-overlay"
                    style={{
                      opacity: hoveredImage === item.id ? 1 : 0,
                      transform: hoveredImage === item.id ? "translateY(0)" : "translateY(20px)",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <div style={{ textAlign: "center" }}>
                      <h3 className="heading-3" style={{ color: "white", marginBottom: "8px" }}>
                        {item.title}
                      </h3>
                      <p className="body-small" style={{ color: "rgba(255,255,255,0.8)", marginBottom: "12px" }}>
                        {item.category}
                      </p>
                      <div style={{ 
                        display: "flex", 
                        justifyContent: "center", 
                        gap: "8px",
                        animation: hoveredImage === item.id ? "bounce 0.6s ease-in-out" : "none"
                      }}>
                        <Sparkles size={16} color="white" />
                        <Zap size={16} color="white" />
                        <Heart size={16} color="white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Effect Border */}
                  <div 
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      border: hoveredImage === item.id ? "3px solid #667eea" : "3px solid transparent",
                      borderRadius: "12px",
                      transition: "all 0.3s ease",
                      pointerEvents: "none"
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <p className="body-large" style={{ color: "var(--text-secondary)" }}>
                Aucune image trouvée pour cette catégorie.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Recent Events Section */}
      <section className="section-padding-small" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="heading-1">Événements récents</h2>
            <p className="body-large" style={{ marginTop: "16px", color: "var(--text-secondary)" }}>
              Aperçu de nos dernières créations événementielles
            </p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
            <div style={{ textAlign: "center" }}>
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&crop=center"
                alt="Événement scientifique"
                style={{ 
                  width: "100%", 
                  height: "250px", 
                  objectFit: "cover", 
                  marginBottom: "16px",
                  border: "1px solid var(--border-light)"
                }}
                onError={(e) => {
                  e.target.src = `https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=center&t=${Date.now()}`;
                }}
                loading="lazy"
              />
              <h3 className="heading-3" style={{ marginBottom: "8px" }}>
                Congrès Scientifique
              </h3>
              <p className="body-small" style={{ color: "var(--text-secondary)" }}>
                Organisation complète de congrès internationaux
              </p>
            </div>
            
            <div style={{ textAlign: "center" }}>
              <img 
                src="https://images.unsplash.com/photo-1556761175-4b46a1b1b616?w=800&h=600&fit=crop&crop=center"
                alt="Congrès scientifique"
                style={{ 
                  width: "100%", 
                  height: "250px", 
                  objectFit: "cover", 
                  marginBottom: "16px",
                  border: "1px solid var(--border-light)"
                }}
                onError={(e) => {
                  e.target.src = `https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&crop=center&t=${Date.now()}`;
                }}
                loading="lazy"
              />
              <h3 className="heading-3" style={{ marginBottom: "8px" }}>
                Forum de Recherche
              </h3>
              <p className="body-small" style={{ color: "var(--text-secondary)" }}>
                Colloques et symposiums scientifiques
              </p>
            </div>
            
            <div style={{ textAlign: "center" }}>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba0efed?w=800&h=600&fit=crop&crop=center"
                alt="Forum de recherche"
                style={{ 
                  width: "100%", 
                  height: "250px", 
                  objectFit: "cover", 
                  marginBottom: "16px",
                  border: "1px solid var(--border-light)"
                }}
                onError={(e) => {
                  e.target.src = `https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&crop=center&t=${Date.now()}`;
                }}
                loading="lazy"
              />
              <h3 className="heading-3" style={{ marginBottom: "8px" }}>
                Conférence Médicale
              </h3>
              <p className="body-small" style={{ color: "var(--text-secondary)" }}>
                Événements médicaux et pharmaceutiques
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
              Votre événement sera le prochain
            </h2>
            <p className="body-large" style={{ color: "var(--text-secondary)", marginBottom: "32px" }}>
              Inspiré par nos réalisations ? Contactez-nous pour créer ensemble votre événement d'exception.
            </p>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/contact" className="btn-primary">
                Planifier mon événement
              </a>
              <a href="/services" className="btn-secondary">
                Voir nos services
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px"
          }}
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "rgba(255, 255, 255, 0.2)",
              border: "none",
              color: "white",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <X size={20} />
          </button>
          
          <button
            onClick={prevImage}
            style={{
              position: "absolute",
              left: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255, 255, 255, 0.2)",
              border: "none",
              color: "white",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <ArrowLeft size={20} />
          </button>
          
          <button
            onClick={nextImage}
            style={{
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255, 255, 255, 0.2)",
              border: "none",
              color: "white",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <ArrowRight size={20} />
          </button>
          
          <div 
            style={{ 
              maxWidth: "90%", 
              maxHeight: "90%", 
              textAlign: "center" 
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              style={{ 
                maxWidth: "100%", 
                maxHeight: "100%", 
                objectFit: "contain" 
              }}
            />
            <div style={{ marginTop: "20px", color: "white" }}>
              <h3 className="heading-3" style={{ color: "white", marginBottom: "8px" }}>
                {selectedImage.title}
              </h3>
              <p className="body-regular" style={{ color: "rgba(255,255,255,0.8)" }}>
                {selectedImage.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;