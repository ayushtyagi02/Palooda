import React, { useState } from 'react'
import { useEffect } from 'react';
export const Vehicles = () => {
  const [VehicleData, setVehicleData] = useState({
  vehicleNumber:"1",
  registrationNumber: "2",
  modelNumber: "23",
  vehicleType: "ar",
  purchaseDate: "23",
  lastServiceDate: "3"})
  async function fetchDataFromApi(apiUrl) {
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data from the API. Status code: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data.payload.vehicles)
      // setVehicleData(data.payload.vehicles);
    
    } catch (error) {
      console.error(`An error occurred: ${error}`);
    }
  }
  const apiUrl = "http://164.52.215.173:6002/api/vehicles";

  useEffect(() => {
    fetchDataFromApi(apiUrl);
  },[VehicleData]);
  return (
   <div className='flex  flex-col gap-3 w-[95%] m-auto h-[100%]'>
   
        <p>
          Home / <span>
            Vehicles
          </span>
        </p>

        <div className='flex gap-3 align-self-end'>

          <input type="text" placeholder='Search' className='border-b-2' />
          <button className='bg-yellow-400 px-[2rem] text-xl py-[5px]'>
            Add Vehicles
          </button>
        
        </div>

    <div className='flex justify-between '>
   <div className='flex justify-between w-[75%] text-[1rem] font-semibold'>
   <tr className='100% '>
    <td className='px-[2.6rem] py-[10px] text-[14px] text-left'>SL#</td>
    <td className='px-[2.6rem] py-[10px] text-[14px] text-left'>Vehicle Number</td>
    <td className='px-[2.6rem] py-[10px] text-[14px] text-left'>Reg.Number</td>
    <td className='px-[2.6rem] py-[10px] text-[14px] text-left'>Model</td>
    <td className='px-[2.6rem] py-[10px] text-[14px] text-left'>Type</td>
    <td className='px-[2.6rem] py-[10px] text-[14px] text-left'>Purchase Date</td>
    <td className='px-[2.6rem] py-[10px] text-[14px] text-left'>Last Service date</td>
   </tr>
   
     

   </div>

   <p className=''>
    Actions
   </p>
    
    </div>


    <div className=' w-[100%] text-sm '>

        {
          VehicleData.map( (data) =>{
            return (
              <div>
                
              <tr className='flex '> 
              <td className='px-[2.6rem]  py-[10px] text-[14px] text-left'>{data.SL}</td>
              <td className='px-[2.6rem] py-[10px] text-[14px] text-left'>{data.VN}</td>
              <td className='px-[2.6rem] py-[10px] text-[14px] text-left'>{data.RN}</td>
              <td className='px-[2.6rem] py-[10px] text-[14px] text-left'>{data.Mo}</td>
              <td className='px-[2.6rem] py-[10px] text-[14px] text-left'>{data.Ty}</td>
              <td className='px-[2.6rem] py-[10px] text-[14px] text-left'>{data.PD}</td>
              <td className='px-[] py-[10px] text-[14px] text-left'>{data.LSD}</td>

              </tr>

              <div>
                  <p>
                    edit
                  </p>

                  <p>
                    delete
                  </p>
                  </div>
                </div>
                
              
            )
          }
           )
        }

    </div>








   </div>
  )
}
