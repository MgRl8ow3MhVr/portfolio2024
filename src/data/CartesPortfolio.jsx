import { homeCardsColor, portfolioCardsColor } from "../config.js";
import LeftArrow from "../assets/svg/LeftArrow.jsx";

/* # # # # # # # # # # # # # # # # # # # # # */
const obj0 = {
  id: 10,
  title: "Retour",
  color: homeCardsColor,
  icon: LeftArrow,
  gif: "https://res.cloudinary.com/pierredev/image/upload/v1767975814/portfolio/imgs/xg0j1ei0rsmgcxgigpxm.png",
  img: "https://res.cloudinary.com/pierredev/image/upload/v1767975814/portfolio/imgs/xg0j1ei0rsmgcxgigpxm.png",
  description: ``,
  backToHome: true,
};

/* # # # # # # # # # # # # # # # # # # # # # */
const obj1 = {
  id: 11,
  title: "Intranet micro-apps",
  customer: "Veolia",
  color: portfolioCardsColor,
  gif: "https://res.cloudinary.com/pierredev/image/upload/v1767991845/portfolio/imgs/djd6gvrkwmlgrlayjzub.png",
  img: "https://res.cloudinary.com/pierredev/image/upload/v1767991845/portfolio/imgs/djd6gvrkwmlgrlayjzub.png",
  description: `
    >Micro-apps dans l'intranet Veolia - 2025
  Veolia adopte une solution unique d'intranet pour toutes ses BU à travers le monde. La solution permet, via une interface Low Code, de construire des micro-applications qui récupérent les informations souhaitées via API sont ainsi customisées pour chaque BU.
  <space/>
  Pour diverses BU de Veolia, j'ai développé 6 micro-apps au cours de l'année 2025 : gestion des congés, avance de salaire, parcours de formation, dépôt de ticket IT, gestion des tâches d'équipe.
  `,
  buttonvideo: "démo vidéo",
  linkvideo:
    "https://res.cloudinary.com/pierredev/video/upload/v1767991748/portfolio/videos/tqisdaxqtqj3ejn9ak57.mov",
};

