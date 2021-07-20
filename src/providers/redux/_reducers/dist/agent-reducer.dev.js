"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AgentSignupReducer = AgentSignupReducer;
exports.AgentLoginReducer = AgentLoginReducer;
exports.UpdateAgentProfileReducer = UpdateAgentProfileReducer;
exports.ShowAvailableAgentsReducer = ShowAvailableAgentsReducer;

var _agentConstants = require("../_contants/agent-constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SIGNUP_REQUEST = _agentConstants.AgentConstants.SIGNUP_REQUEST,
    SIGNUP_SUCCESS = _agentConstants.AgentConstants.SIGNUP_SUCCESS,
    SIGNUP_FAILURE = _agentConstants.AgentConstants.SIGNUP_FAILURE,
    LOGIN_REQUEST = _agentConstants.AgentConstants.LOGIN_REQUEST,
    LOGIN_SUCCESS = _agentConstants.AgentConstants.LOGIN_SUCCESS,
    LOGIN_FAILURE = _agentConstants.AgentConstants.LOGIN_FAILURE,
    UPDATE_REQUEST = _agentConstants.AgentConstants.UPDATE_REQUEST,
    UPDATE_SUCCESS = _agentConstants.AgentConstants.UPDATE_SUCCESS,
    UPDATE_FAILURE = _agentConstants.AgentConstants.UPDATE_FAILURE,
    SHOW_AGENTS_REQUEST = _agentConstants.AgentConstants.SHOW_AGENTS_REQUEST,
    SHOW_AGENTS_SUCCESS = _agentConstants.AgentConstants.SHOW_AGENTS_SUCCESS,
    SHOW_AGENTS_FAILURE = _agentConstants.AgentConstants.SHOW_AGENTS_FAILURE;

function AgentSignupReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SIGNUP_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case SIGNUP_SUCCESS:
      return _objectSpread({}, state, {
        agent_success: action.payload,
        loading: false
      });

    case SIGNUP_FAILURE:
      return _objectSpread({}, state, {
        agent_error: action.payload,
        loading: false
      });

    default:
      return state;
  }
}

function AgentLoginReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOGIN_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case LOGIN_SUCCESS:
      return _objectSpread({}, state, {
        agent_success: action.payload,
        loading: false
      });

    case LOGIN_FAILURE:
      return _objectSpread({}, state, {
        agent_error: action.payload,
        loading: false
      });

    default:
      return state;
  }
}

function UpdateAgentProfileReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case UPDATE_SUCCESS:
      return _objectSpread({}, state, {
        agent_success: action.payload,
        loading: false
      });

    case UPDATE_FAILURE:
      return _objectSpread({}, state, {
        agent_error: action.payload,
        loading: false
      });

    default:
      return state;
  }
}

function ShowAvailableAgentsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SHOW_AGENTS_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case SHOW_AGENTS_SUCCESS:
      return _objectSpread({}, state, {
        agents_data: action.payload,
        loading: false
      });

    case SHOW_AGENTS_FAILURE:
      return _objectSpread({}, state, {
        agent_error: action.payload,
        loading: false
      });

    default:
      return state;
  }
}