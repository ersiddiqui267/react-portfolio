import React, { useContext, useEffect } from "react";
import list from "../../img/list.svg";
import HandlersContext from "../../contexts/handlers/handlersContext";

const Navbar = function () {
  const handlersContext = useContext(HandlersContext);

  useEffect(() => {
    document
      .querySelector(`.open`)
      .addEventListener(`click`, handlersContext.openOffcanvas);

    //eslint-disable-next-line
  }, []);

  return (
    <nav className="navbar md:hidden p-3">
      <img className="open w-7" src={list} alt="menu" />
    </nav>
  );
};

export default Navbar;
