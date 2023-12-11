import React, { Suspense } from "react";
import {  Routes } from "react-router-dom";

import AuthRoutes from "./authRoutes";
import DashboardRoutes from "./dashboardRoutes";

const MainRoutes: React.FC = () => {
  return (
    <Suspense>
      <Routes>
        { AuthRoutes() }
        { DashboardRoutes() }
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;



