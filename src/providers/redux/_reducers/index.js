import { combineReducers } from "redux";
import {loginReducer, signupReducer} from "../_reducers/user.reducer";
import { AgentLoginReducer, AgentSignupReducer,
        UpdateAgentProfileReducer, ShowAvailableAgentsReducer, DeleteListingReducer, RemoveListingReducer } from "./agent-reducer";
import { FetchCategoriesReducer } from "./category-reducer";
import { FetchDetailsReducer } from "./details-reducer";

import { AgentsListingsReducer, NewListingReducer, StoreListingReducer,
         ActiveListingsReducer, FetchListingDetails, FetchSingleListing } from "./listing-reducer";
import { searchForLocationReducer } from "./location-reducer";
import { SubmitReviewReducer } from "./review-reducers";
import { SearchListingsReducer } from "./search-reducer";

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
    delete_listing: DeleteListingReducer,
    remove_listing: RemoveListingReducer,

    categories: FetchCategoriesReducer,

    search: SearchListingsReducer,

    details: FetchDetailsReducer,

    searchGoogleMaps : searchForLocationReducer,

    submit_review: SubmitReviewReducer


})

export default rootReducer;