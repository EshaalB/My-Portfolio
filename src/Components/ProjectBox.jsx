import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    LevelsDesc:
      "This website is a for a local gym to help with their sales.This helped me understand React better and more clearly. I also learned how to host on vercel.",
    LevelsGithub: "https://github.com/EshaalB/Gym-Website",
    LevelsWebsite: "https://gym-website-pink.vercel.app/",

    MovieDesc:
      "This web app  is for helping you find your desired movie.The project helped me with understanding the working of API.I also learned new CSS properties and tricks.",
    MovieGithub: "https://github.com/EshaalB/Movie-App",
    MovieWebsite: "https://film-mania.vercel.app/",

    ColourPaletteDesc:
      "This website helps you generate random colours that you can use as a palette.The project helped me understand Javascript more deeply using advance techniques",
    ColourPaletteGithub: "https://github.com/EshaalB/Colour-palette-Generator",
    ColourPaletteWebsite: "https://colourpalettegen.netlify.app",

    BackpackDesc:
      "This webpageis was made for an ecommerce brand showcasing their backpacks.The project taught me how to use custom cursors and arrange text in a much better way",
    BackpackGithub: "https://github.com/EshaalB/Landing-Page--React-",
    BackpackWebsite: "https://landing-page-react-sage.vercel.app/",
  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectBox;
