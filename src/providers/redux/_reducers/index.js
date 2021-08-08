import { combineReducers } from "redux";
import {loginReducer, signupReducer} from "../_reducers/user.reducer";
import { AgentLoginReducer, AgentSignupReducer,
        UpdateAgentProfileReducer, ShowAvailableAgentsReducer, DeleteListingReducer, RemoveListingReducer, FetchSingleAgentReducer } from "./agent-reducer";
import { FetchCategoriesReducer } from "./category-reducer";
import { FetchDetailsReducer } from "./details-reducer";

import { AgentsListingsReducer, NewListingReducer, StoreListingReducer,
         ActiveListingsReducer, FetchListingDetails, FetchSingleListing, FetchPopularListingsReducer } from "./listing-reducer";
import { searchForLocationReducer } from "./location-reducer";
import { FetchAgentReviewsReducer, FetchReviewsReducer, SubmitReviewReducer } from "./review-reducers";
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
    agent: FetchSingleAgentReducer,

    store_listing: StoreListingReducer,
    new_listing: NewListingReducer,
    active_listings: ActiveListingsReducer,
    fetch_details : FetchListingDetails,
    listing : FetchSingleListing,
    delete_listing: DeleteListingReducer,
    remove_listing: RemoveListingReducer,
    popular_listings: FetchPopularListingsReducer,

    categories: FetchCategoriesReducer,

    search: SearchListingsReducer,

    details: FetchDetailsReducer,

    searchGoogleMaps : searchForLocationReducer,

    submit_review: SubmitReviewReducer,
    agent_reviews: FetchAgentReviewsReducer,
    listing_reviews: FetchReviewsReducer


})

export default rootReducer;