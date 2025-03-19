import React from 'react';
import NavbarWithSearch from '../navbar/NavbarWithSearch';
import Sidebar from './Sidebar';
import { GiWorld } from 'react-icons/gi';
import { FaArrowLeft, FaCamera, FaLock } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { selectChooseTemplate, selectCreateHandle, selectCustomHandle, selectEditLayer, selectManageField, setChooseTemplate, setCreateHandle, setCustomHandle, setEditLayer, setManageField } from '../../features/counter/handleSlice';
import { CiSearch } from 'react-icons/ci';
import { IoAddOutline, IoLayers } from 'react-icons/io5';
import fb from '../../drawable/facebooklogo.png';
import instagram from '../../drawable/InstagramLogo.webp';
import google from '../../drawable/googleLogo.webp';
import twitter from '../../drawable/twitterLogo.png';
import snapchat from '../../drawable/snapchatLogo.svg';
import { GrRadialSelected } from 'react-icons/gr';
import { IoLogoAndroid } from 'react-icons/io';
import editLayers from '../../drawable/editLayers.png';

const Handles = () => {
    const dispatch = useDispatch();
    const createHandle = useSelector(selectCreateHandle);
    const chooseTemplate = useSelector(selectChooseTemplate);
    const customHandle = useSelector(selectCustomHandle);
    const manageField = useSelector(selectManageField);
    const editLayer = useSelector(selectEditLayer);
    return (
        <div>

  <div className={'w-screen h-screen flex flex-col relative'}>
      <NavbarWithSearch title='handles' addValueHandle='true' addValueAccount='false' addValueSnippet='false' />

      <div className={'flex-1 flex flex-col justify-center items-center bg-[#222832] p-4 sm:p-6'}>
      <GiWorld className={'text-2xl sm:text-3xl text-white'}/>
        <p className='text-white capitalize font-normal text-sm sm:text-md'>no handles available yet!</p>
        <p className={'uppercase text-teal-400 tracking-wider text-xs sm:text-sm'}>Create new handle now</p>

      </div>
  </div> 

 
 {createHandle &&(
    <div className={'absolute inset-0 w-screen h-screen bg-[#222832]'}>
         <div className={'h-[50px] navbar w-full px-4 flex justify-between items-center bg-[#4E4B5B]'}>
            <div className='flex items-center gap-2 text-xl text-white capitalize'>
            <FaArrowLeft className={'cursor-pointer'} onClick={()=>{
                dispatch(setCreateHandle(false));
            }} />
            <p>Create Handles</p>
            </div>
            <MdDone className='text-xl text-white' />
         </div>

         <div className={'flex-1 w-full p-2'}>
         <p className={'capitalize text-white'}>handle Template</p>
          <p className={'bg-[#383E46] text-white capitalize rounded-md pr-3 py-2 mt-1'}> 
          <span className='bg-[#068A8F] px-4 mr-2 py-2 rounded-md cursor-pointer' 
          onClick={()=>{
            dispatch(setChooseTemplate(true))
          }}>choose template</span> 
          no template chosen.</p>
         </div>
    </div>

)}

    
  
  {chooseTemplate &&(
    <div className={'w-screen h-screen inset-0 absolute flex flex-col bg-[#222832]'}>

      <div className="h-[50px] navbar bg-[#4C4959] flex justify-between px-4 items-center">
  <div className="flex items-center text-white text-xl capitalize gap-3">
     <FaArrowLeft className={"cursor-pointer"} onClick={()=>{
        dispatch(setChooseTemplate(false))
     }}/>
    <p className="">choose template</p>
  </div>

  <div className={'flex items-center '}>

  <div className={'flex items-center gap-1 border px-2 border-teal-300 '}>
  <CiSearch className={'text-zinc-300'} />
  <input className={'bg-transparent focus:outline-none text-white'} type='text' placeholder='Search'></input>
  </div>

  <IoAddOutline className={'text-[23px] text-white ml-3 cursor-pointer'} />
  </div>
 
      </div>

      <div className='flex-1 w-full flex flex-col gap-1 p-3'>
       
      <div className=' flex justify-between items-center cursor-pointer p-3 rounded-md bg-[#383E46]'
      onClick={()=>{
        dispatch(setCustomHandle(true))
      }}>
            <div className='flex items-center gap-2  '>
                <GrRadialSelected  className='text-purple-500 text-[21px]' alt='loading...' />
               <p className='text-white tracking-wide capitalize text-xl'>custom handle</p>
            </div>

        </div>
      
      <div className=' flex justify-between items-center cursor-pointer p-3 rounded-md bg-[#383E46]'>
            <div className='flex items-center gap-1 '>
                <img src={fb} className='h-[20px]' alt='loading...'></img>
               <p className='text-white tracking-wide capitalize text-xl'>facebook</p>
            </div>

            <p className={'text-white text-sm bg-[#212128] p-1 rounded-md'}>99</p>

        </div>

        <div className=' flex justify-between items-center cursor-pointer p-3 rounded-md bg-[#383E46]'>
            <div className='flex items-center '>
                <img src={google} className='h-[28px]' alt='loading...'></img>
               <p className='text-white tracking-wide capitalize text-xl'>google</p>
            </div>

            <p className={'text-white text-sm bg-[#212128] p-1 rounded-md'}>99</p>

        </div>

        <div className=' flex justify-between items-center cursor-pointer p-3 rounded-md bg-[#383E46]'>
            <div className='flex items-center gap-1 '>
                <img src={twitter} className='h-[20px]' alt='loading...'></img>
               <p className='text-white tracking-wide capitalize text-xl'>twitter X</p>
            </div>

            <p className={'text-white text-sm bg-[#212128] p-1 rounded-md'}>99</p>

        </div>

        <div className=' flex justify-between items-center cursor-pointer p-3 rounded-md bg-[#383E46]'>
            <div className='flex items-center gap-1 '>
                <img src={instagram} className='h-[20px]' alt='loading...'></img>
               <p className='text-white tracking-wide capitalize text-xl'>instagram</p>
            </div>

            <p className={'text-white text-sm bg-[#212128] p-1 rounded-md'}>99</p>

        </div>

        
        <div className=' flex justify-between items-center cursor-pointer py-3 pr-3 pl-1 rounded-md bg-[#383E46]'>
            <div className='flex items-center '>
                <img src={snapchat} className='h-[30px]' alt='loading...'></img>
               <p className='text-white tracking-wide capitalize text-xl'>snapchat</p>
            </div>

            <p className={'text-white text-sm bg-[#212128] p-1 rounded-md'}>99</p>

        </div>

        

      </div>

    </div>

)}



{customHandle &&(
<div className={'absolute inset-0 w-screen h-screen bg-[#222832]'}>

         <div className={'h-[50px] navbar w-full px-4 flex justify-between items-center bg-[#4E4B5B]'}>
            <div className='flex items-center gap-2 text-xl text-white capitalize'>
            <FaArrowLeft className={'cursor-pointer'} onClick={()=>{
                dispatch(setCustomHandle(false));
            }} />
            <p>Create Handles</p>
            </div>
            <MdDone className='text-xl text-white' />
         </div>

         <div className={'flex-1 w-full p-2'}>
         <p className={'capitalize text-white'}>handle Template</p>

          <p className={'bg-[#383E46] text-white capitalize rounded-md mt-1 flex items-center justify-between'}> 
          <div className='flex items-center gap-2 pl-2'>
          <GrRadialSelected  className='text-purple-500 text-[16px]' alt='loading...' />
          custom handle
          </div>
          <span className='bg-[#068A8F] px-3 py-2 rounded-md cursor-pointer'>
          change template</span>
           </p>

          <div className='flex flex-col justify-center items-center gap-1 w-full py-4'>
          <p className={'capitalize text-white flex items-center gap-1'}>handle icon <FaLock className='text-[12px]' /> </p>
          <FaCamera className={'text-white text-[70px] bg-[#383E47] p-4 rounded-md'} />
          </div>

          
        <div className='input-1'>
          <div className='w-full flex justify-between'>
            <p className='text-white'>Handle Name</p>
            <span className='flex gap-3 text-white text-[12px]'><FaLock /> <FaLock /></span>
          </div>
          <input className={'bg-[#383E46] mt-1 placeholder:text-teal-300/70 w-full border-b-2 border-teal-500 focus:outline-none text-white pl-2 '} type='text' placeholder='facebook'></input>
        </div>


        <div className='input-2 mt-3'>
          <div className='w-full flex justify-between'>
            <p className='text-white'>Website URL</p>
            <span className='flex gap-3 text-white text-[12px]'><FaLock /> <FaLock /></span>
          </div>
          <input className={'bg-[#383E46] mt-1 placeholder:text-teal-300/70 w-full border-b-2 border-teal-500 focus:outline-none text-white pl-2 '}
           type='text' placeholder='http://www.facebook.com'></input>
        </div>


        <div className='input-3 mt-3'>
          <div className='w-full flex justify-between'>
            <p className='text-white'>application package name</p>
            <span className='flex gap-1 text-white text-[12px]'>
            <FaLock /> <IoLogoAndroid  className={'bg-[#1A6436] text-[16px]'}/> <FaLock /></span>
          </div>
          <input className={'bg-[#383E46] mt-1 placeholder:text-teal-300/70 w-full border-b-2 border-teal-500 focus:outline-none text-white pl-2 '}
           type='text' placeholder='com.example.app'></input>
        </div>

         <button className='w-full text-center text-white py-2 bg-[#383E46] mt-2'
         onClick={()=>{
          dispatch(setManageField(true))
         }}>Manage field</button>

         </div>
    </div>

    )}

  
   
 {manageField &&(

    <div className={'inset-0 absolute flex flex-col bg-blue-300 w-full h-full'}>
         
    <div className="h-[50px] navbar bg-[#4C4959] flex justify-between px-4 items-center">
  <div className="flex items-center gap-2">
    <FaArrowLeft className="text-white text-[20px] cursor-pointer" onClick={()=>{
      dispatch(setManageField(false))
    }}/>
    <p className="text-white tracking-wide text-xl capitalize">Handle field</p>
  </div>


  <div className={'flex items-center text-[23px] gap-2 text-white ml-3'}>
  <IoAddOutline />
  <IoLayers className={'cursor-pointer'} onClick={()=>{
    dispatch(setEditLayer(true))
  }} />
  <MdDone className={'cursor-pointer'} onClick={()=>{
    dispatch(setEditLayer(false))
  }}/>
   
   

  </div>
 
    </div>
   
   <div className={'flex-1 bg-[#222832] w-full p-2'}>
        
    

      <div className={'p-2 w-full h-[400px] overflow-y-auto scrollbar-custom  flex flex-col gap-3 '}>

       <div className=' input-1 flex items-end gap-3'> 

        <div className={` ${editLayer ? 'w-11/12' : 'w-full' } `}>
          <div className='w-full flex justify-between'>
            <p className='text-white'>First Name</p>
            <span className='flex gap-3 text-white text-[12px]'><FaLock /> <FaLock /></span>
          </div>
          <input className={'bg-[#383E46] mt-1 w-full border-b-2 border-teal-500 focus:outline-none text-white pl-2 '} type='text' placeholder='facebook'></input>
      </div>

      <img src={editLayers} className={` ${editLayer ? 'inline-block' : 'hidden'} h-[40px] px-8 py-2 bg-teal-400`} alt='loading...'></img>

      </div>


       <div className=' input-1 flex items-end gap-3'> 

        <div className={` ${editLayer ? 'w-11/12' : 'w-full' } `}>
          <div className='w-full flex justify-between'>
            <p className='text-white'>First Name</p>
            <span className='flex gap-3 text-white text-[12px]'><FaLock /> <FaLock /></span>
          </div>
          <input className={'bg-[#383E46] mt-1 w-full border-b-2 border-teal-500 focus:outline-none text-white pl-2 '} type='text' placeholder='facebook'></input>
      </div>

      <img src={editLayers} className={` ${editLayer ? 'inline-block' : 'hidden'} h-[40px] px-8 py-2 bg-teal-400`} alt='loading...'></img>

      </div>


       <div className=' input-1 flex items-end gap-3'> 

        <div className={` ${editLayer ? 'w-11/12' : 'w-full' } `}>
          <div className='w-full flex justify-between'>
            <p className='text-white'>Last Name</p>
            <span className='flex gap-3 text-white text-[12px]'><FaLock /> <FaLock /></span>
          </div>
          <input className={'bg-[#383E46] mt-1 w-full border-b-2 border-teal-500 focus:outline-none text-white pl-2 '}
          type='text' placeholder='last name'></input>
      </div>

      <img src={editLayers} className={` ${editLayer ? 'inline-block' : 'hidden'} h-[40px] px-8 py-2 bg-teal-400`} alt='loading...'></img>

      </div>


       <div className=' input-1 flex items-end gap-3'> 

        <div className={` ${editLayer ? 'w-11/12' : 'w-full' } `}>
          <div className='w-full flex justify-between'>
            <p className='text-white'>Username</p>
            <span className='flex gap-3 text-white text-[12px]'><FaLock /> <FaLock /></span>
          </div>
          <input className={'bg-[#383E46] mt-1 w-full border-b-2 border-teal-500 focus:outline-none text-white pl-2 '}
           type='text' placeholder='username'></input>
      </div>

      <img src={editLayers} className={` ${editLayer ? 'inline-block' : 'hidden'} h-[40px] px-8 py-2 bg-teal-400`} alt='loading...'></img>

      </div>


       <div className=' input-1 flex items-end gap-3'> 

        <div className={` ${editLayer ? 'w-11/12' : 'w-full' } `}>
          <div className='w-full flex justify-between'>
            <p className='text-white'>Password</p>
            <span className='flex gap-3 text-white text-[12px]'><FaLock /> <FaLock /></span>
          </div>
          <input className={'bg-[#383E46] mt-1 w-full border-b-2 border-teal-500 focus:outline-none text-white pl-2 '}
           type='text' placeholder='password'></input>
      </div>

      <img src={editLayers} className={` ${editLayer ? 'inline-block' : 'hidden'} h-[40px] px-8 py-2 bg-teal-400`} alt='loading...'></img>

      </div>


       <div className=' input-1 flex items-end gap-3'> 

        <div className={` ${editLayer ? 'w-11/12' : 'w-full' } `}>
          <div className='w-full flex justify-between'>
            <p className='text-white'>Phone</p>
            <span className='flex gap-3 text-white text-[12px]'><FaLock /> <FaLock /></span>
          </div>
          <input className={'bg-[#383E46] mt-1 w-full border-b-2 border-teal-500 focus:outline-none text-white pl-2 '} 
          type='text' placeholder='+92 312 34567890'></input>
      </div>

      <img src={editLayers} className={` ${editLayer ? 'inline-block' : 'hidden'} h-[40px] px-8 py-2 bg-teal-400`} alt='loading...'></img>

      </div>

      
       <div className=' input-1 flex items-end gap-3'> 

        <div className={` ${editLayer ? 'w-11/12' : 'w-full' } `}>
          <div className='w-full flex justify-between'>
            <p className='text-white'>Created At</p>
            <span className='flex gap-3 text-white text-[12px]'><FaLock /> <FaLock /></span>
          </div>
          <input className={'bg-[#383E46] mt-1 w-full border-b-2 border-teal-500 focus:outline-none text-white pl-2 '} 
          type='text' placeholder='https:/www.facebook.com'></input>
      </div>

      <img src={editLayers} className={` ${editLayer ? 'inline-block' : 'hidden'} h-[40px] px-8 py-2 bg-teal-400`} alt='loading...'></img>

      </div>

     
      
         



     

     

      </div>
     
     <div>

     </div>

     </div>
       

   </div>



  )}


   
   <Sidebar />
        </div>


    );
}

export default Handles;
