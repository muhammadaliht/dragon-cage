import React from 'react';

import { GiWorld } from "react-icons/gi";
import fb from '../../drawable/facebooklogo.png';
import instagram from '../../drawable/InstagramLogo.webp';
import google from '../../drawable/googleLogo.webp';
import twitter from '../../drawable/twitterLogo.png';
import snapchat from '../../drawable/snapchatLogo.svg';
import { FaArrowLeft, FaChevronRight, FaLock } from "react-icons/fa6";

import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import { selectFacebook, selectNewAccount, selectNewHandle, setFacebook, setNewAccount, setNewHandle } from '../../features/counter/accountSlice';
import NavbarWithSearch from '../navbar/NavbarWithSearch';
import { IoAddOutline } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
import charc from '../../drawable/ancient-ogre.png';
import { BsThreeDotsVertical } from 'react-icons/bs';


const Account = () => {
    const dispatch = useDispatch();
    const newHandle = useSelector(selectNewHandle);
    const facebook = useSelector(selectFacebook);
    const newAccount = useSelector(selectNewAccount);

return (
<div>
<div className="w-screen h-screen flex flex-col relative">
 
 <NavbarWithSearch title="accounts" addValueAccount='true' addValueSnippet='false'/>



<div className="flex-1 flex flex-col justify-center items-center relative bg-[#222832]">
        <GiWorld className={'text-3xl text-white'}/>
        <p className='text-white capitalize font-normal text-md'>no handles available yet!</p>
        <button className={'uppercase text-teal-400 tracking-wider'}
         onClick={()=>{
                dispatch(setNewHandle(true))
            }}
        >Create new handle now</button>
        

        {newHandle &&(
        <div className={'absolute flex flex-col gap-1 inset-0 h-full w-full p-3 bg-[#222832]'}>

          <div className=' flex justify-between items-center cursor-pointer p-3 rounded-md bg-[#383E46]'
          onClick={()=>{
            dispatch(setFacebook(true));
          }}>
            <div className='flex items-center gap-1 '>
                <img src={fb} className='h-[20px]' alt='loading...'></img>
               <p className='text-white tracking-wide capitalize text-xl'>facebook</p>
            </div>

            <p className={'text-white text-sm bg-[#212128] p-1 rounded-md'}>99</p>

          </div>


          
          <div className={` flex justify-between items-center cursor-pointer p-3 rounded-md bg-[#383E46]`}
          onClick={()=>{
            dispatch(setFacebook(true));
          }}>
            <div className='flex items-center '>
                <img src={google} className='h-[28px]' alt='loading...'></img>
               <p className='text-white tracking-wide capitalize text-xl'>google</p>
            </div>

            <p className={'text-white text-sm bg-[#212128] p-1 rounded-md'}>99</p>

          </div>
        



          <div className=' flex justify-between items-center cursor-pointer p-3 rounded-md bg-[#383E46]'
          onClick={()=>{
            dispatch(setFacebook(true));
          }}>
            <div className='flex items-center gap-1 '>
                <img src={twitter} className='h-[20px]' alt='loading...'></img>
               <p className='text-white tracking-wide capitalize text-xl'>twiiter X</p>
            </div>

            <p className={'text-white text-sm bg-[#212128] p-1 rounded-md'}>99</p>

          </div>


          <div className=' flex justify-between cursor-pointer items-center p-3 rounded-md bg-[#383E46]'
          onClick={()=>{
            dispatch(setFacebook(true));
          }}>
            <div className='flex items-center gap-1 '>
                <img src={instagram} className='h-[20px]' alt='loading...'></img>
               <p className='text-white tracking-wide capitalize text-xl'>Instagram</p>
            </div>

            <p className={'text-white text-sm bg-[#212128] p-1 rounded-md'}>99</p>

          </div>

          <div className=' flex justify-between cursor-pointer items-center py-3 pr-3 pl-1 rounded-md bg-[#383E46]'
          onClick={()=>{
            dispatch(setFacebook(true));
          }}>
            <div className='flex items-center '>
                <img src={snapchat} className='h-[30px]' alt='loading...'></img>
               <p className='text-white tracking-wide capitalize text-xl'>snapchat</p>
            </div>

            <p className={'text-white text-sm bg-[#212128] p-1 rounded-md'}>99</p>

          </div>

         </div>

        )}
        </div>

      
      {facebook &&(
       <div className={'absolute inset-0 flex flex-col bg-blue-500 h-full w-full'}>

  <div className="h-[50px] navbar bg-[#4C4959] flex justify-between px-4 items-center">
  <div className="flex items-center gap-2">
    <FaArrowLeft className="text-white text-[20px] cursor-pointer"
      onClick={()=>{
            dispatch(setFacebook(false));
          }}
    />
    <img src={fb} className='h-[22px]' alt='loading...'></img>
    <p className="text-white tracking-wide text-xl capitalize">facebook</p>
  </div>

  <div className={'flex items-center '}>

  <div className={'flex items-center gap-1 border px-2 border-teal-300 '}>
  <CiSearch className={'text-zinc-300'} />
  <input className={'bg-transparent focus:outline-none text-white'} type='text' placeholder='Search'></input>
  </div>

  <IoAddOutline className={'text-[23px] text-white ml-3 cursor-pointer'} onClick={()=>(
    dispatch(setNewAccount(true))
  )} />
  </div>
 
</div>

    
  <div className={'flex-1 w-full bg-[#222832] overflow-y-auto scroll-container flex p-2  flex-col gap-2'}>

  <div className='flex p-3 mt-3 justify-between rounded-md bg-[#383E46]'>

   <div>
    <div className="flex items-center w-full">
     <img src={fb} alt="Facebook Icon" className="h-[25px] mr-3"/>
      <div className="flex flex-col justify-center text-sm leading-5">
        <p className="text-white">Account</p>
        <p className={'text-zinc-400'}>March 10, 2022 - 12:43 PM</p>
      </div>
   </div>

  <p className={'text-teal-400 mt-4 capitalize'}>First Name <span className={'text-white'}>Hassnain</span></p>
  <p className={'text-teal-400 capitalize'}>last Name <span className={'text-white'}>Malik</span></p>
  <p className={'text-teal-400 capitalize'}>email <span className={'text-white'}>hassnainmalik726@gmail.com</span></p>
  <p className={'text-teal-400 capitalize'}>passowrd <span className={'text-white'}>*******</span></p>
  <p className={'text-teal-400 capitalize'}>Linked realms</p>

  <div className="flex gap-1 items-center">
  {Array.from({ length: 7 }).map((_, index) => (
    <img
      key={index}
      src={charc}
      alt="character"
      className="h-[35px]"
    />
  ))}
  </div>

 </div> 

 <div className={'flex flex-col items-end justify-between text-white'}>
  <BsThreeDotsVertical />
  <p className='flex items-center capitalize '>see more<span className={'text-teal-400 mt-1 ml-1'}><FaChevronRight /></span></p>

  </div>
    
  </div>


  <div className='flex p-3 justify-between rounded-md bg-[#383E46]'>

   <div>
    <div className="flex items-center w-full">
     <img src={fb} alt="Facebook Icon" className="h-[25px] mr-3"/>
      <div className="flex flex-col justify-center text-sm leading-5">
        <p className="text-white">Account</p>
        <p className={'text-zinc-400'}>March 10, 2022 - 12:43 PM</p>
      </div>
   </div>

  <p className={'text-teal-400 mt-4 capitalize'}>First Name <span className={'text-white'}>Hassnain</span></p>
  <p className={'text-teal-400 capitalize'}>last Name <span className={'text-white'}>Malik</span></p>
  <p className={'text-teal-400 capitalize'}>email <span className={'text-white'}>hassnainmalik726@gmail.com</span></p>
  <p className={'text-teal-400 capitalize'}>passowrd <span className={'text-white'}>*******</span></p>
  <p className={'text-teal-400 capitalize'}>Linked realms</p>

  <div className="flex gap-1 items-center">
  {Array.from({ length: 7 }).map((_, index) => (
    <img
      key={index}
      src={charc}
      alt="character"
      className="h-[35px]"
    />
  ))}
  </div>

 </div> 

 <div className={'flex flex-col items-end justify-between text-white'}>
  <BsThreeDotsVertical />
  <p className='flex items-center capitalize '>see more<span className={'text-teal-400 mt-1 ml-1'}><FaChevronRight /></span></p>

  </div>
    
  </div>

  <div className='flex p-3 justify-between rounded-md bg-[#383E46]'>

<div>
 <div className="flex items-center w-full">
  <img src={fb} alt="Facebook Icon" className="h-[25px] mr-3"/>
   <div className="flex flex-col justify-center text-sm leading-5">
     <p className="text-white">Account</p>
     <p className={'text-zinc-400'}>March 10, 2022 - 12:43 PM</p>
   </div>
</div>

<p className={'text-teal-400 mt-4 capitalize'}>First Name <span className={'text-white'}>Hassnain</span></p>
<p className={'text-teal-400 capitalize'}>last Name <span className={'text-white'}>Malik</span></p>
<p className={'text-teal-400 capitalize'}>email <span className={'text-white'}>hassnainmalik726@gmail.com</span></p>
<p className={'text-teal-400 capitalize'}>passowrd <span className={'text-white'}>*******</span></p>
<p className={'text-teal-400 capitalize'}>Linked realms</p>

<div className="flex gap-1 items-center">
{Array.from({ length: 7 }).map((_, index) => (
 <img
   key={index}
   src={charc}
   alt="character"
   className="h-[35px]"
 />
))}
</div>

</div> 

<div className={'flex flex-col items-end justify-between text-white'}>
<BsThreeDotsVertical />
<p className='flex items-center capitalize '>see more<span className={'text-teal-400 mt-1 ml-1'}><FaChevronRight /></span></p>

</div>
 
</div>


  </div>


      </div>
    )}


    
    {newAccount &&(
  <div className={'inset-0 absolute flex flex-col bg-blue-300 w-full h-full'}>
         
    <div className="h-[50px] navbar bg-[#4C4959] flex justify-between px-4 items-center">
  <div className="flex items-center gap-2">
    <FaArrowLeft className="text-white text-[20px] cursor-pointer"
      onClick={()=>{
            dispatch(setNewAccount(false));
          }}
    />
    <p className="text-white tracking-wide text-xl capitalize">Create New account</p>
  </div>

    <div className={'flex items-center gap-1'}>
      <img src={fb} className='h-[22px]' alt='loading...'></img>
      <p className="text-white tracking-wide text-xl capitalize">facebook</p>
    </div>

  <div className={'flex items-center '}>

  <div className={'flex items-center gap-1 border px-2 border-teal-300 '}>
  <CiSearch className={'text-zinc-300'} />
  <input className={'bg-transparent focus:outline-none text-white'} type='text' placeholder='Search'></input>
  </div>

  <IoAddOutline className={'text-[23px] text-white ml-3'} />
  </div>
 
    </div>
   
   <div className={'flex-1 bg-[#222832] w-full p-2'}>

      <div className={'p-2 w-full h-[400px] overflow-y-auto scrollbar-custom  flex flex-col gap-3 '}>

        <div className='input-1'>
          <div className='w-full flex justify-between'>
            <p className='text-white'>First Name</p>
            <span className='flex gap-3 text-white text-[12px]'><FaLock /> <FaLock /></span>
          </div>
          <input className={'bg-[#383E46] mt-1 w-full border-b-2 border-teal-500 focus:outline-none text-white pl-2 '} type='text' placeholder='facebook'></input>
      </div>

      <div className='input-1'>
          <div className='w-full flex justify-between'>
            <p className='text-white'>Last Name</p>
            <span className='flex gap-3 text-white text-[12px]'><FaLock /> <FaLock /></span>
          </div>
          <input className={'bg-[#383E46] mt-1 w-full border-b-2 border-teal-500 focus:outline-none text-white pl-2 '} type='text' 
          placeholder='last name'></input>
      </div>

      <div className='input-1'>
          <div className='w-full flex justify-between'>
            <p className='text-white'>Username</p>
            <span className='flex gap-3 text-white text-[12px]'><FaLock /> <FaLock /></span>
          </div>
          <input className={'bg-[#383E46] mt-1 w-full border-b-2 border-teal-500 focus:outline-none text-white pl-2 '} type='text'
           placeholder='Username'></input>
      </div>


      <div className='input-1'>
          <div className='w-full flex justify-between'>
            <p className='text-white'>Email</p>
            <span className='flex gap-3 text-white text-[12px]'><FaLock /> <FaLock /></span>
          </div>
          <input className={'bg-[#383E46] mt-1 w-full border-b-2 border-teal-500 focus:outline-none text-white pl-2 '} type='text'
           placeholder='email'></input>
      </div>


      <div className='input-1'>
          <div className='w-full flex justify-between'>
            <p className='text-white'>Password</p>
            <span className='flex gap-3 text-white text-[12px]'><FaLock /> <FaLock /></span>
          </div>
          <input className={'bg-[#383E46] mt-1 w-full border-b-2 border-teal-500 focus:outline-none text-white pl-2 '} type='text' 
          placeholder='passowrd'></input>
      </div>


      <div className='input-1'>
          <div className='w-full flex justify-between'>
            <p className='text-white'>Phone </p>
            <span className='flex gap-3 text-white text-[12px]'><FaLock /> <FaLock /></span>
          </div>
          <input className={'bg-[#383E46] mt-1 w-full border-b-2 border-teal-500 focus:outline-none text-white pl-2 '} 
          type='text' placeholder='+92 312 34567890'></input>
      </div>



      <div className='input-1'>
          <div className='w-full flex justify-between'>
            <p className='text-white'>Created At</p>
            <span className='flex gap-3 text-white text-[12px]'><FaLock /> <FaLock /></span>
          </div>
          <input className={'bg-[#383E46] mt-1 w-full border-b-2 border-teal-500 focus:outline-none text-white pl-2 '} type='text' 
          placeholder='https:/www.facebook.com'></input>
      </div>
      
      </div>
       
       <button className={'capitalize mt-4 text-white bg-[#383E46] w-full text-center p-2'}>add new field</button>

   </div>

    </div>

  )}

</div>

<Sidebar/>

</div>    
);
}

export default Account;
