import React from "react";
import { useEffect } from "react";
import { useDispatch,useSelector} from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

//Services
import { login } from "./authSlice";
import { getLocalStorageItem } from "../../utils/localStorage";

export const RequireAuth = ({ children }) => {
  let location = useLocation();
  const dispatch = useDispatch()
  const currentPlayer = getLocalStorageItem("nickname");

  useEffect(() => {
    const currentPlayer = getLocalStorageItem("nickname");
    if (typeof(currentPlayer) === "string") {
      console.log("currentPlayer", currentPlayer);
      dispatch(login(currentPlayer));
    } else {
        console.log("currentPlayer (Not String)", currentPlayer);
    }
  }, []);

  const auth = useSelector((state) => state.auth);
  if (typeof(currentPlayer) !== "string") {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    console.log(auth,getLocalStorageItem("nickname"))
    return <Navigate to="/home" state={{ from: location }} />;
  }

  return children;
};
