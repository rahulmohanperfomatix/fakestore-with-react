import React from "react";
import { Route } from "react-router-dom";

import DashboardPage from "@src/pages/Dashboard";
import AuthRequiredRoute from "./authRequiredRoute";


const DashboardRoutes = () => {
	return <Route key="home" path="/dashboard" element={<AuthRequiredRoute><DashboardPage /></AuthRequiredRoute>} />;
};

export default DashboardRoutes;