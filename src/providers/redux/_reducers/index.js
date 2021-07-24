import { combineReducers } from "redux";
import {loginReducer, signupReducer} from "../_reducers/user.reducer";
import {
    AgentLoginReducer, 
    AgentSignupReducer,
    UpdateAgentProfileReducer, 
    ShowAvailableAgentsReducer } from "./agent-reducer";
import { FetchCategoriesReducer } from "./category-reducer";
import { FetchDetailsReducer } from "./details-reducer";

import { AgentsListingsReducer, NewListingReducer, StoreListingReducer,
         ActiveListingsReducer, FetchListingDetails, FetchSingleListing} from "./listing-reducer";

import { CreateWishlistReducer, FetchWishlistReducer } from "./wishlist-reducer";

const rootReducer = combineReducers({
    signup: signupReducer,
    login: loginReducer,

    wishlist : CreateWishlistReducer,
    wishlists: FetchWishlistReducer,

    agent_login: AgentLoginReducer,
    agent_signup: AgentSignupReducer,
    agents_listings: AgentsListingsReducer,
    update_agent_profile: UpdateAgentProfileReducer,
    available_agents: ShowAvailableAgentsReducer,


    store_listing: StoreListingReducer,
    new_listing: NewListingReducer,
    active_listings: ActiveListingsReducer,
    fetch_details : FetchListingDetails,
    listing : FetchSingleListing,

    categories: FetchCategoriesReducer,

    details: FetchDetailsReducer,


})

export default rootReducer;