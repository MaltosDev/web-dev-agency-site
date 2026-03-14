import Planet_1 from "../public/planet-01.png";
import Planet_2 from "../public/planet-02.png";
import Planet_3 from "../public/planet-03.png";
import Planet_4 from "../public/planet-04.png";
import Planet_5 from "../public/planet-05.png";
import Planet_6 from "../public/planet-06.png";
import Planet_7 from "../public/planet-07.png";
import Planet_8 from "../public/planet-08.png";
import vrpano from "../public/vrpano.svg";
import headset from "../public/headset.svg";
import twitter from "../public/twitter.svg";
import linkedin from "../public/linkedin.svg";
import instagram from "../public/instagram.svg";
import facebook from "../public/facebook.svg";

export const exploreWorlds = [
  {
    id: "world-1",
    imgUrl: Planet_1,
    title: "Design Web Sur Mesure",
  },
  {
    id: "world-2",
    imgUrl: Planet_2,
    title: "Solutions E-Commerce",
  },
  {
    id: "world-3",
    imgUrl: Planet_3,
    title: "Optimisation SEO",
  },
  {
    id: "world-4",
    imgUrl: Planet_4,
    title: "Intégration CMS",
  },
  {
    id: "world-5",
    imgUrl: Planet_5,
    title: "Applications Web",
  },
];

export const startingFeatures = [
  "Planifiez un appel découverte gratuit pour discuter de vos objectifs",
  "Nous concevons et développons une stratégie adaptée à votre marque",
  "Lancez votre site moderne et commencez à convertir vos visiteurs",
];

export const newFeatures = [
  {
    imgUrl: vrpano,
    title: "Ultra Rapide",
    subtitle:
      "Nos sites sont optimisés pour la vitesse, garantissant haute performance et meilleure expérience utilisateur.",
  },
  {
    imgUrl: headset,
    title: "Mobile-First",
    subtitle:
      "Des designs entièrement responsifs qui s'affichent parfaitement sur tous les appareils.",
  },
];

export const insights = [
  {
    imgUrl: Planet_6,
    title: "Comment une refonte a augmenté les demandes clients de 200%",
    subtitle:
      "Découvrez notre étude de cas sur la transformation de la présence en ligne d'une boulangerie locale.",
  },
  {
    imgUrl: Planet_7,
    title: "5 conseils SEO essentiels pour les petites entreprises",
    subtitle:
      "Boostez votre classement dans les moteurs de recherche avec notre guide pratique.",
  },
  {
    imgUrl: Planet_8,
    title: "Pourquoi votre entreprise a besoin d'une application web moderne",
    subtitle:
      "Découvrez les avantages des applications web sur mesure pour optimiser vos opérations.",
  },
];

export const pricingPlans = [
  {
    id: "basic",
    title: "Vitrine",
    price: "499€",
    features: [
      "Landing Page moderne",
      "Design Responsive",
      "Formulaire de contact",
      "Optimisation SEO de base",
      "Hébergement 1 an inclus"
    ],
    buttonText: "Commencer"
  },
  {
    id: "pro",
    title: "E-Commerce",
    price: "1299€",
    features: [
      "Site moderne jusqu'à 10 pages",
      "Boutique en ligne complète",
      "Paiements sécurisés",
      "Design Responsive",
      "Optimisation SEO avancée"
    ],
    buttonText: "Développer ma boutique"
  },
  {
    id: "enterprise",
    title: "Sur Mesure",
    price: "Sur devis",
    features: [
      "Application Web complète",
      "Fonctionnalités avancées",
      "Design UI/UX Premium",
      "Intégration API & Base de données",
      "Support prioritaire"
    ],
    buttonText: "Contactez-nous"
  }
];

export const teamMembers = [
  {
    name: "Alex",
    role: "Lead Developer",
    desc: "Passionné par React et la performance web."
  },
  {
    name: "Sophie",
    role: "UI/UX Designer",
    desc: "Experte en création d'interfaces intuitives et modernes."
  },
  {
    name: "Thomas",
    role: "Expert SEO",
    desc: "Il fait en sorte que votre site soit vu par tous."
  }
];

export const faqs = [
  {
    question: "Combien de temps faut-il pour créer un site ?",
    answer: "Pour un site vitrine, comptez en général 2 à 3 semaines. Pour une boutique en ligne ou un site sur mesure, le délai peut aller de 4 à 8 semaines selon la complexité."
  },
  {
    question: "Mon site sera-t-il adapté aux mobiles ?",
    answer: "Absolument ! Tous nos sites sont 'Mobile-First' et s'adaptent parfaitement à toutes les tailles d'écrans (smartphones, tablettes, ordinateurs)."
  },
  {
    question: "M'aiderez-vous avec le référencement (SEO) ?",
    answer: "Oui, même notre forfait de base inclut une optimisation SEO technique pour que Google comprenne bien votre contenu. Nous proposons aussi du SEO avancé pour booster votre visibilité."
  },
  {
    question: "Puis-je modifier le contenu moi-même une fois le site en ligne ?",
    answer: "Oui, si nous intégrons un CMS (Système de Gestion de Contenu). Nous vous formerons pour que vous puissiez mettre à jour vos textes et images facilement."
  }
];

export const socials = [
  {
    name: "twitter",
    url: twitter,
  },
  {
    name: "linkedin",
    url: linkedin,
  },
  {
    name: "instagram",
    url: instagram,
  },
  {
    name: "facebook",
    url: facebook,
  },
];
