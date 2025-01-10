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
            <div className="h-[50px] bg-[#4C4959] flex justify-between px-4 items-center">
  <div className="flex items-center gap-4">
    <LuMenu className="text-white text-[24px] cursor-pointer" onClick={()=>{
      dispatch(setSidebarValue(true))
    }} />
    <p className="text-white tracking-wide text-xl capitalize">{title}</p>
  </div>

  <div className={'flex items-center '}>

  <div className={'flex items-center gap-1 border px-2 border-teal-300 '}>
  <CiSearch className={'text-zinc-300'} />
  <input className={'bg-transparent focus:outline-none text-white'} type='text' placeholder='Search'></input>
  </div>

  <IoAddOutline className={'text-[23px] text-white ml-3 cursor-pointer'} 
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
