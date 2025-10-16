import React from "react";
import { mockData } from "../mock";

const Agency = () => {
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
              Agence
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              lineHeight: '1.6',
              fontWeight: '300'
            }}>
              BAHOOVA Events est une agence de gestion d'événements à service complet basée au Maroc, 
              spécialisée dans la création d'expériences exceptionnelles pour les clients corporatifs et privés.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: '80px 0', background: '#fafafa' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
              <div>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '300',
                  color: '#1a1a1a',
                  marginBottom: '2rem',
                  letterSpacing: '0.5px'
                }}>
                  Notre Histoire
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: '#666',
                  marginBottom: '2rem'
                }}>
                  Fondée en 2008, BAHOOVA Events s'est établie comme une agence de gestion d'événements 
                  leader au Maroc. Notre équipe de professionnels expérimentés allie créativité, 
                  précision et expertise locale pour livrer des événements inoubliables.
                </p>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: '#666'
                }}>
                  Des rassemblements intimes aux événements corporatifs de grande envergure, nous abordons chaque projet 
                  avec le même niveau de dévouement et d'attention aux détails qui a fait de nous le 
                  choix privilégié pour une clientèle exigeante au Maroc et à l'international.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop&crop=center"
                  alt="BAHOOVA Events Team"
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Nos Valeurs
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Les principes qui guident tout ce que nous faisons
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '40px' 
          }}>
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#f8f8f8',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                fontSize: '2rem'
              }}>
                ✨
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '400',
                color: '#1a1a1a',
                marginBottom: '16px'
              }}>
                Excellence
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#666'
              }}>
                Nous visons la perfection dans chaque détail, nous assurant que chaque événement dépasse les attentes 
                et crée des souvenirs durables.
              </p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#f8f8f8',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                fontSize: '2rem'
              }}>
                🎨
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '400',
                color: '#1a1a1a',
                marginBottom: '16px'
              }}>
                Créativité
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#666'
              }}>
                Nous apportons des idées fraîches et des concepts innovants à chaque projet, créant des 
                expériences uniques qui se démarquent de l'ordinaire.
              </p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#f8f8f8',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                fontSize: '2rem'
              }}>
                🤝
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '400',
                color: '#1a1a1a',
                marginBottom: '16px'
              }}>
                Partenariat
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#666'
              }}>
                Nous travaillons étroitement avec nos clients en tant que partenaires de confiance, comprenant leur vision 
                et la donnant vie avec professionnalisme et attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Notre Équipe
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Rencontrez les professionnels passionnés derrière BAHOOVA Events
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '40px' 
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '200px',
                height: '200px',
                background: '#f0f0f0',
                borderRadius: '50%',
                margin: '0 auto 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem'
              }}>
                👨‍💼
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '400',
                color: '#1a1a1a',
                marginBottom: '8px'
              }}>
                Équipe de Direction
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#666'
              }}>
                Professionnels expérimentés avec des décennies d'expertise combinée en gestion d'événements
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '200px',
                height: '200px',
                background: '#f0f0f0',
                borderRadius: '50%',
                margin: '0 auto 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem'
              }}>
                🎨
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '400',
                color: '#1a1a1a',
                marginBottom: '8px'
              }}>
                Équipe Créative
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#666'
              }}>
                Designers talentueux et esprits créatifs qui donnent vie à votre vision
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '200px',
                height: '200px',
                background: '#f0f0f0',
                borderRadius: '50%',
                margin: '0 auto 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem'
              }}>
                ⚙️
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '400',
                color: '#1a1a1a',
                marginBottom: '8px'
              }}>
                Équipe Opérationnelle
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#666'
              }}>
                Professionnels dévoués assurant une exécution parfaite de chaque événement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
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
    </main>
  );
};

export default Agency;
