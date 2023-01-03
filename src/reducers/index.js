import musicControl from "./musicReducers";
import { combineReducers } from "redux";
import navControl from "./navbarReducer";

const rootReducer = combineReducers({
  musicControl,
  navControl
});

export default rootReducer;
