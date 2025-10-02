// Mock data for BAHOOVA Events website - Updated with original BAHOOVA images
export const mockData = {
  company: {
    name: "BAHOOVA Events",
    tagline: "Gestion Complète de Tous Événements",
    intro: "Votre partenaire spécialisé en organisation d'événements au Maroc. Notre professionnalisme et notre expérience nous garantissons la réussite de vos projets événementiels.",
    vision: "De la planification à l'exécution, notre expertise transforme vos événements en moments inoubliables. Nous créons des expériences mémorables pour mariages, dîners de gala, séminaires, congrès et événements corporate.",
    stats: {
      experience: "Fondé en 2005",
      employees: "350 employés à temps plein", 
      events: "25 événements par an",
      servings: "720 services/jour"
    },
    contact: {
      phone: "0662017389",
      email: "bahoovaevents@gmail.com",
      address: "123 Avenue Mohammed V, Casablanca, Maroc",
      whatsapp: "https://wa.me/212662017389?text=Bonjour,%20je%20souhaite%20organiser%20un%20événement%20avec%20BAHOOVA%20Events."
    }
  },
  
  coreValues: [
    {
      title: "Organisation Polyvalente",
      description: "Notre professionnalisme et notre expérience nous garantissons la réussite de vos projets événementiels"
    },
    {
      title: "Gestion Complète de vos Événements",
      description: "De la planification à l'exécution, notre expertise transforme vos événements en moments inoubliables"
    },
    {
      title: "Créativité Unique", 
      description: "Nous imaginons des concepts sur-mesure qui reflètent l'identité de chaque client, pour des événements à votre image"
    },
    {
      title: "Excellence Garantie",
      description: "La qualité de service est notre priorité. Votre tranquillité d'esprit, notre promesse, avec BAHOOVA Events vous bénéficiez d'un accompagnement fiable et d'une exécution irréprochable"
    }
  ],

  services: [
    {
      title: "Congrès & Forums",
      description: "Organisation complète de congrès internationaux, forums et événements professionnels",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=center",
      category: "Corporate",
      priority: 1
    },
    {
      title: "Mariages & Cérémonies",
      description: "Organisation complète de mariages, cérémonies et événements romantiques au Maroc",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop&crop=center",
      category: "Romantique",
      priority: 2
    },
    {
      title: "Dîners de Gala",
      description: "Événements de gala, réceptions officielles et dîners d'exception",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop&crop=center",
      category: "Gala",
      priority: 3
    },
    {
      title: "Séminaires d'Entreprise",
      description: "Formations, séminaires et événements corporate pour entreprises",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&crop=center",
      category: "Corporate",
      priority: 4
    },
    {
      title: "Gestion d'Événements",
      description: "Organisation complète et créative de tous vos événements avec une approche unique et innovante",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop&crop=center",
      category: "Management",
      priority: 5
    },
    {
      title: "Technologies Avancées",
      description: "Équipements de pointe, sonorisation et éclairage pour tous types d'événements",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&crop=center",
      category: "Technique",
      priority: 6
    },
    {
      title: "Live Stream & Webinaire",
      description: "Diffusion en direct, webinaires et événements hybrides",
      image: "https://images.unsplash.com/photo-1556761175-4b46a1b1b616?w=800&h=600&fit=crop&crop=center",
      category: "Technique",
      priority: 7
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
    },
    {
      name: "Royal Mansour Marrakech",
      address: "Rue Abou Abbas El Sebti, Marrakech, Maroc",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&crop=center",
      description: "Palais royal transformé en hôtel de luxe avec architecture traditionnelle marocaine",
      category: "Palais de Luxe",
      capacity: "300 personnes",
    },
    {
      name: "Four Seasons Resort Casablanca",
      address: "Boulevard de la Corniche, Casablanca, Maroc",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop&crop=center",
      description: "Hôtel 5 étoiles face à l'océan avec salles de conférence modernes",
      category: "Hôtel 5 Étoiles",
      capacity: "800 personnes",
    },
    {
      name: "La Mamounia Marrakech",
      address: "Avenue Bab Jdid, Marrakech, Maroc",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&crop=center",
      description: "Hôtel légendaire avec jardins historiques et architecture art déco",
      category: "Hôtel Historique",
      capacity: "600 personnes",
    },
    {
      name: "Sofitel Rabat Jardin des Roses",
      address: "Avenue de France, Rabat, Maroc",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop&crop=center",
      description: "Hôtel moderne avec jardins de roses et salles polyvalentes",
      category: "Hôtel 5 Étoiles",
      capacity: "400 personnes",
    },
    {
      name: "Mandarin Oriental Marrakech",
      address: "Route de Fès, Marrakech, Maroc",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&crop=center",
      description: "Résort de luxe avec villas privées et espaces événementiels exclusifs",
      category: "Résort de Luxe",
      capacity: "300 personnes",
    },
    
    // Palais et Monuments Historiques
    {
      name: "Palais Bahia",
      address: "Rue Riad Zitoun el Jdid, Marrakech, Maroc",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&crop=center",
      description: "Palais du 19ème siècle avec cours intérieures et jardins andalous",
      category: "Monument Historique",
      capacity: "200 personnes",
    },
    {
      name: "Palais El Badi",
      address: "Ksibat Nhass, Marrakech, Maroc",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&crop=center",
      description: "Ruines du palais saadien avec cours majestueuses pour événements historiques",
      category: "Monument Historique",
      capacity: "500 personnes",
    },
    {
      name: "Villa des Arts Casablanca",
      address: "30 Boulevard Brahim Roudani, Casablanca, Maroc",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&crop=center",
      description: "Villa art déco des années 30 avec jardins et salles d'exposition",
      category: "Monument Historique",
      capacity: "150 personnes",
    },
    {
      name: "Dar Si Said",
      address: "Rue Riad Zitoun el Jdid, Marrakech, Maroc",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&crop=center",
      description: "Palais du 19ème siècle transformé en musée avec cours intérieures",
      category: "Monument Historique",
      capacity: "100 personnes",
    },
    
    // Hôtels Modernes
    {
      name: "Hyatt Regency Casablanca",
      address: "Place des Nations Unies, Casablanca, Maroc",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop&crop=center",
      description: "Hôtel moderne avec centre de conférences et vue sur la ville",
      category: "Hôtel 5 Étoiles",
      capacity: "1000 personnes",
    },
    {
      name: "Sofitel Casablanca Tour Blanche",
      address: "Avenue des FAR, Casablanca, Maroc",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop&crop=center",
      description: "Hôtel moderne avec salles de conférence et vue panoramique",
      category: "Hôtel 5 Étoiles",
      capacity: "600 personnes",
    },
    {
      name: "Riad Fès",
      address: "Derb Ben Slimane Zerbtana, Fès, Maroc",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&crop=center",
      description: "Riad traditionnel restauré avec patio et salles intimes",
      category: "Riad Traditionnel",
      capacity: "80 personnes",
    },
    {
      name: "Palais Amani Fès",
      address: "12 Derb el Miter, Fès, Maroc",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&crop=center",
      description: "Palais du 17ème siècle avec jardins andalous et salles historiques",
      category: "Palais Historique",
      capacity: "120 personnes",
    },
    
    // Lieux Uniques
    {
      name: "Kasbah des Oudayas",
      address: "Rabat, Maroc",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&crop=center",
      description: "Forteresse historique avec vue sur l'océan et jardins andalous",
      category: "Monument Historique",
      capacity: "300 personnes",
    },
    {
      name: "Villa Harris Tanger",
      address: "Avenue Mohammed VI, Tanger, Maroc",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&crop=center",
      description: "Villa coloniale avec jardins et vue sur le détroit de Gibraltar",
      category: "Villa Historique",
      capacity: "150 personnes",
    },
    {
      name: "Palais des Congrès Agadir",
      address: "Avenue du 20 Août, Agadir, Maroc",
      image: "https://images.unsplash.com/photo-1556761175-4b46a1b1b616?w=800&h=600&fit=crop&crop=center",
      description: "Centre de congrès moderne avec vue sur l'océan Atlantique",
      category: "Centre de Congrès",
      capacity: "2000 personnes",
    },
    {
      name: "Riad Al Moussika Marrakech",
      address: "Derb Assabane, Marrakech, Maroc",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&crop=center",
      description: "Riad de luxe avec piscine et jardins exotiques",
      category: "Riad de Luxe",
      capacity: "60 personnes",
    },
    {
      name: "Hôtel Hassan II Rabat",
      address: "Avenue Mohammed V, Rabat, Maroc",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop&crop=center",
      description: "Hôtel moderne avec salles de conférence et vue sur la ville",
      category: "Hôtel 4 Étoiles",
      capacity: "400 personnes",
    },
    {
      name: "Palais des Roses Marrakech",
      address: "Route de l'Ourika, Marrakech, Maroc",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&crop=center",
      description: "Palais moderne avec jardins de roses et salles de réception",
      category: "Palais Moderne",
      capacity: "800 personnes",
    }
  ],

  gallery: [
    {
      id: 1,
      image: "/images/gallery/ourika.png",
      title: "Événement Ourika - Vallée de l'Ourika",
      category: "Corporate"
    },
    {
      id: 2,
      image: "/images/gallery/show-1.png",
      title: "Spectacle & Animation Professionnelle",
      category: "Corporate"
    },
    {
      id: 3,
      image: "/images/gallery/show-2.png",
      title: "Performance Artistique & Divertissement",
      category: "Spectacles"
    },
    {
      id: 4,
      image: "/images/gallery/show-3.png",
      title: "Animation Événementielle Premium",
      category: "Corporate"
    },
    {
      id: 5,
      image: "/images/gallery/show-4.png",
      title: "Spectacle Musical & Artistique",
      category: "Spectacles"
    },
    {
      id: 6,
      image: "/images/gallery/show-5.png",
      title: "Entertainment & Production Scénique",
      category: "Spectacles"
    },
    {
      id: 7,
      image: "/images/gallery/show-6.png",
      title: "Mariage de Luxe & Cérémonie",
      category: "Mariages"
    },
    {
      id: 8,
      image: "/images/gallery/show-7.png",
      title: "Performance Live & Spectacle",
      category: "Spectacles"
    },
    {
      id: 9,
      image: "/images/gallery/show-8.png",
      title: "Dîner de Gala Prestigieux",
      category: "Galas"
    },
    {
      id: 10,
      image: "/images/gallery/show-9.png",
      title: "Réception de Mariage Élégante",
      category: "Mariages"
    },
    {
      id: 11,
      image: "/images/gallery/show-10.png",
      title: "Soirée de Gala & Entertainment",
      category: "Galas"
    },
    {
      id: 12,
      image: "/images/gallery/show-11.png",
      title: "Cérémonie de Mariage Premium",
      category: "Mariages"
    },
    {
      id: 13,
      image: "/images/gallery/show-12.png",
      title: "Production Artistique & Spectacle Live",
      category: "Spectacles"
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
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "BAHOOVA Events a organisé notre congrès international avec une précision remarquable. Une expertise exceptionnelle dans l'organisation d'événements."
    },
    {
      name: "Prof. Marc Dubois",
      role: "Président de Forum",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "L'organisation de notre forum professionnel a été parfaite. BAHOOVA Events excelle dans les événements corporate."
    },
    {
      name: "Prof. Ahmed Al-Rashid",
      role: "Président de Congrès",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      text: "Notre événement corporate a été un succès total grâce à l'expertise de BAHOOVA Events. Nous les recommandons vivement pour tous événements."
    },
    {
      name: "Dr. Fatima Al-Zahra",
      role: "Directrice Médicale",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      text: "L'équipe de BAHOOVA Events a transformé notre événement en un moment mémorable. Leur attention aux détails est impressionnante."
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