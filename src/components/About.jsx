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
  const [transitionType, setTransitionType] = useState('creative');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});

  const aboutImages = [
    {
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
      fallback: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
      title: "Dîner et gala",
      description: "Organisation professionnelle de vos événements de recherche"
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-4b46a1b1b616?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
      fallback: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
      title: "Forums de Recherche",
      description: "Colloques et symposiums scientifiques internationaux"
    },
    {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
      fallback: "https://images.unsplash.com/photo-1576091160550-2173dba0efed?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
      title: "Conférences Médicales",
      description: "Événements médicaux et pharmaceutiques de pointe"
    },
    {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba0efed?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
      fallback: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
      title: "Technologies Avancées",
      description: "Équipements de pointe pour présentations scientifiques"
    },
    {
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
      fallback: "https://images.unsplash.com/photo-1556761175-4b46a1b1b616?w=800&h=600&fit=crop&crop=center&auto=format&q=80",
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
        setIsTransitioning(true);
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % aboutImages.length
        );
        // Change transition type randomly
        const transitionTypes = ['creative', 'morphing', 'glitch', 'wave'];
        setTransitionType(transitionTypes[Math.floor(Math.random() * transitionTypes.length)]);
        setTimeout(() => setIsTransitioning(false), 1000);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, aboutImages.length]);

  const nextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % aboutImages.length
    );
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + aboutImages.length) % aboutImages.length
    );
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const goToImage = (index) => {
    if (isTransitioning || index === currentImageIndex) return;
    setIsTransitioning(true);
    setCurrentImageIndex(index);
    setTimeout(() => setIsTransitioning(false), 1000);
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
                  {/* Image Slider Container */}
                  <div style={{
                    position: "relative",
                    width: "100%",
                    height: "450px",
                    overflow: "hidden",
                    borderRadius: "16px"
                  }}>
                    {/* Creative Slider Images */}
                    {aboutImages.map((image, index) => {
                      const isActive = index === currentImageIndex;
                      const isNext = index === (currentImageIndex + 1) % aboutImages.length;
                      const isPrev = index === (currentImageIndex - 1 + aboutImages.length) % aboutImages.length;
                      
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
                            transform: isActive 
                              ? (transitionType === 'wave' ? "scale(1.05) rotate(0deg)" : 
                                 transitionType === 'glitch' ? "scale(1) rotate(0deg)" :
                                 "scale(1) rotate(0deg)")
                              : isNext 
                                ? (transitionType === 'morphing' ? "scale(1.3) rotate(10deg) translateX(100%)" :
                                   transitionType === 'glitch' ? "scale(1.1) rotate(0deg) translateX(100%)" :
                                   transitionType === 'wave' ? "scale(1.2) rotate(5deg) translateX(100%)" :
                                   "scale(1.2) rotate(5deg) translateX(100%)")
                                : isPrev 
                                  ? (transitionType === 'morphing' ? "scale(0.7) rotate(-10deg) translateX(-100%)" :
                                     transitionType === 'glitch' ? "scale(0.9) rotate(0deg) translateX(-100%)" :
                                     transitionType === 'wave' ? "scale(0.8) rotate(-5deg) translateX(-100%)" :
                                     "scale(0.8) rotate(-5deg) translateX(-100%)")
                                  : "scale(0.5) rotate(0deg) translateX(0%)",
                            transition: transitionType === 'glitch' 
                              ? "all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
                              : transitionType === 'wave'
                              ? "all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                              : "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                            zIndex: isActive ? 3 : isNext || isPrev ? 2 : 1,
                            filter: isActive 
                              ? "blur(0px) brightness(1) contrast(1)" 
                              : "blur(2px) brightness(0.7) contrast(0.8)",
                            clipPath: isActive 
                              ? (transitionType === 'morphing' ? "polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)" :
                                 transitionType === 'wave' ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" :
                                 "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)")
                              : isNext
                                ? (transitionType === 'morphing' ? "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" :
                                   transitionType === 'wave' ? "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" :
                                   "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)")
                                : isPrev
                                  ? (transitionType === 'morphing' ? "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" :
                                     transitionType === 'wave' ? "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" :
                                     "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)")
                                  : "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
                            animation: isActive && transitionType === 'glitch' 
                              ? "glitchEffect 0.3s ease-in-out"
                              : isActive && transitionType === 'wave'
                              ? "waveEffect 2s ease-in-out infinite"
                              : isActive && transitionType === 'morphing'
                              ? "morphingShape 3s ease-in-out infinite"
                              : "none"
                          }}
                        >
                          {/* Creative Overlay Effects */}
                          <div style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: isActive 
                              ? "linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))"
                              : "linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5))",
                            zIndex: 1,
                            transition: "all 1s ease"
                          }} />
                          
                          {/* Animated Border */}
                          <div style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            border: isActive ? "3px solid transparent" : "0px solid transparent",
                            background: isActive 
                              ? "linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c) border-box"
                              : "transparent",
                            borderRadius: "16px",
                            zIndex: 2,
                            transition: "all 1s ease",
                            animation: isActive ? "borderGlow 2s ease-in-out infinite" : "none"
                          }} />
                          
                          {/* Loading indicator */}
                          {!imagesLoaded[index] && (
                            <div style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              width: "40px",
                              height: "40px",
                              border: "3px solid rgba(255,255,255,0.3)",
                              borderTop: "3px solid var(--interactive-base)",
                              borderRadius: "50%",
                              animation: "spin 1s linear infinite",
                              zIndex: 3
                            }} />
                          )}
                          
                          <img 
                            src={image.src}
                            alt={image.title}
                            style={{ 
                              width: "100%", 
                              height: "100%", 
                              objectFit: "cover",
                              opacity: imagesLoaded[index] ? 1 : 0,
                              transition: transitionType === 'glitch' 
                                ? "all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
                                : "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                              transform: isActive 
                                ? (transitionType === 'wave' ? "scale(1.08) rotate(0deg)" : 
                                   transitionType === 'glitch' ? "scale(1.02) rotate(0deg)" :
                                   "scale(1.05) rotate(0deg)")
                                : "scale(1) rotate(0deg)",
                              filter: isActive 
                                ? (transitionType === 'glitch' ? "saturate(1.5) contrast(1.3) hue-rotate(10deg)" :
                                   transitionType === 'wave' ? "saturate(1.3) contrast(1.2) brightness(1.1)" :
                                   transitionType === 'morphing' ? "saturate(1.4) contrast(1.1) brightness(1.05)" :
                                   "saturate(1.2) contrast(1.1)")
                                : "saturate(0.5) contrast(0.8) brightness(0.7)",
                              animation: isActive && transitionType === 'glitch' 
                                ? "colorShift 0.5s ease-in-out"
                                : "none"
                            }}
                            onError={(e) => {
                              if (e.target.src !== image.fallback) {
                                e.target.src = image.fallback;
                              } else {
                                e.target.src = `https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&crop=center&auto=format&q=80&t=${Date.now()}`;
                              }
                            }}
                            onLoad={() => {
                              setImagesLoaded(prev => ({ ...prev, [index]: true }));
                            }}
                            loading="lazy"
                          />
                          
                          {/* Creative Particles */}
                          {isActive && (
                            <>
                              <div style={{
                                position: "absolute",
                                top: "20%",
                                left: "10%",
                                width: transitionType === 'glitch' ? "6px" : "4px",
                                height: transitionType === 'glitch' ? "6px" : "4px",
                                background: transitionType === 'glitch' ? "#ff6b6b" : 
                                          transitionType === 'wave' ? "#4ecdc4" : 
                                          transitionType === 'morphing' ? "#feca57" : "white",
                                borderRadius: transitionType === 'morphing' ? "0%" : "50%",
                                animation: transitionType === 'glitch' 
                                  ? "glitchEffect 0.5s ease-in-out infinite"
                                  : "particleFloat 3s ease-in-out infinite",
                                zIndex: 4,
                                boxShadow: transitionType === 'glitch' 
                                  ? "0 0 10px rgba(255, 107, 107, 0.8)" : "none"
                              }} />
                              <div style={{
                                position: "absolute",
                                top: "60%",
                                right: "15%",
                                width: transitionType === 'wave' ? "8px" : "6px",
                                height: transitionType === 'wave' ? "8px" : "6px",
                                background: transitionType === 'wave' ? "#45b7d1" : 
                                          transitionType === 'morphing' ? "#96ceb4" : "#667eea",
                                borderRadius: transitionType === 'morphing' ? "0%" : "50%",
                                animation: transitionType === 'wave' 
                                  ? "waveEffect 2s ease-in-out infinite"
                                  : "particleFloat 3s ease-in-out infinite 1s",
                                zIndex: 4,
                                boxShadow: transitionType === 'wave' 
                                  ? "0 0 15px rgba(69, 183, 209, 0.6)" : "none"
                              }} />
                              <div style={{
                                position: "absolute",
                                bottom: "30%",
                                left: "20%",
                                width: transitionType === 'morphing' ? "5px" : "3px",
                                height: transitionType === 'morphing' ? "5px" : "3px",
                                background: transitionType === 'morphing' ? "#f093fb" : 
                                          transitionType === 'glitch' ? "#764ba2" : "#f093fb",
                                borderRadius: transitionType === 'morphing' ? "0%" : "50%",
                                animation: transitionType === 'morphing' 
                                  ? "morphingShape 2s ease-in-out infinite"
                                  : "particleFloat 3s ease-in-out infinite 2s",
                                zIndex: 4,
                                boxShadow: transitionType === 'morphing' 
                                  ? "0 0 12px rgba(240, 147, 251, 0.7)" : "none"
                              }} />
                              {/* Additional particles for glitch effect */}
                              {transitionType === 'glitch' && (
                                <>
                                  <div style={{
                                    position: "absolute",
                                    top: "40%",
                                    left: "50%",
                                    width: "2px",
                                    height: "2px",
                                    background: "#f5576c",
                                    borderRadius: "50%",
                                    animation: "glitchEffect 0.3s ease-in-out infinite 0.1s",
                                    zIndex: 4
                                  }} />
                                  <div style={{
                                    position: "absolute",
                                    top: "70%",
                                    right: "30%",
                                    width: "3px",
                                    height: "3px",
                                    background: "#4ecdc4",
                                    borderRadius: "50%",
                                    animation: "glitchEffect 0.3s ease-in-out infinite 0.2s",
                                    zIndex: 4
                                  }} />
                                </>
                              )}
                            </>
                          )}
                        </div>
                      );
                    })}
                    
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
                    
                    {/* Transition Type Indicator */}
                    <div style={{
                      position: "absolute",
                      top: "20px",
                      left: "20px",
                      background: "rgba(0, 0, 0, 0.7)",
                      padding: "8px 12px",
                      borderRadius: "20px",
                      backdropFilter: "blur(10px)",
                      zIndex: 4,
                      transition: "all 0.3s ease"
                    }}>
                      <span style={{
                        color: "white",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "1px"
                      }}>
                        {transitionType === 'creative' ? '✨ Creative' :
                         transitionType === 'morphing' ? '🔄 Morphing' :
                         transitionType === 'glitch' ? '⚡ Glitch' :
                         transitionType === 'wave' ? '🌊 Wave' : '✨ Creative'}
                      </span>
                    </div>
                    
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
                          onClick={() => goToImage(index)}
                          style={{
                            width: "12px",
                            height: "12px",
                            borderRadius: "50%",
                            border: "none",
                            background: index === currentImageIndex 
                              ? "linear-gradient(45deg, #667eea, #764ba2)" 
                              : "rgba(255, 255, 255, 0.3)",
                            cursor: isTransitioning ? "not-allowed" : "pointer",
                            transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                            transform: index === currentImageIndex ? "scale(1.3)" : "scale(1)",
                            boxShadow: index === currentImageIndex 
                              ? "0 0 20px rgba(102, 126, 234, 0.6)" 
                              : "none"
                          }}
                          onMouseEnter={(e) => {
                            if (!isTransitioning) {
                              e.target.style.background = "linear-gradient(45deg, #667eea, #764ba2)";
                              e.target.style.transform = "scale(1.4)";
                              e.target.style.boxShadow = "0 0 25px rgba(102, 126, 234, 0.8)";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isTransitioning) {
                              e.target.style.background = index === currentImageIndex 
                                ? "linear-gradient(45deg, #667eea, #764ba2)" 
                                : "rgba(255, 255, 255, 0.3)";
                              e.target.style.transform = index === currentImageIndex ? "scale(1.3)" : "scale(1)";
                              e.target.style.boxShadow = index === currentImageIndex 
                                ? "0 0 20px rgba(102, 126, 234, 0.6)" 
                                : "none";
                            }
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