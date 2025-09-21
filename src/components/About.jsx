import React from "react";
import { Award, Users, Clock, Heart } from "lucide-react";
import { mockData } from "../mock";

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-two-column">
            <div>
              <h1 className="hero-large" style={{ marginBottom: "32px" }}>
                Qui sommes-nous ?
              </h1>
              <p className="body-large" style={{ marginBottom: "24px", color: "var(--text-secondary)" }}>
                {mockData.company.vision}
              </p>
              <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                Chez BAHOOVA Events, nous croyons que chaque événement raconte une histoire unique. 
                Notre passion pour l'excellence et notre attention aux détails font de nous le partenaire 
                idéal pour concrétiser vos rêves les plus ambitieux.
              </p>
            </div>
            <div>
              <img 
                src={mockData.heroImages.about}
                alt="BAHOOVA Events Team"
                style={{ 
                  width: "100%", 
                  height: "400px", 
                  objectFit: "cover",
                  border: "1px solid var(--border-light)"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding-small" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="heading-1">Nos chiffres parlent d'eux-mêmes</h2>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ 
                width: "80px", 
                height: "80px", 
                background: "var(--bg-primary)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
                border: "1px solid var(--border-light)"
              }}>
                <Clock size={32} color="var(--text-primary)" />
              </div>
              <div className="hero-medium" style={{ color: "var(--interactive-base)", marginBottom: "8px" }}>
                15 ans
              </div>
              <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                d'expérience reconnue
              </p>
            </div>
            
            <div style={{ textAlign: "center" }}>
              <div style={{ 
                width: "80px", 
                height: "80px", 
                background: "var(--bg-primary)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
                border: "1px solid var(--border-light)"
              }}>
                <Users size={32} color="var(--text-primary)" />
              </div>
              <div className="hero-medium" style={{ color: "var(--interactive-base)", marginBottom: "8px" }}>
                350
              </div>
              <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                employés à temps plein
              </p>
            </div>
            
            <div style={{ textAlign: "center" }}>
              <div style={{ 
                width: "80px", 
                height: "80px", 
                background: "var(--bg-primary)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
                border: "1px solid var(--border-light)"
              }}>
                <Award size={32} color="var(--text-primary)" />
              </div>
              <div className="hero-medium" style={{ color: "var(--interactive-base)", marginBottom: "8px" }}>
                25
              </div>
              <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                événements par an
              </p>
            </div>
            
            <div style={{ textAlign: "center" }}>
              <div style={{ 
                width: "80px", 
                height: "80px", 
                background: "var(--bg-primary)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
                border: "1px solid var(--border-light)"
              }}>
                <Heart size={32} color="var(--text-primary)" />
              </div>
              <div className="hero-medium" style={{ color: "var(--interactive-base)", marginBottom: "8px" }}>
                720
              </div>
              <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                services par jour
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2 className="heading-1">Nos valeurs fondamentales</h2>
            <p className="body-large" style={{ marginTop: "16px", color: "var(--text-secondary)" }}>
              Les principes qui guident chacune de nos actions
            </p>
          </div>
          
          <div className="grid-product-showcase">
            {mockData.coreValues.map((value, index) => (
              <div key={index} className="service-card hover-lift" style={{ textAlign: "center", padding: "40px 24px" }}>
                <h3 className="heading-2" style={{ marginBottom: "16px" }}>
                  {value.title}
                </h3>
                <p className="body-regular" style={{ color: "var(--text-secondary)" }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding-small" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 className="heading-1">Notre équipe passionnée</h2>
            <p className="body-large" style={{ marginTop: "16px", color: "var(--text-secondary)" }}>
              Des professionnels dévoués à l'excellence de vos événements
            </p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
            <div style={{ textAlign: "center" }}>
              <img 
                src="https://bahoova.com/wp-content/uploads/2022/08/h2_img2.jpg"
                alt="Équipe événementiel"
                style={{ 
                  width: "100%", 
                  height: "250px", 
                  objectFit: "cover", 
                  marginBottom: "16px",
                  border: "1px solid var(--border-light)"
                }}
              />
              <h3 className="heading-3" style={{ marginBottom: "8px" }}>
                Équipe Créative
              </h3>
              <p className="body-small" style={{ color: "var(--text-secondary)" }}>
                Designers et concepteurs d'événements
              </p>
            </div>
            
            <div style={{ textAlign: "center" }}>
              <img 
                src="https://bahoova.com/wp-content/uploads/2022/08/h2_img4.jpg"
                alt="Équipe gestion"
                style={{ 
                  width: "100%", 
                  height: "250px", 
                  objectFit: "cover", 
                  marginBottom: "16px",
                  border: "1px solid var(--border-light)"
                }}
              />
              <h3 className="heading-3" style={{ marginBottom: "8px" }}>
                Équipe Gestion
              </h3>
              <p className="body-small" style={{ color: "var(--text-secondary)" }}>
                Coordinateurs et gestionnaires de projet
              </p>
            </div>
            
            <div style={{ textAlign: "center" }}>
              <img 
                src="https://bahoova.com/wp-content/uploads/2022/08/h2_img5.jpg"
                alt="Équipe technique"
                style={{ 
                  width: "100%", 
                  height: "250px", 
                  objectFit: "cover", 
                  marginBottom: "16px",
                  border: "1px solid var(--border-light)"
                }}
              />
              <h3 className="heading-3" style={{ marginBottom: "8px" }}>
                Équipe Technique
              </h3>
              <p className="body-small" style={{ color: "var(--text-secondary)" }}>
                Techniciens et spécialistes logistiques
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;