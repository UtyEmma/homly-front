import Preloader from "components/preloader/preloader";
import React, { useEffect } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";

function AgentRoute({user, token, type, isLoading, setIsLoading, component: Component, ...props }) {
  const history = useHistory()

  useEffect(() => {
    if(user && !user.isVerified && window.location.href !== '/verify'){
      return history.push('/verify')
    }else if(user && !user.username && window.location.href !== '/onboarding'){
      return history.push('/onboarding')
    }
  })

  return (
    <Route
      {...props}
      render={(props) =>
        { return !!user && type === 'agent' 
          
          ? 

          <Component {...props} token={token} isLoading={isLoading} setIsLoading={setIsLoading} status={type} agent={user} /> 
          
          : 
          
          <Redirect to="/agent-login" />}
      }
    />
  );
}

export default AgentRoute;
