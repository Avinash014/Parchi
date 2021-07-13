import { combineReducers } from "redux";
// import globalSetting from "./globalSetting";
// import askGenius from "./askGenius";
// import learning from "./learning";
// import insight from "./insight";
import countReducer from "./countReducer";


const rootReducer = combineReducers({
    countReducer: countReducer,
//   askGenius: askGenius,
//   learning: learning,
//   insight: insight,
//   userDetails,
//   sources,
//   contexts,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
