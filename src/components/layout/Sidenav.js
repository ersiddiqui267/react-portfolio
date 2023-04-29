import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import github from "../../img/github.svg";
import linkedin from "../../img/linkedin.svg";
import HandlersContext from "../../contexts/handlers/handlersContext";

const Sidenav = function () {
  const handlersContext = useContext(HandlersContext);

  const { changeActiveTab, activeTab } = handlersContext;

  useEffect(() => {
    document
      .querySelector(`.sidenav`)
      .addEventListener(`click`, changeActiveTab);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="sidenav hidden md:block w-48 min-h-screen border-2 border-transparent">
      <ul>
        <li className="sidenav-item mt-48">
          <Link
            id="about"
            className={`sidenav-link link ${
              activeTab === `about` ? `` : `text-gray-400`
            }`}
            to="/"
          >
            About Me
          </Link>
        </li>
        <li className="sidenav-item">
          <Link
            id="projects"
            className={`sidenav-link link ${
              activeTab === `projects` ? `` : `text-gray-400`
            }`}
            to="/projects"
          >
            Projects
          </Link>
        </li>
        <li className="sidenav-item">
          <Link
            id="contact"
            className={`sidenav-link link ${
              activeTab === `contact` ? `` : `text-gray-400`
            }`}
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li className="sidenav-item">
          <a
            className="sidenav-resume-link text-gray-400"
            href="../assets/resume.pdf"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
      <ul className="mt-10">
        <li className="sidenav-item">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ersiddiqui267"
          >
            <img className="sidenav-icon" src={github} alt="github"></img>
          </a>
        </li>
        <li className="sidenav-item">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ersiddiqui267/"
          >
            <img className="sidenav-icon" src={linkedin} alt="linkedin"></img>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
