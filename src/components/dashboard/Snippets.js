import React from 'react';
import NavbarWithSearch from '../navbar/NavbarWithSearch';
import Sidebar from './Sidebar';
import { MdOutlineTextSnippet } from 'react-icons/md';
import { FaArrowLeft, FaLock } from 'react-icons/fa';
import { BiShow } from 'react-icons/bi';
import { IoLayers } from 'react-icons/io5';
import { TiTick } from 'react-icons/ti';
import { IoMdAdd } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { selectAddSnippet, setAddSnippet } from '../../features/counter/addSnippetSlice';

const Snippets = () => {
    const dispatch = useDispatch();
    const addSnippet = useSelector(selectAddSnippet);
    return (
<div>
      <div className={'w-screen h-screen flex flex-col relative'}>
         <NavbarWithSearch title='Snippets' addValueAccount='false' addValueSnippet='true'/>

         <div className='flex-1 bg-[#222832] w-full p-2 flex flex-col gap-2'>
            
            <div className='flex items-center gap-1 w-full rounded-sm h-[50px] bg-[#383E46] p-2'>
            <MdOutlineTextSnippet className='text-white' />
              <p className='text-white capitalize '>Intermediate Result details</p>
            </div>

            <div className='flex items-center gap-1 w-full rounded-sm h-[50px] bg-[#383E46] p-2'>
            <MdOutlineTextSnippet className='text-white' />
              <p className='text-white capitalize '>Todo:Task 1</p>
            </div>

         </div>

      </div> 

      {addSnippet &&(
      <div className={'absolute inset-0 w-screen h-screen flex flex-col bg-[#222832]'}>

         <div className={'w-full h-[55px] navbar flex justify-between items-center p-2 bg-[#4E4B5B]'}>

          <div className='flex items-end gap-2'>
          <FaArrowLeft className='text-white mb-1 text-[18px] cursor-pointer'
          onClick={()=>{
            dispatch(setAddSnippet(false))
          }} />
            <p className={'text-white text-xl'}>Create Snippet</p>
          </div>

          <div className={'flex items-end gap-3 text-white text-[18px]'}>
          <BiShow />
          <IoMdAdd />
          <IoLayers />
          <TiTick />
          </div>

         </div>

 
     
         <div className='flex-1 w-full p-2 flex gap-2 flex-col'>

         <div className='input-1'>
          <div className='w-full flex justify-between'>
            <p className='text-white'>Title</p>
            <span className='flex gap-3 text-white text-[12px]'><FaLock /> <FaLock /></span>
          </div>
          <input className={'bg-[#383E46] mt-1 w-full border-b-2 border-teal-500 focus:outline-none text-white pl-2 '} type='text' placeholder='title'></input>
         </div>

         <div className='input-1'>
          <div className='w-full flex justify-between'>
            <p className='text-white'>Description</p>
            <span className='flex gap-3 text-white text-[12px]'><FaLock /> <FaLock /></span>
          </div>
          <input className={'bg-[#383E46] mt-1 w-full border-b-2 border-teal-500 focus:outline-none text-white pl-2 '} type='text' placeholder='Enter Description'></input>
         </div>

         <button className={'capitalize mt-4 text-white bg-[#383E46] w-full text-center p-2'}>add new field</button>

       
         </div>

       

      </div>

    )}

      <Sidebar/>

</div>
    );
}

export default Snippets;
