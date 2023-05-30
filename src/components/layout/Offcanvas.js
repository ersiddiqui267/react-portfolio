import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import github from "../../img/github.svg";
import linkedin from "../../img/linkedin.svg";
import cross from "../../img/cross.svg";
import HandlersContext from "../../contexts/handlers/handlersContext";

const Offcanvas = function () {
  const handlersContext = useContext(HandlersContext);

  const { closeOffcanvas, changeActiveTab, activeTab } = handlersContext;

  useEffect(() => {
    document.querySelector(`.close`).addEventListener(`click`, closeOffcanvas);

    document
      .querySelector(`.offcanvas`)
      .addEventListener(`click`, changeActiveTab);

    //eslint-disable-next-line
  }, []);

  return (
    <div className="offcanvas absolute top-0 left-0 min-w-full min-h-full md:hidden hidden">
      <nav className="offcanvas-navbar p-3">
        <img className="close w-7" src={cross} alt="menu" />
      </nav>
      <ul>
        <li className="offcanvas-item mt-20">
          <Link
            id="about"
            className={`offcanvas-link link ${
              activeTab === `about` ? `` : `text-gray-400`
            }`}
            to="/"
          >
            About Me
          </Link>
        </li>
        <li className="offcanvas-item">
          <Link
            id="projects"
            className={`offcanvas-link link ${
              activeTab === `projects` ? `` : `text-gray-400`
            }`}
            to="/projects"
          >
            Projects
          </Link>
        </li>
        <li className="offcanvas-item">
          <Link
            id="contact"
            className={`offcanvas-link link ${
              activeTab === `contact` ? `` : `text-gray-400`
            }`}
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li className="offcanvas-item">
          <a
            className="offcanvas-resume-link resume text-gray-400"
            href="https://anascodes.netlify.app/assets/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
      <ul className="my-10 flex justify-center gap-4">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ersiddiqui267"
          >
            <img className="offcanvas-icon" src={github} alt="github"></img>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ersiddiqui267/"
          >
            <img className="offcanvas-icon" src={linkedin} alt="linkedin"></img>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Offcanvas;
