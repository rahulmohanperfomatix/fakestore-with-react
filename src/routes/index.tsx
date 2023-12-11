import React from "react";
import {  Routes } from "react-router-dom";

import AuthRoutes from "./authRoutes";
import DashboardRoutes from "./dashboardRoutes";

const MainRoutes: React.FC = () => {
	return (
		<Routes>
			{ AuthRoutes() }
			{ DashboardRoutes() }
		</Routes>
	);
};

export default MainRoutes;



