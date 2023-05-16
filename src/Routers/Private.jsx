import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import {useLocation} from 'react-router-dom'

const Private = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();
   // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.

  if (loading) {
    return <div>Loading...</div>;
  } else if (user) {
    return children;
  } else {
    return (
      <Navigate
        to="/login"
        state={{
            from: location,
        }}
        replace
      />
    );
  }
};

export default Private;
