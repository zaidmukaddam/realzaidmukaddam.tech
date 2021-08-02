import Project from "types/Project";
const url = "https://github.com/zaidmukaddam";

const VIEW_CODE = "View Code";
const OPEN_PROJECT = "Open Project";

const projects: Project[] = [
  {
    title: "Rubik's cube solver.",
    description:
      "A Rubik's cube solver with two algorithms 1. Layer by layer algorithm 2. Two-phase algorithm",
    buttons: [
      {
        url: `${url}/rubiks-cube-solver`,
        name: VIEW_CODE,
      },
    ],
  },
  {
    title: "Google Clone",
    description:
      "A Google Mobile App Clone Made using React and Next JS with beautiful UI improvements.",
    buttons: [
      {
        url: `${url}/Google-Clone`,
        name: VIEW_CODE,
      },
      {
        url: "https://google-clone-zaidmukaddam.vercel.app/",
        name: OPEN_PROJECT,
      },
    ],
  },
  {
    title: "CPU Scheduler App",
    description:
      "React Native Application to visualize the CPU Scheduling with different Algorithms and Animations.",
    buttons: [
      {
        url: `${url}/CPU-Scheduler-App-React-Native`,
        name: VIEW_CODE,
      },
    ],
  },
  {
    title: "Covid 19 Tracker",
    description:
      "Covid-19 Tracker is an app made with Flutter framework to provide worldwide information related to Covid-19 pandemic.",
    buttons: [
      {
        url: `${url}/Covid-19-Tracker`,
        name: VIEW_CODE,
      },
    ],
  },
  {
    title: "Wooble",
    description: "Bring your screen to life with exclusive Wallpapers delivered to you by Wooble! ",
    buttons: [
      {
        url: `${url}/Wooble`,
        name: VIEW_CODE,
      },
    ],
  },
  {
    title: "online-ide",
    description:
      "This is an online ide for the compilation of C , C++17, Java, and Python. Built with React, Express, and Node.",
    buttons: [
      {
        url: `${url}/online-ide`,
        name: VIEW_CODE,
      },
      {
        name: OPEN_PROJECT,
        url: "https://online-ide-c.herokuapp.com/",
      },
    ],
  },
  {
    title: "react-pokedex",
    description: "A simple pokédex made with React & PokéAPI for my love for Pokémons 🥰",
    buttons: [
      {
        url: `${url}/react-pokedex`,
        name: VIEW_CODE,
      },
      {
        name: OPEN_PROJECT,
        url: "https://react-pokedex-beryl.vercel.app/",
      },
    ],
  },
  {
    title: "Markdown Coverter",
    description: "You can now easily generate and convert markdowns to html and vice versa 🥰",
    buttons: [
      {
        url: "/markdown",
        name: "Show site",
      },
    ],
  },
  {
    title: "Percerntage Calculator",
    description: "You can now easily calculate percentage from my porfolio itself 🥰",
    buttons: [
      {
        url: "/per",
        name: "Show site",
      },
    ],
  },
];

export default projects;
