"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _user = require("../_reducers/user.reducer");

var _agentReducer = require("./agent-reducer");

var _categoryReducer = require("./category-reducer");

var _listingReducer = require("./listing-reducer");

var _wishlistReducer = require("./wishlist-reducer");

var rootReducer = (0, _redux.combineReducers)({
  signup: _user.signupReducer,
  login: _user.loginReducer,
  wishlist: _wishlistReducer.CreateWishlistReducer,
  agent_login: _agentReducer.AgentLoginReducer,
  agent_signup: _agentReducer.AgentSignupReducer,
  agents_listings: _listingReducer.AgentsListingsReducer,
  update_agent_profile: _agentReducer.UpdateAgentProfileReducer,
  available_agents: _agentReducer.ShowAvailableAgentsReducer,
  store_listing: _listingReducer.StoreListingReducer,
  new_listing: _listingReducer.NewListingReducer,
  active_listings: _listingReducer.ActiveListingsReducer,
  fetch_details: _listingReducer.FetchListingDetails,
  listing: _listingReducer.FetchSingleListing,
  categories: _categoryReducer.FetchCategoriesReducer
});
var _default = rootReducer;
exports["default"] = _default;