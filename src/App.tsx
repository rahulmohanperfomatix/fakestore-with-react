import React from "react"; 
import { BrowserRouter as Router } from "react-router-dom";

import { useSelector } from "react-redux";

import MainRoutes from "./routes";
import { RootState } from "./store";
import Loader from "./components/Loader";

function App() {
  const isLoading = useSelector((state: RootState) => state.ui.isLoading);
  return (
    <Router>
      {isLoading && <Loader />}
      <MainRoutes />
    </Router>
  );
}

export default App;
