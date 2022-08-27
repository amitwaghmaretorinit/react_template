import { combineReducers, compose, createStore } from "redux";
import authReducer from "./authReducer";
import staffReducer from "./staffReducer";
import userProfileReducer from "./userProfileReducer";
import rawDataReducer from "./rawDataReducer";
import agentOnboardingReducer from "./agentOnboardingReducer";

const reducer = combineReducers({
  auth: authReducer,
  user: userProfileReducer,
  stff: staffReducer,
  rawData: rawDataReducer,
  agentOnboarding: agentOnboardingReducer,
});
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, {}, composeEnhancers());

export default store;
