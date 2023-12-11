// DashboardRoutes.tsx
import React, { lazy } from "react";
import { Route } from "react-router-dom";
import AuthRequiredRoute from "./authRequiredRoute";

const DashboardPage = lazy(() => import("@src/pages/Dashboard"));

const DashboardRoutes = () => {
  return (
    <>
      <Route
        key="dashboard"
        path="/dashboard/*"
        element={
          <AuthRequiredRoute>
            <DashboardPage />
          </AuthRequiredRoute>
        }
      />
    </>
  );
};

export default DashboardRoutes;
