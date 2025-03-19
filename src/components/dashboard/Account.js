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
      <NavbarWithSearch title="accounts" addValueAccount="true" addValueSnippet="false" />

      <div className="flex-1 flex flex-col justify-center items-center relative bg-[#222832] p-4 sm:p-6">
        <GiWorld className="text-3xl text-white sm:text-2xl" />
        <p className="text-white capitalize font-normal text-md sm:text-sm">no handles available yet!</p>
        <button
          className="uppercase text-teal-400 tracking-wider text-sm sm:text-xs"
          onClick={() => {
            dispatch(setNewHandle(true));
          }}
        >
          Create new handle now
        </button>

        {newHandle && (
          <div className="absolute flex flex-col gap-1 inset-0 h-full w-full p-3 bg-[#222832] overflow-y-auto scrollbar-hidden">
            <div
              className="flex justify-between items-center cursor-pointer p-3 rounded-md bg-[#383E46] sm:p-2"
              onClick={() => {
                dispatch(setFacebook(true));
              }}
            >
              <div className="flex items-center gap-1">
                <img src={fb} className="h-[20px] sm:h-[15px]" alt="loading..." />
                <p className="text-white tracking-wide capitalize text-xl sm:text-lg">facebook</p>
              </div>
              <p className="text-white text-sm bg-[#212128] p-1 rounded-md sm:text-xs">99</p>
            </div>

            <div
              className="flex justify-between items-center cursor-pointer p-3 rounded-md bg-[#383E46] sm:p-2"
              onClick={() => {
                dispatch(setFacebook(true));
              }}
            >
              <div className="flex items-center">
                <img src={google} className="h-[28px] sm:h-[20px]" alt="loading..." />
                <p className="text-white tracking-wide capitalize text-xl sm:text-lg">google</p>
              </div>
              <p className="text-white text-sm bg-[#212128] p-1 rounded-md sm:text-xs">99</p>
            </div>

            <div className=' flex justify-between items-center cursor-pointer p-3 rounded-md bg-[#383E46] sm:p-2'
              onClick={() => {
                dispatch(setFacebook(true));
              }}>
              <div className='flex items-center gap-1 '>
                <img src={twitter} className='h-[20px] sm:h-[15px]' alt='loading...'></img>
                <p className='text-white tracking-wide capitalize text-xl sm:text-lg'>twiiter X</p>
              </div>

              <p className={'text-white text-sm bg-[#212128] p-1 rounded-md sm:text-xs'}>99</p>

            </div>

            <div className=' flex justify-between cursor-pointer items-center p-3 rounded-md bg-[#383E46] sm:p-2'
              onClick={() => {
                dispatch(setFacebook(true));
              }}>
              <div className='flex items-center gap-1 '>
                <img src={instagram} className='h-[20px] sm:h-[15px]' alt='loading...'></img>
                <p className='text-white tracking-wide capitalize text-xl sm:text-lg'>Instagram</p>
              </div>

              <p className={'text-white text-sm bg-[#212128] p-1 rounded-md sm:text-xs'}>99</p>

            </div>

            <div className=' flex justify-between cursor-pointer items-center py-3 pr-3 pl-1 rounded-md bg-[#383E46] sm:p-2'
              onClick={() => {
                dispatch(setFacebook(true));
              }}>
              <div className='flex items-center '>
                <img src={snapchat} className='h-[30px] sm:h-[20px]' alt='loading...'></img>
                <p className='text-white tracking-wide capitalize text-xl sm:text-lg'>snapchat</p>
              </div>

              <p className={'text-white text-sm bg-[#212128] p-1 rounded-md sm:text-xs'}>99</p>

            </div>

          </div>
        )}
      </div>

      {facebook && (
        <div className="absolute inset-0 flex flex-col bg-blue-500 h-full w-full">
          <div className="h-[50px] navbar bg-[#4C4959] flex justify-between px-4 items-center sm:px-2">
            <div className="flex items-center gap-2">
              <FaArrowLeft
                className="text-white text-[20px] cursor-pointer sm:text-[16px]"
                onClick={() => {
                  dispatch(setFacebook(false));
                }}
              />
              <img src={fb} className="h-[22px] sm:h-[18px]" alt="loading..." />
              <p className="text-white tracking-wide text-xl capitalize sm:text-lg">facebook</p>
            </div>

            <div className="flex items-center">
              <div className="flex items-center gap-1 border px-2 border-teal-300 sm:px-1">
                <CiSearch className="text-zinc-300 sm:text-sm" />
                <input
                  className="bg-transparent focus:outline-none text-white text-sm sm:text-xs"
                  type="text"
                  placeholder="Search"
                />
              </div>
              <IoAddOutline
                className="text-[23px] text-white ml-3 cursor-pointer sm:text-[18px] sm:ml-2"
                onClick={() => dispatch(setNewAccount(true))}
              />
            </div>
          </div>

          <div className="flex-1 w-full bg-[#222832] overflow-y-auto scroll-container flex p-2 flex-col gap-2 sm:p-1">
            <div className="flex p-3 mt-3 justify-between rounded-md bg-[#383E46] sm:p-2 sm:mt-2">
              <div>
                <div className="flex items-center w-full">
                  <img src={fb} alt="Facebook Icon" className="h-[25px] mr-3 sm:h-[20px] sm:mr-2" />
                  <div className="flex flex-col justify-center text-sm leading-5 sm:text-xs">
                    <p className="text-white">Account</p>
                    <p className="text-zinc-400">March 10, 2022 - 12:43 PM</p>
                  </div>
                </div>

                <p className="text-teal-400 mt-4 capitalize sm:mt-2">
                  First Name <span className="text-white">Hassnain</span>
                </p>
                <p className="text-teal-400 capitalize">
                  Last Name <span className="text-white">Malik</span>
                </p>
                <p className="text-teal-400 capitalize">
                  Email <span className="text-white">hassnainmalik726@gmail.com</span>
                </p>
                <p className="text-teal-400 capitalize">
                  Password <span className="text-white">*******</span>
                </p>
                <p className="text-teal-400 capitalize">Linked realms</p>

                <div className="flex gap-1 items-center">
                  {Array.from({ length: 7 }).map((_, index) => (
                    <img
                      key={index}
                      src={charc}
                      alt="character"
                      className="h-[35px] sm:h-[25px]"
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-end justify-between text-white">
                <BsThreeDotsVertical />
                <p className="flex items-center capitalize text-sm sm:text-xs">
                  See more
                  <span className="text-teal-400 mt-1 ml-1">
                    <FaChevronRight />
                  </span>
                </p>
              </div>
            </div>

            <div className='flex p-3 justify-between rounded-md bg-[#383E46] sm:p-2 sm:mt-2'>

              <div>
                <div className="flex items-center w-full">
                  <img src={fb} alt="Facebook Icon" className="h-[25px] mr-3 sm:h-[20px] sm:mr-2" />
                  <div className="flex flex-col justify-center text-sm leading-5 sm:text-xs">
                    <p className="text-white">Account</p>
                    <p className={'text-zinc-400'}>March 10, 2022 - 12:43 PM</p>
                  </div>
                </div>

                <p className={'text-teal-400 mt-4 capitalize sm:mt-2'}>First Name <span className={'text-white'}>Hassnain</span></p>
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
                      className="h-[35px] sm:h-[25px]"
                    />
                  ))}
                </div>

              </div>

              <div className={'flex flex-col items-end justify-between text-white'}>
                <BsThreeDotsVertical />
                <p className='flex items-center capitalize text-sm sm:text-xs'>see more<span className={'text-teal-400 mt-1 ml-1'}><FaChevronRight /></span></p>

              </div>

            </div>

            <div className='flex p-3 justify-between rounded-md bg-[#383E46] sm:p-2 sm:mt-2'>

              <div>
                <div className="flex items-center w-full">
                  <img src={fb} alt="Facebook Icon" className="h-[25px] mr-3 sm:h-[20px] sm:mr-2" />
                  <div className="flex flex-col justify-center text-sm leading-5 sm:text-xs">
                    <p className="text-white">Account</p>
                    <p className={'text-zinc-400'}>March 10, 2022 - 12:43 PM</p>
                  </div>
                </div>

                <p className={'text-teal-400 mt-4 capitalize sm:mt-2'}>First Name <span className={'text-white'}>Hassnain</span></p>
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
                      className="h-[35px] sm:h-[25px]"
                    />
                  ))}
                </div>

              </div>

              <div className={'flex flex-col items-end justify-between text-white'}>
                <BsThreeDotsVertical />
                <p className='flex items-center capitalize text-sm sm:text-xs'>see more<span className={'text-teal-400 mt-1 ml-1'}><FaChevronRight /></span></p>

              </div>

            </div>

          </div>
        </div>
      )}

      {newAccount && (
        <div className="inset-0 absolute flex flex-col bg-blue-300 w-full h-full">
          <div className="h-[50px] navbar bg-[#4C4959] flex justify-between px-4 items-center sm:px-2">
            <div className="flex items-center gap-2">
              <FaArrowLeft
                className="text-white text-[20px] cursor-pointer sm:text-[16px]"
                onClick={() => {
                  dispatch(setNewAccount(false));
                }}
              />
              <p className="text-white tracking-wide text-xl capitalize sm:text-lg">Create New Account</p>
            </div>

            <div className="flex items-center gap-1">
              <img src={fb} className="h-[22px] sm:h-[18px]" alt="loading..." />
              <p className="text-white tracking-wide text-xl capitalize sm:text-lg">facebook</p>
            </div>
          </div>

          <div className="flex-1 bg-[#222832] w-full p-2 sm:p-1">
            <div className="p-2 w-full h-[400px] overflow-y-auto scrollbar-custom flex flex-col gap-3 sm:p-1">
              <div className="input-1">
                <div className="w-full flex justify-between">
                  <p className="text-white text-sm sm:text-xs">First Name</p>
                  <span className="flex gap-3 text-white text-[12px] sm:text-[10px]">
                    <FaLock /> <FaLock />
                  </span>
                </div>
                <input
                  className="bg-[#383E46] mt-1 w-full border-b-2 border-teal-500 focus:outline-none text-white pl-2 text-sm sm:text-xs"
                  type="text"
                  placeholder="facebook"
                />
              </div>

              <div className='input-1'>
                <div className='w-full flex justify-between'>
                  <p className='text-white text-sm sm:text-xs'>Last Name</p>
                  <span className='flex gap-3 text-white text-[12px] sm:text-[10px]'><FaLock /> <FaLock /></span>
                </div>
                <input className={'bg-[#383E46] mt-1 w-full border-b-2 border-teal-500 focus:outline-none text-white pl-2 text-sm sm:text-xs'} type='text'
                  placeholder='last name'></input>
              </div>

              <div className='input-1'>
                <div className='w-full flex justify-between'>
                  <p className='text-white text-sm sm:text-xs'>Username</p>
                  <span className='flex gap-3 text-white text-[12px] sm:text-[10px]'><FaLock /> <FaLock /></span>
                </div>
                <input className={'bg-[#383E46] mt-1 w-full border-b-2 border-teal-500 focus:outline-none text-white pl-2 text-sm sm:text-xs'} type='text'
                  placeholder='Username'></input>
              </div>


              <div className='input-1'>
                <div className='w-full flex justify-between'>
                  <p className='text-white text-sm sm:text-xs'>Email</p>
                  <span className='flex gap-3 text-white text-[12px] sm:text-[10px]'><FaLock /> <FaLock /></span>
                </div>
                <input className={'bg-[#383E46] mt-1 w-full border-b-2 border-teal-500 focus:outline-none text-white pl-2 text-sm sm:text-xs'} type='text'
                  placeholder='email'></input>
              </div>


              <div className='input-1'>
                <div className='w-full flex justify-between'>
                  <p className='text-white text-sm sm:text-xs'>Password</p>
                  <span className='flex gap-3 text-white text-[12px] sm:text-[10px]'><FaLock /> <FaLock /></span>
                </div>
                <input className={'bg-[#383E46] mt-1 w-full border-b-2 border-teal-500 focus:outline-none text-white pl-2 text-sm sm:text-xs'} type='text'
                  placeholder='passowrd'></input>
              </div>


              <div className='input-1'>
                <div className='w-full flex justify-between'>
                  <p className='text-white text-sm sm:text-xs'>Phone </p>
                  <span className='flex gap-3 text-white text-[12px] sm:text-[10px]'><FaLock /> <FaLock /></span>
                </div>
                <input className={'bg-[#383E46] mt-1 w-full border-b-2 border-teal-500 focus:outline-none text-white pl-2 text-sm sm:text-xs'}
                  type='text' placeholder='+92 312 34567890'></input>
              </div>



              <div className='input-1'>
                <div className='w-full flex justify-between'>
                  <p className='text-white text-sm sm:text-xs'>Created At</p>
                  <span className='flex gap-3 text-white text-[12px] sm:text-[10px]'><FaLock /> <FaLock /></span>
                </div>
                <input className={'bg-[#383E46] mt-1 w-full border-b-2 border-teal-500 focus:outline-none text-white pl-2 text-sm sm:text-xs'} type='text'
                  placeholder='https:/www.facebook.com'></input>
              </div>

            </div>

            <button className={'capitalize mt-4 text-white bg-[#383E46] w-full text-center p-2'}>add new field</button>

          </div>

        </div>

      )}

    </div>

    <Sidebar />
  </div>
);
}

export default Account;
