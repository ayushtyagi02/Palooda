import React from 'react'
import bgblur from '../assets/bgblur.jpg'
import { Toaster } from 'react-hot-toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Areyousure = ({curDelId,deleteRow,setDelete}) => {
  return (
  <div className='flex justify-center items-center w-[100%] h-screen  z-40 bg-slate-100 backdrop-blur-sm '>
    <div className="z-30 border-2 border-black">
      <div className="flex justify-center flex-col w-[400px] gap-10 h-[200px] border bg-white ">
        <p className='mx-auto text-lg font-bold'>Are you sure you want to Delete?</p>
        <div className='flex justify-around  text-lg font-semibold'>
          <button className="bg-slate-100 p-2 px-3 rounded-sm" onClick={()=>setDelete(false)}>Cancel</button>

          <button className="bg-amber-400 p-2 px-3 rounded-sm" onClick={()=>deleteRow(curDelId)}>Delete</button>
          
        </div>


      </div>
    </div>
  </div>
  )
}
