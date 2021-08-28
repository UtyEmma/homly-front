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
import Reviews from 'views/agent/reviews';
import VerifyEmail from 'views/onboarding/verify-email';

import { ToastContainer } from 'react-toastify';
import { Support } from 'views/agent/support/support';
import AgentWishlist from 'views/agent/wishlist/agent-wishlist';
import { GoogleOneTapAuth } from 'components/auth/social';
import { Favourites } from 'views/tenants/favourites/favourites';
import { AgentListingDetail } from 'views/agent/listings/agent-listing-details';
import { Onboarding } from 'views/agent/onboarding/onboarding';
import { SelectUser } from 'views/onboarding/select-user';

function App() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="App">
      <Preloader loading={isLoading}/>

      <ToastContainer 
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick 
        draggable
        pauseOnFocusLoss={false}
      />  

      {
        !localStorage.getItem('isAuthenticated')

        &&
        
        <GoogleOneTapAuth />
      }

      <Switch>                  
          {/* Common Routes */}
          <Route path="/recover-password" isLoading={setIsLoading} component={PasswordRecovery} exact/>
          <Route path="/login" render={(props) => (<UserLogin {...props} isLoading={setIsLoading} />)} exact/>
          <Route path="/signup" isLoading={setIsLoading} render={(props) => (<UserSignup {...props} isLoading={setIsLoading} />)} exact/>

          {/* User Routes */}
          <UserRoute path="/" isLoading={setIsLoading} component={Home} exact/>
          <UserRoute path="/about" isLoading={setIsLoading} component={About} exact />
          <UserRoute path="/verify" isLoading={setIsLoading} component={VerifyEmail} user exact />
          <UserRoute path="/search" user component={Search} exact/>
          <UserRoute path="/listings" isLoading={setIsLoading} user component={Listing} exact/>
          <UserRoute path="/agents" isLoading={setIsLoading} user type="user" component={Agents} exact/>
          <UserRoute path="/listings/:slug" isLoading={setIsLoading} user component={ListingDetails} exact/>
          <UserRoute path="/user" isLoading={setIsLoading} user component={SelectUser} exact/>
          
          {/* Tenant Routes */}
          <TenantRoute path="/profile" isLoading={setIsLoading} user component={Profile} exact/>
          <TenantRoute path="/wishlist" isLoading={setIsLoading} user component={Wishlist} exact/>
          <TenantRoute path="/favourites" isLoading={setIsLoading} user component={Favourites} exact/>


          {/* Agent Routes */}
          <Route path="/agent-login" isLoading={setIsLoading} type="agent" component={AgentLogin} exact/>
          <Route path="/agent-signup" isLoading={setIsLoading} type="agent" component={AgentSignup} exact/>
          <Route path="/onboarding" isLoading={setIsLoading} type="agent" component={Onboarding} exact />
          <AgentRoute path="/dashboard" isLoading={setIsLoading} type="agent" component={AgentDashboard} exact />
          <AgentRoute path="/new-listing" isLoading={setIsLoading} type="agent" component={NewListing} exact />
          <AgentRoute path="/agent-profile" isLoading={setIsLoading} type="agent" component={AgentProfile} exact />
          <AgentRoute path="/my-listings" isLoading={setIsLoading} type="agent" component={AgentsListings} exact />
          <AgentRoute path="/my-listings/:slug" isLoading={setIsLoading} type="agent" component={AgentListingDetail} />
          <AgentRoute path="/reviews" isLoading={setIsLoading} type="agent" component={Reviews} exact />
          <AgentRoute path="/support" isLoading={setIsLoading} type="agent" component={Support} exact />
          <AgentRoute path="/agent-wishlists" isLoading={setIsLoading} type="agent" component={AgentWishlist} exact />


          <UserRoute path="/:id" isLoading={setIsLoading} user type="user" component={AgentDetails} exact/>
          <Route component={NotFound} exact/>
      </Switch>
    </div>
  );
}

export default App;