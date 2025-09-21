import React, { useState, useEffect } from "react";
import { Award, Users, Clock, Heart, Sparkles, Zap, Star, Target, Rocket, Shield, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
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
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=center",
      title: "Congrès Scientifiques",
      description: "Organisation professionnelle de vos événements de recherche"
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-4b46a1b1b616?w=800&h=600&fit=crop&crop=center",
      title: "Forums de Recherche",
      description: "Colloques et symposiums scientifiques internationaux"
    },
    {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&crop=center",
      title: "Conférences Médicales",
      description: "Événements médicaux et pharmaceutiques de pointe"
    },
    {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba0efed?w=800&h=600&fit=crop&crop=center",
      title: "Technologies Avancées",
      description: "Équipements de pointe pour présentations scientifiques"
    },
    {
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&crop=center",
      title: "Live Stream & Webinaire",
      description: "Diffusion en direct et événements hybrides"
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
                {mockData.company.vision}
              </p>
                <p 
                  className="body-regular fade-in"
                  style={{ 
                    color: "var(--text-secondary)",
                    fontSize: "1.1rem",
                    lineHeight: "1.6",
                    animation: "fadeIn 1s ease-out 0.9s both",
                    marginBottom: "24px"
                  }}
                >
                  Chez BAHOOVA Events, nous croyons que chaque événement raconte une histoire unique. Notre passion pour l'excellence et notre attention aux détails font de nous le partenaire idéal pour concrétiser vos rêves les plus ambitieux.
                </p>
                
                
                {/* Floating Icons */}
                <div style={{ 
                  position: "absolute", 
                  top: "20%", 
                  left: "-10%", 
                  animation: "float 3s ease-in-out infinite",
                  zIndex: 1
                }}>
                  <Sparkles size={24} color="#667eea" />
                </div>
                <div style={{ 
                  position: "absolute", 
                  top: "40%", 
                  right: "-5%", 
                  animation: "float 3s ease-in-out infinite 1s",
                  zIndex: 1
                }}>
                  <Zap size={20} color="#764ba2" />
                </div>
                <div style={{ 
                  position: "absolute", 
                  bottom: "30%", 
                  left: "-8%", 
                  animation: "float 3s ease-in-out infinite 2s",
                  zIndex: 1
                }}>
                  <Star size={18} color="#f093fb" />
                </div>
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
                  {/* Image Slider Container */}
                  <div style={{
                    position: "relative",
                    width: "100%",
                    height: "450px",
                    overflow: "hidden",
                    borderRadius: "16px"
                  }}>
                    {/* Slider Images */}
                    {aboutImages.map((image, index) => (
                      <div
                        key={index}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          opacity: index === currentImageIndex ? 1 : 0,
                          transform: `translateX(${(index - currentImageIndex) * 100}%)`,
                          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
                        }}
                      >
                        <img 
                          src={image.src}
                          alt={image.title}
                style={{ 
                  width: "100%", 
                            height: "100%", 
                  objectFit: "cover",
                            transition: "transform 0.3s ease"
                          }}
                          onError={(e) => {
                            e.target.src = `https://images.unsplash.com/photo-1556761175-4b46a1b1b616?w=800&h=600&fit=crop&crop=center&t=${Date.now()}`;
                          }}
                          loading="lazy"
                        />
                      </div>
                    ))}
                    
                    {/* Image Overlay */}
                    <div style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))",
                      pointerEvents: "none"
                    }} />
                    
                    {/* Text Overlay */}
                    <div style={{
                      position: "absolute",
                      bottom: "20px",
                      left: "20px",
                      right: "20px",
                      background: "rgba(0, 0, 0, 0.7)",
                      padding: "16px 20px",
                      borderRadius: "12px",
                      backdropFilter: "blur(10px)",
                      zIndex: 3,
                      transition: "all 0.3s ease"
                    }}>
                      <h3 style={{
                        color: "white",
                        fontSize: "1.2rem",
                        fontWeight: "600",
                        marginBottom: "8px",
                        textShadow: "0 2px 4px rgba(0,0,0,0.5)"
                      }}>
                        {aboutImages[currentImageIndex].title}
                      </h3>
                      <p style={{
                        color: "rgba(255, 255, 255, 0.9)",
                        fontSize: "0.9rem",
                        margin: 0,
                        lineHeight: "1.4"
                      }}>
                        {aboutImages[currentImageIndex].description}
                      </p>
                    </div>
                    
                    {/* Navigation Arrows */}
                    <button
                      onClick={prevImage}
                      style={{
                        position: "absolute",
                        left: "15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0, 0, 0, 0.5)",
                        border: "none",
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        zIndex: 4,
                        transition: "all 0.3s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = "rgba(0, 0, 0, 0.7)";
                        e.target.style.transform = "translateY(-50%) scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "rgba(0, 0, 0, 0.5)";
                        e.target.style.transform = "translateY(-50%) scale(1)";
                      }}
                    >
                      <ChevronLeft size={20} color="white" />
                    </button>
                    
                    <button
                      onClick={nextImage}
                      style={{
                        position: "absolute",
                        right: "15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0, 0, 0, 0.5)",
                        border: "none",
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        zIndex: 4,
                        transition: "all 0.3s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = "rgba(0, 0, 0, 0.7)";
                        e.target.style.transform = "translateY(-50%) scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "rgba(0, 0, 0, 0.5)";
                        e.target.style.transform = "translateY(-50%) scale(1)";
                      }}
                    >
                      <ChevronRight size={20} color="white" />
                    </button>
                    
                    {/* Play/Pause Button */}
                    <button
                      onClick={togglePlayPause}
                      style={{
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                        background: "rgba(0, 0, 0, 0.5)",
                        border: "none",
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        zIndex: 4,
                        transition: "all 0.3s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = "rgba(0, 0, 0, 0.7)";
                        e.target.style.transform = "scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "rgba(0, 0, 0, 0.5)";
                        e.target.style.transform = "scale(1)";
                      }}
                    >
                      {isPlaying ? <Pause size={20} color="white" /> : <Play size={20} color="white" />}
                    </button>
                    
                    {/* Dots Indicator */}
                    <div style={{
                      position: "absolute",
                      bottom: "80px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      display: "flex",
                      gap: "8px",
                      zIndex: 4
                    }}>
                      {aboutImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            border: "none",
                            background: index === currentImageIndex ? "white" : "rgba(255, 255, 255, 0.5)",
                            cursor: "pointer",
                            transition: "all 0.3s ease"
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = "white";
                            e.target.style.transform = "scale(1.2)";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = index === currentImageIndex ? "white" : "rgba(255, 255, 255, 0.5)";
                            e.target.style.transform = "scale(1)";
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Floating Elements on Image */}
                    <div style={{ 
                      position: "absolute", 
                      top: "20px", 
                      left: "20px", 
                      animation: "bounce 2s ease-in-out infinite",
                      zIndex: 2
                    }}>
                      <Target size={24} color="white" />
                    </div>
                    <div style={{ 
                      position: "absolute", 
                      bottom: "100px", 
                      left: "20px", 
                      animation: "bounce 2s ease-in-out infinite 1s",
                      zIndex: 2
                    }}>
                      <Award size={24} color="white" />
                    </div>
                    <div style={{ 
                      position: "absolute", 
                      bottom: "100px", 
                      right: "20px", 
                      animation: "bounce 2s ease-in-out infinite 0.5s",
                      zIndex: 2
                    }}>
                      <Rocket size={20} color="white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ColorSwitcher>
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
            
                {/* Floating Sparkles */}
                {hoveredStat === index && (
                  <>
              <div style={{ 
                      position: "absolute", 
                      top: "20px", 
                      right: "20px", 
                      animation: "bounce 1s ease-in-out infinite",
                      zIndex: 1
                    }}>
                      <Sparkles size={16} color={stat.color} />
            </div>
              <div style={{ 
                      position: "absolute", 
                      bottom: "20px", 
                      left: "20px", 
                      animation: "bounce 1s ease-in-out infinite 0.5s",
                      zIndex: 1
                    }}>
                      <Star size={14} color={stat.color} />
              </div>
                  </>
                )}
              </div>
            ))}
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
            {[
              {
                image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&crop=center",
                title: "Équipe Scientifique",
                description: "Experts en congrès et forums de recherche",
                color: "#667eea"
              },
              {
                image: "https://images.unsplash.com/photo-1556761175-4b46a1b1b616?w=800&h=600&fit=crop&crop=center",
                title: "Équipe Médicale",
                description: "Spécialistes en événements médicaux",
                color: "#764ba2"
              },
              {
                image: "https://images.unsplash.com/photo-1576091160550-2173dba0efed?w=800&h=600&fit=crop&crop=center",
                title: "Équipe Technique",
                description: "Techniciens et spécialistes logistiques",
                color: "#f093fb"
              }
            ].map((team, index) => (
              <div 
                key={index}
                className="fade-in"
                style={{ 
                  textAlign: "center",
                  animation: `slideInUp 0.8s ease-out ${0.5 + index * 0.2}s both`,
                  position: "relative",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                  e.currentTarget.style.boxShadow = `0 20px 40px ${team.color}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
                }}
              >
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <img 
                    src={team.image}
                    alt={team.title}
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
                  
                  {/* Gradient Overlay */}
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${team.color}20, ${team.color}40)`,
                    transition: "opacity 0.3s ease"
                  }} />
                  
                  {/* Floating Icons */}
                  <div style={{ 
                    position: "absolute", 
                    top: "20px", 
                    right: "20px", 
                    animation: "bounce 2s ease-in-out infinite",
                    zIndex: 2
                  }}>
                    <Shield size={24} color="white" />
                  </div>
                  <div style={{ 
                    position: "absolute", 
                    bottom: "20px", 
                    left: "20px", 
                    animation: "bounce 2s ease-in-out infinite 1s",
                    zIndex: 2
                  }}>
                    <Target size={20} color="white" />
                  </div>
            </div>
            
                <div style={{ padding: "24px" }}>
                  <h3 
                    className="heading-3" 
                style={{ 
                      marginBottom: "8px",
                      color: team.color,
                      fontSize: "1.5rem",
                      fontWeight: "600"
                    }}
                  >
                    {team.title}
              </h3>
                  <p 
                    className="body-small" 
                    style={{ 
                      color: "var(--text-secondary)",
                      fontSize: "1rem",
                      lineHeight: "1.5"
                    }}
                  >
                    {team.description}
              </p>
            </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;