import React, { useEffect } from "react"; 
import { BrowserRouter as Router } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import MainRoutes from "./routes";
import { AppDispatch, RootState } from "./store";
import Loader from "./components/Loader";
import { getItem } from "./utils/utils";
import { setLoggedIn } from "./modules/auth/authSlice";

function App() {
  const isLoading = useSelector((state: RootState) => state.ui.isLoading);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const authDetails = getItem("auth_details");
    const token = authDetails ?  JSON.parse(authDetails)?.token : null;
    dispatch(setLoggedIn(!!token));
  }, []);
  return (
    <Router>
      {isLoading && <Loader />}
      <MainRoutes />
    </Router>
  );
}

export default App;
