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
import NE_img from "./assets/NE.png";

// LFM
import francmanger_Img from "./assets/francmanger.jpg";
import francmanger_Gif from "./assets/francmanger.gif";
// Eco
import ecoImg from "./assets/ecoImg.jpg";

/* # # # # # # ABOUT ME # # # # # # # # # # # # # # # */
const obj0 = {
  id: 0,
  title: "A propos de moi",
  gif: cv_Gif,
  img: cv_Img,
  description: `
  CYCLO-VOYAGES ET MUSIQUE
  >Voyages
    
`,
  button1: "Envoyer un email",
  link1: "mailto:mallerep@gmail.com",
  button2: "Mon CV",
  link2:
    "https://drive.google.com/file/d/11Cbd9Y5k_97tm4JdzTDyDP9do5P3dmdn/view?usp=sharing",
};
/* # # # # # # CYCLING AROUND # # # # # # # # # # # # # # # */
const obj1 = {
  id: 1,
  title: "Mon autre vie",
  gif: cycling_Gif,
  img: cycling_Img,
  description: `
  \n>Voyages à vélo\n
  Lorsque je ne code pas, vous pourriez me croiser à vélo sur une piste déserte du monde. De mes voyage, j'ai rapporté un livre et des films, dont un primé en festival, et à voir sur ma chaîne youtube.
  
  \n>Musique\n
    Je suis aussi pianiste, guitariste et compositeur de musiques de films. Mes films de voyages sont accompagnés de mes propres compositions, pour faire le pont entre mes deux passions.
    `,
  button1: "Plus de voyages",
  link1: "www.pierrequiroulevoyages.com",
  button2: "Plus de musique",
  link2: "https://www.youtube.com/@pierrequiroulevoyages1231/videos",
};

