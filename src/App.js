import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import Home from "./Home/Home";
import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";
import NavbarLayout from "./Navigation/NavbarLayout";
import Dashboard from "./Landlord/Screens/Dashboard/Dashboard";
import Properties from "./Landlord/Screens/Properties/Properties";
import PropertyDetails from "./Landlord/Screens/Properties/PropertyDetails";
import AddTenant from "./Landlord/Screens/Properties/AddTenant";
import NewTenants from "./Landlord/Screens/Properties/NewTenants";
import Settings from "./Landlord/Screens/Settings/Settings";
import Finances from "./Landlord/Screens/Finances/Finances";
import Reports from "./Landlord/Screens/Reports/Reports";
import Notifications from "./Landlord/Screens/Notifications/Notifications";
import Maintenance from "./Landlord/Screens/Maintenance/Maintenance";
import Document from "./Landlord/Screens/Documents/Document";
import Applicants from "./Landlord/Screens/Applicants/Applicants";
import AddProperty from "./Landlord/Screens/Properties/AddProperty";
import AddProp from "./Landlord/Screens/Properties/AddProp";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
          <Route element={<NavbarLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/addNew" element={<AddProp />} />
            <Route path="/properties/id" element={<PropertyDetails />} />
            <Route path="/properties/id/add" element={<AddTenant />} />
            <Route path="/properties/id/add/1" element={<NewTenants />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/finances" element={<Finances />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/applicants" element={<Applicants />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/cloud-documents" element={<Document />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
