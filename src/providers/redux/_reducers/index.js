import { combineReducers } from "redux";
import {loginReducer, signupReducer} from "../_reducers/user.reducer";
import { AgentLoginReducer, AgentSignupReducer, UpdateAgentProfileReducer, 
        ShowAvailableAgentsReducer } from "./agent-reducer";

import { AgentsListingsReducer, NewListingReducer, StoreListingReducer,
         ActiveListingsReducer, FetchListingDetails} from "./listing-reducer";

import { CreateWishlistReducer } from "./wishlist-reducer";

const rootReducer = combineReducers({
    signup: signupReducer,
    login: loginReducer,

    wishlist : CreateWishlistReducer,

    agent_login: AgentLoginReducer,
    agent_signup: AgentSignupReducer,
    agents_listings: AgentsListingsReducer,
    update_agent_profile: UpdateAgentProfileReducer,
    available_agents: ShowAvailableAgentsReducer,


    store_listing: StoreListingReducer,
    new_listing: NewListingReducer,
    active_listings: ActiveListingsReducer,
    fetch_details : FetchListingDetails
})

export default rootReducer;