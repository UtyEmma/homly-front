import React, { useState } from 'react';
import {  Switch, Route } from 'react-router-dom';

// Route Guards
import AgentRoute from 'providers/guards/agent-guard';
import TenantRoute from 'providers/guards/tenant-guard';
import UserRoute from 'providers/guards/user-guard';

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
import Profile from 'views/tenants/profile/profile';

// Agent Imports
import AgentLogin from './views/agent/auth/agent-login';
import AgentSignup from './views/agent/auth/agent-signup';
import AgentDashboard from './views/agent/dashboard';
import NewListing from './views/agent/listings/add-listing';
import AgentsListings from './views/agent/listings/agents-listings';
import AgentProfile from './views/agent/profile';
import PasswordRecovery from './views/agent/auth/password-recovery';
import Wishlist from 'views/tenants/wishlist/wishlist';
import Search from 'views/search';
import Preloader from 'components/preloader/preloader';
import { ToastContainer } from 'react-toastify';


function App(props) {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="App">
      <Preloader loading={isLoading}/>
      <ToastContainer />
      <Switch>
          {/* Unguarded Routes */}
          <UserRoute path="/" isLoading={setIsLoading} component={Home} exact/>
          <UserRoute path="/about" isLoading={setIsLoading} component={About} exact />

          {/* Common Routes */}
          <Route path="/recover-password" isLoading={setIsLoading} component={PasswordRecovery} exact/>

          {/* User Routes */}
          <Route path="/login" isLoading={setIsLoading} component={UserLogin} exact/>
          <Route path="/signup" isLoading={setIsLoading} component={UserSignup} exact/>
          <UserRoute path="/s" user component={Search} exact/>
          <UserRoute path="/listings" isLoading={setIsLoading} user component={Listing} exact/>
          <UserRoute path="/agents" isLoading={setIsLoading} user type="user" component={Agents} exact/>
          <UserRoute path="/agents/:id" isLoading={setIsLoading} user type="user" component={AgentDetails} exact/>
          <UserRoute path="/listings/:slug" isLoading={setIsLoading} user component={ListingDetails} exact/>
          <TenantRoute path="/profile" isLoading={setIsLoading} user component={Profile} exact/>
          <TenantRoute path="/wishlist" isLoading={setIsLoading} user component={Wishlist} exact/>

          {/* Agent Routes */}
          <Route path="/agent-login" isLoading={setIsLoading} type="agent" component={AgentLogin} exact/>
          <Route path="/agent-signup" isLoading={setIsLoading} type="agent" component={AgentSignup} exact/>
          <AgentRoute path="/dashboard" isLoading={setIsLoading} type="agent" component={AgentDashboard} exact />
          <AgentRoute path="/new-listing" isLoading={setIsLoading} type="agent" component={NewListing} exact />
          <AgentRoute path="/agent-profile" isLoading={setIsLoading} type="agent" component={AgentProfile} exact />
          <AgentRoute path="/my-listings" isLoading={setIsLoading} type="agent" component={AgentsListings} exact />

          <Route component={NotFound} exact/>
      </Switch>
    </div>
  );
}

export default App;