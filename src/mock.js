// Mock data for BAHOOVA Events website - Updated with original BAHOOVA images
export const mockData = {
  company: {
    name: "BAHOOVA Events",
    tagline: "Gestion de Tous Événements & Congrès",
    intro: "Votre partenaire expert en organisation de tous types d'événements, congrès, forums et événements de recherche au Maroc. Nous créons des expériences professionnelles exceptionnelles.",
    vision: "Visiblement, nous avons atteint un sommet où chaque idée s'élève au-delà du simple rêve, où les projets prennent vie sous une lumière nouvelle. À l'image de l'horizon qui s'étire à l'infini, nous façonnons vos événements pour qu'ils deviennent des souvenirs éternels, suspendus dans le temps et marqués par l'émotion.",
    stats: {
      experience: "15 ans d'expérience",
      employees: "350 employés à temps plein", 
      events: "25 événements par an",
      servings: "720 services/jour"
    },
    contact: {
      phone: "+212 662 017 389",
      email: "bahoovaevents@gmail.com",
      address: "123 Avenue Mohammed V, Casablanca, Maroc",
      whatsapp: "https://wa.me/212662017389?text=Bonjour,%20je%20souhaite%20organiser%20un%20événement%20avec%20BAHOOVA%20Events."
    }
  },
  
  coreValues: [
    {
      title: "Expertise Polyvalente",
      description: "Spécialisés dans l'organisation de tous types d'événements et congrès"
    },
    {
      title: "Gestion Complète",
      description: "De la planification à l'exécution de vos événements professionnels"
    },
    {
      title: "Technologies Avancées", 
      description: "Équipements de pointe pour conférences et présentations de qualité"
    },
    {
      title: "Réseau International",
      description: "Partenaires experts dans tous les domaines d'événements"
    }
  ],

  services: [
    {
      title: "Congrès Scientifiques",
      description: "Organisation complète de congrès internationaux, symposiums et conférences de recherche",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=center",
      category: "Scientifique",
      priority: 1
    },
    {
      title: "Forums de Recherche",
      description: "Forums académiques, colloques scientifiques et événements de networking professionnel",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&crop=center",
      category: "Scientifique",
      priority: 2
    },
    {
      title: "Gestion d'Événements",
      description: "Organisation complète et créative de tous vos événements avec une approche unique et innovante",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&crop=center",
      category: "Management",
      priority: 3
    },
    {
      title: "Conférences Médicales",
      description: "Événements médicaux, symposiums pharmaceutiques et conférences de santé",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba0efed?w=800&h=600&fit=crop&crop=center",
      category: "Médical",
      priority: 4
    },
    {
      title: "Technologies Avancées",
      description: "Équipements de pointe, sonorisation et éclairage pour présentations scientifiques",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&crop=center",
      category: "Technique",
      priority: 5
    },
    {
      title: "Live Stream & Webinaire",
      description: "Diffusion en direct, webinaires et événements hybrides pour la communauté scientifique",
      image: "https://images.unsplash.com/photo-1556761175-4b46a1b1b616?w=800&h=600&fit=crop&crop=center",
      category: "Technique",
      priority: 6
    }
  ],

  venues: [
    // Hôtels de Luxe
    {
      name: "Palais Namaskar Marrakech",
      address: "Route de Bab Atlas, Marrakech, Maroc",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop&crop=center",
      description: "Palais de luxe avec jardins exotiques et salles de réception somptueuses",
      category: "Hôtel de Luxe",
      capacity: "500 personnes",
      price: "Prix sur demande"
    },
    {
      name: "Royal Mansour Marrakech",
      address: "Rue Abou Abbas El Sebti, Marrakech, Maroc",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&crop=center",
      description: "Palais royal transformé en hôtel de luxe avec architecture traditionnelle marocaine",
      category: "Palais de Luxe",
      capacity: "300 personnes",
      price: "Prix sur demande"
    },
    {
      name: "Four Seasons Resort Casablanca",
      address: "Boulevard de la Corniche, Casablanca, Maroc",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop&crop=center",
      description: "Hôtel 5 étoiles face à l'océan avec salles de conférence modernes",
      category: "Hôtel 5 Étoiles",
      capacity: "800 personnes",
      price: "À partir de 2000€"
    },
    {
      name: "La Mamounia Marrakech",
      address: "Avenue Bab Jdid, Marrakech, Maroc",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
      description: "Hôtel légendaire avec jardins historiques et architecture art déco",
      category: "Hôtel Historique",
      capacity: "600 personnes",
      price: "À partir de 1500€"
    },
    {
      name: "Sofitel Rabat Jardin des Roses",
      address: "Avenue de France, Rabat, Maroc",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop&crop=center",
      description: "Hôtel moderne avec jardins de roses et salles polyvalentes",
      category: "Hôtel 5 Étoiles",
      capacity: "400 personnes",
      price: "À partir de 1200€"
    },
    {
      name: "Mandarin Oriental Marrakech",
      address: "Route de Fès, Marrakech, Maroc",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
      description: "Résort de luxe avec villas privées et espaces événementiels exclusifs",
      category: "Résort de Luxe",
      capacity: "300 personnes",
      price: "Prix sur demande"
    },
    
    // Palais et Monuments Historiques
    {
      name: "Palais Bahia",
      address: "Rue Riad Zitoun el Jdid, Marrakech, Maroc",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
      description: "Palais du 19ème siècle avec cours intérieures et jardins andalous",
      category: "Monument Historique",
      capacity: "200 personnes",
      price: "À partir de 800€"
    },
    {
      name: "Palais El Badi",
      address: "Ksibat Nhass, Marrakech, Maroc",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
      description: "Ruines du palais saadien avec cours majestueuses pour événements historiques",
      category: "Monument Historique",
      capacity: "500 personnes",
      price: "À partir de 1000€"
    },
    {
      name: "Villa des Arts Casablanca",
      address: "30 Boulevard Brahim Roudani, Casablanca, Maroc",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
      description: "Villa art déco des années 30 avec jardins et salles d'exposition",
      category: "Monument Historique",
      capacity: "150 personnes",
      price: "À partir de 600€"
    },
    {
      name: "Dar Si Said",
      address: "Rue Riad Zitoun el Jdid, Marrakech, Maroc",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
      description: "Palais du 19ème siècle transformé en musée avec cours intérieures",
      category: "Monument Historique",
      capacity: "100 personnes",
      price: "À partir de 500€"
    },
    
    // Hôtels Modernes
    {
      name: "Hyatt Regency Casablanca",
      address: "Place des Nations Unies, Casablanca, Maroc",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop&crop=center",
      description: "Hôtel moderne avec centre de conférences et vue sur la ville",
      category: "Hôtel 5 Étoiles",
      capacity: "1000 personnes",
      price: "À partir de 1800€"
    },
    {
      name: "Sofitel Casablanca Tour Blanche",
      address: "Avenue des FAR, Casablanca, Maroc",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop&crop=center",
      description: "Hôtel moderne avec salles de conférence et vue panoramique",
      category: "Hôtel 5 Étoiles",
      capacity: "600 personnes",
      price: "À partir de 1400€"
    },
    {
      name: "Riad Fès",
      address: "Derb Ben Slimane Zerbtana, Fès, Maroc",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
      description: "Riad traditionnel restauré avec patio et salles intimes",
      category: "Riad Traditionnel",
      capacity: "80 personnes",
      price: "À partir de 400€"
    },
    {
      name: "Palais Amani Fès",
      address: "12 Derb el Miter, Fès, Maroc",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
      description: "Palais du 17ème siècle avec jardins andalous et salles historiques",
      category: "Palais Historique",
      capacity: "120 personnes",
      price: "À partir de 700€"
    },
    
    // Lieux Uniques
    {
      name: "Kasbah des Oudayas",
      address: "Rabat, Maroc",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
      description: "Forteresse historique avec vue sur l'océan et jardins andalous",
      category: "Monument Historique",
      capacity: "300 personnes",
      price: "À partir de 900€"
    },
    {
      name: "Villa Harris Tanger",
      address: "Avenue Mohammed VI, Tanger, Maroc",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
      description: "Villa coloniale avec jardins et vue sur le détroit de Gibraltar",
      category: "Villa Historique",
      capacity: "150 personnes",
      price: "À partir de 600€"
    },
    {
      name: "Palais des Congrès Agadir",
      address: "Avenue du 20 Août, Agadir, Maroc",
      image: "https://images.unsplash.com/photo-1556761175-4b46a1b1b616?w=800&h=600&fit=crop&crop=center",
      description: "Centre de congrès moderne avec vue sur l'océan Atlantique",
      category: "Centre de Congrès",
      capacity: "2000 personnes",
      price: "À partir de 2500€"
    },
    {
      name: "Riad Al Moussika Marrakech",
      address: "Derb Assabane, Marrakech, Maroc",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
      description: "Riad de luxe avec piscine et jardins exotiques",
      category: "Riad de Luxe",
      capacity: "60 personnes",
      price: "À partir de 800€"
    },
    {
      name: "Hôtel Hassan II Rabat",
      address: "Avenue Mohammed V, Rabat, Maroc",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop&crop=center",
      description: "Hôtel moderne avec salles de conférence et vue sur la ville",
      category: "Hôtel 4 Étoiles",
      capacity: "400 personnes",
      price: "À partir de 1000€"
    },
    {
      name: "Palais des Roses Marrakech",
      address: "Route de l'Ourika, Marrakech, Maroc",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
      description: "Palais moderne avec jardins de roses et salles de réception",
      category: "Palais Moderne",
      capacity: "800 personnes",
      price: "À partir de 2000€"
    }
  ],

  gallery: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=center",
      title: "Congrès International de Neurosciences",
      category: "Scientifique"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1556761175-4b46a1b1b616?w=800&h=600&fit=crop&crop=center",
      title: "Forum de Recherche en Biotechnologie",
      category: "Scientifique"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&crop=center",
      title: "Colloque de Physique Quantique",
      category: "Scientifique"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba0efed?w=800&h=600&fit=crop&crop=center",
      title: "Conférence Médicale Internationale",
      category: "Médical"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&crop=center",
      title: "Symposium de Chimie Organique",
      category: "Scientifique"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&crop=center",
      title: "Congrès d'Intelligence Artificielle",
      category: "Technique"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center",
      title: "Événement Sportif avec Live Stream",
      category: "Sportif"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
      title: "Tournoi de Football Professionnel",
      category: "Sportif"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop&crop=center",
      title: "Compétition de Natation",
      category: "Sportif"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
      title: "Marathon International",
      category: "Sportif"
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&crop=center",
      title: "Gala d'Entreprise Annuel",
      category: "Corporate"
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop&crop=center",
      title: "Séminaire de Formation",
      category: "Corporate"
    },
    {
      id: 13,
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop&crop=center",
      title: "Lancement de Produit",
      category: "Corporate"
    },
    {
      id: 14,
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop&crop=center",
      title: "Conférence de Presse",
      category: "Corporate"
    },
    {
      id: 15,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&crop=center",
      title: "Équipement Sonorisation Pro",
      category: "Technique"
    },
    {
      id: 16,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center",
      title: "Éclairage LED Professionnel",
      category: "Technique"
    },
    {
      id: 17,
      image: "https://images.unsplash.com/photo-1556761175-4b46a1b1b616?w=800&h=600&fit=crop&crop=center",
      title: "Écran LED Géant",
      category: "Technique"
    },
    {
      id: 18,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba0efed?w=800&h=600&fit=crop&crop=center",
      title: "Système de Traduction Simultanée",
      category: "Technique"
    },
    {
      id: 19,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&crop=center",
      title: "Webinaire International",
      category: "Technique"
    },
    {
      id: 20,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=center",
      title: "Live Stream Professionnel",
      category: "Technique"
    }
  ],

  // Hero images featuring scientific congresses and conferences
  heroImages: {
    main: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop&crop=center",
    about: "https://images.unsplash.com/photo-1556761175-4b46a1b1b616?w=1200&h=800&fit=crop&crop=center",
    services: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop&crop=center"
  },

  // Testimonials from scientific congress clients
  testimonials: [
    {
      name: "Dr. Sarah Chen",
      role: "Directrice de Recherche",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      text: "BAHOOVA Events a organisé notre congrès international de neurosciences avec une précision remarquable. Une expertise exceptionnelle dans l'organisation scientifique."
    },
    {
      name: "Prof. Marc Dubois",
      role: "Président de Forum",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "L'organisation de notre forum de recherche en biotechnologie a été parfaite. BAHOOVA Events excelle dans les événements scientifiques."
    },
    {
      name: "Prof. Ahmed Al-Rashid",
      role: "Président de Congrès",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      text: "Notre congrès médical international a été un succès total grâce à l'expertise de BAHOOVA Events. Nous les recommandons vivement pour tous événements scientifiques."
    },
    {
      name: "Dr. Fatima Al-Zahra",
      role: "Directrice Médicale",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "L'équipe de BAHOOVA Events a transformé notre symposium médical en un événement mémorable. Leur attention aux détails est impressionnante."
    },
    {
      name: "Prof. James Wilson",
      role: "Chercheur Principal",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      text: "Grâce à BAHOOVA Events, notre conférence de physique quantique a attiré des experts du monde entier. Une organisation professionnelle exemplaire."
    },
    {
      name: "Dr. Aisha Patel",
      role: "Coordinatrice de Recherche",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      text: "BAHOOVA Events a su créer une atmosphère parfaite pour notre colloque de chimie organique. Leur créativité et leur professionnalisme sont remarquables."
    }
  ]
};