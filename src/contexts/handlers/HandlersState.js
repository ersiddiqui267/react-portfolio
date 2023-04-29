import React, { useReducer } from "react";
import HandlersContext from "./handlersContext";
import HandlersReducer from "./handlersReducer";
import { CHANGE_ACTIVE_TAB } from "../types";

const HandlersState = function (props) {
  const initialState = {
    activeTab: `about`,
  };

  const [state, dispatch] = useReducer(HandlersReducer, initialState);

  const changeActiveTab = function (e) {
    if (!e.target.classList.contains(`link`)) return;

    dispatch({
      type: CHANGE_ACTIVE_TAB,
      payload: e.target.id,
    });

    document.querySelector(`.offcanvas`).classList.add(`hidden`);
  };

  const openOffcanvas = function () {
    document.querySelector(`.offcanvas`).classList.remove(`hidden`);
  };

  const closeOffcanvas = function () {
    document.querySelector(`.offcanvas`).classList.add(`hidden`);
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
