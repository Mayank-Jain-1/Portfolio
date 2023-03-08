import musicControl from "./musicReducers";
import navControl from "./navbarReducer";
import documentInfo from "./documentReducers";
import notifications from "./notificationReducers";
import loading from "./loadingReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  musicControl,
  navControl,
  documentInfo,
  notifications,
  loading
});

export default rootReducer;