/* # # # # # # # # # # # # # # # # # # # # # */
// const obj2 = {
//   id: 12,
//   title: "Calcul d'impact écologique",
//   customer: "Adie",
//   color: portfolioCardsColor,
//   gif: "https://res.cloudinary.com/pierredev/image/upload/v1767975356/portfolio/imgs/rnrpg0q16nprbqy7sbkl.png",
//   img: "https://res.cloudinary.com/pierredev/image/upload/v1767975356/portfolio/imgs/rnrpg0q16nprbqy7sbkl.png",
//   description: `
//         >Calcul d'impact écologique des entreprises - 2024
//       L'ADIE est la première banque de micro-crédit de France. Ils ont imaginé pour leurs clients et leurs prospects un simulateur d'impact écologique d'une activité.
//       L'utilisateur répond d'abord à plusieurs questions interactives, puis selon un score calculé, l'application lui propose plusieurs conseils.
//       En intégrant l'outil Low Code Ksaar, j'ai créé pour eux ce simulateur d'impact.
// `,
//   button1: "Adie",
//   link1:
//     "https://monentreprisedurable21.applicatif.net/v2/customer/af3504c1-641c-47a1-9561-f2668d054a9b/firstPage/027a5a36-0aa9-470f-b698-9af52f786af4",
//   buttonvideo: "démo vidéo",
//   linkvideo:
//     "https://res.cloudinary.com/pierredev/video/upload/v1767456759/portfolio/videos/ypltyyz6kcgbaejjr2jt.mov",
// };
const obj2 = {
  id: 12,
  title: "Impact écologiques",
  customer: "Vertigo Lab",
  color: portfolioCardsColor,
  gif: "https://res.cloudinary.com/pierredev/image/upload/v1768323462/portfolio/imgs/fwkdf9lutrltlgugp3fs.png",
  img: "https://res.cloudinary.com/pierredev/image/upload/v1768323462/portfolio/imgs/fwkdf9lutrltlgugp3fs.png",
  description: `
        >Calcul d'impact écologiques et socio-économiques des entreprises - 2024
     Vertigo Lab est un cabinet d'études d'impacts écologiques et socio-économiques, missionné par des instituts publics ou par des entreprises privées.

     Ils ont développé une méthode de calcul des retombées socio-économiques des entreprises dans leur région, qui prend en entrée les dépenses et les résultats des entreprises. Les chiffres produits permettent de leur apporter du conseil en durabilité pour les les inciter à se fournir localement.
     Ils m'ont missionné pour leur livrer une interface qui permet d'automatiser ces calculs. Elle est désormais à à disposition des consultants pour leur faire gagner du temps dans leurs études clients.

     La vidéo ci-dessous ne montre "que" l'interface. Tous les calculs sont dans la partie immergée de l'iceberg, le back-end, qui applique la méthode de calcul qu'ils ont mise au point.
`,
  button1: "Vertigo Lab",
  link1: "https://vertigolab.eu/en/home/",
  buttonvideo: "démo vidéo",
  linkvideo:
    "https://res.cloudinary.com/pierredev/video/upload/v1768316378/portfolio/videos/b2wtg7taf3lkghfd5oxh.mov",
};
/* # # # # # # ELEARNING # # # # # # # # # # # # # # # */
const obj3 = {
  id: 13,
  title: "E-learning auto-écoles",
  customer: "TheGoodDrive",
  color: portfolioCardsColor,
  gif: "https://res.cloudinary.com/pierredev/image/upload/v1726063334/portfolio/gifs/k0gdbvq7falkwbs48erj.gif",
  img: "https://res.cloudinary.com/pierredev/image/upload/c_scale/v1727795014/portfolio/imgs/fzcxdrsxj3l4nbgi75ge.jpg",
  description: `
  >E-Learning de conduite automobile - 2020

  Pour l'entreprise The Good Drive, j'ai réalisé un E-Learning qui permet aux élèves des auto-école de s'entrainer avant de démarrer les heures de conduite.
  >Fonctionnalités
  Lecture audio du texte, QCM, lecture vidéos, reconstitution de panneaux routiers, clic sur vidéo pour détecter les dangers. Et surtout, rien n'est figé: via un back-office puissant, le client peut écrire ses propres exercices, uploader ses propres vidéos. C'est un vrai CMS de E-Learning.
  >TECHNOLOGIES
    React.js, Javascript, Express.js, AWS S3 EC2 Polly,
    `,
  button1: "the good drive",
  link1: "https://www.thegooddrive.fr/",
  buttonvideo: "démo vidéo",
  linkvideo:
    "https://res.cloudinary.com/pierredev/video/upload/v1727980345/portfolio/videos/ujdsybauosyhl78osi8j.mov",
};
/* # # # # # # # # # # # # # # # # # # # # # */
const obj4 = {
  id: 14,
  title: "Diagrammes interactifs",
  customer: "Alkalee",
  color: portfolioCardsColor,
  description: `
  >Diagramme de flux - 2022
  Alkalee est une entreprise qui développe des simulateurs de circuits électoniques pour les constructeurs automobiles.
    L'interface que j'ai développée pour eux permet à un utilisateur de "connecter modules entre eux afin d'appeler leur moteur de simulation par API et d'afficher les résultats de la simulation.

    >Stack technique :
  React, React-Flow. Back-end en Nest.js
  `,
  gif: "https://res.cloudinary.com/pierredev/image/upload/v1728042846/portfolio/gifs/u6gumr9iuelbzbtmnh73.gif",
  img: "https://res.cloudinary.com/pierredev/image/upload/v1728042370/portfolio/imgs/kyi9jxxr3bsueihvzecq.jpg",
  buttonvideo: "Alakee",
  linkvideo:
    "https://res.cloudinary.com/pierredev/video/upload/v1727980341/portfolio/videos/upzfa0fy5qozxxju0dpr.mov",
};
/* # # # # # # # # # # # # # # # # # # # # # */
const obj5 = {
  id: 15,
  color: portfolioCardsColor,
  title: "Suivi des mineurs isolés",
  customer: "Garelli 95",
  gif: "https://res.cloudinary.com/pierredev/image/upload/v1726063335/portfolio/gifs/b41rkf50l2q9yjfdbvfn.gif",
  img: "https://res.cloudinary.com/pierredev/image/upload/v1728037414/portfolio/imgs/ion2xo98zlxxhvlyzrp9.jpg",
  description: `
  >Suivi de mineurs isolés étrangers - 2024

  Garelli95 est une association du Val d'Oise qui accompagne des mineurs isolés étrangers dans leur parcours d'intégration en France.L'état leur confie environ 70 mineurs par ans.
  Leur besoin était double : permettre aux jeunes d'évaluer et constater leur évolution, et permettre aussi à l'association de mesurer son impact via des indicateurs de progression. Ainsi, ils ont imaginé un questionnaire réalisé tous les six mois sur une plateforme à laquelle j'ai donné vie. L'interface se devait d'être chaleureuse et animée, pour rendre cette évaluation bi-mensuelle ludique.

  J'ai conçu en complément une interface Back-office qui leur permet de paramétrer les questions, les catégories, les utilisateurs etc... Ainsi, cette plateforme peut être déclinée pour de multiples associations.
   
  >Stack technique :
  React, Zustand, Strapi, Cloudinary, MySql, Heroku`,
  link1: "https://www.donbosco-actionsociale.org/associations/garelli-95/",
  button1: "Garelli 95",
  buttonvideo: "démo vidéo",
  linkvideo:
    "https://res.cloudinary.com/pierredev/video/upload/v1727713156/portfolio/videos/ubmpjasnytrhofumrsth.mov",
};
/* # # # # # # # # # # # # # # # # # # # # # */
const obj6 = {
  id: 16,
  color: portfolioCardsColor,
  title: "Grist",
  customer: "MIN. FINANCES",
  description: `
  >Passer d'excel à Grist - 2025
Grist est un tableur moderne combinant la simplicité d’Excel avec la puissance d’une base de données. Il permet de structurer les données, d’automatiser des règles, de gérer finement les droits et de collaborer en temps réel, là où Excel atteint vite ses limites.
  <space/>
Grist est un outil Low Code promu par la Direction du Numérique auprès des ministères et collectivités, afin de sortir d'excel et développer un commun numérique souverain. J'ai ainsi pu développer des utilisations de Grist pour l'accadémie de Mulhouse, pour la préfecture d'Occitaine, et pour le ministère des finances. Si je devais n'en 
  <space/>
J’ai intégré Grist pour l’arbre de Noël du ministère des Finances, un projet complexe nécessitant l’autonomie de chaque département et une gestion des droits très fine. J’ai aussi développé pour la préfecture d’Occitanie un outil de suivi du budget des places en crèches des agents publics, et enfin pour la DINUM, des templates Grist (dont un annuaire avancé) aujourd’hui accessibles à tous les agents publics.
  `,
  gif: "https://res.cloudinary.com/pierredev/image/upload/v1768330170/portfolio/imgs/yrpmvnoto7x6tuw2hpvu.png",
  img: "https://res.cloudinary.com/pierredev/image/upload/v1768330170/portfolio/imgs/yrpmvnoto7x6tuw2hpvu.png",
  buttonvideo: "Arbre de Noel",
  linkvideo:
    "https://res.cloudinary.com/pierredev/video/upload/v1767996750/portfolio/videos/l8ojg4figjdeas23fanj.mov",
  buttonvideo2: "Annuaire",
  linkvideo2:
    "https://res.cloudinary.com/pierredev/video/upload/v1767996752/portfolio/videos/jlff22egwvsuu9fmkcrt.mov",
};

