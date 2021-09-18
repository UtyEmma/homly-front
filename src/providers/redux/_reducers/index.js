import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

import {signupReducer} from "../_reducers/user.reducer";
import { SetAdminModeReducer, SuspendItemReducer, verifyAgentReducer } from "./admin-reducer";
import { AgentLoginReducer, AgentSignupReducer,
        UpdateAgentProfileReducer, ShowAvailableAgentsReducer, DeleteListingReducer, RemoveListingReducer, FetchSingleAgentReducer, FetchAgentWishlistsReducer } from "./agent-reducer";
import { GetLoggedInUserReducer, LoginReducer, RecoverPasswordReducer, ResendEmailReducer, ResetPasswordReducer, SetUserReducer, VerifyEmailReducer } from "./auth-reducer";
import { FetchCategoriesReducer } from "./category-reducer";
import { FetchDetailsReducer } from "./details-reducer";
import { AddFavouritesReducer, FetchFavouritesReducer, RemoveFavouritesReducer } from "./favourite-reducer";

import { AgentsListingsReducer, NewListingReducer, StoreListingReducer,
         ActiveListingsReducer, FetchListingDetails, FetchSingleListing, FetchPopularListingsReducer, SetAsRentedReducer, UpdateListingReducer } from "./listing-reducer";
import { searchForLocationReducer } from "./location-reducer";
import { FetchNotificationsReducer } from "./notification-reducer";
import { DeleteReviewReducer, EditReviewReducer, FetchAgentReviewsReducer, FetchReviewsReducer, ReportUserReducer, SubmitReviewReducer } from "./review-reducers";
import { SearchListingsReducer } from "./search-reducer";
import { DeleteTicketReducer, FetchMessagesReducer, FetchTicketsReducer, NewTicketReducer, SendMessageReducer } from "./support-reducer";

import { CreateWishlistReducer, FetchWishlistReducer } from "./wishlist-reducer";

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    user_data: SetUserReducer,
    signup: signupReducer,
    login: LoginReducer,
    user: GetLoggedInUserReducer,
    resend_mail: ResendEmailReducer,
    verify_email: VerifyEmailReducer,

    wishlist : CreateWishlistReducer,
    wishlists: FetchWishlistReducer,

    agent_signup: AgentSignupReducer,
    agents_listings: AgentsListingsReducer,
    update_agent_profile: UpdateAgentProfileReducer,
    available_agents: ShowAvailableAgentsReducer,
    agent: FetchSingleAgentReducer,
    agent_wishlist: FetchAgentWishlistsReducer,

    store_listing: StoreListingReducer,
    new_listing: NewListingReducer,
    active_listings: ActiveListingsReducer,
    fetch_details : FetchListingDetails,
    listing : FetchSingleListing,
    delete_listing: DeleteListingReducer,
    remove_listing: RemoveListingReducer,
    popular_listings: FetchPopularListingsReducer,
    set_as_rented: SetAsRentedReducer,
    update_listing: UpdateListingReducer,

    categories: FetchCategoriesReducer,

    search: SearchListingsReducer,

    details: FetchDetailsReducer,

    searchGoogleMaps : searchForLocationReducer,

    submit_review: SubmitReviewReducer,
    agent_reviews: FetchAgentReviewsReducer,
    listing_reviews: FetchReviewsReducer,
    report_user: ReportUserReducer,
    edit_review: EditReviewReducer,
    delete_review: DeleteReviewReducer,

    new_ticket: NewTicketReducer,
    tickets: FetchTicketsReducer,
    delete_ticket: DeleteTicketReducer,
    send_message: SendMessageReducer,
    messages: FetchMessagesReducer,
    
    favourites: FetchFavouritesReducer,
    add_favourites: AddFavouritesReducer,
    remove_favourites: RemoveFavouritesReducer,

    notification: FetchNotificationsReducer,

    suspend_item: SuspendItemReducer,
    verify_agent: verifyAgentReducer,

    recover_password: RecoverPasswordReducer,
    reset_password: ResetPasswordReducer,

    admin_mode: SetAdminModeReducer
})



export default rootReducer;