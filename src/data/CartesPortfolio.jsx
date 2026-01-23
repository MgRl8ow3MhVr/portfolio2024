import LeftArrow from "../assets/svg/LeftArrow.jsx";

/* # # # # # # # # # # # # # # # # # # # # # */
const retour = {
  id: 10,
  title: "Retour",
  icon: LeftArrow,
  backToHome: true,
};

/* # # # # # # # # # # # # # # # # # # # # # */
const intranetMicroApps = {
  id: 11,
  title: "Intranet micro-apps",
  customer: "Veolia",
  gif: "https://res.cloudinary.com/pierredev/image/upload/v1767991845/portfolio/imgs/djd6gvrkwmlgrlayjzub.png",
  img: "https://res.cloudinary.com/pierredev/image/upload/v1767991845/portfolio/imgs/djd6gvrkwmlgrlayjzub.png",
  description: `
    >Micro-apps dans l'intranet Veolia - 2025
  Veolia a déployé un **intranet commun** à l’ensemble de ses entités afin d’harmoniser les outils internes tout en laissant à chaque business unit la possibilité d’adapter les usages à ses besoins. Grâce à une interface low code connectée aux systèmes existants, des micro-applications peuvent être conçues rapidement et intégrées directement aux workflows des équipes.
  <space/>
  En 2025, j’ai conçu et développé des micro-applications pour différentes entités du groupe, permettant de simplifier des processus du quotidien : gestion des congés, demandes d’avance sur salaire, parcours de formation, tickets IT ou suivi des tâches d’équipe. Ces outils ont permis de fluidifier les échanges, de réduire les tâches manuelles et de proposer des solutions adaptées aux réalités de chaque équipe.
  `,
  buttonvideo: "Démo vidéo",
  linkvideo:
    "https://res.cloudinary.com/pierredev/video/upload/v1767991748/portfolio/videos/tqisdaxqtqj3ejn9ak57.mov",
};

