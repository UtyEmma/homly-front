"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FetchCategoriesReducer = FetchCategoriesReducer;

var _categoryConstants = require("../_contants/dist/category-constants.dev");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FETCH_CATEGORY_REQUEST = _categoryConstants.CategoryConstants.FETCH_CATEGORY_REQUEST,
    FETCH_CATEGORY_SUCCESS = _categoryConstants.CategoryConstants.FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY_FAILURE = _categoryConstants.CategoryConstants.FETCH_CATEGORY_FAILURE;

function FetchCategoriesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case FETCH_CATEGORY_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case FETCH_CATEGORY_SUCCESS:
      return _objectSpread({}, state, {
        loading: false,
        categories: action.payload
      });

    case FETCH_CATEGORY_FAILURE:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload
      });

    default:
      return state;
  }
}