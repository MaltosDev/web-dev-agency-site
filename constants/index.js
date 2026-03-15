import Planet_1 from "../public/images/floragel.jpg";
import Planet_3 from "../public/images/trakant.jpg";
import Planet_2 from "../public/images/snt-2nd2.png";
import Planet_6 from "../public/bdc1.png";
import Planet_7 from "../public/hec2.svg";
import Planet_8 from "../public/col3.png";
import rocket from "../public/rocket.svg";
import monitor from "../public/monitor.svg";
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
    title: "Exemple de site informatif (SNT-2nd2)",
    description: "Ceci est un exemple de site informatif que nous pouvons réaliser. Il est actuellement déployé en tant que projet de démonstration.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://alban-pixel.github.io/snt-2nd2/"
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
    imgUrl: rocket,
  },
  {
    imgUrl: monitor,
  },
];

export const insights = [
  {
    imgUrl: Planet_6,
    title: "5 raisons pour lesquelles votre entreprise doit avoir un bon site Web",
    subtitle: "Même si votre entreprise n’effectue aucune vente en ligne, il lui faut absolument un bon site Web pour tirer son épingle du jeu sur le marché actuel. C’est souvent en visitant un site Web que la clientèle potentielle se renseigne au sujet d’une entreprise. Il peut vous aider à faire face aux fluctuations inévitables du marché.",
    url: "https://www.bdc.ca/en/articles-tools/technology/create-website/5-reasons-your-business-needs-a-good-website"
  },
  {
    imgUrl: Planet_7,
    title: "Pourquoi le SEO est crucial pour votre business",
    subtitle:
      "La vitesse de chargement et le référencement sont les clés de la rétention. Apprenez les meilleures pratiques pour offrir une expérience instantanée.",
    url: "https://digital.hec.ca/blog/pourquoi-le-seo-est-important/"
  },
  {
    imgUrl: Planet_8,
    title: "Comment un site web renforce la confiance",
    subtitle:
      "Un site professionnel est bien plus qu'une vitrine : c'est le socle de votre crédibilité numérique et de votre sérieux.",
    url: "https://collaborsimpact.com/2026/01/17/comment-un-site-web-renforce-la-confiance-de-vos-clients/"
  },
];

export const pricingPlans = [
  {
    id: "basic",
    title: "Offre Essentielle",
    price: "800$",
    features: [
      "Landing Page moderne",
      "Design Responsive",
      "Formulaire de contact",
      "Liaison Réseaux sociaux",
      "1 Adresse courriel pro",
      "Certificat de sécurité SSL",
      "Optimisation SEO de base",
      "Hébergement 1 an inclus"
    ],
    buttonText: "Commencer"
  },
  {
    id: "pro",
    title: "Offre Premium",
    price: "1500$",
    features: [
      "Site moderne jusqu'à 10 pages",
      "Fonctionalités sur mesure",
      "Design Responsive",
      "Architecture avec base de donnée (backend)",
      "Interface de gestion (dashboard administrateur)",
      "Liaison Réseaux sociaux",
      "5 Adresses courriel pro",
      "Certificat de sécurité SSL",
      "Configuration Google My Business & Maps",
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
