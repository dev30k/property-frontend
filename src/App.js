import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Authentication/Login";
import Home from "./Home/Home";
import Signup from "./Authentication/Signup";
import NavbarLayout from "./Navigation/NavbarLayout";
import Properties from "./Landlord/Screens/Properties/Properties";
import Dashboard from "./Landlord/Screens/Dashboard/Dashboard";
import PropertyDetails from "./Landlord/Screens/Properties/PropertyDetails";
import AddTenant from "./Landlord/Screens/Properties/AddTenant";

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
          <Route path="/properties/id" element={<PropertyDetails />} />
          <Route path="/properties/id/add" element={<AddTenant />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
