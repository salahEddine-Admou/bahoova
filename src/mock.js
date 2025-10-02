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
      title: "Organisation Congrès Maroc",
      description: "Spécialisé en organisation de congrès internationaux, forums et événements professionnels",
      image: "/images/gallery/show-3.png",
      category: "Corporate",
      priority: 1
    },
    {
      title: "Mariages & Cérémonies Maroc",
      description: "Organisateur professionnel de mariages, cérémonies et événements romantiques au Maroc",
      image: "/images/gallery/show-6.png",
      category: "Romantique",
      priority: 2
    },
    {
      title: "Séminaires Entreprises Maroc",
      description: "Leader en organisation de formations, séminaires et événements corporate pour entreprises",
      image: "/images/gallery/show-1.png",
      category: "Corporate",
      priority: 3
    },
    {
      title: "Gestion Événements Maroc",
      description: "Partenaire de confiance en organisation complète et créative de tous vos événements avec une approche unique et innovante",
      image: "/images/gallery/show-8.png",
      category: "Management",
      priority: 4
    },
    {
      title: "Spectacles & Animations",
      description: "Performances artistiques et divertissements pour tous vos événements",
      image: "/images/gallery/show-2.png",
      category: "Spectacles",
      priority: 5
    },
    {
      title: "Événements Premium",
      description: "Organisation d'événements haut de gamme avec animation professionnelle",
      image: "/images/gallery/show-10.png",
      category: "Corporate",
      priority: 6
    },
    {
      title: "Musique & Divertissement",
      description: "Spectacles musicaux et animations artistiques pour vos événements",
      image: "/images/gallery/show-4.png",
      category: "Spectacles",
      priority: 7
    },
    {
      title: "Événements d'Entreprise",
      description: "Solutions complètes pour vos événements corporate et professionnels",
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.11.jpeg",
      category: "Corporate",
      priority: 8
    },
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
    // Original PNG Images
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
    },
    
    // New WhatsApp Images
    {
      id: 14,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.11.jpeg",
      title: "Événement Corporate Élégant",
      category: "Corporate"
    },
    {
      id: 15,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.11 (1).jpeg",
      title: "Décoration Florale Raffinée",
      category: "Décoration"
    },
    {
      id: 16,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.11 (2).jpeg",
      title: "Spectacle de Divertissement",
      category: "Spectacles"
    },
    {
      id: 17,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.11 (3).jpeg",
      title: "Setup Audio-Visuel Professionnel",
      category: "Corporate"
    },
    {
      id: 18,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.12.jpeg",
      title: "Dîner de Gala Exclusif",
      category: "Événements Premium"
    },
    {
      id: 19,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.12 (1).jpeg",
      title: "Mariage en Plein Air",
      category: "Mariages"
    },
    {
      id: 20,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.12 (2).jpeg",
      title: "Animation Musicale Live",
      category: "Traditionnel"
    },
    {
      id: 21,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.12 (3).jpeg",
      title: "Événement VIP Prestige",
      category: "Événements Premium"
    },
    {
      id: 22,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.12 (4).jpeg",
      title: "Conférence Internationale",
      category: "Corporate"
    },
    {
      id: 23,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.13.jpeg",
      title: "Cérémonie de Mariage Traditionnelle",
      category: "Mariages"
    },
    {
      id: 24,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.13 (1).jpeg",
      title: "Soirée Thématique Exclusive",
      category: "Galas"
    },
    {
      id: 25,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.14.jpeg",
      title: "Performance Artistique Premium",
      category: "Spectacles"
    },
    {
      id: 26,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.14 (1).jpeg",
      title: "Séminaire d'Entreprise",
      category: "Corporate"
    },
    {
      id: 27,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.14 (2).jpeg",
      title: "Décoration de Mariage Luxueuse",
      category: "Mariages"
    },
    {
      id: 28,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.14 (3).jpeg",
      title: "Spectacle Musical Professionnel",
      category: "Spectacles"
    },
    {
      id: 29,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.15.jpeg",
      title: "Gala de Bienfaisance",
      category: "Galas"
    },
    {
      id: 30,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.15 (1).jpeg",
      title: "Lancement de Produit Corporate",
      category: "Corporate"
    },
    {
      id: 31,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.15 (2).jpeg",
      title: "Réception de Mariage Romantique",
      category: "Mariages"
    },
    {
      id: 32,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.15 (3).jpeg",
      title: "Animation Artistique Live",
      category: "Spectacles"
    },
    {
      id: 33,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.16.jpeg",
      title: "Soirée de Gala Prestige",
      category: "Galas"
    },
    {
      id: 34,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.16 (1).jpeg",
      title: "Convention d'Entreprise",
      category: "Corporate"
    },
    {
      id: 35,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.16 (2).jpeg",
      title: "Cérémonie de Mariage Élégante",
      category: "Mariages"
    },
    {
      id: 36,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.17.jpeg",
      title: "Show Musical Exceptionnel",
      category: "Spectacles"
    },
    {
      id: 37,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.17 (1).jpeg",
      title: "Dîner d'Affaires VIP",
      category: "Galas"
    },
    {
      id: 38,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.17 (2).jpeg",
      title: "Team Building Corporate",
      category: "Corporate"
    },
    {
      id: 39,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.18.jpeg",
      title: "Mariage de Rêve",
      category: "Mariages"
    },
    {
      id: 40,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.18 (1).jpeg",
      title: "Performance Scénique Premium",
      category: "Spectacles"
    },
    {
      id: 41,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.18 (2).jpeg",
      title: "Gala de Remise de Prix",
      category: "Galas"
    },
    {
      id: 42,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.18 (3).jpeg",
      title: "Congrès Professionnel",
      category: "Corporate"
    },
    {
      id: 43,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.18 (4).jpeg",
      title: "Décoration Mariage Moderne",
      category: "Mariages"
    },
    {
      id: 44,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.19.jpeg",
      title: "Concert Privé Exclusif",
      category: "Spectacles"
    },
    {
      id: 45,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.19 (1).jpeg",
      title: "Soirée Gala Charity",
      category: "Galas"
    },
    {
      id: 46,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.19 (2).jpeg",
      title: "Forum d'Entreprise",
      category: "Corporate"
    },
    {
      id: 47,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.20.jpeg",
      title: "Célébration de Mariage Unique",
      category: "Mariages"
    },
    {
      id: 48,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.20 (1).jpeg",
      title: "Spectacle Culturel Artistique",
      category: "Spectacles"
    },
    {
      id: 49,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.20 (2).jpeg",
      title: "Banquet de Gala Royal",
      category: "Galas"
    },
    {
      id: 50,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.21.jpeg",
      title: "Séminaire de Formation",
      category: "Corporate"
    },
    // Additional WhatsApp Images - Continuing the collection
    {
      id: 51,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.21 (1).jpeg",
      title: "Événement Artistique Premium",
      category: "Spectacles"
    },
    {
      id: 52,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.21 (2).jpeg",
      title: "Soirée de Gala Luxury",
      category: "Galas"
    },
    {
      id: 53,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.22.jpeg",
      title: "Mariage Traditionnel Marocain",
      category: "Mariages"
    },
    {
      id: 54,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.22 (1).jpeg",
      title: "Conférence Tech Innovation",
      category: "Corporate"
    },
    {
      id: 55,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.22 (2).jpeg",
      title: "Spectacle Musical Élégant",
      category: "Spectacles"
    },
    {
      id: 56,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.22 (3).jpeg",
      title: "Dîner d'Excellence VIP",
      category: "Galas"
    },
    {
      id: 57,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.23.jpeg",
      title: "Cérémonie de Mariage Royale",
      category: "Mariages"
    },
    {
      id: 58,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.23 (1).jpeg",
      title: "Lancement Corporate Exclusif",
      category: "Corporate"
    },
    {
      id: 59,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.23 (2).jpeg",
      title: "Performance Live Exceptionnelle",
      category: "Spectacles"
    },
    {
      id: 60,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.24.jpeg",
      title: "Gala Diplomatique",
      category: "Galas"
    },
    {
      id: 61,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.24 (1).jpeg",
      title: "Réception de Mariage Chic",
      category: "Mariages"
    },
    {
      id: 62,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.24 (2).jpeg",
      title: "Assemblée Générale Corporate",
      category: "Corporate"
    },
    {
      id: 63,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.24 (3).jpeg",
      title: "Show Artistique Professionnel",
      category: "Spectacles"
    },
    {
      id: 64,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.25.jpeg",
      title: "Banquet de Prestige",
      category: "Galas"
    },
    {
      id: 65,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.25 (1).jpeg",
      title: "Mariage Destination Maroc",
      category: "Mariages"
    },
    {
      id: 66,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.26.jpeg",
      title: "Symposium International",
      category: "Corporate"
    },
    {
      id: 67,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.26 (1).jpeg",
      title: "Concert Privé Premium",
      category: "Spectacles"
    },
    {
      id: 68,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.26 (2).jpeg",
      title: "Soirée Thématique Gala",
      category: "Galas"
    },
    {
      id: 69,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.27.jpeg",
      title: "Cérémonie de Mariage Moderne",
      category: "Mariages"
    },
    {
      id: 70,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.27 (1).jpeg",
      title: "Meeting Corporate Stratégique",
      category: "Corporate"
    },
    {
      id: 71,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.27 (2).jpeg",
      title: "Animation Musicale Live",
      category: "Spectacles"
    },
    {
      id: 72,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.27 (3).jpeg",
      title: "Gala de Charité",
      category: "Galas"
    },
    {
      id: 73,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.27 (4).jpeg",
      title: "Mariage Berbère Authentique",
      category: "Mariages"
    },
    {
      id: 74,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.28.jpeg",
      title: "Convention d'Affaires",
      category: "Corporate"
    },
    {
      id: 75,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.28 (1).jpeg",
      title: "Spectacle Culturel Marocain",
      category: "Spectacles"
    },
    {
      id: 76,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.28 (2).jpeg",
      title: "Dîner de Gala Impérial",
      category: "Galas"
    },
    {
      id: 77,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.28 (3).jpeg",
      title: "Célébration de Mariage Exclusive",
      category: "Mariages"
    },
    {
      id: 78,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.29.jpeg",
      title: "Forum Économique",
      category: "Corporate"
    },
    {
      id: 79,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.29 (1).jpeg",
      title: "Performance Artistique Unique",
      category: "Spectacles"
    },
    {
      id: 80,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.29 (2).jpeg",
      title: "Soirée VIP Prestige",
      category: "Galas"
    },
    {
      id: 81,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.30.jpeg",
      title: "Mariage Royal Marocain",
      category: "Mariages"
    },
    {
      id: 82,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.30 (1).jpeg",
      title: "Séminaire Leadership",
      category: "Corporate"
    },
    {
      id: 83,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.31.jpeg",
      title: "Show Musical International",
      category: "Spectacles"
    },
    {
      id: 84,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.31 (1).jpeg",
      title: "Gala d'Excellence",
      category: "Galas"
    },
    {
      id: 85,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.31 (2).jpeg",
      title: "Réception de Mariage Luxueuse",
      category: "Mariages"
    },
    {
      id: 86,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.31 (3).jpeg",
      title: "Congrès Médical International",
      category: "Corporate"
    },
    {
      id: 87,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.31 (4).jpeg",
      title: "Concert Symphonique Privé",
      category: "Spectacles"
    },
    {
      id: 88,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.32.jpeg",
      title: "Banquet Diplomatique",
      category: "Galas"
    },
    {
      id: 89,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.32 (1).jpeg",
      title: "Mariage Palace Imperial",
      category: "Mariages"
    },
    {
      id: 90,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.32 (2).jpeg",
      title: "Table Ronde Corporate",
      category: "Corporate"
    },
    {
      id: 91,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.33.jpeg",
      title: "Spectacle Folklorique Premium",
      category: "Spectacles"
    },
    {
      id: 92,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.33 (1).jpeg",
      title: "Soirée de Gala Royal",
      category: "Galas"
    },
    {
      id: 93,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.33 (2).jpeg",
      title: "Cérémonie de Mariage Traditionnelle",
      category: "Mariages"
    },
    {
      id: 94,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.33 (3).jpeg",
      title: "Sommet d'Entreprise",
      category: "Corporate"
    },
    {
      id: 95,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.34.jpeg",
      title: "Animation Artistique Exclusive",
      category: "Spectacles"
    },
    {
      id: 96,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.34 (1).jpeg",
      title: "Gala de Bienfaisance VIP",
      category: "Galas"
    },
    {
      id: 97,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.34 (2).jpeg",
      title: "Mariage de Conte de Fées",
      category: "Mariages"
    },
    {
      id: 98,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.35.jpeg",
      title: "Colloque Scientifique",
      category: "Corporate"
    },
    {
      id: 99,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.35 (1).jpeg",
      title: "Performance Théâtrale Privée",
      category: "Spectacles"
    },
    {
      id: 100,
      image: "/images/gallery/WhatsApp Image 2025-10-02 at 15.57.35 (2).jpeg",
      title: "Dîner de Gala Présidentiel",
      category: "Galas"
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