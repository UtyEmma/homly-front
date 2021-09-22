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
import { EmailVerified } from 'views/onboarding/email-verified';
import toast, { ToastBar, Toaster } from 'react-hot-toast';
import { EmailUpdateVerification } from 'views/onboarding/email-update-verification';
import { Chat } from 'views/agent/support/chat';

function App() {

	const dispatch = useDispatch()
	const query = useQuery()

	const [isLoading, setIsLoading] = useState(true)

  const { type, user, token } = useSelector(state => state.user_data)
  const { adminMode } = useSelector(state => state.admin_mode)

	const auth = query.get("auth")
  const id = query.get("id")
  const {loading} = useSelector(state => state.user);

  useEffect(() => {
    auth && id && type !== 'admin' && dispatch(VerifyAdmin(id)) 
  }, [auth, dispatch, type, id])

  useEffect(() => {
    setIsLoading(loading)
  }, [loading])
  
  return (
    <div className="App">

      <AdminModeBadge type={type} adminMode={adminMode} />
      
      <Preloader loading={isLoading}/>

      <Toaster position='top-right'> 
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== 'loading' && (
                  <button className="btn p-0" onClick={() => toast.dismiss(t.id)}>
                    <i className="fa fa-times"></i>
                  </button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
      

      <GoogleOneTapAuth setIsLoading={setIsLoading} />


      <Switch>                  
        {/* Common Routes */}
        <Route path="/recover-password" render={(props) => (<PasswordRecovery {...props} user={user} isLoading={isLoading} setIsLoading={setIsLoading} />)} exact/>
        <Route path="/reset-password" render={(props) => (<ResetPassword {...props} user={user} isLoading={isLoading} setIsLoading={setIsLoading} />)} exact/>
        <Route path="/login" render={(props) => (<UserLogin {...props} isLoading={isLoading} user={user} setIsLoading={setIsLoading} />)} exact/>
        <Route path="/signup" isLoading={isLoading} setIsLoading={setIsLoading} render={(props) => (<UserSignup user={user} {...props} setIsLoading={setIsLoading} isLoading={setIsLoading} />)} exact/>

        <Route path="/email/verify/:code" render={(props) => (<EmailVerified {...props} user={user} isLoading={isLoading} setIsLoading={setIsLoading} />)} exact/>
        
        {/* User Routes */}
        <UserRoute path="/" type={type} isLoading={isLoading} token={token} setIsLoading={setIsLoading} user={user} component={Home} exact/>
        <UserRoute path="/about" type={type} isLoading={isLoading} token={token} setIsLoading={setIsLoading} user={user} component={About} exact />
        <UserRoute path="/verify" type={type} isLoading={isLoading} token={token} setIsLoading={setIsLoading} user={user} component={VerifyEmail} exact />
        <UserRoute path="/email/verify" type={type} isLoading={isLoading} token={token} setIsLoading={setIsLoading} user={user} component={EmailUpdateVerification} exact />
        <UserRoute path="/search" type={type} isLoading={isLoading} token={token} setIsLoading={setIsLoading} user={user} component={Search} exact/>
        <UserRoute path="/listings" type={type} isLoading={isLoading} token={token} setIsLoading={setIsLoading} user={user} component={Listing} exact/>
        <UserRoute path="/agents" type={type} isLoading={isLoading} token={token} setIsLoading={setIsLoading} user={user} component={Agents} exact/>
        
        {/* Tenant Routes */}
        <TenantRoute path="/profile" isLoading={isLoading} token={token} setIsLoading={setIsLoading} user={user} type={type} component={Profile} exact/>
        <TenantRoute path="/wishlist" isLoading={isLoading} token={token} setIsLoading={setIsLoading} user={user} type={type} component={Wishlist} exact/>
        <TenantRoute path="/wishlist/:slug" isLoading={isLoading} token={token} setIsLoading={setIsLoading} user={user} type={type} component={Wishlist} exact/>
        <TenantRoute path="/favourites" isLoading={isLoading} token={token} setIsLoading={setIsLoading} user={user} type={type} component={Favourites} exact/>


        {/* Agent Routes */}
        <Route path="/agent-login" render={(props) => (<AgentLogin {...props} setIsLoading={setIsLoading} user={user} isLoading={isLoading} type="agent" />)} exact/>
        <Route path="/agent-signup" render={(props) => (<AgentSignup {...props} setIsLoading={setIsLoading} user={user} isLoading={isLoading} type="agent" />)} exact/>
        <AgentRoute path="/dashboard" isLoading={isLoading} setIsLoading={setIsLoading} token={token} type={type} user={user} component={AgentDashboard} exact />
        <AgentRoute path="/new-listing" isLoading={isLoading} setIsLoading={setIsLoading} token={token} type={type} user={user} component={NewListing} exact />
        <AgentRoute path="/agent-profile" isLoading={isLoading} setIsLoading={setIsLoading} token={token} type={type} user={user} component={AgentProfile} exact />
        <AgentRoute path="/my-listings" isLoading={isLoading} setIsLoading={setIsLoading} token={token} type={type} user={user} component={AgentsListings} exact />
        <AgentRoute path="/my-listings/:slug" isLoading={isLoading} setIsLoading={setIsLoading} type={type} token={token} user={user} component={AgentListingDetail} />
        <AgentRoute path="/reviews" isLoading={isLoading} setIsLoading={setIsLoading} type={type} token={token} user={user} component={Reviews} exact />
        <AgentRoute path="/support" isLoading={isLoading} setIsLoading={setIsLoading} type={type} token={token} user={user} component={Support} exact />
        <AgentRoute path="/support/:id" isLoading={isLoading} setIsLoading={setIsLoading} type={type} token={token} user={user} component={Chat} exact />
        <AgentRoute path="/agent-wishlists" isLoading={isLoading} setIsLoading={setIsLoading} type={type} token={token} user={user} component={AgentWishlist} exact />

        <Route path="/server-error" render={(props) => (<ServerError {...props} setIsLoading={setIsLoading}  token={token} user={user} />)} exact/>

        <UserRoute path="/:username/:slug" type={type} isLoading={isLoading} setIsLoading={setIsLoading} user={user} token={token} component={ListingDetails} exact/>
        <UserRoute path="/:id" isLoading={isLoading} setIsLoading={setIsLoading} user={user} type={type} token={token} component={AgentDetails} exact/>
        <Route render={(props) => (<NotFound {...props} setIsLoading={setIsLoading}  user={user} />)} exact/>
      </Switch>
    </div>
  );
}

export default App;