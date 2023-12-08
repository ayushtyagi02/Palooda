import React, { useState, useEffect } from "react";
// import { AddEmployeeForm } from "../components/AddEmployeeForm";
import { AddEmployeeForm } from "../components/AddEmployeeForm";
import { useEmployeeData } from "../components/EmployeeDataContext";
import { Areyousure } from "../components/Areyousure";
import toast, { Toaster } from 'react-hot-toast';
function Employees(props) {
  const setEmployeeProfiles= props.setEmployeeProfiles;
  const setisDeleted= props.setisDeleted;
  // const localStorageData = localStorage.getItem('EmployeeData');
  const { EmployeeDatasource, updateDataSource } = useEmployeeData();
  // const initialTableData = localStorageData
  //   ? JSON.parse(localStorageData)
  //   : [];
  


  const [value, setValue] = useState("");
  // const [EmployeeDatasource, updateDataSource] = useState(initialTableData);
  const [tableFilter, setTableFilter] = useState([]);
  const [userData, setUserData] = useState({ employeeId: "",role:"", name: "",contact:"", email: "" });

  const filterData = (e) => {
    if (e.target.value !== "") {
      setValue(e.target.value);
      const filterTable = EmployeeDatasource.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      setTableFilter([...filterTable]);
    } else {
      setValue(e.target.value);
      updateDataSource([...EmployeeDatasource]);
    }
  };
  // console.log(EmployeeDatasource)
const tag=1;
  const formHandler = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  async function deleteRow (employeeId,tag) {
    
    const apiUrl = `http://164.52.215.173:6002/api/employees/${employeeId}`;
 
    try {
      console.log(employeeId)
      const response = await fetch(apiUrl, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Failed to delete data from the API. Status code: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data.payload.message);
      setDelete(!Delete);
      
      // Check if the deletion was successful or if there was an error in the API response
      if (data.success) {
        toast("Successfully deleted");
      } else {
        alert("Failed to delete employee record");
      }
    } catch (error) {
      console.error(`An error occurred: ${error}`);
    }
   
  console.log('out')
  
  
  
  };

  // useEffect(() => {
  //   localStorage.setItem('EmployeeData', JSON.stringify(EmployeeDatasource));
  //   setEmployeeProfiles(EmployeeDatasource);
  // }, [EmployeeDatasource]);

  // console.log(EmployeeDatasource)

  const [AddEmployee, setUpdateBranch] = useState(false);
 const[updatedData,setupdatedData]=useState({ employeeId: "",role:"", name: "",contact:"", email: "" })
  const [edit,setedit]= useState(false);
    function UpdateBranchfn(data,tag) {
      console.log(tag)
      if(tag){
        setedit(!edit)
        console.log('data',data)

        setupdatedData(data)

        return;

      }
    setUpdateBranch(true);
    
  }
const [curDelId, setcurDelId] = useState('');
const [Delete,setDelete]=useState(false)
 function ifDelete(empID){
   setDelete(!Delete);
   setcurDelId(empID);

 }

  return (



Delete ? <Areyousure curDelId={curDelId} deleteRow={deleteRow} setDelete={setDelete}/> :
<div className=" flex flex-col relative h-screen w-[100%] mx-2  mt-[5rem]">
      
    <p className="p-2 text-lg">Home /<span className="font-bold p-2">Employees</span></p>
      <div>
        {AddEmployee && (
          <div className="w-full mt-[4rem] absolute flex justify-center items-center z-20">
            <AddEmployeeForm
              
              setUpdateBranch={setUpdateBranch}
              EmployeeDatasource={EmployeeDatasource}
              userData={userData}
              setUserData={setUserData}
              updateDataSource={updateDataSource}
            />
          </div>
        )}
        {
          edit && (
            <div className="w-full mt-[4rem] absolute flex justify-center items-center z-20">
            <AddEmployeeForm
            setupdatedData={setupdatedData}
            updatedData={updatedData}
              setedit={setedit}
              tag={tag}
              setUpdateBranch={setUpdateBranch}
              EmployeeDatasource={EmployeeDatasource}
              userData={userData}
              setUserData={setUserData}
              updateDataSource={updateDataSource}
            />
          </div>
          )
        }
      </div>

<div className="absolute z-10 top-11 w-full">
 
<div className="input-group w-full top-7 right-3 mb-3 flex justify-end">
        <input
          type="text"
          className="border-b-2 pl-2 mr-1 w-2/12"
          value={value}
          placeholder="Search"
          onChange={filterData}
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <button type="button" onClick={() => UpdateBranchfn()} className="border-2 bg-yellow-400 font-semibold px-[80px] py-2">
          Add Employees
        </button>
      </div>
  <div className="mt-[120px]">
  
  <table className="table">
  <thead>
    <tr className="">
     
      <th scope="col">ID</th>
      <th scope="col">Role</th>
      <th scope="col">Name</th>
      <th scope="col">Contact</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {value.length > 0 ? (
      tableFilter.map((data, index) => {
        return (
          <tr key={data.emlpoyeeId}>
            <td scope="row">{data.employeeId}</td>
            <td scope="row">{data.role}</td>
            
            <td scope="row">{data.name}</td>
            <td scope="row">{data.contact}</td>
            <td scope="row">{data.email}</td>
            <td scope="row">
            <div className="flex gap-5">
              <button > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
</svg>
</button>
           <button onClick={() => deleteRow(index)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</button>
            </div>
            </td>
          </tr>
        );
      })
    ) : (
      
      EmployeeDatasource.map((data, index) => {
        return (
          <tr key={data.id}>
            <td scope="row">{data.employeeId}</td>
            <td scope="row">{data.role}</td>
            
            <td scope="row">{data.name}</td>
            <td scope="row">{data.contact}</td>
            <td scope="row">{data.email}</td>
            <td>
            <div className="flex gap-5">
              <button onClick={()=>UpdateBranchfn(data,1)}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
</svg>
</button>
           <button onClick={() => ifDelete(data.employeeId)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</button>
            </div>
            </td>
          </tr>

        );
      })
    )}
  </tbody>
</table></div>
 </div>
      
</div>
);
}

export default Employees;












// // import { Outlet } from "react-router-dom";


// // function Zones({ setIsLoggedIn }) {
// //   return (
// //   <div className="">
// //     Signup</div>
// //   );
// // }

// // export default Zones;


// import { Outlet } from "react-router-dom";
// import { useEffect, useState } from "react";
// import "./Employees.css";
// import { AddEmployeeForm } from "../components/AddEmployeeForm";

// function Employees() {
//   const initialTableData = JSON.parse(localStorage.getItem('EmployeeData')) || [
//     { id: '1', name: 'Suresh', email: 'suresh@gmail.com' },
//     { id: '2', name: 'Mahesh', email: 'mahesh@gmail.com' },
//     { id: '3', name: 'Ankit', email: 'ankit@gmail.com' },
//     { id: '4', name: 'Prabhu', email: 'prabhu@gmail.com' },
//     { id: '5', name: 'Pratik', email: 'pratik@gmail.com' },
//     { id: '6', name: 'Ayush', email: 'ayush@gmail.com' },
//     { id: '7', name: 'Ujjwal', email: 'ujjwal@gmail.com' },
//   ];

//   const [value, setValue] = useState('');
//   const [EmployeeDatasource, updateDataSource] = useState(initialTableData);
//   const [tableFilter, setTableFilter] = useState([]);
//   const [userData, setUserData] = useState({ id: '', name: '', email: '' });
//   const [addBranch, setaddBranch]=useState(false);

//  function clickBranch() {
//   // console.log(value);
 
//     // console.log("in clickBranch");
//     setaddBranch(!addBranch);
//   }
// console.log(EmployeeDatasource,);
//   const filterData = (e) => {
//     if (e.target.value !== '') {
//       setValue(e.target.value);
//       const filterTable = EmployeeDatasource.filter(o =>
//         Object.keys(o).some(k => String(o[k]).toLowerCase().includes(e.target.value.toLowerCase()))
//       );
//       setTableFilter([...filterTable]);
//     } else {
//       setValue(e.target.value);
//       updateDataSource([...EmployeeDatasource]);
//     }
//   };


//   return (
//     <div className="mt-[100px] fixed bottom-[13rem] overflow-auto w-10/12">
//       <Outlet />
 
//       <div className="input-group w-full fixed top-[11rem] right-3 mb-3 flex justify-end">
//         <input
//           type="text"
//           className="border-b-2 pl-2 mr-1 w-2/12"
//           value={value}
//           placeholder="Search"
//           onChange={filterData}
//           aria-label="Username"
//           aria-describedby="basic-addon1"
//         />
//         <button type="button" onClick={()=>clickBranch()}  className="border-2 bg-yellow-400 font-semibold px-[80px] py-2">
//           Add Employees
//         </button>
//       </div>
 
//       { addBranch ? <AddEmployeeForm clickBranch={clickBranch} EmployeeDatasource={EmployeeDatasource} setUserData={setUserData} updateDataSource={updateDataSource} userData={userData}/> : <table className="table fixed top-[16rem]">
//         <thead>
//           <tr>
//             <th scope="col">#</th>
//             <th scope="col">Name</th>
//             <th scope="col">Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {value.length > 0 ? (
//             tableFilter.map((data) => {
//               return (
//                 <tr key={data.id}>
//                   <td scope="row">{data.id}</td>
//                   <td>{data.name}</td>
//                   <td>{data.email}</td>
//                 </tr>
//               );
//             })
//           ) : (
//             EmployeeDatasource.map((data) => {
//               return (
//                 <tr key={data.id}>
//                   <td scope="row">{data.id}</td>
//                   <td>{data.name}</td>
//                   <td>{data.email}</td>
//                 </tr>
//               );
//             })
//           )}
//         </tbody>
//       </table>}
//     </div>
//   );
// }

// export default Employees;