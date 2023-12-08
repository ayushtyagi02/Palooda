import React, { useEffect, useState } from 'react';

export const DeliveryTeams = () => {
  const initialApiUrl = 'http://164.52.215.173:6002/api/employees/role/supervisor';
  const [supervisor, setsupervisor] = useState([{ employeeId: 'initialValue' }]);
  const [selectedSup, setselectedSup] = useState(supervisor[0].employeeId);
  const [teamdata, setteamdata] = useState([]);

  async function fetchDataFromApi(apiUrl,tag) {
    console.log('in fetching');
    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch data from the API. Status code: ${response.status}`);
      }

      const data = await response.json();
      console.log(data.payload.employees);

      // Update the state with the fetched data
      tag?setteamdata(data.payload.deliveryTeams): setsupervisor(data.payload.employees);
    } catch (error) {
      console.error(`An error occurred: ${error}`);
    }
  }
  console.log(teamdata)
  const [value, setValue] = useState("");
  function changeHandler(e) {
    setselectedSup(e.target.value);
    // Call fetchDataFromApi with the updated apiUrl
    const tag=true
    fetchDataFromApi(`http://164.52.215.173:6002/api/deliveryteams/supervisor/${e.target.value}`,tag);
  }
  const [tableFilter, setTableFilter] = useState([]);

  useEffect(() => {
    fetchDataFromApi(initialApiUrl);
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const filterData = (e) => {
    if (e.target.value !== "") {
      setValue(e.target.value);
      const filterTable = teamdata.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      setTableFilter([...filterTable]);
    } else {
      setValue(e.target.value);
      setteamdata([...teamdata]);
    }
  };
  return (
    <div className='flex flex-col relative h-screen w-[100%] mx-2  mt-[5rem]'>
      <div className='w-[50%] my-2 flex items-baseline'>
        <label className='font-semibold' >Select a Supervisor</label>
        <select className='cursor-pointer p-2 mx-2 w-3/12 opacity-60 border' value={selectedSup} onChange={changeHandler}>
          {supervisor.map((option, index) => (
            <option className='cursor-pointer p-5' key={index} value={option.employeeId}>
             <p className='cursor-pointer px-4 py-2 text-sm hover:bg-gray-100'>{option.employeeId} {option.name}</p> 
            </option>
          ))}
        </select>
      </div>
      <p className="p-2 text-lg">Home /<span className="font-bold p-2">Employees</span></p>


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
        <button type="button" className="border-2 bg-yellow-400 font-semibold px-[80px] py-2">
          Add Employees
        </button>
      </div>
  <div className="mt-[120px]">
  
  <table className="table">
  <thead>
    <tr className="">
     
      <th scope="col">Zone</th>
      <th scope="col">Vehicle No.</th>
      <th scope="col">Driver</th>
      <th scope="col">Delivery Boy</th>
      <th scope="col">Delivery Boy Contact</th>
      <th scope="col">Delivery Boy Email</th>
      <th scope="col">Actions</th>

    </tr>
  </thead>
  <tbody>
    {value.length > 0 ? (
      tableFilter.map((data, index) => {
        return (
          <tr key={data.emlpoyeeId}>
            <td scope="row">{data.zoneName}</td>
            <td scope="row">{data.vehicleNumber}</td>
            <td scope="row">{data.driverName}</td>
            <td scope="row">{data.deliveryBoyName}</td>
            <td scope="row">{data.deliveryBoyContact}</td>
            <td scope="row">{data.deliveryBoyEmail}</td>
            <td scope="row">
            <div className="flex gap-5">
              <button > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
</svg>
</button>
           <button ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</button>
            </div>
            </td>
          </tr>
        );
      })
    ) : (
      
      teamdata.map((data, index) => {
        return (
          <tr key={data.id}>
            <td scope="row">{data.zoneName}</td>
            <td scope="row">{data.vehicleNumber}</td>
            <td scope="row">{data.driverName}</td>
            
            <td scope="row">{data.deliveryBoyName}</td>
            <td scope="row">{data.deliveryBoyContact}</td>
            <td scope="row">{data.deliveryBoyEmail}</td>
            <td>
            <div className="flex gap-5">
              <button > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
</svg>
</button>
           <button ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
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
  </table>
    </div>
 </div>
 </div>
  )}