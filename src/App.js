import React, { lazy, Suspense, useEffect, useState } from 'react';
import {  Switch, Route } from 'react-router-dom';


import Preloader from './components/preloader/preloader';
import { GoogleOneTapAuth } from './components/auth/social';
import { useQuery } from './libraries/http/query';
import { useDispatch, useSelector } from 'react-redux';
import { VerifyAdmin } from './providers/redux/_actions/admin-actions';
import { AdminModeBadge } from './libraries/admin/admin-mode';
import toast, { ToastBar, Toaster } from 'react-hot-toast';


// Front Pages
// import Home from './views/home';
// import UserRoute from 'providers/guards/user-guard';

const About = lazy(() => import('./views/about'));
const Home = lazy(() => import('./views/home'));
const NotFound = lazy(() => import('./views/not-found'));

// Tenant Pages
const Listing = lazy(() => import('./views/tenants/listings/listings'));
const ListingDetails = lazy(() => import('./views/tenants/listings/listing-details'));
const Agents = lazy(() => import('./views/tenants/agents/agents'));
const AgentDetails = lazy(() => import('./views/tenants/agents/agent-details'));
const Profile = lazy(() => import('views/tenants/profile/profile'));

// Agent Imports
const AgentDashboard = lazy(() => import('./views/agent/dashboard'));
const NewListing = lazy(() => import('./views/agent/listings/add-listing'));
const AgentsListings = lazy(() => import('./views/agent/listings/agents-listings'));
const AgentProfile = lazy(() => import('./views/agent/profile'));
const PasswordRecovery = lazy(() => import('./views/onboarding/auth/password-recovery'));
const Wishlist = lazy(() => import('./views/tenants/wishlist/wishlist'));
const Search = lazy(() => import('./views/search'));
const Reviews = lazy(() => import('./views/agent/reviews'));
const VerifyEmail = lazy(() => import('./views/onboarding/verify-email'));
const Support = lazy(() => import('./views/agent/support/support'));
const Favourites = lazy(() => import('./views/tenants/favourites/favourites'));
const AgentWishlist = lazy(() => import('./views/agent/wishlist/agent-wishlist'));
const ResetPassword = lazy(() => import('views/onboarding/auth/reset-password'));
const ServerError = lazy(() => import('views/onboarding/sever-error'));
const EmailVerified = lazy(() => import('views/onboarding/email-verified'));
const EmailUpdateVerification = lazy(() => import('views/onboarding/email-update-verification'));

