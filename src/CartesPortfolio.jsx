import { homeCardsColor, portfolioCardsColor } from "./config.js";

/* # # # # # # # # # # # # # # # # # # # # # */
const obj0 = {
  id: 10,
  title: "Retour",
  color: homeCardsColor,
  gif: "https://res.cloudinary.com/pierredev/image/upload/v1726063334/portfolio/gifs/g39tl9gae4jpzofnul5z.gif",
  img: "https://res.cloudinary.com/pierredev/image/upload/v1727795018/portfolio/imgs/bnykj67eazhs6ejtclmt.jpg",
  description: `
  \n>Retour à la page principale\n

  Cliquez sur cette carte pour revenir aux cartes de présentation.
  `,
};

/* # # # # # # # # # # # # # # # # # # # # # */
const obj1 = {
  id: 11,
  title: "",
  color: portfolioCardsColor,
  gif: "",
  img: "",
  description: "",
};

/* # # # # # # # # # # # # # # # # # # # # # */
const obj2 = {
  id: 12,
  title: "",
  color: portfolioCardsColor,
  gif: "",
  img: "",
  description: "",
};
/* # # # # # # ELEARNING # # # # # # # # # # # # # # # */
const obj3 = {
  id: 13,
  title: "E-learning",
  color: portfolioCardsColor,
  gif: "https://res.cloudinary.com/pierredev/image/upload/v1726063334/portfolio/gifs/k0gdbvq7falkwbs48erj.gif",
  img: "https://res.cloudinary.com/pierredev/image/upload/c_scale/v1727795014/portfolio/imgs/fzcxdrsxj3l4nbgi75ge.jpg",
  description: `
  \n>E-Learning de conduite auto\n

  Pour l'entreprise The Good Drive, j'ai réalisé un E-Learning qui permet aux élèves des auto-école de s'entrainer avant de démarrer les heures de conduite.
  \n>Fonctionnalités\n
  Lecture audio du texte, QCM, lecture vidéos, reconstitution de panneaux routiers, clic sur vidéo pour détecter les dangers. Et surtout, rien n'est figé: via un back-office puissant, le client peut écrire ses propres exercices, uploader ses propres vidéos. C'est un vrai CMS de E-Learning.
  \n>TECHNOLOGIES\n
    React.js, Javascript, Express.js, AWS S3 EC2 Polly, 
    `,
  button1: "the good drive",
  link1: "https://www.thegooddrive.fr/",
  buttonvideo: "démo vidéo",
  linkvideo:
    "https://res.cloudinary.com/pierredev/video/upload/v1727980345/portfolio/videos/ujdsybauosyhl78osi8j.mov",
};
/* # # # # # # JEUX # # # # # # # # # # # # # # # */
const obj4 = {
  id: 14,
  color: portfolioCardsColor,
  title: "Web app multijoueur",
  gif: "https://res.cloudinary.com/pierredev/image/upload/v1727795013/portfolio/imgs/i5ghqryzpu2ttjnlghhb.gif",
  img: "https://res.cloudinary.com/pierredev/image/upload/v1727795017/portfolio/imgs/dlfzuic9vqg2jsadnrgo.png",
  description: `
  \n>Morpion géant\n
  \n En classe au lycée, lorsque je voulais faire passer le temps, je sortais une feuille de papier quadrillée et démarrais un morpion sans limite avec mon voisin.
  J'ai conçu la version en ligne de ce jeu :
  \n>Mode opératoire\n
  Deux personnes entrent l'url du jeu sur leur navigateur ou leur téléphone. Entrer un nom d'utilisateur. Cliquer sur le nom de l'adversaire pour démarrer une partie.
  \n>Stack technique\n
   node.js, express, React, websockets, render.com
    `,
  button1: "Essayez-le !",
  link1: "https://pierremorpion.netlify.app/",
  buttonvideo: "démo vidéo",
  linkvideo:
    "https://res.cloudinary.com/pierredev/video/upload/v1728036802/portfolio/videos/d07vg4ki7sowwcye4wz1.mov",
};
/* # # # # # # GARELLI # # # # # # # # # # # # # # # */
const obj5 = {
  id: 15,
  color: portfolioCardsColor,
  title: "Association Garelli",
  gif: "https://res.cloudinary.com/pierredev/image/upload/v1726063335/portfolio/gifs/b41rkf50l2q9yjfdbvfn.gif",
  img: "https://res.cloudinary.com/pierredev/image/upload/v1728037414/portfolio/imgs/ion2xo98zlxxhvlyzrp9.jpg",
  description: `
  \n>Suivi de mineurs isolés étrangers\n
  
  Garelli95 est une association à qui l'état confie des mineurs isolés étrangers.
  Leur besoin était d'enregistrer l'évolution des jeunes via un questionnaire réalisé tous les six mois, et ainsi évaluer leur action. L'interface se devait d'être chaleureuse et animée, pour donner envie.

  J'ai conçu en complément une interface Back-office qui permet de paramétrer les questions, catégories, utilisateurs etc... N'hésitez pas à les contacter pour leur demander des retours sur notre collaboration
  
  Stack technique : React, Zustand, Strapi, Cloudinary, MySql, Heroku`,
  link1: "https://www.donbosco-actionsociale.org/associations/garelli-95/",
  button1: "Garelli 95",
  buttonvideo: "démo vidéo",
  linkvideo:
    "https://res.cloudinary.com/pierredev/video/upload/v1727713156/portfolio/videos/ubmpjasnytrhofumrsth.mov",
};
/* # # # # # # DIAGRAMMES # # # # # # # # # # # # # # # */
const obj6 = {
  id: 16,
  color: portfolioCardsColor,
  title: "ADIE",
  description: `
  \n>Outils No Code\n
    Je sais coder, mais je sais aussi no-coder ! Les outils de No Code permettent de répondre rapidement à un besoin métier spécifique. 
    
    \n>Préfecture d'Occitanie\n
    Par exemple, pour la Préfecture d'Occitaine, j'ai développé en "Grist" une interface de gestion des places en crèches pour les agents publics de la région. Un outil désormais à leur disposition et facile à utiliser.
    
        \n>ADIE\n
    Ou encore, pour l'ADIE, la première banque de micro-crédit de France, à l'aide de Ksaar, j'ai créé un simulateur d'impact écologique à destination des petites entreprises.
  `,
  gif: "https://res.cloudinary.com/pierredev/image/upload/v1728042846/portfolio/gifs/u6gumr9iuelbzbtmnh73.gif",
  img: "https://res.cloudinary.com/pierredev/image/upload/v1728042370/portfolio/imgs/kyi9jxxr3bsueihvzecq.jpg",
  buttonvideo: "Préfecture",
  linkvideo:
    "https://res.cloudinary.com/pierredev/video/upload/v1727980341/portfolio/videos/upzfa0fy5qozxxju0dpr.mov",
  buttonvideo2: "ADIE",
  linkvideo2:
    "https://res.cloudinary.com/pierredev/video/upload/v1727980341/portfolio/videos/nmvi0hfmbmasep8ds5n3.mov",
};
// const obj6 = {
//   id: 6,
//   title: "Diagrammes interactifs",
//   description: `
//   \n>Diagramme de flux pour Alkalee\n

