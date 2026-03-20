import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "./DashboardLayout";
import { Overview } from "./modules/Overview";
import { UserManagement } from "./modules/UserManagement";
import { Analytics } from "./modules/Analytics";
import { Settings } from "./modules/Settings";
import { Notifications } from "./modules/Notifications";
import { FormBuilder } from "./modules/FormBuilder";
import { DataTables } from "./modules/DataTables";
import { StyleGuide } from "./modules/StyleGuide";
import { Calendar } from "./modules/Calendar";
import { FileManagement } from "./modules/FileManagement";
import { RolesPermissions } from "./modules/RolesPermissions";
import { Projects } from "./modules/Projects";

export const Dashboard = () => {
  return (
    <HashRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/roles" element={<RolesPermissions />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/files" element={<FileManagement />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/tables" element={<DataTables />} />
          <Route path="/forms" element={<FormBuilder />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/style-guide" element={<StyleGuide />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </DashboardLayout>
    </HashRouter>
  );
};
