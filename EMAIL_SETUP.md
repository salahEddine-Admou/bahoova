# Configuration d'Envoi d'Emails - BAHOOVA Events

## 🚀 Solutions pour l'Envoi d'Emails

### 1. **EmailJS (Recommandé pour débuter)**

EmailJS permet d'envoyer des emails directement depuis le frontend sans backend.

#### Installation :
```bash
npm install @emailjs/browser
```

#### Configuration :
1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Créez un service email (Gmail, Outlook, etc.)
3. Créez un template d'email
4. Obtenez vos clés API

#### Code à ajouter dans `src/emailService.js` :
```javascript
import emailjs from '@emailjs/browser';

export const sendEmailWithEmailJS = async (emailData) => {
  try {
    const response = await emailjs.send(
      'YOUR_SERVICE_ID',        // Remplacez par votre Service ID
      'YOUR_TEMPLATE_ID',       // Remplacez par votre Template ID
      {
        to_email: emailData.to,
        from_name: emailData.fromName,
        from_email: emailData.from,
        subject: emailData.subject,
        message: emailData.body,
        reply_to: emailData.from
      },
      'YOUR_PUBLIC_KEY'         // Remplacez par votre Public Key
    );
    
    return {
      success: true,
      message: 'Email envoyé avec succès !'
    };
  } catch (error) {
    console.error('EmailJS error:', error);
    return {
      success: false,
      message: 'Erreur lors de l\'envoi de l\'email'
    };
  }
};
```

### 2. **Backend API (Solution Professionnelle)**

#### Node.js + Nodemailer :
```javascript
// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: 'contact@bahoova.com',
    pass: 'your-app-password' // Mot de passe d'application Gmail
  }
});

app.post('/api/send-email', async (req, res) => {
  try {
    const { to, from, subject, body } = req.body;
    
    await transporter.sendMail({
      from: from,
      to: to,
      subject: subject,
      html: body.replace(/\n/g, '<br>')
    });
    
    res.json({ success: true, message: 'Email envoyé avec succès !' });
  } catch (error) {
    res.json({ success: false, message: 'Erreur lors de l\'envoi' });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
```

### 3. **Netlify Functions (Déploiement Facile)**

Créez `netlify/functions/send-email.js` :
```javascript
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { to, from, subject, body } = JSON.parse(event.body);
    
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: from,
      to: to,
      subject: subject,
      html: body.replace(/\n/g, '<br>')
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Email envoyé !' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: 'Erreur' })
    };
  }
};
```

## 🔧 Configuration Actuelle

### Mode Développement :
- ✅ **Simulation d'emails** - Affiche les détails dans la console
- ✅ **EmailDebugger** - Interface pour voir les emails simulés
- ✅ **Stockage local** - Sauvegarde des emails dans localStorage

### Mode Production :
- 🔄 **EmailJS** - Configuration requise
- 🔄 **Backend API** - Développement requis
- 🔄 **Netlify Functions** - Déploiement requis

## 📧 Test Actuel

1. **Remplissez le formulaire** de contact
2. **Sélectionnez un type d'événement**
3. **Soumettez le formulaire**
4. **Vérifiez la console** (F12) pour voir l'email complet
5. **Regardez le panneau EmailDebugger** en bas à droite

## 🎯 Prochaines Étapes

1. **Choisissez une solution** (EmailJS recommandé)
2. **Configurez les clés API**
3. **Testez l'envoi réel**
4. **Déployez en production**

## 📞 Support

Pour toute question sur la configuration des emails, contactez l'équipe de développement.
