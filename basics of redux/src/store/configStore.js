import { legacy_createStore as createStore,applyMiddleware } from "redux";
import reducer from "./Task";
// import thunk from "redux-thunk";
// const store = createStore(reducer,applyMiddleware(thunk));
const store = createStore(reducer);
 
export default store;