/* # # # # # # # # # # # # # # # # # # # # # */
const impactEcologiques = {
  id: 12,
  title: "Impact écologique",
  customer: "Vertigo Lab",
  gif: "https://res.cloudinary.com/pierredev/image/upload/v1768323462/portfolio/imgs/fwkdf9lutrltlgugp3fs.png",
  img: "https://res.cloudinary.com/pierredev/image/upload/v1768323462/portfolio/imgs/fwkdf9lutrltlgugp3fs.png",
  description: `
    >Calcul d'impact écologiques et socio-économiques des entreprises - 2024
    <space/>
    Vertigo Lab est un cabinet spécialisé dans l’analyse des impacts écologiques et socio-économiques, intervenant pour des institutions publiques comme pour des entreprises privées.

    Ils ont conçu une méthode permettant de mesurer les retombées socio-économiques d’une entreprise sur son territoire, à partir de ses dépenses et de ses résultats. Ces indicateurs servent ensuite de base à des missions de conseil en durabilité, notamment pour encourager des stratégies d’approvisionnement plus locales.

    En équipe avec un **Data Ingenieer**, nous avons conçu pour eux une interface qui automatise ces calculs et les rend utilisables au quotidien par les consultants. L’outil leur fait gagner du temps, fiabilise les résultats et leur permet de se concentrer sur l’analyse et la formulation de recommandations.

    La vidéo ci-dessous ne montre "que" l'interface. Les calculs se trouvent dans la partie immergée de l'iceberg, le back-end, qui applique la méthode de calcul qu'ils ont mise au point.
`,
  button1: "Vertigo Lab",
  link1: "https://vertigolab.eu/en/home/",
  buttonvideo: "Démo vidéo",
  linkvideo:
    "https://res.cloudinary.com/pierredev/video/upload/v1768316378/portfolio/videos/b2wtg7taf3lkghfd5oxh.mov",
};
/* # # # # # # ELEARNING # # # # # # # # # # # # # # # */
const eLearningAutoEcoles = {
  id: 13,
  title: "E-learning auto-écoles",
  customer: "TheGoodDrive",
  gif: "https://res.cloudinary.com/pierredev/image/upload/v1726063334/portfolio/gifs/k0gdbvq7falkwbs48erj.gif",
  img: "https://res.cloudinary.com/pierredev/image/upload/c_scale/v1727795014/portfolio/imgs/fzcxdrsxj3l4nbgi75ge.jpg",
  description: `
  >E-Learning de conduite automobile - 2020
  <space/>

  Pour The Good Drive, j’ai développé une plateforme d’e-learning destinée aux élèves d’auto-écoles, utilisée en amont des premières heures de conduite. Le projet consistait à concevoir une application capable de proposer différents types d’exercices interactifs autour du code de la route et de la conduite, tout en restant simple à administrer côté client.
  <space/>

  >Fonctionnalités
  <ul>
  - Lecture audio des contenus textuels
  - QCM interactifs
  - Lecture et intégration de vidéos pédagogiques
  - Reconstitution de panneaux routiers
  - Identification des dangers au clic dans une vidéo
  </ul>
  <space/>

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
const diagrammesInteractifs = {
  id: 14,
  title: "Diagrammes interactifs",
  customer: "Alkalee",
  description: `
  >Diagramme de flux - 2022
  <space/>
  Alkalee développe des **simulateurs de circuits électroniques** destinés aux constructeurs automobiles. Leur moteur de calcul est accessible via API, mais nécessitait une interface visuelle pour en faciliter l’usage par des profils non développeurs.

  J’ai conçu une application permettant de construire des schémas de simulation sous forme de diagrammes de flux. L’utilisateur peut **assembler des modules**, **définir leurs connexions**, puis lancer la simulation. Les appels au moteur sont générés automatiquement à partir du graphe, et les résultats sont restitués dans l’interface.
  <space/>

    >Stack technique :
  React, React-Flow. Back-end en Nest.js
  `,
  gif: "https://res.cloudinary.com/pierredev/image/upload/v1728042846/portfolio/gifs/u6gumr9iuelbzbtmnh73.gif",
  img: "https://res.cloudinary.com/pierredev/image/upload/v1728042370/portfolio/imgs/kyi9jxxr3bsueihvzecq.jpg",
  buttonvideo: "Démo vidéo",
  linkvideo:
    "https://res.cloudinary.com/pierredev/video/upload/v1727980341/portfolio/videos/upzfa0fy5qozxxju0dpr.mov",
  link1: "https://alkalee.fr/",
  button1: "Alkalee",
};
/* # # # # # # # # # # # # # # # # # # # # # */
const suiviMineursIsoles = {
  id: 15,
  title: "Suivi des mineurs isolés",
  customer: "Garelli 95",
  gif: "https://res.cloudinary.com/pierredev/image/upload/v1726063335/portfolio/gifs/b41rkf50l2q9yjfdbvfn.gif",
  img: "https://res.cloudinary.com/pierredev/image/upload/v1728037414/portfolio/imgs/ion2xo98zlxxhvlyzrp9.jpg",
  description: `
  >Suivi de mineurs isolés étrangers - 2024
  <space/>
  Garelli95 est une association du Val-d’Oise qui accompagne chaque année environ 70 mineurs isolés étrangers dans leur parcours d’intégration en France, à la demande de l’État.
  <space/>
  Leur besoin était double : permettre aux jeunes de **prendre conscience de leur progression** dans le temps, et offrir à l’association des indicateurs concrets pour suivre et **analyser l’impact** de son accompagnement. Nous avons construit ensemble un dispositif basé sur un questionnaire semestriel, accessible via une plateforme dédiée.

  J’ai conçu une interface volontairement chaleureuse et animée, pensée pour rendre cet exercice d’auto-évaluation plus engageant et moins intimidant pour les jeunes. En parallèle, j’ai développé un back-office complet permettant à l’association de gérer les questionnaires, les catégories, les utilisateurs et les campagnes d’évaluation. Cette architecture rend l’outil facilement adaptable à d’autres associations ayant des besoins similaires. 
  <space/>

  >Stack technique :
  React, Zustand, Strapi, Cloudinary, MySql, Heroku`,
  link1: "https://www.donbosco-actionsociale.org/associations/garelli-95/",
  button1: "Garelli 95",
  buttonvideo: "démo vidéo",
  linkvideo:
    "https://res.cloudinary.com/pierredev/video/upload/v1727713156/portfolio/videos/ubmpjasnytrhofumrsth.mov",
};
/* # # # # # # # # # # # # # # # # # # # # # */
const grist = {
  id: 16,
  title: "Arbre de Noël",
  customer: "MIN. FINANCES",
  description: `
  >Passer d'Excel à Grist - 2025
  <space/>
  Grist est un tableur moderne qui combine la simplicité d’Excel avec la puissance d’une base de données. Il permet de structurer les données, d’automatiser des règles, de gérer finement les droits d’accès et de collaborer en temps réel, là où Excel montre rapidement ses limites.
  <space/>

  Outil low code et open source promu par la Direction interministérielle du numérique (DINUM), Grist s’inscrit dans une démarche de commun numérique souverain destinée aux ministères et aux collectivités. En tant que **développeur** et **chef de projet** dans l'agence de No Code inclusive <link href="https://www.aucarre.tech" title="Au Carré">, j’ai accompagné plusieurs institutions dans leur transition d’Excel vers Grist.
  <space/>

  >Arbre de Noël

  Parmi les projets réalisés, j’ai intégré Grist au **ministère des finances** pour la gestion de leur arbre de Noël. Le sujet peut sembler léger, mais il implique **30 000 dossiers par an** pour les demandes de cadeaux des agents pour leurs enfants, ainsi que la gestion d’un catalogue de cadeaux par département et par direction. Cela a nécessité une gestion des droits en lecture très fine, pour garantir autonomie et sécurité dans chaque département.
  <space/>


  J’ai également développé pour la **préfecture d’Occitanie** un outil de suivi du budget des **places en crèche** des agents publics, ainsi que pour la **DINUM** plusieurs templates Grist, dont un annuaire avancé aujourd’hui accessible à l’ensemble des agents publics.

  `,
  gif: "https://res.cloudinary.com/pierredev/image/upload/v1768330170/portfolio/imgs/yrpmvnoto7x6tuw2hpvu.png",
  img: "https://res.cloudinary.com/pierredev/image/upload/v1768330170/portfolio/imgs/yrpmvnoto7x6tuw2hpvu.png",
  buttonvideo: "Démo vidéo",
  linkvideo:
    "https://res.cloudinary.com/pierredev/video/upload/v1767996752/portfolio/videos/jlff22egwvsuu9fmkcrt.mov",
  link2: "https://www.getgrist.com/",
  button2: "Get Grist",
};

const livraisonNoumea = {
  id: 17,
  title: "Livraison à Noumea",
  customer: "Needeat",
  gif: "https://res.cloudinary.com/pierredev/image/upload/v1726063335/portfolio/gifs/q7hmlwl9k1gilnirugey.gif",
  img: "https://res.cloudinary.com/pierredev/image/upload/v1727795014/portfolio/imgs/rssjb4lscxmhhscxkdvw.jpg",
  description: `
  >Application de livraison de repas - 2021
  <space/>
  Needeat est le “Deliveroo” de Nouméa, leader de la livraison de repas en Nouvelle-Calédonie. En équipe de trois développeurs, nous avons conçu les trois applications nécessaires pour faire fonctionner le service : l’application **utilisateur**, l’application **livreur** et l’application **restaurant**.
  
  <space/>
  Les commandes sont orchestrées par un back-end central, capable de dispatcher automatiquement les livraisons en fonction de la géolocalisation des livreurs et de la disponibilité des restaurants, assurant rapidité et fiabilité du service.
  <space/>
  >Stack technique
   React Native, React, React-admin, Node.js, express, Stripe, lemonway`,
  link1: "https://needeat-nc.com/",
  button1: "needeat",
  buttonvideo: "Vidéo démo",
  linkvideo:
    "https://res.cloudinary.com/pierredev/video/upload/v1727980467/portfolio/videos/e5g7m7lf0ia93vsvg6dx.mp4",
};
/* # # # # # # Eco # # # # # # # # # # # # # # # */
const boutiqueEnLigne = {
  id: 18,
  title: "Boutique en ligne",
  customer: "Loom & Field",
  description: `
  >E-Commerce tapis - Déco d'intérieur - 2018

  Loom & Field est une boutique en ligne spécialisée dans les objets de décoration d’intérieur issus de l’artisanat : tapis, coussins, poufs, paniers, fabriqués à la main par des coopératives au Maroc, au Guatemala, au Mexique et en Turquie. J’ai noué un lien solide avec une coopérative de femmes dans un village rural de l’Atlas au Maroc, ce qui m’a permis de mieux comprendre leur savoir-faire et de valoriser leur travail sur le site.

  Le site avait également pour vocation de mettre en avant ces artisans, notamment pour attirer une clientèle américaine sensible au style boho chic. En tant que **co-fondateur**, j’ai créé et personnalisé le site marchand sur Shopify, en veillant à ce que l’expérience utilisateur reflète la qualité et l’authenticité des produits.
  `,
  img: "https://res.cloudinary.com/pierredev/image/upload/v1728051872/portfolio/imgs/v92lskrsjnm4ohrg9dch.jpg",
  gif: "https://res.cloudinary.com/pierredev/image/upload/v1728052135/portfolio/gifs/q33hqg1kl4wxin4ngm01.gif",
  link1: "https://www.loomandfield.com/",
  button1: "Visitez la boutique",
};

export default [
  retour,
  impactEcologiques,
  grist,
  eLearningAutoEcoles,
  diagrammesInteractifs,
  intranetMicroApps,
  suiviMineursIsoles,
  livraisonNoumea,
  boutiqueEnLigne,
];
