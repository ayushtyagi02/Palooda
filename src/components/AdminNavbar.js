// import {NavLink } from "react-router-dom";
// import React from "react";
import "./AdminNavbar.css"
import { Routes, Route, NavLink } from "react-router-dom"
import { PiGitBranchBold } from "react-icons/pi";
import logo from "../assets/logo.webp"
// import Branch from "../assets.branch"

function AdminNavbar() {
    return (
        <div className="flex flex-col bg-yellow-400 gap-y-2 items-center  h-full shrink-0 fixed">
           
           <div className="h-[4.01rem] border-b w-[240px] flex justify-center items-center border-[grey]">

            
                <img className=" " src={logo} width={150} />
           
            
           </div>

            <div className="">
                <ul className="flex flex-col text-base font-base">
                    <li className="">


                        <NavLink   className="btn-control " to="/branch"><PiGitBranchBold className="mt-1" /><p>Branches</p></NavLink>

                    </li>
                    <li className=" "  >

                        <NavLink className="btn-control " to="/branch/zones"><PiGitBranchBold className="mt-1" /><p>Zones</p></NavLink>
                    </li>
                    <li className="" >

                        <NavLink className="btn-control " to="/branch/zones/locations"><PiGitBranchBold className="mt-1" /><p>Locations</p></NavLink>
                    </li>
                    <li className="">

                        <NavLink className="btn-control " to="/employees"><PiGitBranchBold className="mt-1" /><p>Employees</p></NavLink>
                    </li>
                    <li className="">

                        <NavLink className="btn-control " to="/vehicles"><PiGitBranchBold className="mt-1" /><p>Vehicles</p></NavLink>
                    </li>
                    <li className="">

                        <NavLink className="btn-control " to="/deliveryteams"><PiGitBranchBold className="mt-1" /><p>Delivery Teams</p></NavLink>
                    </li>
                    <li className="">

                        <NavLink className="btn-control " to="/deliveryreport"><PiGitBranchBold className="mt-1" /><p>Delivery Report</p></NavLink>
                    </li>

                </ul>
            </div>




        </div>


    );
}

export default AdminNavbar;



// // import {NavLink } from "react-router-dom";
// // import React from "react";
// import "./AdminNavbar.css"
// import { Routes, Route, NavLink } from "react-router-dom"
// import { PiGitBranchBold } from "react-icons/pi";
// // import Branch from "../assets.branch"
// import logo from '../assets/logo.webp';

// function AdminNavbar() {
//     return (
//         <div className="flex flex-col w-full bg-yellow-400 gap-y-2  items-center h-screen">
//             <div className="">
//                 <img src={logo} width={150} />
//             </div>
//             <div className="w-full border-t-[1px] border-slate-500"></div>

//             <div className="w-full ">
//                 <ul className="flex flex-col text-xl font-base">
//                     <li className="">


//                         <NavLink   className="btn-control " to="/branch"><PiGitBranchBold className="mt-1" /><p>Branches</p></NavLink>

//                     </li>
//                     <li className=" "  >

//                         <NavLink className="btn-control " to="/branch/zones"><PiGitBranchBold className="mt-1" /><p>Zones</p></NavLink>
//                     </li>
//                     <li className="" >

//                         <NavLink className="btn-control " to="/branch/zones/locations"><PiGitBranchBold className="mt-1" /><p>Locations</p></NavLink>
//                     </li>
//                     <li className="">

//                         <NavLink className="btn-control " to="/employees"><PiGitBranchBold className="mt-1" /><p>Employees</p></NavLink>
//                     </li>
//                     <li className="">

//                         <NavLink className="btn-control " to="/vehicles"><PiGitBranchBold className="mt-1" /><p>Vehicles</p></NavLink>
//                     </li>
//                     <li className="">

//                         <NavLink className="btn-control " to="/deliveryteams"><PiGitBranchBold className="mt-1" /><p>Delivery Teams</p></NavLink>
//                     </li>
//                     <li className="">

//                         <NavLink className="btn-control " to="/deliveryreport"><PiGitBranchBold className="mt-1" /><p>Delivery Report</p></NavLink>
//                     </li>

//                 </ul>
//             </div>




//         </div>


//     );
// }

// export default AdminNavbar;
