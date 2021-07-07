import thunk from "redux-thunk";
import rootReducer from "./_reducers";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,  
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;