/* # # # # # # YOUR PROJECT # # # # # # # # # # # # # # # */
const obj2 = {
  id: 2,
  title: "Votre projet !",
  gif: question_Gif,
  img: question_Gif,
  description: `
  \n>Et pourquoi pas votre projet ? \n
  Il reste ici une carte de libre. Pourquoi pas votre projet ?
  N'hésitez pas à me contacter pour en discuter
`,
};
/* # # # # # # MEILLEUR TAUX # # # # # # # # # # # # # # # */
const obj3 = {
  id: 3,
  title: "E-learning conduite auto",
  gif: tgd_vid,
  img: tgd_img,
  description: `
  \n>E-Learning de conduite pour les auto-écoles\n

  \n J'ai réalisé ce E-Learning, vendu aux auto-écoles afin que les élèves s'auto-forment avant les heures de conduite. Via une interface de back-office complète, le concepteur pédagogique peut écrire des exercices comme: QCM, QCM vidéos, jeux interactifs de reconnaissance de situations ou de panneaux. Elle possède une fonctionnalité de lecture automatique par une voix robotisée pour le public qui n'aurait pas l'habitude de lire
    \n>Stack technique
    \nFrontend: React, Redux/Saga
    \nBackend: Node.js, express, mongoDB, Loopback, AWS S3 EC2 et polly
    `,
  button1: "the good drive",
  link1: "https://www.thegooddrive.fr/",
  button2: "e-Learning",
  link2: "https://elearning.tgdcloud.com/",
};
/* # # # # # # TICTACTOE # # # # # # # # # # # # # # # */
const obj4 = {
  id: 4,
  title: "Morpion Géant",
  gif: TTT_Gif,
  img: TTT_Img,
  description: `
  MORPION GÉANT - PROJET PERSONNEL
  \n Au collège ou au lycée, lorsque je voulais faire passer le temps, je sortais une feuille de papier vierge et démarrais un morpion sans limite avec mon voisin.
  Voici la version en ligne de ce concept de jeu :
    \n Deux personnes doivent ouvrir la même url sur leur navigateur ou leur téléphone et entrer un nom d'utilisateur. Le jeu permet de sélectionner une grille de 5x5 à 12x12, et les points sont comptés. Un programme de back-end centralise les coups et les renvoie à l'IP de l'adversaire.
    J'ai réalisé ce jeu pour le plaisir.
    \n>Stack
    \nFrontend: Node.js, React, CSS, Axios, 
    \nBackend: Node.js, express, websocket,
    `,
  button1: "Essayez-le",
  link1: "https://giant-tic-tac-toe.netlify.com/",
};
/* # # # # # # GARELLI # # # # # # # # # # # # # # # */
const obj5 = {
  id: 5,
  title: "Mineurs non accompagnés",
  gif: garelli_vid,
  img: garelli_png,
  description: `Pour une association qui recueille des mineurs isolés étrangers, j'ai réalisé un application qui permet de renseigner leur évolution au cours de leur prise en charge.
  Il s'agit de répondre à un questionnaire par catégories.
  Je met à disposition de l'association tout le back-office qui lui permet de créer ses propres catégories, ses critères et leur poids.
  N'hésitez pas à contacter l'association pour leur demander des retours sur notre collaboration.
\n>fonctionnalités clés:
login utilisateur, stockage de données dans le cloud, calcul automatique de résultats, paramétrage d'un questionnaire
\n>Stack:
Front-end: React, Zustand, 
Back-end: Node.js, Strapi, Cloudinary, mySql, Heroku`,
  link1: "https://www.donbosco-actionsociale.org/associations/garelli-95/",
  button1: "l'association",
  // link2: "https://leboncoinfullstack.netlify.com/",
  // button2: "Github repo",
};
/* # # # # # # FRANC MANGER # # # # # # # # # # # # # # # */
const obj6 = {
  id: 6,
  title: "Producteurs Bio",
  description: `
  J'ai développé ce MVP pour le compte d'une start-up parisienne dont le but est de rapprocher les consommateurs des agriculteurs locaux.
  Lors d'un déplacement de loisir, les utilisateurs peuvent découvrir toutes les fermes bio qu'ils peuvent visiter autour d'eux.
    \n>Fonctionnalités clé:
    Géolocalisation, intégration de google maps, base de données, back office, application téléphone 
    \n>Stack
    \nFrontend: ReactNative ,
    \nBackend: Node.js, express, mongoDB, Cloudinary`,
  gif: francmanger_Img,
  img: francmanger_Gif,
};
/* # # # # # # AirBnB # # # # # # # # # # # # # # # */
const obj7 = {
  id: 7,
  title: "Livraison de repas",
  gif: NE_vid,
  img: NE_img,
  description: `
  NEEDEAT: LE UBER EATS DE NOUVELLE CALEDONIE
  Needeat est le Deliveroo de la nouvelle calédonie! En équipe de trois développeurs, ils nous ont demandé de créer leurs applications:
  - Application utilisateur
  - Application livreur
  - Back-Office restaurant
  Le tout, orchestré par un back-end qui dispatche les commandes aux livreurs de manière intelligente et un service de paiement en ligne.
    \n>Stack
    \nReact Native, React, React-admin, Node.js, express, Stripe, lemonway`,
  link1: "https://needeat-nc.com/",
  button1: "le site",
  link2: "https://play.google.com/store/apps/details?id=com.NeedEat.user",
  button2: "sur playstore",
};
/* # # # # # # THIS WEBSITE # # # # # # # # # # # # # # # */
const obj8 = {
  id: 8,
  title: "Eco Conception Web",
  description: `Ce site, sur lequel j'espère vous passez un moment agréable, respecte les principes de l'éco-conception web.
    \n Vous avez téléchargé 9ko pour le visualiser en entier, il est donc hyper léger, et par conséquent rapide à charger
    \n Il est sobre: pas d'images, de vidéos partout
    \n Il y a 49 appels pour charger tout le site. Ceci est notamment dû aux 9 images et 9 vidéos très compressées que je n'ai pas pu m'empêcher de faire apparaître pour rendre la navigation agréable.
    \n Et plus important: il a été conçu sur un MacBookPro 2017, qui tourne toujours très bien à l'heure actuelle.
    \n En 2024: l'impact du numérique sur l'environnement a rattrapé le poids du transport aérien. Dans les années à venir, concevoir des applications web de manière sobre, durable sera de plus en plus important.
    \n Si nous travaillons ensemble, je serai sensible à ces sujets 
    `,
  // gif: thiswebsite_Gif,
  img: ecoImg,
  link1: "https://pierredev.netlify.com/",
  button1: "visit recursively",
  link2: "https://github.com/MgRl8ow3MhVr/portfolio",
  button2: "Github repo",
};

export default [obj0, obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8];