const Chat = lazy(() => import('views/agent/support/chat'));;
const AgentActivity = lazy(() => import('views/agent/activity/activity'));
const UpdateUsername = lazy(() => import('views/onboarding/update-username'));
const UserLogin = lazy(() => import('views/onboarding/auth/login'));
const UserSignup = lazy(() => import('views/onboarding/auth/signup'));
const AgentListingDetail = lazy(() => import('./views/agent/listings/agent-listing-details'));
// Route Guards
const AuthUserGuard = lazy(() => import('providers/guards/auth-user-guard'));
const AgentRoute = lazy(() => import('./providers/guards/agent-guard'));
const TenantRoute = lazy(() => import('./providers/guards/tenant-guard'));
const UserRoute = lazy(() => import('./providers/guards/user-guard'));

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
      
      {

        !user

        &&

        <GoogleOneTapAuth setIsLoading={setIsLoading} />

      }

      <Suspense fallback={<Preloader loading={true} />} >
        <Switch>                  
          {/* Common Routes */}
          <Route path="/recover-password" render={(props) => (<PasswordRecovery {...props} user={user} isLoading={isLoading} setIsLoading={setIsLoading} />)} exact/>
          <Route path="/reset-password" render={(props) => (<ResetPassword {...props} user={user} isLoading={isLoading} setIsLoading={setIsLoading} />)} exact/>

          <Route path="/login" render={(props) => (<UserLogin {...props} isLoading={isLoading} user={user} setIsLoading={setIsLoading} />)} exact/>
          <Route path="/signup" render={(props) => (<UserSignup user={user} {...props} setIsLoading={setIsLoading} />)} exact/>
          <Route path="/email/verify/:code" render={(props) => (<EmailVerified {...props} user={user} isLoading={isLoading} setIsLoading={setIsLoading} />)} exact/>
          
          {/* User Routes */}
          <UserRoute path="/" type={type} isLoading={isLoading} token={token} setIsLoading={setIsLoading} user={user} component={Home} exact/>
          <UserRoute path="/about" type={type} isLoading={isLoading} token={token} setIsLoading={setIsLoading} user={user} component={About} exact />
          <UserRoute path="/search" type={type} isLoading={isLoading} token={token} setIsLoading={setIsLoading} user={user} component={Search} exact/>
          <UserRoute path="/listings" type={type} isLoading={isLoading} token={token} setIsLoading={setIsLoading} user={user} component={Listing} exact/>
          <UserRoute path="/agents" type={type} isLoading={isLoading} token={token} setIsLoading={setIsLoading} user={user} component={Agents} exact/>
          
          <AuthUserGuard path="/email/verify" type={type} isLoading={isLoading} token={token} setIsLoading={setIsLoading} user={user} component={EmailUpdateVerification} exact />
          <AuthUserGuard path="/onboarding" isLoading={isLoading} setIsLoading={setIsLoading} token={token} type={type} user={user} component={UpdateUsername} exact />
          <AuthUserGuard path="/verify" type={type} isLoading={isLoading} token={token} setIsLoading={setIsLoading} user={user} component={VerifyEmail} exact />
          
          {/* Tenant Routes */}
          <TenantRoute path="/profile" isLoading={isLoading} token={token} setIsLoading={setIsLoading} user={user} type={type} component={Profile} exact/>
          <TenantRoute path="/wishlist" isLoading={isLoading} token={token} setIsLoading={setIsLoading} user={user} type={type} component={Wishlist} exact/>
          <TenantRoute path="/favourites" isLoading={isLoading} token={token} setIsLoading={setIsLoading} user={user} type={type} component={Favourites} exact/>


          <AgentRoute path="/dashboard" isLoading={isLoading} setIsLoading={setIsLoading} token={token} type={type} user={user} component={AgentDashboard} exact />
          <AgentRoute path="/new-listing" isLoading={isLoading} setIsLoading={setIsLoading} token={token} type={type} user={user} component={NewListing} exact />
          <AgentRoute path="/agent-profile" isLoading={isLoading} setIsLoading={setIsLoading} token={token} type={type} user={user} component={AgentProfile} exact />
          <AgentRoute path="/my-listings" isLoading={isLoading} setIsLoading={setIsLoading} token={token} type={type} user={user} component={AgentsListings} exact />
          <AgentRoute path="/my-listings/:slug" isLoading={isLoading} setIsLoading={setIsLoading} type={type} token={token} user={user} component={AgentListingDetail} />
          <AgentRoute path="/reviews" isLoading={isLoading} setIsLoading={setIsLoading} type={type} token={token} user={user} component={Reviews} exact />
          <AgentRoute path="/support" isLoading={isLoading} setIsLoading={setIsLoading} type={type} token={token} user={user} component={Support} exact />
          <AgentRoute path="/support/:id" isLoading={isLoading} setIsLoading={setIsLoading} type={type} token={token} user={user} component={Chat} exact />
          <AgentRoute path="/agent-wishlists" isLoading={isLoading} setIsLoading={setIsLoading} type={type} token={token} user={user} component={AgentWishlist} exact />
          <AgentRoute path="/activity" isLoading={isLoading} setIsLoading={setIsLoading} type={type} token={token} user={user} component={AgentActivity} exact />

          <UserRoute path="/500"  setIsLoading={setIsLoading}  token={token} user={user} component={ServerError} exact/>

          <UserRoute path="/:username/:slug" type={type} isLoading={isLoading} setIsLoading={setIsLoading} user={user} token={token} component={ListingDetails} exact/>
          <UserRoute path="/:id" isLoading={isLoading} setIsLoading={setIsLoading} user={user} type={type} token={token} component={AgentDetails} exact/>
          <Route render={(props) => (<NotFound {...props} setIsLoading={setIsLoading}  user={user} />)} exact/>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;