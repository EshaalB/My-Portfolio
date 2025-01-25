import React, { useState } from "react";
import ProjectBox from "./ProjectBox";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("web");

  const categories = {
    web: [
      {
        photo: "img/web3.png",
        name: "Web3",
        description:
          "A cryptocurrency-style web page, focusing on sleek UI and modern CSS techniques.",
        source: "https://github.com/EshaalB/Crypto-project",
        demo: "https://www.instagram.com/p/C6JMVtrN9r6/?img_index=2",
      },
      {
        photo: "img/smash.png",
        name: "SmashWallsClone",
        description:
          "A clone of a website that lets you break walls. Explored DOM manipulation and animations.",
        source: "https://github.com/EshaalB/Smashwallsclone",
        demo: "https://smashwallsclone.vercel.app/",
      },
      {
        photo: "img/Film.png",
        name: "MovieApp",
        description:
          "A web app to search and discover movies using the TMDB API. Improved understanding of APIs and asynchronous requests.",
        source: "https://github.com/EshaalB/Movie-App",
        demo: "https://www.instagram.com/p/C5qR2sDtKzd/?img_index=2",
      },
      {
        photo: "img/gym.png",
        name: "Levels",
        description:
          "A gym website created to boost local gym sales. Learned React basics and hosting on Vercel.",
        source: "https://github.com/EshaalB/Gym-Website",
        demo: "https://gym-website-pink.vercel.app/",
      },
      {
        photo: "img/colour.png",
        name: "ColourPaletteGenerator",
        description:
          "A tool to generate and save color palettes. Worked on advanced JavaScript techniques and user interaction.",
        source: "https://github.com/EshaalB/Colour-palette-Generator",
        demo: "https://colourpalettegen.netlify.app/",
      },
      {
        photo: "img/backpack.png",
        name: "Ecommerce Landing Page",
        description:
          "A simple landing page for an Ecommerce website. Learned how to use custom cursors on web pages .",
        source: "https://github.com/EshaalB/Womens-day",
        demo: "https://landing-page-react-sage.vercel.app/",
      },
      {
        photo: "img/dice.png",
        name: "DiceGame",
        description:
          "A fun landing page with a dice game. Enhanced my understanding of JavaScript logic and DOM events.(demo soon to be uploaded)",
        source: "https://github.com/EshaalB/Dice-game-Project",
        demo: "#",
      },

    ],
    python: [
      {
        photo: "img/snake.png",
        name: "SnakeGame",
        description:
          "Classic snake game using Python and Pygame. A fun introduction to game development.",
        source: "https://github.com/EshaalB/Snake-game-",
        demo: "https://www.instagram.com/p/DFDKJ8etpy9/?img_index=2",
      },
      {
        photo: "img/brick.png",
        name: "BrickBreaker",
        description:
          "A retro brick breaker game implemented in Python. Honed skills in Pygame and logic-building.",
        source: "https://github.com/EshaalB/Brick-Breaker-",
        demo: "https://www.instagram.com/p/DFEpItzzY-d/?img_index=2",
      },
    ],
    cpp: [
      {
        photo: "img/candy.png",
        name: "CandyCrushClone",
        description:
          "A clone of the popular Candy Crush game implemented in C++. Improved memory management and logic-building skills.(soon to be uploaded)",
        source: "#",
        demo: "#",
      },
      {
        photo:
          "img/railway.png",
        name: "RailwayManagementSystem",
        description:
          "A C++ project for managing railway data. Enhanced my understanding of data structures and file handling.(soon to be uploaded)",
        source: "#",
        demo: "#",
      },
      {
        photo: "img/wacky.png",
        name: "WackyWings",
        description:
          "A Flappy Bird-inspired arcade game written in Assembly Language. Learned about low-level programming and animation logic.(demo soon to be uploaded)",
        source: "https://github.com/EshaalB/Flappy-Bird",
        demo: "#",
      },
     
    ],
  };
  

  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>

      {/* Category Tabs */}
      <div className="categoryTabs">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={`categoryTab ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="project">
        {categories[activeCategory].map((project, index) => (
          <ProjectBox
            key={index}
            projectPhoto={project.photo}
            projectName={project.name}
            description={project.description}
            source={project.source}
            demo={project.demo}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
