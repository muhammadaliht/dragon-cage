import React from 'react';
import { LuMenu } from "react-icons/lu";

import { useDispatch } from 'react-redux';
import { setSidebarValue } from '../../features/counter/sidebarSlice';
import Sidebar from './Sidebar';


const Dashboard = () => {

  const dispatch = useDispatch();
return (
<div>

<div className="w-screen h-screen flex flex-col relative">

  <div className="h-[50px] bg-[#4C4959] flex justify-between px-4 items-center sm:px-2">
    <div className="flex items-center gap-4 sm:gap-2">
      <LuMenu className="text-white text-[24px] sm:text-[20px] cursor-pointer" onClick={()=>{
        dispatch(setSidebarValue(true))
      }} />
      <p className="text-white tracking-wide text-xl sm:text-lg capitalize">Dashboard</p>
    </div>
    <p className="text-white tracking-wide text-[18px] sm:text-[16px]">DragonCagePrimaX</p>
  </div>


  <div className="flex-1 bg-[#222832]">
 
  </div>


</div>

<Sidebar/>
    

</div>
);
}

export default Dashboard;
