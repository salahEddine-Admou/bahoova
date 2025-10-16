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
              Qui sommes-nous ?
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              lineHeight: '1.6',
              fontWeight: '300'
            }}>
              Bahova Event est une agence événementielle spécialisée dans la conception et l'organisation d'événements sur mesure. 
              Plus qu'un simple prestataire, nous sommes des créateurs d'expériences uniques, où l'excellence se mêle à l'émotion.
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
                  Nos Domaines d'Expertise
                </h2>
                <div style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: '#666',
                  marginBottom: '2rem'
                }}>
                  <p style={{ marginBottom: '1rem' }}>
                    <strong>Événements d'entreprise :</strong> conférences, séminaires, team buildings, lancements de produits.
                  </p>
                  <p style={{ marginBottom: '1rem' }}>
                    <strong>Événements privés :</strong> mariages d'exception, galas, réceptions exclusives.
                  </p>
                  <p>
                    <strong>Scénographie & technique :</strong> conception artistique, décors sur mesure, sonorisation, lumière, audiovisuel
                  </p>
                </div>
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
              Notre Signature
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Chaque projet signé Bahova Event repose sur trois piliers
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '40px' 
          }}>
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '400',
                color: '#1a1a1a',
                marginBottom: '16px'
              }}>
                1. Créativité
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#666'
              }}>
                Concevoir des concepts originaux et élégants.
              </p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '400',
                color: '#1a1a1a',
                marginBottom: '16px'
              }}>
                2. Rigueur
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#666'
              }}>
                Garantir une organisation fluide et irréprochable.
              </p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '400',
                color: '#1a1a1a',
                marginBottom: '16px'
              }}>
                3. Émotion
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#666'
              }}>
                Transformer l'instant éphémère en souvenir impérissable.
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
              Pourquoi Choisir Bahova Event ?
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Nos avantages qui font la différence
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '40px' 
          }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '400',
                color: '#1a1a1a',
                marginBottom: '8px'
              }}>
                ✔️ Approche Personnalisée
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#666'
              }}>
                Adaptée à chaque client
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '400',
                color: '#1a1a1a',
                marginBottom: '8px'
              }}>
                ✔️ Réseau de Partenaires
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#666'
              }}>
                Fidèles et haut de gamme
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '400',
                color: '#1a1a1a',
                marginBottom: '8px'
              }}>
                ✔️ Équipe Passionnée
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#666'
              }}>
                Alliant vision stratégique et souci du détail
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
              Notre Promesse
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Plus qu'un événement, une signature.<br />
              Avec Bahova Event, vos idées prennent vie dans des univers mémorables, fidèles à vos valeurs et à votre image.
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
                Voir Notre Galerie
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Agency;
