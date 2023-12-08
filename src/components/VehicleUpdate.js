// VehicleUpdate.js
import React, { useState } from 'react';
import { Deliveryreport } from '../pages/Deliveryreport';
import {RxCross2 } from 'react-icons/rx'


const VehicleUpdate = ({changeUpdate}) => {
  // const [update, setUpdate] = useState(false);

  return (
    <div className="flex flex-col justify-around  "  >
      
        <div className='flex flex-col  h-[400px] w-[500px] bg-[#ede7e7] justify-around rounded-md '>
          <div className='flex w-full justify-between px-[20px]'>
            <p className='text-red-400 text-2xl'>Edit Order</p>
            <button  onClick={changeUpdate} className='cursor-pointer text-3xl'>
              
            <RxCross2/>
            </button>
          </div>
          
          <label htmlFor='' className='w-[97%] h-[5rem] m-auto'>
            <p>Select Delivery <sup>*</sup></p>
            <select name='' id='' className='outline w-full outline-1 rounded-md outline-[#f7f7f7] bg-[white] py-[1rem]' ></select>
          </label>

          <label htmlFor='' className='w-[97%] m-auto'>
            <p>Select status of order <sup>*</sup></p>
            <select name='' id='' className='outline w-full outline-1 rounded-md outline-[#f7f7f7] bg-[white] py-[1rem]'>
              <option value='a'>None</option>
              <option value='a'>being delivered</option>
              <option value='a'>delivered</option>
              <option value='a'>not delivered</option>
            </select>
          </label>

          <button onClick={changeUpdate} className='bg-yello-400 text-xl w-[13rem] align-self-end py-3 bg-yellow-400 mb-[1rem] rounded-s-md'>Update</button>
        </div>
      

      {/* Render the Deliveryreport component and pass setUpdate as a prop */}
      {/* <Deliveryreport setUpdate={setUpdate} /> */}
    </div>
  );
};

export default VehicleUpdate;