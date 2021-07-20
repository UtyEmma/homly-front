"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FetchCategories = void 0;

var _categoryConstants = _interopRequireDefault(require("providers/redux/_contants/category-constants"));

var _categoriesService = require("providers/services/categories-service");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FETCH_CATEGORY_REQUEST = _categoryConstants["default"].FETCH_CATEGORY_REQUEST,
    FETCH_CATEGORY_SUCCESS = _categoryConstants["default"].FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY_FAILURE = _categoryConstants["default"].FETCH_CATEGORY_FAILURE;

var FetchCategories = function FetchCategories() {
  return function (dispatch) {
    console.log("fetching_categories...");
    dispatch({
      type: FETCH_CATEGORY_REQUEST
    });

    _categoriesService.CategoryService.FetchAll().then(function (res) {
      dispatch({
        type: FETCH_CATEGORY_SUCCESS,
        payload: res
      });
    })["catch"](function (err) {
      dispatch({
        type: FETCH_CATEGORY_FAILURE,
        payload: err.response
      });
    });
  };
};

exports.FetchCategories = FetchCategories;