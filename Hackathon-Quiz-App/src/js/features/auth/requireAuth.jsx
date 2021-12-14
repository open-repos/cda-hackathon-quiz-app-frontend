import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { getLocalStorageItem } from "../../utils/localStorage";

export const RequireAuth = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  let location = useLocation();

  if (!auth.isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    console.log(auth,getLocalStorageItem("nickname"))
    return <Navigate to="/home" state={{ from: location }} />;
  }

  return children;
};
