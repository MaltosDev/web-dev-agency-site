import Planet_1 from "../public/images/floragel.jpg";
import Planet_3 from "../public/images/trakant.jpg";
import Planet_2 from "../public/images/robotix.jpg";
import Planet_6 from "../public/planet-06.png";
import Planet_7 from "../public/planet-07.png";
import Planet_8 from "../public/planet-08.png";
import vrpano from "../public/vrpano.svg";
import headset from "../public/headset.svg";
import twitter from "../public/twitter.svg";
import linkedin from "../public/linkedin.svg";
import instagram from "../public/instagram.svg";
import facebook from "../public/facebook.svg";
import nayl from "../public/images/nayl.jpg";
import alban from "../public/images/1768696144491.jpg";


export const exploreWorlds = [
  {
    id: "world-1",
    imgUrl: Planet_1,
    title: "Floragel",
    description: "Solution naturelle d'arrosage automatique pour plantes développée avec JA Québec. Le gel Floragel garantit jusqu'à 2 semaines d'autonomie écologique, intégrant un chatbot intelligent pour l'assistance.",
    stack: ["Bootstrap 5", "LLM", "EmailJS", "JavaScript", "HTML", "CSS"],
    url: "https://floragel.github.io/floragel-web/"
  },
  {
    id: "world-2",
    imgUrl: Planet_2,
    title: "StanRbotix",
    description: "Site officiel de l'équipe de robotique FRC StanRbotix 6622. Une plateforme immersive pour suivre l'actualité de l'équipe, ses compétitions FRC, découvrir les innovations techniques et l'engagement de l'équipe.",
    stack: ["Vue.js", "CSS", "HTML"],
    url: "https://www.stanrobotix6622.com/"
  },
  {
    id: "world-3",
    imgUrl: Planet_3,
    title: "Trakant",
    description: "Application mobile de productivité gamifiée développée pour le Hackathon HackDécouverte. Transformez vos habitudes en jeu : chaque action fait grandir votre colonie de fourmis en pixel art.",
    stack: ["Kotlin", "Jetpack Compose", "Material 3", "LocalStorage"],
    url: "https://github.com/floragel/Trakant",
    format: "mobile"
  }
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
    title: "Design Unique",
    subtitle:
      "Des designs uniques et modernes qui attirent l'attention, convertissent les visiteurs et se démarquent de la concurrence.",
  },
];

export const insights = [
  {
    imgUrl: Planet_6,
    title: "Pourquoi un design responsive est crucial en 2026",
    subtitle:
      "Avec plus de 60% du trafic web provenant des mobiles, découvrez comment l'adaptation fluide de votre site impacte directement vos conversions et votre SEO.",
  },
  {
    imgUrl: Planet_7,
    title: "Optimiser les performances de votre site Next.js",
    subtitle:
      "La vitesse de chargement est le premier critère de rétention. Apprenez les meilleures pratiques pour offrir une expérience instantanée à vos utilisateurs.",
  },
  {
    imgUrl: Planet_8,
    title: "L'importance de l'accessibilité web moderne",
    subtitle:
      "Rendre votre site accessible à tous n'est plus une option. Découvrez comment un design inclusif améliore l'expérience globale et la portée de votre marque.",
  },
];

export const pricingPlans = [
  {
    id: "basic",
    title: "Site Régulier",
    price: "800$",
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
    title: "Site Pro",
    price: "1500$",
    features: [
      "Site moderne jusqu'à 10 pages",
      "Fonctionalités sur mesure",
      "Design Responsive",
      "Optimisation SEO avancée",
      "Hébergement 1 an inclus",
      "3 mois de maintenance inclus"
    ],
    buttonText: "Développer mon site"
  },
  {
    id: "maintenance",
    title: "Service Après-Vente",
    price: "300$/an",
    features: [
      "Maintenance continue du site",
      "Mises à jour de sécurité",
      "Support technique prioritaire",
      "Modifications de contenu illimitées",
      "Monitoring de performance 24/7",
      "Sauvegardes régulières"
    ],
    buttonText: "Souscrire au maintien"
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
    name: "Nayl",
    role: "Développeur Frontend",
    desc: "Passionné par le design interactif et les interfaces modernes. Nayl crée des expériences web fluides et visuellement saisissantes, en combinant créativité artistique et maîtrise technique des dernières technologies frontend.",
    imgUrl: nayl,
    portfolioUrl: "https://www.nayl.ca/",
    linkedinUrl: "https://www.linkedin.com/in/nayl-lahlou/"
  },
  {
    name: "Alban",
    role: "Développeur Backend",
    desc: "Architecte de solutions robustes et scalables. Alban conçoit les fondations techniques de chaque projet, des APIs performantes aux bases de données optimisées, garantissant fiabilité et sécurité à chaque ligne de code.",
    imgUrl: alban,
    portfolioUrl: "https://alban-pixel.github.io/portfolio/",
    linkedinUrl: "https://www.linkedin.com/in/alban-delforge-aab7223a6/"
  }
];

export const portfolioSites = [
  {
    id: "floragel",
    title: "Floragel",
    desc: "Site vitrine élégant pour une boutique florale, mettant en avant l'univers naturel et raffiné de la marque.",
    imgUrl: "/images/portfolio-floragel.jpg",
    url: "#"
  },
  {
    id: "robotix",
    title: "Site Robotix",
    desc: "Plateforme dynamique dédiée à la robotique, avec un design futuriste et des animations immersives.",
    imgUrl: "/images/portfolio-robotix.jpg",
    url: "#"
  },
  {
    id: "trakant",
    title: "Trakant",
    desc: "Site web moderne pour une entreprise de logistique, axé sur la performance et la simplicité d'utilisation.",
    imgUrl: "/images/portfolio-trakant.jpg",
    url: "#"
  }
];

export const faqs = [
  {
    question: "Combien de temps faut-il pour créer un site ?",
    answer: "Pour un site vitrine, comptez en général 1 à 2 semaines. Pour une boutique en ligne ou un site sur mesure, le délai peut aller de 3 à 6 semaines selon la complexité."
  },
  {
    question: "Mon site sera-t-il adapté aux mobiles ?",
    answer: "Absolument ! Tous nos sites sont multiplateformes et s'adaptent parfaitement à toutes les tailles d'écrans (smartphones, tablettes, ordinateurs)."
  },
  {
    question: "M'aiderez-vous avec le référencement (SEO) ?",
    answer: "Oui, même notre forfait de base inclut une optimisation SEO technique pour que Google comprenne bien votre contenu. Nous proposons aussi du SEO avancé pour booster votre visibilité."
  },
  {
    question: "Puis-je modifier le contenu moi-même une fois le site en ligne ?",
    answer: "Oui, si nous intégrons un CMS (Système de Gestion de Contenu). Nous vous formerons pour que vous puissiez mettre à jour vos textes et images facilement."
  },
  {
    question: "Proposez-vous un service de maintenance après la livraison ?",
    answer: "Oui ! Nous offrons un forfait Service Après-Vente à 300$/an qui inclut la maintenance continue, les mises à jour de sécurité, le support technique prioritaire et un monitoring 24/7 pour assurer la pérennité de votre site."
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
