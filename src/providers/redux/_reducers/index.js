import { combineReducers } from "redux";
import {loginReducer, signupReducer} from "../_reducers/user.reducer";
import { AgentLoginReducer, AgentSignupReducer } from "./agent-reducer";
import { AgentsListingsReducer, NewListingReducer, StoreListingReducer } from "./listing-reducer";

const rootReducer = combineReducers({
    signup: signupReducer,
    login: loginReducer,
    agent_login: AgentLoginReducer,
    agent_signup: AgentSignupReducer,
    store_listing: StoreListingReducer,
    new_listing: NewListingReducer,
    agents_listings: AgentsListingsReducer
})

export default rootReducer;