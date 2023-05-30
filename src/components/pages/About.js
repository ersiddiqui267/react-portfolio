import React, { useEffect } from "react";
import reactLogo from "../../img/react.png";
import bootstrapLogo from "../../img/bootstrap.png";
import tailwindLogo from "../../img/tailwind.svg";
import javascriptLogo from "../../img/javascript.png";

const About = function () {
  useEffect(() => {
    const page = document.querySelector(`.page`);
    page.classList.remove(`translate-y-16`);
    page.classList.remove(`opacity-0`);
  }, []);

  return (
    <React.Fragment>
      <div className="page opacity-0 translate-y-16 transition-all duration-700 p-4">
        <h1 className="text-6xl font-bold">Anas Siddiqui</h1>
        <h1 className="intro text-4xl mt-4">Frontend Developer</h1>
        <p className="mt-4">
          Welcome to my online portfolio of front end web development! As a
          skilled and dedicated front end developer, I am excited to share my
          work and showcase my abilities through this platform.
          <br /> <br /> With a passion for creating visually appealing and
          user-friendly websites, I strive for excellence and perfection in my
          work. I have honed my skills in React, JavaScript, HTML, CSS and have
          familiarity with Bootstrap, TailwindCSS, Figma and Photoshop.
          {/* I always seek a deep understanding of whatever I
        learn and how things actually work behind the scenes, this helps me to
        become a great learner and a better developer each day. */}
          <br /> <br />
          In this portfolio, you will find examples of my past projects that
          demonstrate my proficiency in crafting responsive and accessible web
          designs. Whether it's building from scratch or collaborating on an
          existing project, I take pride in producing high-quality work that
          exceeds expectations
          {/* Unlike others, I am a self-taught developer who is
        always curious to learn new technologies with an aim to become one of
        the best. <br /> <br /> */}
          . I am always seeking new challenges and opportunities to expand my
          knowledge and skills in the ever-evolving world of front end web
          development. So take a look around, and don't hesitate to reach out if
          you have any questions or potential collaboration ideas. Thank you for
          stopping by!
        </p>
      </div>

      <div className="p-4">
        <h3 className="text-gray-400">Tools & Technologies</h3>
        <div className="skills flex flex-wrap my-4">
          <img
            className="mx-4 my-2 w-12 aspect-square"
            src={reactLogo}
            alt="react"
          />
          <img
            className="mx-4 my-2 w-12 aspect-square"
            src={javascriptLogo}
            alt="javascript"
          />
          <img
            className="mx-4 my-2 w-12 aspect-square"
            src={tailwindLogo}
            alt="taiwind"
          />
          <img
            className="mx-4 my-2 w-12 aspect-square"
            src={bootstrapLogo}
            alt="bootstrap"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
