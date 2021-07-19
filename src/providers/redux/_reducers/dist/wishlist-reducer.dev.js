"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateWishlistReducer = CreateWishlistReducer;

var _wishlistConstants = require("../_contants/wishlist-constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CREATE_WISHLIST_REQUEST = _wishlistConstants.WISHLIST.CREATE_WISHLIST_REQUEST,
    CREATE_WISHLIST_SUCCESS = _wishlistConstants.WISHLIST.CREATE_WISHLIST_SUCCESS,
    CREATE_WISHLIST_FAILURE = _wishlistConstants.WISHLIST.CREATE_WISHLIST_FAILURE,
    FETCH_WISHLIST_REQUEST = _wishlistConstants.WISHLIST.FETCH_WISHLIST_REQUEST,
    FETCH_WISHLIST_SUCCESS = _wishlistConstants.WISHLIST.FETCH_WISHLIST_SUCCESS,
    FETCH_WISHLIST_FAILURE = _wishlistConstants.WISHLIST.FETCH_WISHLIST_FAILURE;

function CreateWishlistReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case CREATE_WISHLIST_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case CREATE_WISHLIST_SUCCESS:
      return _objectSpread({}, state, {
        loading: false,
        wishlist: action.payload
      });

    case CREATE_WISHLIST_FAILURE:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload
      });

    default:
      return {
        state: state
      };
  }
}