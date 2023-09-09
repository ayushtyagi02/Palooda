// import {NavLink } from "react-router-dom";
// import React from "react";
import "./AdminNavbar.css"
import { Routes, Route, NavLink } from "react-router-dom"
import { PiGitBranchBold } from "react-icons/pi";
// import Branch from "../assets.branch"

function AdminNavbar() {
    return (
        <div className="flex flex-col w-full bg-yellow-400 gap-y-2 py-3 items-center h-screen">
            <div className="">
                <img src="http://164.52.215.173:3000/_next/image?url=%2Fstatic%2Fimages%2Flogo.png&w=256&q=75" width={160} />
            </div>
            <div className="w-full border-t-[1px] border-slate-500"></div>

            <div className="w-full ">
                <ul className="flex flex-col text-xl font-base">
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

export default AdminNavbar;
