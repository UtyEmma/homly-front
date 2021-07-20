"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateWishlist = void 0;

var _wishlistConstants = require("providers/redux/_contants/wishlist-constants");

var _wishlistService = require("providers/services/wishlist-service");

var CREATE_WISHLIST_REQUEST = _wishlistConstants.WISHLIST.CREATE_WISHLIST_REQUEST,
    CREATE_WISHLIST_SUCCESS = _wishlistConstants.WISHLIST.CREATE_WISHLIST_SUCCESS,
    CREATE_WISHLIST_FAILURE = _wishlistConstants.WISHLIST.CREATE_WISHLIST_FAILURE,
    FETCH_WISHLIST_REQUEST = _wishlistConstants.WISHLIST.FETCH_WISHLIST_REQUEST,
    FETCH_WISHLIST_SUCCESS = _wishlistConstants.WISHLIST.FETCH_WISHLIST_SUCCESS,
    FETCH_WISHLIST_FAILURE = _wishlistConstants.WISHLIST.FETCH_WISHLIST_FAILURE;

var CreateWishlist = function CreateWishlist(data) {
  return function (dispatch) {
    console.log('creating_wishlist');
    dispatch({
      type: CREATE_WISHLIST_REQUEST
    });

    _wishlistService.WishlistService.create(data).then(function (response) {
      dispatch({
        type: CREATE_WISHLIST_SUCCESS,
        payload: response.data
      });
    })["catch"](function (error) {
      dispatch({
        type: CREATE_WISHLIST_FAILURE,
        payload: error.response.data
      });
    });
  };
};

exports.CreateWishlist = CreateWishlist;