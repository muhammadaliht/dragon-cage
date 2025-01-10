import React from 'react';

import { FaGithub } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import backgroundImage from '../../drawable/bg.jpeg';
import Navbar from '../navbar/Navbar';

const NewPrimal = () => {
    return (
        <div>

<div className={"h-screen w-screen absolute bg-cover bg-center"}
                 style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className={'relative inset-0 overflow-hidden h-full w-full bg-[#101010c7]'}>
                
                     <Navbar title={'select primal'} btn1Icon={FaGithub} btn1={'clone existing'}
                     btn2Icon={FaPlus} btn2={'create primal'}
                     btn1Path={'/new-primal'}
                     btn2Path={'/create-primal'}
                       />

<div className={'flex flex-col justify-center overflow-hidden items-center h-screen w-screen'}>
        <p className={'text-white font-semibold uppercase tracking-wider'}>no primal availabe</p>
       <p className={'text-white capitalize tracking-wide'}>please create or clone Your primal in 
       <span className={'text-[#33b0c0]'}>~/cache/Dragoncage/Primal</span> </p>

        </div>
                   
                </div>
            </div>
       

    

        </div>
    );
}

export default NewPrimal;
