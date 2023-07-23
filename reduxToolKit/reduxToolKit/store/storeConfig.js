//Redux Dev Tool
import {configureStore} from "@reduxjs/toolkit";
import reducer from "./slice/taskSlice";

const store = configureStore({reducer:reducer})
export default store;


//-------------Core redux configuration---------------//
// import { legacy_createStore as createStore} from 'redux'
// import reducer from './slice/reducer'
// const store = createStore(reducer);
// export default store;