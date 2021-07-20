"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowAllAgents = exports.UpdateAgentProfile = exports.AgentLogin = exports.AgentSignup = void 0;

var _toastify = require("libraries/toastify/toastify");

var _services = require("../../services");

var _agentConstants = require("../_contants/agent-constants");

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

var AgentSignup = function AgentSignup(data) {
  return function (dispatch) {
    console.log("signing_up");
    dispatch({
      type: SIGNUP_REQUEST
    });

    _services.AgentService.signup(data).then(function (response) {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: response
      });
    })["catch"](function (error) {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: error.response
      });
    });
  };
};

exports.AgentSignup = AgentSignup;

var AgentLogin = function AgentLogin(data) {
  return function (dispatch) {
    console.log("logging_in");
    dispatch({
      type: LOGIN_REQUEST
    });

    _services.AgentService.login(data).then(function (response) {
      var res = response.data;
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      localStorage.setItem('isAuthenticated', true);
      localStorage.setItem('type', 'agent');
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          user: response.data.user,
          token: response.data.token
        }
      });
    })["catch"](function (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: error.response
      });
    });
  };
};

exports.AgentLogin = AgentLogin;

var UpdateAgentProfile = function UpdateAgentProfile(data) {
  return function (dispatch) {
    console.log('updating_data');
    dispatch({
      type: UPDATE_REQUEST
    });

    _services.AgentService.update(data).then(function (response) {
      var res = response.data;
      localStorage.setItem('user', JSON.stringify(res.data.agent));
      dispatch({
        type: UPDATE_SUCCESS,
        payload: res
      });
    })["catch"](function (error) {
      (0, _toastify.ERROR)(error.response.data.message);
      dispatch({
        type: UPDATE_FAILURE,
        payload: error.response
      });
    });
  };
};

exports.UpdateAgentProfile = UpdateAgentProfile;

var ShowAllAgents = function ShowAllAgents() {
  return function (dispatch) {
    console.log('Fetching_Agents');
    dispatch({
      type: SHOW_AGENTS_REQUEST
    });

    _services.AgentService.show().then(function (response) {
      dispatch({
        type: SHOW_AGENTS_SUCCESS,
        payload: response.data.data
      });
    })["catch"](function (error) {
      dispatch({
        type: SHOW_AGENTS_FAILURE,
        payload: error.response
      });
    });
  };
};

exports.ShowAllAgents = ShowAllAgents;