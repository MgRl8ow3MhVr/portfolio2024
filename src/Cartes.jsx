// CV
import cv_Gif from "./assets/cv.gif";
import cv_Img from "./assets/Photo.jpg";

// OtherLife
import cycling_Img from "./assets/cycling.jpg";
import cycling_Gif from "./assets/cycling.gif";

// TTT
import TTT_Gif from "./assets/TTT.gif";
import TTT_Img from "./assets/TTT.png";

// your project
import question_Gif from "./assets/question.gif";

// tgd
import tgd_img from "./assets/tgd_img.jpg";
import tgd_vid from "./assets/tgd_vid.gif";

// garelli
import garelli_vid from "./assets/garelli.gif";
import garelli_png from "./assets/garelli.png";
// NeedEat
import NE_vid from "./assets/NE.gif";
import NE_img from "./assets/NE.jpg";

// flux
import flux_vid from "./assets/flux.gif";
import flux_img from "./assets/flux.jpg";
// Eco
import eco_img from "./assets/eco.jpg";
import eco_vid from "./assets/eco.gif";

/* # # # # # # ABOUT ME # # # # # # # # # # # # # # # */
const obj0 = {
  id: 0,
  title: "Qui suis-je",
  gif: cv_Gif,
  img: cv_Img,
  description: `
  \n>Qui suis-je ?\n

  Bienvenue. Je m'appelle Pierre, 38 ans, développeur fullstack. Cela signifie que je sais concevoir un site complet, front-end (app ou web-app), back-end, base de données, animations.

  J'ai une sensibilité pour les interfaces créatives et animées, ainsi que pour l'éco-conception numérique sur laquelle je me forme en continu.

  À l'écoute de vos besoins et pédagogue (je suis aussi formateur de développement web), je saurai vous accompagner tout le long du projet. Et surtout, si c'est hors de mes compétences, je vous le dirai.

  Bonne visite
`,
  button1: "Envoyer un email",
  link1: "mailto:mallerep@gmail.com",
  button2: "Mon CV",
  link2:
    "https://drive.google.com/file/d/1GrYnn31s-OLOEN3u22N_Ojw58TxcD8dV/view?usp=drive_link",
};
/* # # # # # # CYCLING AROUND # # # # # # # # # # # # # # # */
const obj1 = {
  id: 1,
  title: "Mon autre vie",
  gif: cycling_Gif,
  img: cycling_Img,
  description: `
  \n>Voyages à vélo\n
  Lorsque je ne code pas, vous pourriez me croiser à vélo sur une piste déserte du monde. De ces voyages, j'ai édité un livre et des films, dont un primé en festival, et à découvrir sur ma chaîne youtube.
  
  \n>Musique\n
    Je suis aussi pianiste, guitariste et compositeur de musique de films. Et pour faire le pont entre mes deux passions, mes films de voyages sont accompagnés de mes propres compositions.
    `,
  button1: "Plus de voyages",
  link1: "https://www.youtube.com/@pierrequiroulevoyages1231/videos",
};

