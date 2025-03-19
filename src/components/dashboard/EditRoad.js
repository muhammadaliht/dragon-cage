import React from 'react';
import { LuMenu } from 'react-icons/lu';
import { setSidebarValue } from '../../features/counter/sidebarSlice';
import { useDispatch } from 'react-redux';
import Sidebar from './Sidebar';
import { MdOutlineTextSnippet } from 'react-icons/md';
import fb from '../../drawable/facebooklogo.png'
 
const EditRoad = () => {
    const dispatch = useDispatch();
    return (
        <div>
   <div className='w-screen h-screen flex flex-col'>

   <div className="h-[50px] navbar bg-[#4C4959] flex justify-between px-4 items-center sm:px-2">
  <div className="flex items-center gap-4 sm:gap-2">
    <LuMenu className="text-white text-[24px] sm:text-[20px] cursor-pointer" onClick={()=>{
      dispatch(setSidebarValue(true))
    }} />
    <p className="text-white tracking-wide text-xl sm:text-lg capitalize">Edit Road</p>
  </div>
   </div>

   <div className='flex-1 bg-[#222832] w-full p-2 flex flex-col gap-2'>
     <div className='flex items-center gap-1 w-full rounded-sm h-[50px] bg-[#383E46] p-2'>
      <MdOutlineTextSnippet className='text-white' />
       <p className='text-white capitalize '>Intermediate Result details</p>
     </div>

     <div className='flex items-center gap-1 w-full rounded-sm h-[50px] bg-[#383E46] p-2'>
       <MdOutlineTextSnippet className='text-white' />
       <p className='text-white capitalize '>Todo:Task 1</p>
     </div>

     <div className='flex flex-col justify-center gap-1 w-full rounded-sm h-auto p-2 bg-[#383E46]'>
       <p className='flex items-center gap-2 text-white capitalize'><img src={fb} className='h-[20px]' alt='loading...'></img>facebook</p>
       <hr className="border-dashed border-t-1 border-white" />
       <p className='text-white '>Email:hassnainmalik726@gmail.com</p>
     </div>

    </div>

   </div>


  
  <Sidebar/>

        </div>
    );
}

export default EditRoad;
