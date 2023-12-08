import React, { useEffect, useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import toast from 'react-hot-toast';

export const AddEmployeeForm = ({ EmployeeDatasource, userData, setUserData, setUpdateBranch,tag , setedit,updatedData,setupdatedData}) => {

  const changeHandler = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const editchangeHandler = (e) => {
    setupdatedData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
    // Update idValue whenever userData.id changes
  
  async function formHandler(event) {
    event.preventDefault();
    setUpdateBranch(false);
    const apiUrl="http://164.52.215.173:6002/api/employees";
  
    try {
      const response = await  fetch(apiUrl , {
        method:'POST',
        body:JSON.stringify(userData),
        headers:{
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
      const data = await response.json();
      if(data.payload.success){
        toast("Employee created successfully");
      }
      if (!response.ok) {
        throw new Error(`Failed to fetch data from the API. Status code: ${response.status}`);
      }
  
      
      if(data.payload.error){
        toast("employee already present");
      }
      setUserData({ employeeId: "",role:"", name: "",contact:"", email: "" })
    } catch (error) {
      console.error(`An error occurred: ${error}`);
    }
  
  };
  async function editHandler(event) {
    event.preventDefault();
    setedit(false);
    setUpdateBranch(false)
    const apiUrl="http://164.52.215.173:6002/api/employees";
   console.log(userData)
    try {
      const res = await  fetch(apiUrl , {
        method:'PUT',
        body:JSON.stringify(updatedData),
        headers:{
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
  
      if (!res.ok) {
        throw new Error(`Failed to fetch data from the API. Status code: ${res.status}`);
      }
      const data = await res.json();
   
      if(data.payload.success){
        toast("Employee Edited successfully");
      }
      if(data.payload.error){
        alert("employee already present");
      }
      setUserData({ employeeId: "",role:"", name: "",contact:"", email: "" })
    } catch (error) {
      console.error(`An error occurred: ${error}`);
    }
  };



  return (
    <div className=" overflow-hidden w-4/12 ">
      <div className="flex fixed w-[25rem] h-[28rem] flex-col rounded-md border-2 border-black bg-white ">
      { !tag ? ( <div><RxCross1 className="cursor-pointer ml-auto font-semibold text-xl mt-3 mr-3 " onClick={()=>setUpdateBranch(false)} />
       <form  className="top-[0.5rem] bg-white flex flex-col gap-3 ml-5 p-3 " onSubmit={formHandler}>
    <label className='font-semibold'>
      ID
      <input className='ml-2 border-1 p-2 font-normal opacity-90 rounded-md' type="text" placeholder="id" value={userData.employeeId} name="employeeId" onChange={changeHandler} required/>
    </label>
    <label className='font-semibold'>
      Role
      <select className='border ml-2 p-2 font-normal opacity-90 rounded-md' value={userData.role} name='role' onChange={changeHandler}>
        <option>admin</option>
        <option>manager</option>
        <option>supervisor</option>
        <option>deliveryboy</option>
        <option>driver</option>
      </select>
    </label>
    <label className='font-semibold'>
      Name
      <input className='ml-2 border-1 p-2 font-normal opacity-90 rounded-md' required type="text" placeholder="name" value={userData.name} name="name" onChange={changeHandler} />
    </label>
    <label className='font-semibold'>
      Contact
      <input className='ml-2 border-1 p-2 font-normal opacity-90 rounded-md' required type="text" placeholder="contact" value={userData.contact} name="contact" onChange={changeHandler} />
    </label>
    <label className='font-semibold'>
      Email
      <input className='ml-2 border-1 p-2 font-normal opacity-90 rounded-md' required type="email" placeholder="email" value={userData.email} name="email" onChange={changeHandler} />
    </label>
    <button className="bg-yellow-400 font-semibold w-6/12 mx-auto mt-3 rounded-md p-2" >Add Employee</button>
  </form> </div> )
  
       : (<div><RxCross1 className="cursor-pointer ml-auto font-semibold text-xl mt-3 mr-3" onClick={()=>setedit(false)} />
       <form  className=" top-[0.5rem] bg-white flex flex-col gap-3 ml-5 p-3" onSubmit={editHandler}>
    <label className='font-semibold'>
      ID
      <input className='ml-2 border-1 p-2 font-normal opacity-90 rounded-md' type="text" placeholder="id" value={updatedData.employeeId} name="employeeId" onChange={editchangeHandler} required/>
    </label>
    <label className='font-semibold'>
      Role
      <select className='border ml-2 p-2 font-normal opacity-90 rounded-md' value={updatedData.role} name='role' onChange={editchangeHandler}>
        <option>admin</option>
        <option>manager</option>
        <option>supervisor</option>
        <option>deliveryboy</option>
        <option>driver</option>
      </select>
    </label>
    <label className=' font-semibold'>
      Name
      <input className='ml-2 border p-2 font-normal opacity-90 rounded-md' required type="text" placeholder="name" value={updatedData.name} name="name" onChange={editchangeHandler} />
    </label>
    <label className='font-semibold'>
      Contact
      <input className='ml-2 border p-2 font-normal opacity-90 rounded-md' required type="text" placeholder="contact" value={updatedData.contact} name="contact" onChange={editchangeHandler} />
    </label>
    <label className='font-semibold'>
      Email
      <input className='ml-2 border p-2 font-normal opacity-90 rounded-md' required type="email" placeholder="email" value={updatedData.email} name="email" onChange={editchangeHandler} />
    </label>
    <button  className="bg-yellow-400 font-semibold w-6/12 mx-auto mt-3 rounded-md p-2" >Update</button>
  </form> </div> ) 
  }
   {/* }  */}
      </div>
    </div>
  );
};

