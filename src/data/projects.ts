import { Project } from "../types";

const project1 = {
  name: "GunitaHu",
  description:
    "Undergraduate thesis in the Service Science and Software Engineering Laboratory. A WebVR application being built using the A-Frame framework. It's a platform for personalized remote therapy connecting caregivers and dementia patients, employing the Montessori Method for dementia care. Caregivers can personalize a virtual world by uploading their patient's favorite music, show, or family pictures. The patient and caretaker can interact in the virtual world together, all from the comfort of their own home.",
  urlView: "https://gunitahu.herokuapp.com/",
  urlCode: "https://github.com/rdp-jr/thesis-vr",
  picture: "/img/screen-gunitahu.webp",
  tech_list: [
    "javascript-plain",
    "nodejs-plain",
    "express-original",
    "handlebars-plain",
    "heroku-plain",
  ],
};

const project2 = {
  name: "T3",
  description:
    "Realtime Multiplayer Tic Tac Toe built with Socket.io to learn real-time communication between servers and clients. The backend is deployed on Heroku while the frontend is deployed on Surge. To play, you create a room which you'll give to your opponent. They'll join the room and the game will start automatically. The app keeps track of the scores. ",
  urlView: "https://t3.surge.sh/",
  urlCode: "https://github.com/rdp-jr/t3-client",
  picture: "/img/screen-t3.webp",
  tech_list: [
    "react-original",
    "express-original",
    "nodejs-plain",
    "javascript-plain",
  ],
};

const project3 = {
  name: "Superhero Wiki",
  description:
    "Database of superheroes and villains from different universes. This was built to gain a deeper understanding in using external APIs and server-side rendering using Next.js",
  urlView: "https://superhero-wiki.now.sh/",
  urlCode: "https://github.com/rdp-jr/superhero-wiki",
  picture: "/img/screen-superhero.webp",
  tech_list: ["javascript-plain"],
};

const project4 = {
  name: "Street Food Wars",
  description:
    "A Turn-based fighting game with Street Food characters built in Java. You play as the Hero 'Kwek' versus the villain 'Isaw'. You have 5 moves: Basic Attack, Special Attack, Reload Ammo, Heal, and Ultimate Attack. This was built to learn Object Oriented Programming.",
  urlCode: "https://github.com/rdp-jr/street-food-wars",
  picture: "/img/screen-streetfoodwars.webp",
  tech_list: ["java-plain"],
};

export const PROJECT_LIST: Project[] = [project1, project2, project3, project4];
