import React from 'react';

import backgroundImage from '../../drawable/bg.jpeg';
import Navbar from '../navbar/Navbar';
import { FaGithub } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { IoFolderOpenSharp } from "react-icons/io5";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineFileProtect } from "react-icons/ai";
import { FaUnlock } from "react-icons/fa";
import { BiSolidShow } from "react-icons/bi";
import { BiRename } from "react-icons/bi";
import { MdDeleteSweep } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentic, selectRemove, selectRename, setAuthentic, setRemove, setRename } from '../../features/counter/primalListSlice';
import { Link } from 'react-router-dom';





const PrimalScreen = () => {

    const dispatch = useDispatch();
    const authentic = useSelector(selectAuthentic);
    const rename = useSelector(selectRename);
    const remove = useSelector(selectRemove);

return (
<div>
  <div className={"h-screen w-screen absolute bg-cover bg-center"} 
  style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className={'relative inset-0 overflow-hidden h-full w-full bg-[#101010c7]'}>
                
      <Navbar title={'select primal'} btn1Icon={FaGithub} btn1={'clone existing'}
        btn2Icon={FaPlus} btn2={'create primal'}
        btn1Path={'/new-primal'}
        btn2Path={'/create-primal'} />

    <div className='flex flex-col gap-1'>

     <button onClick={()=>{
       dispatch(setAuthentic(true))
     }}>
         <div className={'px-3 flex justify-between items-center w-screen h-[53px] bg-[#252525]'}>
       <p className='flex items-center gap-1 text-white'>
        <span className='text-[#FFCE63]'><IoFolderOpenSharp /></span> DragonCagePrimal</p>
       
        <div className={'flex gap-2'}>
          <button className={'flex items-center justify-center gap-1 uppercase tracking-wider px-1 py-[2px] border-2 border-teal-600 hover:bg-teal-600 text-white'}>
            <span><MdOutlineDriveFileRenameOutline /></span>
            rename</button>

          <button className={'flex items-center justify-center gap-1 uppercase tracking-wider px-1 py-[2px] border-2 border-yellow-200 hover:bg-yellow-300 hover:text-red-600 text-white'}>
            <span><RxCross1 /></span>
            remove</button>    
                          
         </div>
    </div>
     </button>


     <button onClick={()=>{
       dispatch(setAuthentic(true))
     }}>
         <div className={'px-3 flex justify-between items-center w-screen h-[53px] bg-[#252525]'}>
       <p className='flex items-center gap-1 text-white'>
        <span className='text-[#FFCE63]'><IoFolderOpenSharp /></span>PrimalX</p>
       
        <div className={'flex gap-2'}>
          <button className={'flex items-center justify-center gap-1 uppercase tracking-wider px-1 py-[2px] border-2 border-teal-600 hover:bg-teal-600 text-white'}>
            <span><MdOutlineDriveFileRenameOutline /></span>
            rename</button>

          <button className={'flex items-center justify-center gap-1 uppercase tracking-wider px-1 py-[2px] border-2 border-yellow-200 hover:bg-yellow-300 hover:text-red-600 text-white'}>
            <span><RxCross1 /></span>
            remove</button>    
                          
         </div>
    </div>
     </button>


     <button onClick={()=>{
       dispatch(setAuthentic(true))
     }}>
         <div className={'px-3 flex justify-between items-center w-screen h-[53px] bg-[#252525]'}>
       <p className='flex items-center gap-1 text-white'>
        <span className='text-[#FFCE63]'><IoFolderOpenSharp /></span> EnigmaPrimal</p>
       
        <div className={'flex gap-2'}>
          <button className={'flex items-center justify-center gap-1 uppercase tracking-wider px-1 py-[2px] border-2 border-teal-600 hover:bg-teal-600 text-white'}>
            <span><MdOutlineDriveFileRenameOutline /></span>
            rename</button>

          <button className={'flex items-center justify-center gap-1 uppercase tracking-wider px-1 py-[2px] border-2 border-yellow-200 hover:bg-yellow-300 hover:text-red-600 text-white'}>
            <span><RxCross1 /></span>
            remove</button>    
                          
         </div>
    </div>
     </button>

     <button onClick={()=>{
       dispatch(setAuthentic(true))
     }}>
         <div className={'px-3 flex justify-between items-center w-screen h-[53px] bg-[#252525]'}>
       <p className='flex items-center gap-1 text-white'>
        <span className='text-[#FFCE63]'><IoFolderOpenSharp /></span> SorcerersPrimal</p>
       
        <div className={'flex gap-2'}>
          <button className={'flex items-center justify-center gap-1 uppercase tracking-wider px-1 py-[2px] border-2 border-teal-600 hover:bg-teal-600 text-white'}>
            <span><MdOutlineDriveFileRenameOutline /></span>
            rename</button>

          <button className={'flex items-center justify-center gap-1 uppercase tracking-wider px-1 py-[2px] border-2 border-yellow-200 hover:bg-yellow-300 hover:text-red-600 text-white'}>
            <span><RxCross1 /></span>
            remove</button>    
                          
         </div>
    </div>
     </button>

                    </div>   

       {authentic && (
        <div id="modal" className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-[#1E2936] p-3 rounded shadow-lg w-[800px] h-[350px]">

          <div className={'h-[20%] w-full flex justify-between'}>
          <p className={'capitalize text-white tracking-wider font-semibold'}>authenticate primal</p>
          <RxCross1 className={'text-white text-xl cursor-pointer'}
          onClick={()=>{
        dispatch(setAuthentic(false))
    }} />
          </div>

          <div className="w-full h-[40%] py-8 px-3 flex items-center">
             <div className="flex items-start gap-4 w-full px-8">
               <AiOutlineFileProtect  className="text-white text-8xl flex-shrink-0" />
             <div>
             <p className="text-white text-xl font-bold mb-1">Enter password of your PrimalX.</p>
             <p className="text-gray-300 text-[13px] leading-relaxed">This password acts as your gateway to the primal realm and will be utilized for all in-primal actions henceforth. It provides both initial access and ongoing security within the primal environment.</p>
            </div>
           </div>
          </div>

          <div className="w-full h-[40%] flex flex-col justify-center pt-5 pb-3 px-3">
  <p className="text-white font-semibold mb-2">Administrator Password</p>

  <div className="flex items-center bg-gray-800 border border-teal-500 p-1">
   
    <span className="text-gray-400 text-lg">
    <BiSolidShow />
    </span>

    <input
      type="text"
      placeholder="Cryptic"
      className="bg-transparent text-white text-sm flex-1 outline-none px-2"
    />
  </div>


  <div className="flex justify-end gap-3 mt-3">


    <button className="flex items-center text-md text-white py-[2px] px-2 gap-1 bg-teal-600"
     onClick={()=>{
      dispatch(setRename(true))
      dispatch(setAuthentic(false))
     }} 
   >
    <span className={''}><FaUnlock /></span> UNLOCK 
    </button>
  </div>

</div>
           
          </div>
        </div>
       )}  


          {rename && (
        <div id="modal" className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-[#1E2936] p-3 rounded shadow-lg w-[800px] h-[350px]">

          <div className={'h-[10%] w-full flex justify-between'}>
          <p className={'capitalize text-white tracking-wider font-semibold'}>rename primal</p>
          <RxCross1 className={'text-white text-xl cursor-pointer'}
          onClick={()=>{
        dispatch(setRename(false))
    }} />
          </div>

          <div className="w-full h-[40%] flex items-center">
             <div className="flex items-start gap-4 w-full px-8">
               <BiRename  className="text-white text-8xl flex-shrink-0" />
             <div>
             <p className="text-white text-xl font-bold mb-1">PrimalX Nickname Change</p>
             <p className="text-gray-300 text-[13px] leading-relaxed">To rename your Primal, enter the new nickname and provide your password for authentication. This ensures the security of your Primal and prevents unauthorized changes to its settings.</p>
            </div>
           </div>
          </div>

          <div className="w-full h-[40%] flex flex-col justify-center pt-5 pb-3 px-3">

          <p className="text-white font-semibold mb-2 mt-3">Primal Nick Name</p>

<div className="flex items-center bg-gray-800 border border-teal-500 p-1">
 
 

  <input
    type="text"
    placeholder="Dragon Cage Primal"
    className="bg-transparent text-white text-sm flex-1 outline-none px-2"
  />
</div>

  <p className="text-white font-semibold mb-2 mt-3">Administrator Password</p>

  <div className="flex items-center bg-gray-800 border border-teal-500 p-1">
   
    <span className="text-gray-400 text-lg">
    <BiSolidShow />
    </span>

    <input
      type="text"
      placeholder="Cryptic"
      className="bg-transparent text-white text-sm flex-1 outline-none px-2"
    />
  </div>


  <div className="flex justify-end gap-3 mt-3">


    <button className="flex items-center text-md uppercase text-white py-[2px] px-2 gap-1 bg-teal-600"
     onClick={()=>{
      dispatch(setRename(false))
      dispatch(setRemove(true))
     }} 
   >
    <span className={''}><MdOutlineDriveFileRenameOutline /></span> Rename 
    </button>
  </div>

</div>
           
          </div>
        </div>
       )} 



       {remove && (
        <div id="modal" className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-[#1E2936] p-3 rounded shadow-lg w-[800px] h-[350px]">

          <div className={'h-[20%] w-full flex justify-between'}>
          <p className={'capitalize text-white tracking-wider font-semibold'}>Primal Removal Confirmation </p>
          <RxCross1 className={'text-white text-xl cursor-pointer'}
          onClick={()=>{
        dispatch(setRemove(false))
    }} />
          </div>

          <div className="w-full h-[40%] py-8 px-3 flex items-center">
             <div className="flex items-start gap-4 w-full px-8">
               <MdDeleteSweep  className="text-white text-8xl flex-shrink-0" />
             <div>
             <p className="text-white text-xl font-bold mb-1">Enter Primal Name to Confirm Deletion</p>
             <p className="text-gray-300 text-[13px] leading-relaxed">Please enter the name of PrimalX below to confirm the deletion. This action cannot be undone. All data associated with PrimalX will be permanently erased from the system. Ensure that you have selected the correct Primal before proceeding.</p>
            </div>
           </div>
          </div>

          <div className="w-full h-[40%] flex flex-col justify-center pt-5 pb-3 px-3">
  <p className="text-white font-semibold mb-2">Primal Nick Name</p>

  <div className="flex items-center bg-gray-800 border border-teal-500 p-1">

    <input
      type="text"
      placeholder="Dragon Cage Primal"
      className="bg-transparent text-white text-sm flex-1 outline-none px-2"
    />
  </div>


  <div className="flex justify-end gap-3 mt-3">

  <Link to={'/dashborad'}>
    <button className="flex items-center text-md text-white py-[2px] px-2 gap-1 bg-red-500">
    <span className={''}><RiDeleteBinLine /></span> Remove 
    </button>
  </Link>
  </div>

</div>
           
          </div>
        </div>
       )}

                   
                </div>
            </div>
        </div>
    );
}

export default PrimalScreen;
