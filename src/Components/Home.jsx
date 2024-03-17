import React from "react";
import { Link } from "react-router-dom";
import Type from "./Type.jsx";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/Avatar.png";
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hello there!</h1>
          <h1>
            I'M <b>Eshaal Rehmatullah</b>
          </h1>
          <Type />
          <Link to="/About">
            <button>
              About Me
              <BsPerson />
            </button>
          </Link>

          <Link to="/Contact">
            <button>
              Contact <CgPhone />
            </button>
          </Link>
        </div>
        <Tilt>
          <img className="Avatar" src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
