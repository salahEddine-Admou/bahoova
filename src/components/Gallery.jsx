import React, { useState, useEffect } from "react";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { mockData } from "../mock";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const categories = ["Tous", "Corporate", "Mariages", "Galas", "Spectacles", "Décoration", "Événements Premium", "Traditionnel"];
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredGallery = activeCategory === "Tous" 
    ? mockData.gallery 
    : mockData.gallery.filter(item => item.category === activeCategory);

  return (
    <main style={{ paddingTop: '80px' }}>
      {/* Hero Section - Delight Style */}
      <section style={{ 
        padding: '100px 0', 
        background: '#f8f9fa',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '300',
            color: '#333',
            marginBottom: '2rem',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            Galerie
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Découvrez nos plus belles réalisations à travers une sélection d'événements exceptionnels que nous avons eu le privilège d'organiser pour nos clients.
          </p>
        </div>
      </section>

      {/* Category Filter - Delight Style */}
      <section style={{ background: "white", padding: "60px 0" }}>
        <div className="container">
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "2rem", 
            flexWrap: "wrap"
          }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                style={{ 
                  padding: "12px 24px",
                  background: activeCategory === category ? "#333" : "transparent",
                  border: "1px solid #333",
                  color: activeCategory === category ? "white" : "#333",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: "300",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== category) {
                    e.target.style.background = "#333";
                    e.target.style.color = "white";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== category) {
                    e.target.style.background = "transparent";
                    e.target.style.color = "#333";
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid - Delight Style */}
      <section style={{ padding: "80px 0", background: "#f8f9fa" }}>
        <div className="container">
          {filteredGallery.length > 0 ? (
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
              gap: "2rem"
            }}>
              {filteredGallery.map((item, index) => (
                <div 
                  key={item.id} 
                  onClick={() => openLightbox(item, index)}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                    background: "white",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.05)";
                    e.target.style.boxShadow = "0 8px 30px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
                  }}
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      display: "block"
                    }}
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&crop=center&t=${Date.now()}`;
                    }}
                    loading="lazy"
                  />
                  <div style={{
                    padding: "1.5rem",
                    textAlign: "center"
                  }}>
                    <h3 style={{ 
                      fontSize: "1.2rem", 
                      fontWeight: "300",
                      color: "#333",
                      marginBottom: "0.5rem",
                      letterSpacing: "1px"
                    }}>
                      {item.title}
                    </h3>
                    <p style={{ 
                      fontSize: "0.9rem", 
                      color: "#666",
                      textTransform: "uppercase",
                      letterSpacing: "1px"
                    }}>
                      {item.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <p style={{ 
                fontSize: "1.2rem", 
                color: "#666",
                fontWeight: "300"
              }}>
                Aucune image trouvée pour cette catégorie.
              </p>
            </div>
          )}
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