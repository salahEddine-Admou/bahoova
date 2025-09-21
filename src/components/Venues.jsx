import React from "react";
import { MapPin, ArrowRight, Star, Users, Calendar } from "lucide-react";
import { mockData } from "../mock";

const Venues = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            <h1 className="hero-large" style={{ marginBottom: "24px" }}>
              Nos lieux partenaires
            </h1>
            <p className="body-large" style={{ color: "var(--text-secondary)", marginBottom: "32px" }}>
              Découvrez notre sélection exclusive de venues prestigieuses, choisies pour leur élégance, 
              leur caractère unique et leur capacité à sublimer vos événements les plus importants.
            </p>
          </div>
        </div>
      </section>

      {/* Venues Grid */}
      <section className="section-padding-small" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="grid-product-showcase">
            {mockData.venues.map((venue, index) => (
              <div key={index} className="venue-card hover-lift">
                <img 
                  src={venue.image} 
                  alt={venue.name}
                  className="venue-card-image"
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&crop=center&t=${Date.now()}`;
                  }}
                  loading="lazy"
                />
                <div style={{ padding: "24px" }}>
                  <h3 className="venue-card-title" style={{ padding: 0, marginBottom: "8px" }}>
                    {venue.name}
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                    <MapPin size={16} color="var(--text-secondary)" />
                    <p className="body-small" style={{ color: "var(--text-secondary)", margin: 0 }}>
                      {venue.address}
                    </p>
                  </div>
                  <p className="venue-card-description" style={{ padding: 0, marginBottom: "16px" }}>
                    {venue.description}
                  </p>
                  <button className="btn-icon" style={{ padding: 0 }}>
                    Voir les détails
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <button className="btn-primary">
              Voir plus de lieux
            </button>
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
            <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/contact" className="btn-primary">
                Consulter nos experts
              </a>
              <a href="/services" className="btn-secondary">
                Voir nos services
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Venues;