/* # # # # # # YOUR PROJECT # # # # # # # # # # # # # # # */
const obj2 = {
  id: 2,
  title: "Votre projet !",
  gif: question_Gif,
  img: question_Gif,
  description: `
  \n>Votre projet ! \n
  Il reste ici une carte de libre. Ce sera peut-être votre projet ?
  N'hésitez pas à me contacter pour en discuter.
`,
  button1: "par email",
  link1: "mailto:mallerep@gmail.com",
  button2: "linkedin",
  link2: "https://www.linkedin.com/in/pierre-m-676bb7182/",
};
/* # # # # # # ELEARNING # # # # # # # # # # # # # # # */
const obj3 = {
  id: 3,
  title: "E-learning",
  // title: "E-learning conduite auto",
  gif: tgd_vid,
  img: tgd_img,
  description: `
  \n>E-Learning de conduite auto\n

  Pour l'entreprise Thegooddrive, j'ai réalisé un E-Learning qui permet aux élèves des auto-école de s'entrainer avant de démarrer les heures de conduite.
  \n>Fonctionnalités\n
  QCM, lecture vidéos, reconstitution de panneaux routiers, clic sur vidéo pour détecter les dangers. Et surtout, rien n'est figé: via un back-office puissant, le client peut écrire ses propres exercices, uploader ses propres vidéos. C'est un vrai CMS de E-Learning.
  \n>Stack technique\n
    React.js, Javascript, Express.js, AWS S3 EC2 Polly, 
    `,
  button1: "the good drive",
  link1: "https://www.thegooddrive.fr/",
  button2: "e-Learning",
  link2: "https://elearning.tgdcloud.com/",
};
/* # # # # # # JEUX # # # # # # # # # # # # # # # */
const obj4 = {
  id: 4,
  title: "Web app multijoueur",
  // title: "Morpion Géant",
  gif: TTT_Gif,
  img: TTT_Img,
  description: `
  \n>Morpion géant\n
  \n Au collège ou au lycée, lorsque je voulais faire passer le temps, je sortais une feuille de papier quadrillée et démarrais un morpion sans limite avec mon voisin.
  J'ai conçu la version en ligne de ce concept de jeu :
  \n>Mode opératoire\n
  Deux personnes doivent ouvrir l'url sur ci-dessous sur leur navigateur ou leur téléphone. Entrer un nom d'utilisateur. Attendre que le nom de l'adversaire apparaisse, et cliquer dessus pour démarrer une partie.
  \n>Stack technique\n
   node.js, express, React, websockets, render.com
    `,
  button1: "Essayez-le !",
  link1: "https://pierremorpion.netlify.app/",
};
/* # # # # # # GARELLI # # # # # # # # # # # # # # # */
const obj5 = {
  id: 5,
  title: "Formulaire ludique",
  // title: "Mineurs non accompagnés",
  gif: garelli_vid,
  img: garelli_png,
  description: `
  \n>Suivi de mineurs isolés étrangers\n
  
  Garelli95 est une association à qui l'état confie des mineurs isolés étrangers.
  Leur besoin était d'enregistrer l'évolution des jeunes via un questionnaire réalisé tous les six mois, et ainsi évaluer leur action. L'interface se devait d'être chaleureuse et animée, pour donner envie.

  J'ai conçu en complément une interface Back-office (en fond d'écran) qui permet de paramétrer les questions, catégories, utilisateurs etc... N'hésitez pas à les contacter pour leur demander des retours sur notre collaboration
  
  Stack technique : React, Zustand, Strapi, Cloudinary, MySql, Heroku`,
  link1: "https://www.donbosco-actionsociale.org/associations/garelli-95/",
  button1: "Garelli 95",
};
/* # # # # # # DIAGRAMMES # # # # # # # # # # # # # # # */
const obj6 = {
  id: 6,
  title: "Diagrammes interactifs",
  // title: "Gantt personalisé",
  description: `
  \n>Gantt personalisé pour Quantic Dream\n
  Quantic Dream est un éditeur de jeu vidéo français à succès. J'ai conçu pour eux un diagramme de Gantt (fond d'écran) à l'échelle de cinq ans qui permet de faire ressortir dépendances et blocages entre chantiers.
  \n>Diagramme de flux pour Alkalee\n
    Alkalee est une start-up qui développe un moteur de simulation des circuits électriques dans les automobiles.
    L'interface que j'ai développée permet à un utilisateur de "connecter des boîtes entre elles" afin de construire un shéma électronique. Un appel à leur moteur affichera ensuite les résultats.

  Stack utilisée : React, Bryntum, React-Flow, api Jira 
  `,
  gif: flux_vid,
  img: flux_img,
  link1: "https://www.netdevices.fr/portfolio/quantic-dream/",
  button1: "Quantic Dream",
  link2: "https://www.alkalee.fr/our-products-and-services/product-euphilia/",
  button2: "Alkalee",
};
/* # # # # # # LIVRAISON # # # # # # # # # # # # # # # */
const obj7 = {
  id: 7,
  title: "App de livraison",
  gif: NE_vid,
  img: NE_img,
  description: `
  \n>Application de livraison de repas\n
  En un mot, Needeat est le Deliveroo de Noumea, leader de la livraison en nouvelle calédonie. Avec une équipe de trois développeurs, nous avons créé les trois applications nécessaires pour faire tourner un tel réseau: l'app utilisateur, l'app livreur, l'app restautant.
  Le tout est orchestré par un programme back-end qui dispatche intelligemment les commandes aux livreurs qui sont géolocalisés avec leur application
  \n>Stack technique\n
   React Native, React, React-admin, Node.js, express, Stripe, lemonway`,
  link1: "https://needeat-nc.com/",
  button1: "le site",
  link2: "https://play.google.com/store/apps/details?id=com.NeedEat.user",
  button2: "sur playstore",
};
/* # # # # # # Eco # # # # # # # # # # # # # # # */
const obj8 = {
  id: 8,
  title: "Eco Conception Web",
  description: `
  \n>Eco conception\n
  Pour visualiser ce site, vous avez téléchargé 4Mo en 15 requêtes. Il y a encore du progrès à faire de mon côté pour passer sous la barre des 3Mo obtenir une meilleure note.
  En 2024, l'impact du numérique sur l'environnement est équivalent à celui du transport aérien. Dans les années à venir, concevoir des applications web peu consommatrices en énergie sera indispensable.
  Je me forme en continu sur l'éco-conception web pour faire partie d'un avenir numérique durable.
  Si nous travaillons ensemble, je serai sensible à ces sujets, et j'espère que nous aurons une note de A sur ecoindex.fr ;)
  `,
  // gif: thiswebsite_Gif,
  img: eco_img,
  gif: eco_vid,
  link1: "https://www.ecoindex.fr/",
  button1: "Testez vos sites préférés !",
};

export default [obj0, obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8];
