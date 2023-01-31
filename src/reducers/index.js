import musicControl from "./musicReducers";
import navControl from "./navbarReducer";
import documentInfo from "./documentReducers";
import notifications from "./notificationReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  musicControl,
  navControl,
  documentInfo,
  notifications
});

export default rootReducer;