const obj7 = {
  id: 17,
  color: portfolioCardsColor,
  title: "Livraison à Noumea",
  customer: "Needeat",
  gif: "https://res.cloudinary.com/pierredev/image/upload/v1726063335/portfolio/gifs/q7hmlwl9k1gilnirugey.gif",
  img: "https://res.cloudinary.com/pierredev/image/upload/v1727795014/portfolio/imgs/rssjb4lscxmhhscxkdvw.jpg",
  description: `
  >Application de livraison de repas - 2021
  Needeat est le "Deliveroo" de Noumea, leader de la livraison de repas en nouvelle calédonie. En équipe de trois développeurs, nous avons créé les trois applications nécessaires pour faire tourner un tel réseau: l'app utilisateur, l'app livreur, l'app restautant.
  Le tout est orchestré par un programme back-end qui dispatche intelligemment les commandes aux livreurs géolocalisés.
  >Stack technique
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
  title: "Boutique en ligne",
  customer: "Loom & Field",
  description: `
  >E-Commerce - 2018

  Loom & Field est une boutique en ligne d'objets de décoration d'intérieur issus de l'artisanat : tapis, coussins, poufs, paniers. Ces textiles sont fabriqués à la main par des coopératives au Maroc, au Guatemala, Mexique ou encore Turquie.

  En tant que co-fondateur de cette aventure, j'ai créé et customisé ce site marchand sur Shopify.
  `,
  img: "https://res.cloudinary.com/pierredev/image/upload/v1728051872/portfolio/imgs/v92lskrsjnm4ohrg9dch.jpg",
  gif: "https://res.cloudinary.com/pierredev/image/upload/v1728052135/portfolio/gifs/q33hqg1kl4wxin4ngm01.gif",
  link1: "https://www.loomandfield.com/",
  button1: "Visitez la boutique",
};

export default [obj0, obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8];