//     L'interface que j'ai développée permet à un utilisateur de "connecter des boîtes entre elles" afin de construire un shéma qui simule les composants électroniques des voitures. Un appel à l'API de leur moteur affichera ensuite les résultats de la simulation.

//   Stack utilisée : React, Bryntum, React-Flow, api Jira

//   \n>Gantt personalisé pour Quantic Dream\n
//   Quantic Dream est un grand éditeur de jeu vidéo français. J'ai conçu pour eux un diagramme de Gantt à l'échelle de cinq ans qui permet de faire ressortir dépendances entre chantiers.
//   `,
//   gif: "https://res.cloudinary.com/pierredev/image/upload/v1728042846/portfolio/gifs/u6gumr9iuelbzbtmnh73.gif",
//   img: "https://res.cloudinary.com/pierredev/image/upload/v1728042370/portfolio/imgs/kyi9jxxr3bsueihvzecq.jpg",
//   buttonvideo: "Alakee",
//   linkvideo:
//     "https://res.cloudinary.com/pierredev/video/upload/v1727980341/portfolio/videos/upzfa0fy5qozxxju0dpr.mov",
//   buttonvideo2: "Quantic Dream",
//   linkvideo2:
//     "https://res.cloudinary.com/pierredev/video/upload/v1727980341/portfolio/videos/nmvi0hfmbmasep8ds5n3.mov",
// };
/* # # # # # # LIVRAISON # # # # # # # # # # # # # # # */
const obj7 = {
  id: 17,
  color: portfolioCardsColor,
  title: "Needeat Livraison",
  gif: "https://res.cloudinary.com/pierredev/image/upload/v1726063335/portfolio/gifs/q7hmlwl9k1gilnirugey.gif",
  img: "https://res.cloudinary.com/pierredev/image/upload/v1727795014/portfolio/imgs/rssjb4lscxmhhscxkdvw.jpg",
  description: `
  \n>Application de livraison de repas\n
  Needeat est le "Deliveroo" de Noumea, leader de la livraison de repas en nouvelle calédonie. En équipe de trois développeurs, nous avons créé les trois applications nécessaires pour faire tourner un tel réseau: l'app utilisateur, l'app livreur, l'app restautant.
  Le tout est orchestré par un programme back-end qui dispatche intelligemment les commandes aux livreurs géolocalisés.
  \n>Stack technique\n
   React Native, React, React-admin, Node.js, express, Stripe, lemonway`,
  link1: "https://needeat-nc.com/",
  button1: "needeat",
  buttonvideo: "démo restau",
  linkvideo:
    "https://res.cloudinary.com/pierredev/video/upload/v1727980467/portfolio/videos/e5g7m7lf0ia93vsvg6dx.mp4",
};
/* # # # # # # Eco # # # # # # # # # # # # # # # */
const obj8 = {
  id: 18,
  color: portfolioCardsColor,
  title: "Loom & Field",
  description: `
  \n>E-Commerce\n
  
  Loom & Field est une boutique en ligne d'objets de déco d'intérieur issus de l'artisanat : tapis, coussins, poufs, paniers. Ces textiles sont fabriqués à la main par des coopératives au Maroc, au Guatemala, Mexique ou encore Turquie.
  
  En tant que co-fondateur de cette aventure, j'ai créé et customisé ce site marchand sur Shopify.
  `,
  img: "https://res.cloudinary.com/pierredev/image/upload/v1728051872/portfolio/imgs/v92lskrsjnm4ohrg9dch.jpg",
  gif: "https://res.cloudinary.com/pierredev/image/upload/v1728052135/portfolio/gifs/q33hqg1kl4wxin4ngm01.gif",
  link1: "https://www.loomandfield.com/",
  button1: "Visitez la boutique",
};

export default [obj0, obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8];
