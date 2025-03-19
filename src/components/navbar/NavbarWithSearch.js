import React from 'react';
import { LuMenu } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { IoAddOutline } from "react-icons/io5";
import { setSidebarValue } from '../../features/counter/sidebarSlice';
import { useDispatch } from 'react-redux';
import { setNewAccount } from '../../features/counter/accountSlice';
import { setAddSnippet } from '../../features/counter/addSnippetSlice';
import { setCreateHandle } from '../../features/counter/handleSlice';


const NavbarWithSearch = ({title,addValueAccount,addValueSnippet,addValueHandle}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <div className="h-[50px] bg-[#4C4959] flex justify-between px-4 items-center sm:px-2 sm:h-[45px]">
  <div className="flex items-center gap-4 sm:gap-2">
    <LuMenu className="text-white text-[24px] cursor-pointer sm:text-[20px]" onClick={()=>{
      dispatch(setSidebarValue(true))
    }} />
    <p className="text-white tracking-wide text-xl capitalize sm:text-lg">{title}</p>
  </div>

  <div className={'flex items-center sm:gap-2'}>

  <div className={'flex items-center gap-1 border px-2 border-teal-300 sm:px-1'}>
  <CiSearch className={'text-zinc-300 sm:text-sm'} />
  <input className={'bg-transparent focus:outline-none text-white text-sm sm:text-xs'} type='text' placeholder='Search'></input>
  </div>

  <IoAddOutline className={'text-[23px] text-white ml-3 cursor-pointer sm:text-[20px] sm:ml-2'} 
    onClick={()=>{
            dispatch(setNewAccount({addValueAccount}));
            dispatch(setAddSnippet({addValueSnippet}));
            dispatch(setCreateHandle({addValueHandle}));
          }}
  />
  </div>
 
</div>
        </div>
    );
}

export default NavbarWithSearch;
