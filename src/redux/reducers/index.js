import { combineReducers } from "redux";
import { showRight,layout } from "./layoutReducer";
const rootReducer = combineReducers({
  showRight,
  layout
});

export default rootReducer;
