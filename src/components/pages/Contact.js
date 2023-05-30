import React from "react";

const Contact = function () {
  return (
    <React.Fragment>
      <h1 className="intro text-6xl font-bold lg:px-16 xl:px-32">Contact</h1>
      <p className="lg:px-16 xl:px-32 mt-8">
        If you'd like to talk, just send me an email at{" "}
        <a
          className="font-bold underline"
          href="mailto:ersiddiqui267@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          ersiddiqui267@gmail.com
        </a>
      </p>
    </React.Fragment>
  );
};

export default Contact;
