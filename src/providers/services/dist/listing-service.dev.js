"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListingService = void 0;

var _http = require("./api/http");

var ListingService = {
  newListing: newListing,
  getAgentListings: getAgentListings,
  loadActiveListings: loadActiveListings,
  fetchListingDetails: fetchListingDetails,
  fetchSingleListing: fetchSingleListing
};
exports.ListingService = ListingService;
var options = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': "Bearer ".concat(localStorage.getItem('token'))
};

function newListing(data) {
  var params;
  return regeneratorRuntime.async(function newListing$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          params = {
            config: {
              headers: options
            },
            payload: data
          };
          _context.next = 3;
          return regeneratorRuntime.awrap(_http.Request.post('agent/listing/create', params));

        case 3:
          return _context.abrupt("return", _context.sent);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

function getAgentListings() {
  var params;
  return regeneratorRuntime.async(function getAgentListings$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          params = {
            headers: options
          };
          _context2.next = 3;
          return regeneratorRuntime.awrap(_http.Request.get('agent/listing/agents-listings', params));

        case 3:
          return _context2.abrupt("return", _context2.sent);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function loadActiveListings() {
  var params;
  return regeneratorRuntime.async(function loadActiveListings$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          params = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          };
          _context3.next = 3;
          return regeneratorRuntime.awrap(_http.Request.get('listings/active', params));

        case 3:
          return _context3.abrupt("return", _context3.sent);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
} // Fetch Listing Features/Amenities


function fetchListingDetails() {
  var params;
  return regeneratorRuntime.async(function fetchListingDetails$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          params = {
            headers: options
          };
          _context4.next = 3;
          return regeneratorRuntime.awrap(_http.Request.get('tenant/listings/details', params));

        case 3:
          return _context4.abrupt("return", _context4.sent);

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function fetchSingleListing(slug) {
  var params;
  return regeneratorRuntime.async(function fetchSingleListing$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          params = {
            headers: options
          };
          _context5.next = 3;
          return regeneratorRuntime.awrap(_http.Request.get("listings/".concat(slug), params));

        case 3:
          return _context5.abrupt("return", _context5.sent);

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
}