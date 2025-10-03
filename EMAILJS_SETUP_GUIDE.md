# Guide de Configuration EmailJS pour BAHOOVA Events

## 📧 Configuration EmailJS Complète

Votre configuration EmailJS a été intégrée avec succès ! Voici les détails et les étapes pour finaliser la configuration.

### ✅ Informations Configurées

- **Service ID**: `service_20b75lb`
- **Public Key**: `aeyr kzhj viex wklp`
- **Email de Destination**: `contact@bahoova.com`

### 🔧 Étapes de Configuration dans EmailJS Dashboard

#### 1. Créer les Templates d'Email

Vous devez créer 3 templates dans votre dashboard EmailJS :

##### Template 1: Contact Form (`template_contact`)
```
Sujet: {{subject}}

De: {{from_name}} ({{from_email}})
À: {{to_email}}

Message:
{{message}}

---
Répondre à: {{reply_to}}
```

##### Template 2: Newsletter Subscription (`template_newsletter`)
```
Sujet: Newsletter Subscription

De: {{from_email}}
À: {{to_email}}

Nouvelle inscription à la newsletter:
Email: {{from_email}}

---
Répondre à: {{reply_to}}
```

##### Template 3: Event Inquiry (`template_event_inquiry`)
```
Sujet: {{subject}}

De: {{from_name}} ({{from_email}})
Type d'événement: {{event_type}}
À: {{to_email}}

Message:
{{message}}

---
Répondre à: {{reply_to}}
```

#### 2. Configuration des Services

1. Allez sur [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Vérifiez que votre service `service_20b75lb` est actif
3. Assurez-vous que l'email `contact@bahoova.com` est configuré comme destinataire

#### 3. Test de Configuration

Pour tester la configuration :

1. **Mode Développement** : Les emails sont simulés (affichés dans la console)
2. **Mode Production** : Les emails sont envoyés via EmailJS

### 🚀 Fonctionnalités Intégrées

#### Formulaire de Contact
- ✅ Envoi d'emails personnalisés selon le type d'événement
- ✅ Templates d'email adaptés à chaque demande
- ✅ Validation des données
- ✅ Messages de confirmation

#### Newsletter
- ✅ Inscription automatique via EmailJS
- ✅ Confirmation d'inscription
- ✅ Gestion des erreurs

#### Types d'Événements Supportés
- 🏛️ Congrès Scientifique
- 🔬 Forum de Recherche
- 🏥 Conférence Médicale
- 💼 Séminaire d'Entreprise
- 🚀 Lancement de Produit
- 📚 Formation Professionnelle
- 🎭 Gala & Événements Caritatifs
- 💍 Mariage de Luxe
- 🎂 Anniversaire d'Entreprise
- ⚽ Événement Sportif
- 🎪 Festival Culturel
- 🎨 Exposition d'Art
- 📰 Conférence de Presse
- 🕌 Événement Religieux
- 🎉 Fête Privée
- 💻 Webinaire & Live Stream
- ✨ Autre

### 📁 Fichiers Modifiés

1. **`src/emailService.js`** - Service principal d'envoi d'emails
2. **`src/config/emailConfig.js`** - Configuration EmailJS
3. **`src/components/Contact.jsx`** - Formulaire de contact
4. **`src/components/Footer.jsx`** - Newsletter

### 🔍 Debugging

Pour déboguer les emails :

1. **Console du navigateur** : Vérifiez les logs d'EmailJS
2. **EmailDebugger** : Composant de debug en mode développement
3. **localStorage** : Emails stockés pour test

### 🎯 Prochaines Étapes

1. Créer les 3 templates dans EmailJS Dashboard
2. Tester l'envoi d'emails en mode production
3. Configurer les réponses automatiques si nécessaire
4. Surveiller les logs d'EmailJS pour les erreurs

### 📞 Support

Si vous rencontrez des problèmes :
1. Vérifiez la console du navigateur
2. Vérifiez les logs EmailJS
3. Testez avec des emails simples d'abord
4. Vérifiez que les templates sont correctement configurés

---

**Configuration terminée !** 🎉 Votre site web peut maintenant envoyer des emails via EmailJS.
