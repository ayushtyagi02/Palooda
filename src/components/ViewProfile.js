import { useState } from "react";
import {BiSolidUserCircle} from "react-icons/bi"
import onClickOutside from "react-onclickoutside"
function ViewProfile(){
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };


  ViewProfile.handleClickOutside = () => {
    setOpen(false);
  };
    return (
        <div className="dropdown flex bg-white flex-col  w-[270px] ">
      <button className="text-3xl place-self-end mr-11" onClick={()=>handleOpen()}><BiSolidUserCircle/></button>
      {open ? (
        <ul className="menu drop-shadow-xl -mt-7 border-2 z-10 bg-white w-full text-lg">
          <li className=" group/item hover:bg-slate-100">
            <button className="px-[63px] py-2" onClick={()=>handleOpen()}>Change Password</button>
          </li>
          <li className="menu-item group/item hover:bg-slate-100">
            <button className="px-[100px] py-2" onClick={()=>handleOpen()}>Logout</button>
          </li>
        </ul>
      ) : null}
      
    </div>
    )
}
const clickOutsideConfig = {
  handleClickOutside: () => ViewProfile.handleClickOutside,
};
export default onClickOutside(ViewProfile, clickOutsideConfig);