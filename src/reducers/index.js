import musicControl from "./musicReducers";
import navControl from "./navbarReducer";
import documentInfo from "./documentReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  musicControl,
  navControl,
  documentInfo
});

export default rootReducer;
