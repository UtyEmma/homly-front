"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WishlistService = void 0;

var _http = require("./api/http");

var WishlistService = {
  create: create,
  fetchTenantWishlist: fetchTenantWishlist,
  fetchWishlistForAgent: fetchWishlistForAgent,
  fetchSingleWishlist: fetchSingleWishlist
};
exports.WishlistService = WishlistService;
var options = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': "Bearer ".concat(localStorage.getItem('token'))
};

function create(data) {
  var request;
  return regeneratorRuntime.async(function create$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          request = {
            config: {
              headers: options
            },
            payload: data
          };
          _context.next = 3;
          return regeneratorRuntime.awrap(_http.Request.post('tenant/wishlist/create', request));

        case 3:
          return _context.abrupt("return", _context.sent);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

function fetchTenantWishlist() {
  var request;
  return regeneratorRuntime.async(function fetchTenantWishlist$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          request = {
            config: {
              headers: options
            }
          };
          _context2.next = 3;
          return regeneratorRuntime.awrap(_http.Request.get('wishlist/fetch', request));

        case 3:
          return _context2.abrupt("return", _context2.sent);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function fetchSingleWishlist($id) {
  var request;
  return regeneratorRuntime.async(function fetchSingleWishlist$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          request = {
            config: {
              headers: options
            }
          };
          _context3.next = 3;
          return regeneratorRuntime.awrap(_http.Request.get("wishlist/".concat($id), request));

        case 3:
          return _context3.abrupt("return", _context3.sent);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function fetchWishlistForAgent() {
  var request;
  return regeneratorRuntime.async(function fetchWishlistForAgent$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          request = {
            config: {
              headers: options
            }
          };
          _context4.next = 3;
          return regeneratorRuntime.awrap(_http.Request.get('wishlist/agent', request));

        case 3:
          return _context4.abrupt("return", _context4.sent);

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
}