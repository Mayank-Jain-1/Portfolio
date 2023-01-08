import musicReducer from "./musicReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  musicReducer,
});

export default rootReducer;
