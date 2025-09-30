import React, { useState, useEffect } from "react";
import { Award, Users, Clock, Heart, Sparkles, Zap, Star, Target, Rocket, Shield, ChevronLeft, ChevronRight, Play, Pause, Calendar, Settings, Palette, Handshake } from "lucide-react";
import { mockData } from "../mock";
import ColorSwitcher from "./ColorSwitcher";
import AnimatedText from "./AnimatedText";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const aboutImages = [
    {
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
      fallback: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
      title: "Créateurs d'Expériences",
      description: "Des événements sur mesure où l'excellence se mêle à l'émotion"
    },
    {
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
      fallback: "https://images.unsplash.com/photo-1556761175-4b46a1b1b616?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
      title: "Événements d'Entreprise",
      description: "Conférences, séminaires et lancements de produits professionnels"
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-4b46a1b1b616?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
      fallback: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
      title: "Mariages d'Exception",
      description: "Des cérémonies uniques et des réceptions inoubliables"
    },
    {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
      fallback: "https://images.unsplash.com/photo-1576091160550-2173dba0efed?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
      title: "Scénographie Artistique",
      description: "Décors sur mesure, éclairage et ambiance créative"
    },
    {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba0efed?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
      fallback: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
      title: "Séminaires & Conférences",
      description: "Organisation professionnelle de vos événements d'entreprise"
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % aboutImages.length
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, aboutImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % aboutImages.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + aboutImages.length) % aboutImages.length
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding" style={{ position: "relative", overflow: "hidden" }}>
        <ColorSwitcher>
        <div className="container">
          <div className="grid-two-column">
              <div style={{ position: "relative", zIndex: 2 }}>
                <h1 
                  className="hero-large fade-in"
                  style={{ 
                    marginBottom: "32px",
                    fontSize: "3.5rem",
                    fontWeight: "700",
                    color: "#667eea",
                    background: "linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c)",
                    backgroundSize: "300% 300%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "gradientShift 3s ease-in-out infinite, fadeIn 1s ease-out 0.3s both"
                  }}
                >
                Qui sommes-nous ?
              </h1>
                <p 
                  className="body-large fade-in"
                  style={{ 
                    marginBottom: "24px", 
                    color: "var(--text-secondary)",
                    fontSize: "1.25rem",
                    lineHeight: "1.6",
                    animation: "fadeIn 1s ease-out 0.6s both"
                  }}
                >
                  Bahova Event est une agence événementielle spécialisée dans la conception et l'organisation d'événements sur mesure. Plus qu'un simple prestataire, nous sommes des créateurs d'expériences uniques, où l'excellence se mêle à l'émotion.
                </p>
            </div>
              <div style={{ position: "relative" }}>
                <div 
                  className="fade-in"
                  style={{
                    animation: "slideInUp 1s ease-out 0.5s both",
                    position: "relative",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                >
                  {/* Simple Image Slider Container */}
                  <div style={{
                    position: "relative",
                    width: "100%",
                    height: "450px",
                    overflow: "hidden",
                    borderRadius: "16px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                  }}>
                    {/* Simple Slider Images */}
                    {aboutImages.map((image, index) => {
                      const isActive = index === currentImageIndex;
                      
                      return (
                        <div
                          key={index}
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            opacity: isActive ? 1 : 0,
                            transform: isActive ? "scale(1)" : "scale(1.1)",
                            transition: "all 0.8s ease-in-out",
                            zIndex: isActive ? 2 : 1
                          }}
                        >
                          <img 
                            src={image.src}
                            alt={image.title}
                            style={{ 
                              width: "100%", 
                              height: "100%", 
                              objectFit: "cover",
                              borderRadius: "16px"
                            }}
                            onError={(e) => {
                              if (e.target.src !== image.fallback) {
                                e.target.src = image.fallback;
                              } else {
                                e.target.src = `https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&crop=center&auto=format&q=80&t=${Date.now()}`;
                              }
                            }}
                            loading="lazy"
                          />
                        </div>
                      );
                    })}
                    
                    {/* Simple Text Overlay */}
                    <div style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      right: "0",
                      background: "linear-gradient(transparent, rgba(0, 0, 0, 0.8))",
                      padding: "40px 20px 20px",
                      borderRadius: "0 0 16px 16px",
                      zIndex: 3
                    }}>
                      <h3 style={{
                        color: "white",
                        fontSize: "1.4rem",
                        fontWeight: "600",
                        marginBottom: "8px",
                        textShadow: "0 2px 4px rgba(0,0,0,0.5)"
                      }}>
                        {aboutImages[currentImageIndex].title}
                      </h3>
                      <p style={{
                        color: "rgba(255, 255, 255, 0.9)",
                        fontSize: "1rem",
                        margin: 0,
                        lineHeight: "1.4"
                      }}>
                        {aboutImages[currentImageIndex].description}
                      </p>
                    </div>
                    
                    {/* Simple Navigation Arrows */}
                    <button
                      onClick={prevImage}
                      style={{
                        position: "absolute",
                        left: "15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(255, 255, 255, 0.9)",
                        border: "none",
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        zIndex: 4,
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = "white";
                        e.target.style.transform = "translateY(-50%) scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "rgba(255, 255, 255, 0.9)";
                        e.target.style.transform = "translateY(-50%) scale(1)";
                      }}
                    >
                      <ChevronLeft size={24} color="#333" />
                    </button>
                    
                    <button
                      onClick={nextImage}
                      style={{
                        position: "absolute",
                        right: "15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(255, 255, 255, 0.9)",
                        border: "none",
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        zIndex: 4,
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = "white";
                        e.target.style.transform = "translateY(-50%) scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "rgba(255, 255, 255, 0.9)";
                        e.target.style.transform = "translateY(-50%) scale(1)";
                      }}
                    >
                      <ChevronRight size={24} color="#333" />
                    </button>
                    
                    {/* Simple Dots Indicator */}
                    <div style={{
                      position: "absolute",
                      bottom: "20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      display: "flex",
                      gap: "8px",
                      zIndex: 4
                    }}>
                      {aboutImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          style={{
                            width: "12px",
                            height: "12px",
                            borderRadius: "50%",
                            border: "none",
                            background: index === currentImageIndex 
                              ? "white" 
                              : "rgba(255, 255, 255, 0.5)",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            transform: index === currentImageIndex ? "scale(1.2)" : "scale(1)",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.3)"
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = "white";
                            e.target.style.transform = "scale(1.3)";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = index === currentImageIndex 
                              ? "white" 
                              : "rgba(255, 255, 255, 0.5)";
                            e.target.style.transform = index === currentImageIndex ? "scale(1.2)" : "scale(1)";
                          }}
                        />
                      ))}
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ColorSwitcher>
      </section>

      {/* Expertise Domains Section */}
      <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 
              className="heading-1 fade-in"
              style={{ 
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#667eea",
                background: "linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "gradientShift 3s ease-in-out infinite, fadeIn 1s ease-out 0.3s both"
              }}
            >
              Nos Domaines d'Expertise
            </h2>
            <p className="body-large" style={{ marginTop: "16px", color: "var(--text-secondary)" }}>
              Des événements d'entreprise aux mariages d'exception, nous créons des expériences mémorables
            </p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
            {[
              {
                icon: Users,
                title: "Événements d'entreprise",
                description: "Conférences, séminaires, team buildings, lancements de produits",
                color: "#667eea",
                image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=center&auto=format&q=80"
              },
              {
                icon: Heart,
                title: "Événements privés",
                description: "Mariages d'exception, galas, réceptions exclusives",
                color: "#f093fb",
                image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&crop=center&auto=format&q=80"
              },
              {
                icon: Palette,
                title: "Scénographie & technique",
                description: "Conception artistique, décors sur mesure, sonorisation, lumière, audiovisuel",
                color: "#764ba2",
                image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&crop=center&auto=format&q=80"
              }
            ].map((expertise, index) => (
              <div 
                key={index}
                className="fade-in"
                style={{ 
                  textAlign: "center",
                  animation: `slideInUp 0.8s ease-out ${0.5 + index * 0.2}s both`,
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  background: "white"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-15px) scale(1.03)";
                  e.currentTarget.style.boxShadow = `0 25px 50px ${expertise.color}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.1)";
                }}
              >
                <div style={{ position: "relative", overflow: "hidden", height: "200px" }}>
                  <img 
                    src={expertise.image}
                    alt={expertise.title}
                    style={{ 
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover",
                      transition: "transform 0.4s ease"
                    }}
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&crop=center&auto=format&q=80&t=${Date.now()}`;
                    }}
                    loading="lazy"
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${expertise.color}40, ${expertise.color}60)`,
                    transition: "opacity 0.3s ease"
                  }} />
                  
                  {/* Icon */}
                  <div style={{ 
                    position: "absolute", 
                    top: "50%", 
                    left: "50%", 
                    transform: "translate(-50%, -50%)",
                    width: "80px", 
                    height: "80px", 
                    background: `linear-gradient(135deg, ${expertise.color}, ${expertise.color}80)`,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: `3px solid white`,
                    boxShadow: `0 10px 30px ${expertise.color}50`,
                    zIndex: 2
                  }}>
                    <expertise.icon size={40} color="white" />
                  </div>
                </div>
                
                <div style={{ padding: "30px 24px" }}>
                  <h3 
                    className="heading-3" 
                    style={{ 
                      marginBottom: "12px",
                      color: expertise.color,
                      fontSize: "1.6rem",
                      fontWeight: "600"
                    }}
                  >
                    {expertise.title}
                  </h3>
                  <p 
                    className="body-regular" 
                    style={{ 
                      color: "var(--text-secondary)",
                      fontSize: "1.1rem",
                      lineHeight: "1.6"
                    }}
                  >
                    {expertise.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding-small" style={{ background: "var(--bg-secondary)", position: "relative" }}>
        <div className="container">
          <div 
            className="fade-in"
            style={{ 
              textAlign: "center", 
              marginBottom: "60px",
              animation: "slideUp 0.8s ease-out 0.3s both"
            }}
          >
            <h2 
              className="heading-1 fade-in"
              style={{ 
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#667eea",
                background: "linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "gradientShift 3s ease-in-out infinite, fadeIn 1s ease-out 0.3s both"
              }}
            >
              Nos chiffres parlent d'eux-mêmes
            </h2>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px" }}>
            {[
              { icon: Clock, value: "15 ans", label: "d'expérience reconnue", color: "#667eea" },
              { icon: Users, value: "350", label: "employés à temps plein", color: "#764ba2" },
              { icon: Award, value: "25", label: "événements par an", color: "#f093fb" },
              { icon: Heart, value: "720", label: "services par jour", color: "#f5576c" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="fade-in"
                style={{ 
                  textAlign: "center",
                  animation: `slideInUp 0.8s ease-out ${0.5 + index * 0.2}s both`,
                  transform: hoveredStat === index ? "translateY(-10px) scale(1.05)" : "translateY(0) scale(1)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                }}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
              <div style={{ 
                  width: "100px", 
                  height: "100px", 
                  background: `linear-gradient(135deg, ${stat.color}, ${stat.color}20)`,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
                  border: `3px solid ${stat.color}`,
                  boxShadow: hoveredStat === index ? `0 20px 40px ${stat.color}40` : `0 10px 20px ${stat.color}20`,
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden"
                }}>
                  <stat.icon size={40} color="white" />
                  
                  {/* Rotating Ring */}
              <div style={{ 
                    position: "absolute",
                    top: "-5px",
                    left: "-5px",
                    right: "-5px",
                    bottom: "-5px",
                    border: `2px solid ${stat.color}`,
                borderRadius: "50%",
                    animation: hoveredStat === index ? "rotate 2s linear infinite" : "none",
                    opacity: hoveredStat === index ? 1 : 0,
                    transition: "opacity 0.3s ease"
                  }} />
              </div>
                <div 
                  className="hero-medium" 
                  style={{ 
                    color: stat.color, 
                    marginBottom: "8px",
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    textShadow: `0 0 20px ${stat.color}40`
                  }}
                >
                  {stat.value}
              </div>
                <p className="body-regular" style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
                  {stat.label}
              </p>
            
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Section - Three Pillars */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2 
              className="heading-1"
              style={{ 
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#667eea",
                background: "linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "gradientShift 3s ease-in-out infinite, fadeIn 1s ease-out 0.3s both"
              }}
            >
              Notre Signature
            </h2>
            <p className="body-large" style={{ marginTop: "16px", color: "var(--text-secondary)" }}>
              Chaque projet signé Bahova Event repose sur trois piliers fondamentaux
            </p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
            {[
              {
                icon: Sparkles,
                title: "Créativité",
                description: "Concevoir des concepts originaux et élégants",
                color: "#667eea",
                number: "1"
              },
              {
                icon: Shield,
                title: "Rigueur",
                description: "Garantir une organisation fluide et irréprochable",
                color: "#764ba2",
                number: "2"
              },
              {
                icon: Heart,
                title: "Émotion",
                description: "Transformer l'instant éphémère en souvenir impérissable",
                color: "#f093fb",
                number: "3"
              }
            ].map((pillar, index) => (
              <div 
                key={index}
                className="fade-in"
                style={{ 
                  textAlign: "center",
                  animation: `slideInUp 0.8s ease-out ${0.5 + index * 0.2}s both`,
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  background: "white",
                  padding: "40px 30px"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-15px) scale(1.03)";
                  e.currentTarget.style.boxShadow = `0 25px 50px ${pillar.color}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.1)";
                }}
              >
                {/* Number Badge */}
                <div style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  width: "50px",
                  height: "50px",
                  background: `linear-gradient(135deg, ${pillar.color}, ${pillar.color}80)`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  boxShadow: `0 5px 15px ${pillar.color}50`
                }}>
                  {pillar.number}
                </div>
                
                {/* Icon */}
                <div style={{ 
                  width: "120px", 
                  height: "120px", 
                  background: `linear-gradient(135deg, ${pillar.color}20, ${pillar.color}40)`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 30px",
                  border: `4px solid ${pillar.color}`,
                  boxShadow: `0 10px 30px ${pillar.color}30`,
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden"
                }}>
                  <pillar.icon size={60} color={pillar.color} />
                  
                  {/* Rotating Ring */}
                  <div style={{ 
                    position: "absolute",
                    top: "-8px",
                    left: "-8px",
                    right: "-8px",
                    bottom: "-8px",
                    border: `3px solid ${pillar.color}`,
                    borderRadius: "50%",
                    animation: "rotate 3s linear infinite",
                    opacity: 0.6
                  }} />
                </div>
                
                <h3 
                  className="heading-2" 
                  style={{ 
                    marginBottom: "16px",
                    color: pillar.color,
                    fontSize: "2rem",
                    fontWeight: "700"
                  }}
                >
                  {pillar.title}
                </h3>
                <p 
                  className="body-regular" 
                  style={{ 
                    color: "var(--text-secondary)",
                    fontSize: "1.1rem",
                    lineHeight: "1.6"
                  }}
                >
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Bahova Event Section */}
      <section className="section-padding-small" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 
              className="heading-1"
              style={{ 
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#667eea",
                background: "linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "gradientShift 3s ease-in-out infinite, fadeIn 1s ease-out 0.3s both"
              }}
            >
              Pourquoi Choisir Bahova Event ?
            </h2>
            <p className="body-large" style={{ marginTop: "16px", color: "var(--text-secondary)" }}>
              Des avantages qui font la différence
            </p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "40px" }}>
            {[
              {
                icon: "✓",
                title: "Une approche personnalisée",
                description: "Adaptée à chaque client et à ses besoins spécifiques",
                color: "#667eea"
              },
              {
                icon: "✓",
                title: "Un réseau de partenaires fiables",
                description: "Haut de gamme et sélectionnés avec soin",
                color: "#764ba2"
              },
              {
                icon: "✓",
                title: "Une équipe passionnée",
                description: "Alliant vision stratégique et souci du détail",
                color: "#f093fb"
              }
            ].map((advantage, index) => (
              <div 
                key={index}
                className="fade-in"
                style={{ 
                  animation: `slideInUp 0.8s ease-out ${0.5 + index * 0.2}s both`,
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  background: "white",
                  padding: "40px 30px",
                  display: "flex",
                  alignItems: "center",
                  gap: "24px"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                  e.currentTarget.style.boxShadow = `0 25px 50px ${advantage.color}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.1)";
                }}
              >
                {/* Checkmark Icon */}
                <div style={{ 
                  width: "80px", 
                  height: "80px", 
                  background: `linear-gradient(135deg, ${advantage.color}, ${advantage.color}80)`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `3px solid ${advantage.color}`,
                  boxShadow: `0 10px 30px ${advantage.color}30`,
                  transition: "all 0.3s ease",
                  flexShrink: 0
                }}>
                  <span style={{
                    color: "white",
                    fontSize: "2rem",
                    fontWeight: "700"
                  }}>
                    {advantage.icon}
                  </span>
                </div>
                
                {/* Content */}
                <div style={{ flex: 1 }}>
                  <h3 
                    className="heading-3" 
                    style={{ 
                      marginBottom: "12px",
                      color: advantage.color,
                      fontSize: "1.6rem",
                      fontWeight: "600"
                    }}
                  >
                    {advantage.title}
                  </h3>
                  <p 
                    className="body-regular" 
                    style={{ 
                      color: "var(--text-secondary)",
                      fontSize: "1.1rem",
                      lineHeight: "1.6",
                      margin: 0
                    }}
                  >
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #667eea, #764ba2, #f093fb, #f5576c)", position: "relative", overflow: "hidden" }}>
        <div className="container">
          <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
            <h2 
              className="heading-1 fade-in"
              style={{ 
                fontSize: "3rem",
                fontWeight: "700",
                color: "white",
                marginBottom: "24px",
                textShadow: "0 4px 8px rgba(0,0,0,0.3)",
                animation: "fadeIn 1s ease-out 0.3s both"
              }}
            >
              Notre Promesse
            </h2>
            <p 
              className="body-large fade-in"
              style={{ 
                fontSize: "1.5rem",
                color: "rgba(255, 255, 255, 0.95)",
                marginBottom: "32px",
                lineHeight: "1.6",
                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                animation: "fadeIn 1s ease-out 0.6s both"
              }}
            >
              Plus qu'un événement, une signature.
            </p>
            <p 
              className="body-regular fade-in"
              style={{ 
                fontSize: "1.2rem",
                color: "rgba(255, 255, 255, 0.9)",
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: "1.7",
                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                animation: "fadeIn 1s ease-out 0.9s both"
              }}
            >
              Avec Bahova Event, vos idées prennent vie dans des univers mémorables, fidèles à vos valeurs et à votre image.
            </p>
            
            {/* Signature Line */}
            <div 
              className="fade-in"
              style={{
                marginTop: "40px",
                width: "200px",
                height: "3px",
                background: "linear-gradient(90deg, transparent, white, transparent)",
                margin: "40px auto 0",
                animation: "fadeIn 1s ease-out 1.2s both"
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;