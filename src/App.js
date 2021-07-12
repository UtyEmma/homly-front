import React from 'react';
import {  Switch, Route } from 'react-router-dom';

// Route Guards
import AgentRoute from './providers/guards/agent-guard';
import TenantRoute from './providers/guards/tenant-guard';

// Unguarded Routes
import Home from './components/home'
import About from './components/about'
import Map from './components/map'
import NotFound from './components/not-found'

// User Routes
import UserLogin from './components/login';
import UserSignup from './components/signup';
import AgentDetails from './components/agent-details'
import Agents from './components/agents';
import Listing from './components/listings';

// Agent Routes
import AgentLogin from './components/agent/auth/agent-login';
import AgentSignup from './components/agent/auth/agent-signup';
import AgentDashboard from './components/agent/dashboard';
import AgentProfile from './components/agent/profile';
import NewListing from './components/agent/listings/add-listing';
import PasswordRecovery from './components/agent/auth/password-recovery';
import AgentsListings from './components/agent/listings/agents-listings';

// Admin Routes

function App(props) {
  return (
    <div className="App">
      <Switch>
          {/* Unguarded Routes */}
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About} exact />


          {/* Common Routes */}
          <Route path="/recover-password" component={PasswordRecovery} exact/>

          {/* User Routes */}
          <Route path="/login" component={UserLogin} exact/>
          <Route path="/signup" component={UserSignup} exact/>
          <Route path="/listings" user component={Listing} exact/>
          <Route path="/agents" user type="user" component={Agents} exact/>
          <Route path="/agent-detail" user type="user" component={AgentDetails} exact/>
          <Route path="/listing/:id" user component={Map} exact/>


          {/* Agent Routes */}
          <Route path="/agent-login" type="agent" component={AgentLogin} exact/>
          <Route path="/agent-signup" type="agent" component={AgentSignup} exact/>
          <AgentRoute path="/dashboard" type="agent" component={AgentDashboard} exact />
          <AgentRoute path="/new-listing" type="agent" component={NewListing} exact />
          <AgentRoute path="/agent-profile" type="agent" component={AgentProfile} exact />
          <AgentRoute path="/my-listings" type="agent" component={AgentsListings} exact />

          <Route component={NotFound} exact/>
      </Switch>
    </div>
  );
}

export default App;