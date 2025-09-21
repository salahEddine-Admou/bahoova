import React, { useState } from "react";
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

  const categories = ["Tous", "Mariage", "Corporate", "Décoration", "Luxe", "Gastronomie"];
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredGallery = activeCategory === "Tous" 
    ? mockData.gallery 
    : mockData.gallery.filter(item => item.category === activeCategory);

  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            <h1 className="hero-large" style={{ marginBottom: "24px" }}>
              Galerie
            </h1>
            <p className="body-large" style={{ color: "var(--text-secondary)", marginBottom: "32px" }}>
              Découvrez nos plus belles réalisations à travers une sélection d'événements exceptionnels 
              que nous avons eu le privilège d'organiser pour nos clients.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ background: "var(--bg-secondary)", padding: "40px 0" }}>
        <div className="container">
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "16px", 
            flexWrap: "wrap",
            marginBottom: "20px"
          }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "btn-primary" : "btn-secondary"}
                style={{ 
                  minWidth: "auto",
                  padding: "12px 20px",
                  height: "auto"
                }}
              >
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
                  className="gallery-item"
                  onClick={() => openLightbox(item, index)}
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="gallery-image"
                  />
                  <div className="gallery-overlay">
                    <h3 className="heading-3" style={{ color: "white", marginBottom: "8px" }}>
                      {item.title}
                    </h3>
                    <p className="body-small" style={{ color: "rgba(255,255,255,0.8)" }}>
                      {item.category}
                    </p>
                  </div>
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
                src="https://bahoova.com/wp-content/uploads/2022/08/h2_img2.jpg"
                alt="Mariage de luxe"
                style={{ 
                  width: "100%", 
                  height: "250px", 
                  objectFit: "cover", 
                  marginBottom: "16px",
                  border: "1px solid var(--border-light)"
                }}
              />
              <h3 className="heading-3" style={{ marginBottom: "8px" }}>
                Mariage élégant
              </h3>
              <p className="body-small" style={{ color: "var(--text-secondary)" }}>
                Un mariage de rêve dans un cadre d'exception
              </p>
            </div>
            
            <div style={{ textAlign: "center" }}>
              <img 
                src="https://bahoova.com/wp-content/uploads/2022/08/h2_img4.jpg"
                alt="Gala corporatif"
                style={{ 
                  width: "100%", 
                  height: "250px", 
                  objectFit: "cover", 
                  marginBottom: "16px",
                  border: "1px solid var(--border-light)"
                }}
              />
              <h3 className="heading-3" style={{ marginBottom: "8px" }}>
                Gala annuel entreprise
              </h3>
              <p className="body-small" style={{ color: "var(--text-secondary)" }}>
                Soirée de prestige pour 400 invités
              </p>
            </div>
            
            <div style={{ textAlign: "center" }}>
              <img 
                src="https://bahoova.com/wp-content/uploads/2022/08/h2_img5.jpg"
                alt="Événement culturel"
                style={{ 
                  width: "100%", 
                  height: "250px", 
                  objectFit: "cover", 
                  marginBottom: "16px",
                  border: "1px solid var(--border-light)"
                }}
              />
              <h3 className="heading-3" style={{ marginBottom: "8px" }}>
                Exposition d'art privée
              </h3>
              <p className="body-small" style={{ color: "var(--text-secondary)" }}>
                Vernissage exclusif dans une galerie parisienne
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