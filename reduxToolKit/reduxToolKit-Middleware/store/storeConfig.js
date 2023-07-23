//Redux Dev Tool With Middleware
import {configureStore} from "@reduxjs/toolkit";
import reducer from "./slice/taskSlice";
import log from "./middleware/log";
import error from "./middleware/error";
const store = configureStore({
    reducer:reducer,
    middleware:(getDefaultMiddleware)=>[
        ...getDefaultMiddleware(),
        log,error
    ]
})
export default store;


//-------------Core redux configuration---------------//
// import { legacy_createStore as createStore} from 'redux'
// import reducer from './slice/reducer'
// const store = createStore(reducer);
// export default store;