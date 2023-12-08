// Deliveryreport.js
import React from 'react';
import DeliveryData from '../components/DeliveryData';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';

export const Deliveryreport = ({ changeUpdate}) => {
  // Example function to trigger the update action
  // const handleUpdateClick = () => {
  //   // Call setUpdate to update the state in the parent component (VehicleUpdate)
  //   setUpdate(true);
  // };

  return (
    <div className='flex flex-col gap-4 w-[97%] m-auto  mt-[5rem]'>
      <h1 className='p-2 text-lg'>
        Home /
        <span className='font-bold p-2'>Orders</span>
      </h1>

      <div className='align-self-end h-[2.5rem] '>
        <input
          type='text'
          className='border-b h-full border-black	mr-[1rem] w-[15vw]'
          placeholder='Search'
          id='Search'
        />
        <button className='px-[3vw] py-[7px] text-[1rem] bg-yellow-400 mr-[1rem]'>
          Add Order
        </button>
      </div>

      <div className='outline outline-[1px] outline-red-100'>
        <div className='flex justify-between px-[10px] border-b'>
        <p className='text-md font-semibold py-[1.5rem] min-w-[2rem] max-w-[2rem]'>SL#</p>
       <p className='text-md font-semibold py-[1.5rem] min-w-[4rem] max-w-[4rem]'>OrderNo</p>
       <p className='text-md font-semibold py-[1.5rem] min-w-[4rem] max-w-[4rem]'>Address</p>
       <p className='text-md font-semibold py-[1.5rem]  min-w-[5.5rem] max-w-[5.5rem]'>Order Time</p>
       <p className='text-md font-semibold py-[1.5rem] min-w-[6.5rem] max-w-[6.5rem]'>Delivery Time</p>
       <p className='text-md font-semibold py-[1.5rem] min-w-[6.5rem] max-w-[6.5rem]'>Delivery Boy</p>
       <p className='text-md font-semibold py-[1.5rem] min-w-[3rem] max-w-[3rem]'>Driver</p>
       <p className='text-md font-semibold py-[1.5rem] min-w-[3.5rem] max-w-[3.5rem]'>Vehicle</p>
       <p className='text-md font-semibold py-[1.5rem] min-w-[2.5rem] max-w-[2.5rem] '>Zone</p>
       <p className='text-md font-semibold py-[1.5rem] min-w-[3rem] max-w-[3rem]'>status</p>
       <p className='text-md font-semibold py-[1.5rem]  min-w-[3.7rem] max-w-[3.7rem]'>Actions</p>

        </div>

        {/* Example delivery data */}
        <div>
          {/* ... map through DeliveryData and display data ... */}
          {/* For the Actions column, add the onClick handler */}
          {DeliveryData.map((data) => (
            <div className='flex justify-between items-center px-[10px] border-b '>
            <p className='text-md py-[1.5rem] min-w-[2rem] max-w-[2rem] flex item'>{data.SL}</p>
            <p className='text-md py-[1.5rem] min-w-[4rem] max-w-[4rem] flex item'>{data.ON}</p>
            <p className='text-md py-[1.5rem] min-w-[4rem] max-w-[4rem] flex item'>{data.Add}</p>
            <p className='text-md py-[1.5rem] min-w-[5.5rem] max-w-[5.5rem] flex item'>{data.OT}</p>
            <p className='text-md py-[1.5rem] min-w-[6.5rem] max-w-[6.5rem] flex item'>{data.Dt}</p>
            <p className='text-md py-[1.5rem] min-w-[6.5rem] max-w-[6.5rem] flex item'>{data.Db}</p>
            <p className='text-md py-[1.5rem] min-w-[3rem] max-w-[3rem] flex item'>{data.Driver}</p>
            <p className='text-md py-[1.5rem] min-w-[3.5rem] max-w-[3.5rem] flex item'>{data.Veh}</p>
            <p className='text-md py-[1.5rem] min-w-[2.5rem] max-w-[2.5rem] flex  item'>{data.Zone}</p>
            <p className='text-md py-[1.5rem] min-w-[3rem] max-w-[3rem] flex item'>{data.Status}</p>
              <p
                className='min-w-[3.7rem] max-w-[3.7rem] flex justify-between text-[#656464] items-center'
              >
              <button    onClick={changeUpdate}>
              <FiEdit2 className='text-2xl text-[#656464] cursor-pointer'              
 />
              </button>
              
                <AiOutlineDelete className='text-[#656464] text-2xl' />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// export default Deliveryreport;

