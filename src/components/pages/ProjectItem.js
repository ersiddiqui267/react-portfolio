import React from "react";

const ProjectItem = function ({ project }) {
  const { name, link, desc, note } = project;

  return (
    <div className="border sm:w-1/2 p-8 flex flex-col">
      <h3 className="font-bold text-xl">{name}</h3>
      <small className="italic">{note ? `[${note}]` : ``}</small>
      <p className="mt-4 mb-auto">{desc}</p>
      <a
        className="block text-center mt-8 px-8 py-4 border bg-transparent hover:bg-white hover:text-gray-800 transition-all duration-300"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        Check it out
      </a>
    </div>
  );
};

export default ProjectItem;
