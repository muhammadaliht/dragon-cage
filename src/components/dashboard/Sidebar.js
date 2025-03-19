import React from 'react';
import bgImage from '../../drawable/sidebarImage.jpg';
import { MdOutlineAccountTree } from "react-icons/md";
import { AiTwotoneSnippets } from "react-icons/ai";
import { MdEditRoad } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdDeleteSweep } from "react-icons/md";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import { Link } from 'react-router-dom';
import logo from '../../drawable/logo.png';

import { useDispatch, useSelector } from 'react-redux';
import { selectSidebarValue, setSidebarValue } from '../../features/counter/sidebarSlice';
import { setNewAccount, setNewHandle } from '../../features/counter/accountSlice';
import { setAddSnippet } from '../../features/counter/addSnippetSlice';
import { setChooseTemplate, setCreateHandle } from '../../features/counter/handleSlice';



const Sidebar = () => {
    const sidebarValue = useSelector(selectSidebarValue);
    const dispatch = useDispatch();
    return (
        <div>
              <div
        className={`absolute inset-0 w-screen h-screen flex transition-all duration-700 ${
          sidebarValue ? 'translate-x-0' : '-translate-x-full'
        }`}>


      <div className={`h-screen w-[200px] sm:w-[260px] bg-cover bg-no-repeat pt-5 sm:pt-7 pb-4 sm:pb-6 px-3 sm:px-4`} 
      style={{ backgroundImage: `url(${bgImage})` }}>

      <div className='flex flex-col items-center gap-1'>
         <img src={logo} className={'h-[50px] sm:h-[67px]'} alt='logo'></img>
         <p className={"text-white tracking-widest uppercase text-sm sm:text-md font-semibold"}>Dragon cage</p>
      </div>

      <div className={'flex flex-col justify-center mt-6 sm:mt-8 gap-2 sm:gap-3'}>
      
      <Link to={'/account'}>
      <div className='flex items-end gap-5 sm:gap-3' onClick={()=>{
         dispatch(setNewHandle(false))
         dispatch(setNewAccount(false))
      }}>
      <MdOutlineAccountTree className={'text-white text-xl sm:text-lg'} />
      <p className={"capitalize text-white text-[18px] sm:text-[16px]"}>accounts</p>
      </div>
      </Link>

      <Link to={'/snippets'}>
      <div className='flex items-end gap-5 sm:gap-3' onClick={()=>{
        dispatch(setAddSnippet(false))
      }}>
      <AiTwotoneSnippets  className={'text-white text-xl sm:text-lg'} />
      <p className={"capitalize text-white text-[18px] sm:text-[16px]"}>Snippets</p>
      </div>
      </Link>

      <Link to={'/edit-road'}>
      <div className='flex items-end gap-5 sm:gap-3'>
      <MdEditRoad className={'text-white text-xl sm:text-lg'} />
      <p className={"capitalize text-white text-[18px] sm:text-[16px]"}>edit road</p>
      </div>
      </Link>

      <Link to={'/handles'}>
      <div className='flex items-end gap-5 sm:gap-3' onClick={()=>{
        dispatch(setCreateHandle(false))
        dispatch(setChooseTemplate(false))
      }}>
      <FaGlobeAmericas className={'text-white text-xl sm:text-lg'} />
      <p className={"capitalize text-white text-[18px] sm:text-[16px]"}>handles</p>
      </div>
      </Link>

      <div className='flex items-end gap-5 sm:gap-3'>
      <GrProjects className={'text-white text-xl sm:text-lg'} />
      <p className={"capitalize text-white text-[18px] sm:text-[16px]"}>projects</p>
      </div>

      <div className='flex items-end gap-5 sm:gap-3'>
      <MdDeleteSweep className={'text-white text-xl sm:text-lg'} />
      <p className={"capitalize text-white text-[18px] sm:text-[16px]"}>trash</p>
      </div>

      <div className='flex items-end gap-5 sm:gap-3'>
      <MdOutlineSettingsBackupRestore  className={'text-white text-xl sm:text-lg'} />
      <p className={"capitalize text-white text-[18px] sm:text-[16px]"}>backup</p>
      </div>

      <div className='flex items-end gap-5 sm:gap-3'>
      <FaMobileAlt  className={'text-white text-xl sm:text-lg'} />
      <p className={"capitalize text-white text-[18px] sm:text-[16px]"}>link device</p>
      </div>

      <div className='flex items-end gap-5 sm:gap-3'>
      <IoMdSettings className={'text-white text-xl sm:text-lg'} />
      <p className={"capitalize text-white text-[18px] sm:text-[16px]"}>setting</p>
      </div>

      <div className='flex items-end gap-5 sm:gap-3'>
      <TbLogout2 className={'text-white text-xl sm:text-lg'} />
      <p className={"capitalize text-white text-[18px] sm:text-[16px]"}>logout</p>
      </div>
      

      </div>



      </div>

      <div className='h-screen flex-1'
      onClick={()=>{
        dispatch(setSidebarValue(false))
      }}>
      </div>

  </div>
        </div>
    );
}

export default Sidebar;
