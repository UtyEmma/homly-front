import thunk from "redux-thunk";
import rootReducer from "./_reducers";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory()

const initialState = {};
const middleware = [thunk, routerMiddleware(history)];

export const persitConfig = {
    key: 'root',
    storage,
    whitelist: ['user_data']    
}

const persistedReducer = persistReducer(persitConfig, rootReducer(history))


export const store = createStore(
    persistedReducer,
    initialState,  
    composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store)
const store_object = {store, persistor}

export default store_object