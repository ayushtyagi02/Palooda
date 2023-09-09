import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Locations.js"
import AdminNavbar from "./components/AdminNavbar.js";
import Employees from "./pages/Employees";
import { useEffect, useState } from "react";
import Login from "./pages/Branch";
import Signup from "./pages/Zones";
import MainHeader from "./components/MainHeader";
import ViewProfile from "./components/ViewProfile";
import {VscBellDot} from "react-icons/vsc";
import Branch from "./pages/Branch";
import Zones from "./pages/Zones";
import Locations from "./pages/Locations.js";
import { DeliveryTeams } from "./pages/DeliveryTeams";
import { Deliveryreport } from "./pages/Deliveryreport";
import { Vehicles } from "./pages/Vehicles";

function App() {
 

  return (
    <div className="flex w-screen " >
      <div className="w-[260px]">
        <AdminNavbar/>
      </div>
      <div className="flex flex-col w-11/12">
        <div className="w-full flex place-content-end gap-x-6 p-4">
        <div className="text-2xl m-1 fixed z-10 "><VscBellDot/></div>
       <ViewProfile />
        </div>
        <div className="w-full fixed top-[68px] mt-[7px] border-t-[1px] border-slate-500"></div>
        <div>
          <Routes >
            <Route path="/" element={<Branch />}></Route>

            <Route path="/branch" element={<Branch/>}></Route>
            <Route path="/branch/zones" element={<Zones/>}> </Route>
            <Route path="/branch/zones/locations" element={<Locations/>} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/deliveryteams" element={<DeliveryTeams />} />
            <Route path="/deliveryreport" element={<Deliveryreport />} />
            
          </Routes>
        </div>

      </div>
    </div>



  )
}

export default App;
