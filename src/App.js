import { Route, Routes } from "react-router-dom";
import "./App.css";
// import React from "react";
import Home from "./pages/Locations.js"
import AdminNavbar from "./components/AdminNavbar.js";
import Employees from "./pages/Employees";
import { useEffect, useState } from "react";

import {VscBellDot} from "react-icons/vsc";
import Branch from "./pages/Branch";
import Zones from "./pages/Zones";
import Locations from "./pages/Locations.js";
import { DeliveryTeams } from  "./pages/DeliveryTeams";
import { Deliveryreport } from "./pages/Deliveryreport";
import { Vehicles } from "./pages/Vehicles";
import VehicleUpdate from "./components/VehicleUpdate";
import ViewProfile from "./components/ViewProfile";
import {EmployeeDataProvider} from "./components/EmployeeDataContext";
import toast from "react-hot-toast";
function App() {

  const [update,setUpdate] = useState(false);
 
  function changeUpdate (){
    setUpdate(true);
    // console.log(update);
  }
  const [EmployeeProfiles, setEmployeeProfiles] = useState()
  function ChangeUpdate (){
    setUpdate(false);
   
  }
  async function fetchDataFromApi(apiUrl) {
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data from the API. Status code: ${response.status}`);
      }
  
      const data = await response.json();
    
      return data.payload;
    } catch (error) {
      console.error(`An error occurred: ${error}`);
    }
  }
// console.log(EmployeeProfiles);
  return (
        <div className="flex w-screen  h-screen">

            
<div>{
          update &&
        <div className="h-screen w-full absolute  flex justify-center items-center z-10" >
      
    
      <VehicleUpdate changeUpdate={ChangeUpdate} />
        </div>
    }
</div>
            <div className="h-screen flex bg-red-300 min-w-[240px]">
              <AdminNavbar  />
            </div>

            <div className="h-screen  grow overflow-y-scroll ">


            <div className="flex h-[4rem] border-2 border-b bg-white justify-end absolute z-30 w-10/12 ">
                 
                 <div className="flex m-2 right-2 bottom-[]  ">
                 <ViewProfile/>
                  <VscBellDot  className=" text-3xl "/>
                  
                  </div>
                 
            </div>  

            <div className="">

         
           <EmployeeDataProvider>
           <Routes className="">
             <Route path="/" element={<Branch />}></Route>

             <Route path="/branch" element={<Branch EmployeeProfiles={EmployeeProfiles}/>}></Route>
             <Route path="/branch/zones" element={<Zones/>}> </Route>
             <Route path="/branch/zones/locations" element={<Locations/>} />
             <Route path="/employees" element={<Employees setEmployeeProfiles={setEmployeeProfiles}/>} />
             <Route path="/vehicles" element={<Vehicles />} />
             <Route path="/deliveryteams" element={<DeliveryTeams fetchDataFromApi={fetchDataFromApi}/>} />
           
               <Route path="/deliveryreport" element={<Deliveryreport changeUpdate={changeUpdate} />} />
            
           </Routes>
          {/* <Route path="/employees" element={<Employees />} /> */}
        </EmployeeDataProvider> 
            </div>

            </div>


        </div>
  )
}

export default App;
