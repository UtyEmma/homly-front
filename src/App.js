import React, { useEffect, useState } from 'react';
import {  Switch, Route } from 'react-router-dom';

// Route Guards
import AgentRoute from './providers/guards/agent-guard';
import TenantRoute from './providers/guards/tenant-guard';
import UserRoute from './providers/guards/user-guard';

// Front Pages
import About from './views/about';
import Home from './views/home';
import NotFound from './views/not-found';

// Tenant Pages
import UserLogin from './views/tenants/auth/login';
import UserSignup from './views/tenants/auth/signup';
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
import Wishlist from './views/tenants/wishlist/wishlist';
import Search from './views/search';
import Preloader from './components/preloader/preloader';
import Reviews from './views/agent/reviews';
import VerifyEmail from './views/onboarding/verify-email';

import { ToastContainer } from 'react-toastify';
import { Support } from './views/agent/support/support';
import AgentWishlist from './views/agent/wishlist/agent-wishlist';
import { GoogleOneTapAuth } from './components/auth/social';
import { Favourites } from './views/tenants/favourites/favourites';
import { AgentListingDetail } from './views/agent/listings/agent-listing-details';
import { useQuery } from './libraries/http/query';
import { useDispatch, useSelector } from 'react-redux';
import { VerifyAdmin } from './providers/redux/_actions/admin-actions';
import { AdminModeBadge } from './libraries/admin/admin-mode';
import ResetPassword from 'views/agent/auth/reset-password';
import ServerError from 'views/onboarding/sever-error';

function App() {

	const dispatch = useDispatch()

	const [isLoading, setIsLoading] = useState(true)
  
	const query = useQuery()
	const auth = query.get("auth")
	const type = localStorage.getItem('type') 

  const {adminMode} = useSelector((state) => state.admin_mode)

  const handleAdminMode = () => {
    auth && type !== 'admin' && dispatch(VerifyAdmin(query.get("id")))
  }

  useEffect(() => {
    handleAdminMode()
  }, [])

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

		<GoogleOneTapAuth setIsLoading={setIsLoading} />

		<AdminModeBadge adminMode={adminMode} />

      <Switch>                  
          {/* Common Routes */}
          <Route path="/recover-password" render={(props) => (<PasswordRecovery {...props} isLoading={isLoading} setIsLoading={setIsLoading} />)} exact/>
          <Route path="/reset-password" render={(props) => (<ResetPassword {...props} isLoading={isLoading} setIsLoading={setIsLoading} />)} exact/>
          <Route path="/login" render={(props) => (<UserLogin {...props} isLoading={isLoading} setIsLoading={setIsLoading} />)} exact/>
          <Route path="/signup" isLoading={isLoading} setIsLoading={setIsLoading} render={(props) => (<UserSignup {...props} setIsLoading={setIsLoading} isLoading={setIsLoading} />)} exact/>

          {/* User Routes */}
          <UserRoute path="/" isLoading={isLoading} setIsLoading={setIsLoading} component={Home} exact/>
          <UserRoute path="/about" isLoading={isLoading} setIsLoading={setIsLoading} component={About} exact />
          <UserRoute path="/verify" isLoading={isLoading} setIsLoading={setIsLoading} component={VerifyEmail} user exact />
          <UserRoute path="/search" isLoading={isLoading} setIsLoading={setIsLoading} user component={Search} exact/>
          <UserRoute path="/listings" isLoading={isLoading} setIsLoading={setIsLoading} user component={Listing} exact/>
          <UserRoute path="/agents" isLoading={isLoading} setIsLoading={setIsLoading} user type="user" component={Agents} exact/>
          <UserRoute path="/listings/:slug" isLoading={isLoading} setIsLoading={setIsLoading} user component={ListingDetails} exact/>
          
          {/* Tenant Routes */}
          <TenantRoute path="/profile" isLoading={isLoading} setIsLoading={setIsLoading} user component={Profile} exact/>
          <TenantRoute path="/wishlist" isLoading={isLoading} setIsLoading={setIsLoading} user component={Wishlist} exact/>
          <TenantRoute path="/favourites" isLoading={isLoading} setIsLoading={setIsLoading} user component={Favourites} exact/>


          {/* Agent Routes */}
          <Route path="/agent-login" render={(props) => (<AgentLogin {...props} setIsLoading={setIsLoading} isLoading={isLoading} type="agent" />)} exact/>
          <Route path="/agent-signup" render={(props) => (<AgentSignup {...props} setIsLoading={setIsLoading} isLoading={isLoading} type="agent" />)} exact/>
          <AgentRoute path="/dashboard" isLoading={isLoading} setIsLoading={setIsLoading} type="agent" component={AgentDashboard} exact />
          <AgentRoute path="/new-listing" isLoading={isLoading} setIsLoading={setIsLoading} type="agent" component={NewListing} exact />
          <AgentRoute path="/agent-profile" isLoading={isLoading} setIsLoading={setIsLoading} type="agent" component={AgentProfile} exact />
          <AgentRoute path="/my-listings" isLoading={isLoading} setIsLoading={setIsLoading} type="agent" component={AgentsListings} exact />
          <AgentRoute path="/my-listings/:slug" isLoading={isLoading} setIsLoading={setIsLoading} type="agent" component={AgentListingDetail} />
          <AgentRoute path="/reviews" isLoading={isLoading} setIsLoading={setIsLoading} type="agent" component={Reviews} exact />
          <AgentRoute path="/support" isLoading={isLoading} setIsLoading={setIsLoading} type="agent" component={Support} exact />
          <AgentRoute path="/agent-wishlists" isLoading={isLoading} setIsLoading={setIsLoading} type="agent" component={AgentWishlist} exact />

          <Route path="/server-error" render={(props) => (<ServerError {...props} setIsLoading={setIsLoading}  />)} exact/>

          <UserRoute path="/:id" isLoading={isLoading} setIsLoading={setIsLoading} user type="user" component={AgentDetails} exact/>
          <Route render={(props) => (<NotFound {...props} setIsLoading={setIsLoading}  />)} exact/>
      </Switch>
    </div>
  );
}

export default App;