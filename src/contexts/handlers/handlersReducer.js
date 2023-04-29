import { CHANGE_ACTIVE_TAB } from "../types";

const handlersReducer = function (state, action) {
  switch (action.type) {
    case CHANGE_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };
  }
};

export default handlersReducer;
