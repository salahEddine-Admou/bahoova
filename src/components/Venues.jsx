import React, { useState } from "react";
import { MapPin, ArrowRight, Star, Users, Calendar, Filter, Search, Sparkles, Zap, Heart, Target, Rocket, X, CheckCircle } from "lucide-react";
import { mockData } from "../mock";
import ColorSwitcher from "./ColorSwitcher";
import AnimatedText from "./AnimatedText";

const Venues = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVenue, setSelectedVenue] = useState(null);

  // Get unique categories with safety check
  const venues = mockData.venues || [];
  const categories = ["Tous", ...new Set(venues.map(venue => venue.category))];

  // Filter venues based on category and search term
  const filteredVenues = venues.filter(venue => {
    const matchesCategory = selectedCategory === "Tous" || venue.category === selectedCategory;
    const matchesSearch = venue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         venue.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         venue.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleVenueClick = (venue) => {
    setSelectedVenue(venue);
  };

  const closeModal = () => {
    setSelectedVenue(null);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding" style={{ position: "relative", overflow: "hidden" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto", position: "relative" }}>
            <ColorSwitcher>
              <h1 
                className="hero-large fade-in" 
                style={{ 
                  marginBottom: "24px",
                  background: "linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "gradientShift 3s ease-in-out infinite, fadeIn 1s ease-in-out",
                  position: "relative",
                  zIndex: 2
                }}
              >
                Nos lieux partenaires
              </h1>
              <AnimatedText 
                className="body-large" 
                style={{ 
                  color: "var(--text-secondary)", 
                  marginBottom: "32px",
                  fontSize: "1.2rem",
                  lineHeight: "1.6",
                  animation: "fadeIn 1s ease-in-out 0.5s both",
                  position: "relative",
                  zIndex: 2
                }}
                animation="typewriter"
                delay={1000}
              >
                Découvrez notre sélection exclusive de venues prestigieuses, choisies pour leur élégance, 
                leur caractère unique et leur capacité à sublimer vos événements les plus importants.
              </AnimatedText>
            </ColorSwitcher>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="section-padding-small" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: "24px", 
            marginBottom: "40px",
            alignItems: "center"
          }}>
            {/* Search Bar */}
            <div 
              className="fade-in"
              style={{ 
                position: "relative",
                maxWidth: "500px",
                width: "100%",
                animation: "slideInUp 0.8s ease-out 0.2s both"
              }}
            >
              <Search 
                size={20} 
                style={{ 
                  position: "absolute", 
                  left: "16px", 
                  top: "50%", 
                  transform: "translateY(-50%)",
                  color: "var(--text-secondary)"
                }} 
              />
              <input
                type="text"
                placeholder="Rechercher un lieu, une ville ou une catégorie..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "100%",
                  padding: "16px 16px 16px 50px",
                  border: "2px solid #e2e8f0",
                  borderRadius: "12px",
                  fontSize: "16px",
                  background: "white",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#667eea";
                  e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e2e8f0";
                  e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
                }}
              />
            </div>

            {/* Category Filter */}
            <div 
              className="fade-in"
              style={{ 
                display: "flex", 
                flexWrap: "wrap", 
                gap: "12px", 
                justifyContent: "center",
                animation: "slideInUp 0.8s ease-out 0.4s both"
              }}
            >
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    padding: "12px 24px",
                    borderRadius: "25px",
                    border: "2px solid",
                    background: selectedCategory === category 
                      ? "linear-gradient(135deg, #667eea, #764ba2)" 
                      : "white",
                    color: selectedCategory === category ? "white" : "var(--text-primary)",
                    borderColor: selectedCategory === category ? "transparent" : "#e2e8f0",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    fontWeight: "500",
                    fontSize: "14px",
                    boxShadow: selectedCategory === category 
                      ? "0 8px 25px rgba(102, 126, 234, 0.3)" 
                      : "0 4px 15px rgba(0,0,0,0.1)",
                    animation: `slideInUp 0.8s ease-out ${0.6 + index * 0.1}s both`
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category) {
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category) {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div 
              className="fade-in"
              style={{ 
                textAlign: "center",
                animation: "slideInUp 0.8s ease-out 0.8s both"
              }}
            >
              <p style={{ 
                color: "var(--text-secondary)", 
                fontSize: "16px",
                fontWeight: "500"
              }}>
                {filteredVenues.length} lieu{filteredVenues.length > 1 ? 'x' : ''} trouvé{filteredVenues.length > 1 ? 's' : ''}
                {selectedCategory !== "Tous" && ` dans la catégorie "${selectedCategory}"`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Venues Grid */}
      <section className="section-padding-small" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", 
            gap: "32px" 
          }}>
            {filteredVenues.map((venue, index) => (
              <div 
                key={index} 
                className="fade-in"
                style={{
                  background: "white",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  animation: `slideInUp 0.8s ease-out ${1 + index * 0.1}s both`,
                  position: "relative"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
                }}
              >
                {/* Image Container */}
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <img 
                    src={venue.image} 
                    alt={venue.name}
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                      transition: "transform 0.3s ease"
                    }}
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&crop=center&t=${Date.now()}`;
                    }}
                    loading="lazy"
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                    }}
                  />
                  
                  {/* Category Badge */}
                  <div style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    background: "linear-gradient(135deg, #667eea, #764ba2)",
                    color: "white",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "600",
                    boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)"
                  }}>
                    {venue.category}
                  </div>

                </div>

                {/* Content */}
                <div style={{ padding: "24px" }}>
                  <h3 style={{ 
                    fontSize: "1.5rem", 
                    fontWeight: "700", 
                    marginBottom: "12px",
                    color: "var(--text-primary)",
                    lineHeight: "1.3"
                  }}>
                    {venue.name}
                  </h3>
                  
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                    <MapPin size={16} color="var(--text-secondary)" />
                    <p style={{ 
                      color: "var(--text-secondary)", 
                      margin: 0, 
                      fontSize: "14px",
                      lineHeight: "1.4"
                    }}>
                      {venue.address}
                    </p>
                  </div>

                  <p style={{ 
                    color: "var(--text-secondary)", 
                    marginBottom: "20px",
                    fontSize: "14px",
                    lineHeight: "1.5"
                  }}>
                    {venue.description}
                  </p>

                  {/* Capacity and Features */}
                  <div style={{ 
                    display: "flex", 
                    flexWrap: "wrap", 
                    gap: "12px", 
                    marginBottom: "20px" 
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "#f8f9ff",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#667eea"
                    }}>
                      <Users size={14} />
                      {venue.capacity}
                    </div>
                    
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "#f0f9ff",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#10ac84"
                    }}>
                      <Star size={14} />
                      {venue.category}
                    </div>
                  </div>

                  <button 
                    style={{ 
                      width: "100%",
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      gap: "8px",
                      padding: "12px 24px",
                      background: "linear-gradient(135deg, #667eea, #764ba2)",
                      color: "white",
                      border: "none",
                      borderRadius: "12px",
                      fontSize: "14px",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)"
                    }}
                    onClick={() => handleVenueClick(venue)}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow = "0 8px 25px rgba(102, 126, 234, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.3)";
                    }}
                  >
                    Voir les détails
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Venue Features */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-two-column">
            <div>
              <h2 className="hero-medium" style={{ marginBottom: "24px" }}>
                Des lieux d'exception pour vos événements
              </h2>
              <p className="body-large" style={{ color: "var(--text-secondary)", marginBottom: "32px" }}>
                Notre réseau de partenaires venues comprend des espaces uniques, alliant prestige, 
                fonctionnalité et beauté architecturale pour créer le cadre parfait de vos célébrations.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div style={{ 
                    width: "40px", 
                    height: "40px", 
                    background: "var(--bg-secondary)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid var(--border-light)",
                    flexShrink: 0
                  }}>
                    <Star size={20} color="var(--text-primary)" />
                  </div>
                  <div>
                    <h3 className="heading-3" style={{ marginBottom: "8px" }}>
                      Lieux prestigieux
                    </h3>
                    <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                      Châteaux, hôtels de luxe, espaces historiques et venues contemporaines
                    </p>
                  </div>
                </div>
                
                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div style={{ 
                    width: "40px", 
                    height: "40px", 
                    background: "var(--bg-secondary)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid var(--border-light)",
                    flexShrink: 0
                  }}>
                    <Users size={20} color="var(--text-primary)" />
                  </div>
                  <div>
                    <h3 className="heading-3" style={{ marginBottom: "8px" }}>
                      Toutes capacités
                    </h3>
                    <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                      De l'événement intime de 20 personnes au gala de 500+ invités
                    </p>
                  </div>
                </div>
                
                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div style={{ 
                    width: "40px", 
                    height: "40px", 
                    background: "var(--bg-secondary)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid var(--border-light)",
                    flexShrink: 0
                  }}>
                    <Calendar size={20} color="var(--text-primary)" />
                  </div>
                  <div>
                    <h3 className="heading-3" style={{ marginBottom: "8px" }}>
                      Disponibilité optimale
                    </h3>
                    <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                      Réservation facilitée et accès privilégié à nos venues partenaires
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://bahoova.com/wp-content/uploads/2022/08/venues-1.jpeg"
                alt="Venue de prestige"
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

      {/* Types of Venues */}
      <section className="section-padding-small" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="heading-1">Types de lieux disponibles</h2>
            <p className="body-large" style={{ marginTop: "16px", color: "var(--text-secondary)" }}>
              Une diversité de venues pour tous vos types d'événements
            </p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "32px" }}>
            <div style={{ padding: "32px 24px", background: "var(--bg-primary)", border: "1px solid var(--border-light)", textAlign: "center" }}>
              <h3 className="heading-3" style={{ marginBottom: "16px" }}>
                Venues de mariage
              </h3>
              <p className="body-regular" style={{ color: "var(--text-secondary)", marginBottom: "16px" }}>
                Châteaux romantiques, jardins privés, salles de réception élégantes
              </p>
              <p className="body-small" style={{ color: "var(--text-light)" }}>
                Capacité : 50-300 invités
              </p>
            </div>
            
            <div style={{ padding: "32px 24px", background: "var(--bg-primary)", border: "1px solid var(--border-light)", textAlign: "center" }}>
              <h3 className="heading-3" style={{ marginBottom: "16px" }}>
                Espaces corporatifs
              </h3>
              <p className="body-regular" style={{ color: "var(--text-secondary)", marginBottom: "16px" }}>
                Centres de conférence, hôtels d'affaires, espaces modulables
              </p>
              <p className="body-small" style={{ color: "var(--text-light)" }}>
                Capacité : 20-500 invités
              </p>
            </div>
            
            <div style={{ padding: "32px 24px", background: "var(--bg-primary)", border: "1px solid var(--border-light)", textAlign: "center" }}>
              <h3 className="heading-3" style={{ marginBottom: "16px" }}>
                Lieux culturels
              </h3>
              <p className="body-regular" style={{ color: "var(--text-secondary)", marginBottom: "16px" }}>
                Musées, galeries d'art, théâtres, espaces patrimoniaux
              </p>
              <p className="body-small" style={{ color: "var(--text-light)" }}>
                Capacité : 30-200 invités
              </p>
            </div>
            
            <div style={{ padding: "32px 24px", background: "var(--bg-primary)", border: "1px solid var(--border-light)", textAlign: "center" }}>
              <h3 className="heading-3" style={{ marginBottom: "16px" }}>
                Espaces plein air
              </h3>
              <p className="body-regular" style={{ color: "var(--text-secondary)", marginBottom: "16px" }}>
                Jardins botaniques, terrasses panoramiques, domaines viticoles
              </p>
              <p className="body-small" style={{ color: "var(--text-light)" }}>
                Capacité : 40-400 invités
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
              Trouvons le lieu idéal pour votre événement
            </h2>
            <p className="body-large" style={{ color: "var(--text-secondary)", marginBottom: "32px" }}>
              Nos experts vous accompagnent dans la sélection du venue parfait selon vos besoins, 
              votre budget et vos préférences esthétiques.
            </p>
          </div>
        </div>
      </section>

      {/* Venue Details Modal */}
      {selectedVenue && (
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
            maxWidth: "900px",
            width: "100%",
            maxHeight: "90vh",
            overflow: "auto",
            position: "relative",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)"
          }}>
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
            <div style={{ padding: "40px" }}>
              <div style={{ display: "flex", gap: "30px", alignItems: "flex-start" }}>
                <img 
                  src={selectedVenue.image}
                  alt={selectedVenue.name}
                  style={{
                    width: "300px",
                    height: "200px",
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
                    {selectedVenue.name}
                  </h2>
                  
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                    <MapPin size={16} color="var(--text-secondary)" />
                    <p style={{ color: "var(--text-secondary)", margin: 0, fontSize: "14px" }}>
                      {selectedVenue.address}
                    </p>
                  </div>

                  <p className="body-large" style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>
                    {selectedVenue.description}
                  </p>
                  
                  <div style={{ marginBottom: "24px" }}>
                    <h3 className="heading-3" style={{ marginBottom: "12px", color: "var(--text-primary)" }}>
                      Caractéristiques du lieu :
                    </h3>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                        <CheckCircle size={16} color="var(--success)" />
                        <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                          Capacité : {selectedVenue.capacity}
                        </span>
                      </li>
                      <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                        <CheckCircle size={16} color="var(--success)" />
                        <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                          Catégorie : {selectedVenue.category}
                        </span>
                      </li>
                      <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                        <CheckCircle size={16} color="var(--success)" />
                        <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                          Parking disponible
                        </span>
                      </li>
                      <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                        <CheckCircle size={16} color="var(--success)" />
                        <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                          Accès handicapés
                        </span>
                      </li>
                      <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                        <CheckCircle size={16} color="var(--success)" />
                        <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                          Climatisation
                        </span>
                      </li>
                      <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                        <CheckCircle size={16} color="var(--success)" />
                        <span className="body-regular" style={{ color: "var(--text-secondary)" }}>
                          Équipement audiovisuel inclus
                        </span>
                      </li>
                    </ul>
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

export default Venues;