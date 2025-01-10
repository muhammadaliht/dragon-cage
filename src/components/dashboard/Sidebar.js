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


      <div className={`h-screen w-[260px] bg-contain bg-no-repeat pt-7 pb-6 px-4`} 
      style={{ backgroundImage: `url(${bgImage})` }}>

      <div className='flex flex-col items-center gap-1'>
         <img src={logo} className={'h-[67px]'} alt='logo'></img>
         <p className={"text-white tracking-widest uppercase text-md font-semibold"}>Dragon cage</p>
      </div>

      <div className={'flex flex-col justify-center mt-8 gap-3'}>
      
      <Link to={'/account'}>
      <div className='flex items-end gap-5' onClick={()=>{
         dispatch(setNewHandle(false))
         dispatch(setNewAccount(false))
      }}>
      <MdOutlineAccountTree className={'text-white text-xl'} />
      <p className={"capitalize text-white text-[18px]"}>accounts</p>
      </div>
      </Link>

      <Link to={'/snippets'}>
      <div className='flex items-end gap-5' onClick={()=>{
        dispatch(setAddSnippet(false))
      }}>
      <AiTwotoneSnippets  className={'text-white text-xl'} />
      <p className={"capitalize text-white text-[18px]"}>Snippets</p>
      </div>
      </Link>

      <Link to={'/edit-road'}>
      <div className='flex items-end gap-5'>
      <MdEditRoad className={'text-white text-xl'} />
      <p className={"capitalize text-white text-[18px]"}>edit road</p>
      </div>
      </Link>

      <Link to={'/handles'}>
      <div className='flex items-end gap-5' onClick={()=>{
        dispatch(setCreateHandle(false))
        dispatch(setChooseTemplate(false))
      }}>
      <FaGlobeAmericas className={'text-white text-xl'} />
      <p className={"capitalize text-white text-[18px]"}>handles</p>
      </div>
      </Link>

      <div className='flex items-end gap-5'>
      <GrProjects className={'text-white text-xl'} />
      <p className={"capitalize text-white text-[18px]"}>projects</p>
      </div>

      <div className='flex items-end gap-5'>
      <MdDeleteSweep className={'text-white text-xl'} />
      <p className={"capitalize text-white text-[18px]"}>trash</p>
      </div>

      <div className='flex items-end gap-5'>
      <MdOutlineSettingsBackupRestore  className={'text-white text-xl'} />
      <p className={"capitalize text-white text-[18px]"}>backup</p>
      </div>

      <div className='flex items-end gap-5'>
      <FaMobileAlt  className={'text-white text-xl'} />
      <p className={"capitalize text-white text-[18px]"}>link device</p>
      </div>

      <div className='flex items-end gap-5'>
      <IoMdSettings className={'text-white text-xl'} />
      <p className={"capitalize text-white text-[18px]"}>setting</p>
      </div>

      <div className='flex items-end gap-5'>
      <TbLogout2 className={'text-white text-xl'} />
      <p className={"capitalize text-white text-[18px]"}>logout</p>
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
