import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Authentication/Login";
import Home from "./Home/Home";
import Signup from "./Authentication/Signup";
import NavbarLayout from "./Navigation/NavbarLayout";
import Properties from "./Landlord/Screens/Properties/Properties";
import Dashboard from "./Landlord/Screens/Dashboard/Dashboard";

function App() {
  return (
      <Router>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
             <Route element={<NavbarLayout />}>
                 
                     <Route path="/dashboard"  element={<Dashboard />}/>
                     <Route path="/properties" element={<Properties />}/>
             </Route>
              
          </Routes>
      </Router>

  );
}

export default App;
