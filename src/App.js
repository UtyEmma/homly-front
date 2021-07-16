import React from 'react';
import {  Switch, Route } from 'react-router-dom';

// Route Guards
import AgentRoute from 'providers/guards/agent-guard';
import TenantRoute from 'providers/guards/tenant-guard';

// Front Pages
import About from 'views/about';
import Home from 'views/home';
import NotFound from './views/not-found';

// Tenant Pages
import UserLogin from 'views/tenants/auth/login';
import UserSignup from 'views/tenants/auth/signup';
import Listing from './views/tenants/listings/listings';
import ListingDetails from './views/tenants/listings/listing-details';
import Agents from './views/tenants/agents/agents';
import AgentDetails from './views/tenants/agents/agent-details';

// Agent Imports
import AgentLogin from './views/agent/auth/agent-login';
import AgentSignup from './views/agent/auth/agent-signup';
import AgentDashboard from './views/agent/dashboard';
import NewListing from './views/agent/listings/add-listing';
import AgentsListings from './views/agent/listings/agents-listings';
import AgentProfile from './views/agent/profile';
import PasswordRecovery from './views/agent/auth/password-recovery';
import Wishlist from 'views/tenants/wishlist/wishlist';
import UserRoute from 'providers/guards/user-guard';

function App(props) {
  return (
    <div className="App">
      <Switch>
          {/* Unguarded Routes */}
          <UserRoute path="/" component={Home} exact/>
          <UserRoute path="/about" component={About} exact />

          {/* Common Routes */}
          <Route path="/recover-password" component={PasswordRecovery} exact/>

          {/* User Routes */}
          <Route path="/login" component={UserLogin} exact/>
          <Route path="/signup" component={UserSignup} exact/>
          <UserRoute path="/listings" user component={Listing} exact/>
          {/* <TenantRoute path="/profile" user component={TenantProfile} exact/> */}
          <UserRoute path="/agents" user type="user" component={Agents} exact/>
          <UserRoute path="/agents/:id" user type="user" component={AgentDetails} exact/>
          <UserRoute path="/listing/:id" user component={ListingDetails} exact/>
          <TenantRoute path="/wishlist" user component={Wishlist} exact/>

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