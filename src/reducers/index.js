/** @format */

import { combineReducers } from "redux";
import CheckerboardPageReducer from "./CheckerboardPage";

const rootReducer = combineReducers({
  boardPage: CheckerboardPageReducer,
});

export default rootReducer;
