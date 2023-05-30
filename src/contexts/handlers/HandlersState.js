import React, { useReducer } from "react";
import HandlersContext from "./handlersContext";
import HandlersReducer from "./handlersReducer";
import { CHANGE_ACTIVE_TAB } from "../types";

const HandlersState = function (props) {
  const initialPath = window.location.pathname.slice(1);

  const initialState = {
    activeTab: initialPath ? initialPath : `about`,
  };

  const [state, dispatch] = useReducer(HandlersReducer, initialState);

  const changeActiveTab = function (e) {
    if (!e.target.classList.contains(`link`)) return;

    document.body.style.overflow = `visible`;

    dispatch({
      type: CHANGE_ACTIVE_TAB,
      payload: e.target.id,
    });

    document.querySelector(`.offcanvas`).classList.add(`hidden`);
  };

  const openOffcanvas = function () {
    document.querySelector(`.offcanvas`).classList.remove(`hidden`);
    document.body.style.overflow = `hidden`;
  };

  const closeOffcanvas = function () {
    document.querySelector(`.offcanvas`).classList.add(`hidden`);
    document.body.style.overflow = `visible`;
  };

  return (
    <HandlersContext.Provider
      value={{
        activeTab: state.activeTab,
        changeActiveTab,
        closeOffcanvas,
        openOffcanvas,
      }}
    >
      {props.children}
    </HandlersContext.Provider>
  );
};

export default HandlersState;
