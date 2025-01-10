import React, { useState } from 'react';
import { MdOutlineCancel } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import backgroundImage from '../../drawable/bg.jpeg';
import char1 from '../../drawable/Alex.webp'
import char2 from '../../drawable/ancient-ogre.png'
import char3 from '../../drawable/angel.png'
import char4 from '../../drawable/bruce.png'
import char5 from '../../drawable/beek-doo.png'
import char6 from '../../drawable/king.png'
import Navbar from '../navbar/Navbar';
import { GiCancel } from "react-icons/gi";
import { GoCommandPalette } from "react-icons/go";




const CreatePrimal = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Close modal if clicked outside
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal") {
      closeModal();
    }
  };
   

  

 return (
   <div>


<div>
    <div className={"h-screen w-screen absolute bg-cover bg-center"}
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className={'relative inset-0 overflow-hidden h-full w-full bg-[#101010c7]'}>
                
        <Navbar title={'craete primal'} btn1Icon={GiCancel} btn1={'cancel'}
                     btn2Icon={GoCommandPalette} btn2={'execute'}
                     btn1Path={'/'}
                     btn2Path={'/setup-primal'}
                       />

        <div className='h-full w-full overflow-y-auto px-3 pb-[100px] overflow-x-hidden scroll-container'>

<lable className={'capitalize  text-white tracking-wide'}>Primal Nick Name</lable>
<input placeholder={'Dragon Cage Primal'} className={'focus:outline-none text-white w-full mt-1 pl-2 h-[37px] bg-transparent border-[1.5px] border-[#238B98]'} ></input>
 
 <div className={'flex justify-between text-white mt-3 mb-5 font-medium tracking-wider'}>
 <p className={'uppercase'}>empower your defence</p>
 <p>(3 Minimum)</p>
 </div>

<lable className={'capitalize text-white tracking-wide'}>Mother First Name</lable>
<input type={'text'} placeholder={'Luna'} className={'focus:outline-none w-full text-white mt-1 pl-2 h-[37px] bg-transparent border-[1.5px] border-[#238B98]'} ></input>
 
 
<lable className={'capitalize text-white tracking-wide'}>Father first Name</lable>
<input type={'text'} placeholder={'sire'} className={'focus:outline-none w-full text-white mt-1 pl-2 h-[37px] bg-transparent border-[1.5px] border-[#238B98]'} ></input>
 
<lable className={'capitalize text-white tracking-wide'}>mother passport number</lable>
<input type={'text'} placeholder={'AB123456'} className={'focus:outline-none w-full text-white mt-1 pl-2 h-[37px] bg-transparent border-[1.5px] border-[#238B98]'} ></input>
 
<lable className={'capitalize text-white tracking-wide'}>father passport number</lable>
<input type={'text'} placeholder={'AB123456'} className={'focus:outline-none w-full text-white mt-1 pl-2 h-[37px] bg-transparent border-[1.5px] border-[#238B98]'} ></input>
 
<lable className={'capitalize text-white tracking-wide'}>your passport number</lable>
<input type={'text'} placeholder={'AB123456'} className={'focus:outline-none w-full text-white mt-1 pl-2 h-[37px] bg-transparent border-[1.5px] border-[#238B98]'} ></input>
 
<lable className={'capitalize text-white tracking-wide'}>mother birth date</lable>
<input type={'text'} placeholder={'1950'} className={'focus:outline-none w-full text-white mt-1 pl-2 h-[37px] bg-transparent border-[1.5px] border-[#238B98]'} ></input>
 
<lable className={'capitalize text-white tracking-wide'}>your X city name</lable>
<input type={'text'} placeholder={'Lumina'} className={'focus:outline-none w-full text-white mt-1 pl-2 h-[37px] bg-transparent border-[1.5px] border-[#238B98]'} ></input>
 
<lable className={'capitalize text-white tracking-wide'}>your birth city Name</lable>
<input type={'text'} placeholder={'Starwood'} className={'focus:outline-none w-full text-white mt-1 pl-2 h-[37px] bg-transparent border-[1.5px] border-[#238B98]'} ></input>
 
<div className="relative">
   <label className="capitalize text-white tracking-wide">
     Favourite Tekken game character
   </label>
   <input
     type="text"
     placeholder="Jin Kazama"
     className="focus:outline-none w-full text-white mt-1 pl-2 h-[37px] bg-transparent border-[1.5px] border-[#238B98]"
   />
   <button
     onClick={openModal}
     className="text-white absolute right-2 bottom-2 text-xl"
   >
     <VscGitPullRequestGoToChanges />
   </button>
 </div>
{isModalOpen && (
   <div
     id="modal"
     className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center"
     onClick={handleOutsideClick}
   >
     <div className="bg-[#222832] p-6 rounded shadow-lg grid gap-2 grid-cols-1 sm:grid-cols-4 h-[500px] overflow-y-auto">
     

     <button className='flex justify-center items-center hover:scale-105 border-2 border-black flex-col px-8 h-[200px] bg-gradient-to-b from-[#224664] to-[#070E15]'>
     <div className='h-[120px] w-[150px]'>
     <img src={char1} alt={'loading...'} className='object-contain h-full w-full' ></img>
     </div>
     <p className={'text-[#238B98]'}>    ------------------------------   </p>
     <p className={'capitalize text-white tracking-wider font-mono'}>Alex</p>
     </button>

     <button className='flex justify-center hover:scale-105  border-2 border-black items-center flex-col px-8 h-[200px] bg-gradient-to-b from-[#224664] to-[#070E15]'>
     <div className='h-[120px] w-[150px]'>
     <img src={char2} alt={'loading...'} className='object-contain h-full w-full' ></img>
     </div>
     <p className={'text-[#238B98]'}>    ------------------------------   </p>
     <p className={'capitalize text-white tracking-wider font-mono'}>ancient ogre</p>
     </button>


     <button className='flex justify-center hover:scale-105 border-2 border-black items-center flex-col px-8 h-[200px] bg-gradient-to-b from-[#224664] to-[#070E15]'>
     <div className='h-[120px] w-[150px]'>
     <img src={char3} alt={'loading...'} className='object-contain h-full w-full' ></img>
     </div>
     <p className={'text-[#238B98]'}>    ------------------------------   </p>
     <p className={'capitalize text-white tracking-wider font-mono'}>Angel</p>
     </button>


     <button className='flex justify-center hover:scale-105 border-2 border-black items-center flex-col px-8 h-[200px] bg-gradient-to-b from-[#224664] to-[#070E15]'>
     <div className='h-[120px] w-[150px]'>
     <img src={char4} alt={'loading...'} className='object-contain h-full w-full' ></img>
     </div>
     <p className={'text-[#238B98]'}>    ------------------------------   </p>
     <p className={'capitalize text-white tracking-wider font-mono'}>Bruce</p>
     </button>


     <button className='flex justify-center hover:scale-105 border-2 border-black items-center flex-col px-8 h-[200px] bg-gradient-to-b from-[#224664] to-[#070E15]'>
     <div className='h-[120px] w-[150px]'>
     <img src={char5} alt={'loading...'} className='object-contain h-full w-full' ></img>
     </div>
     <p className={'text-[#238B98]'}>    ------------------------------   </p>
     <p className={'capitalize text-white tracking-wider font-mono'}>beek doo</p>
     </button>



     <button className='flex justify-center hover:scale-105 border-2 border-black items-center flex-col px-8 h-[200px] bg-gradient-to-b from-[#224664] to-[#070E15]'>
     <div className='h-[120px] w-[150px]'>
     <img src={char6} alt={'loading...'} className='object-contain h-full w-full' ></img>
     </div>
     <p className={'text-[#238B98]'}>    ------------------------------   </p>
     <p className={'capitalize text-white tracking-wider font-mono'}>King</p>
     </button>

     
      
     </div>
   </div>
 )}


<lable className={'capitalize text-white tracking-wide'}>childhood friend's cast name</lable>
<input type={'text'} placeholder={'sentinel'} className={'focus:outline-none w-full text-white mt-1 pl-2 h-[37px] bg-transparent border-[1.5px] border-[#238B98]'} ></input>
 
<lable className={'capitalize text-white tracking-wide'}>reddit user name</lable>
<input type={'text'} placeholder={'selistealseeker91'} className={'focus:outline-none w-full text-white mt-1 pl-2 h-[37px] bg-transparent border-[1.5px] border-[#238B98]'} ></input>
 
<lable className={'capitalize text-white tracking-wide'}>Initial deposite amount in your first bank account</lable>
<input type={'text'} placeholder={'1500'} className={'focus:outline-none w-full text-white mt-1 pl-2 h-[37px] bg-transparent border-[1.5px] border-[#238B98]'} ></input>
 
<lable className={'capitalize text-white tracking-wide'}>your university roll number</lable>
<input placeholder={'BX1234567'} className={'focus:outline-none w-full text-white mt-1 pl-2 h-[37px] bg-transparent border-[1.5px] border-[#238B98]'} ></input>
 
 <div className={'flex justify-between mt-2 mb-4'}>
 <p className={'text-white capitalize tracking-wider'}>have you ever lived outside of your current country of residence</p>
 <div className={'flex gap-2'}>
   <button className={' hover:bg-[#238B98] hover:border-white uppercase border-2 border-[#238B98] flex items-center gap-1 text-white font-sm px-2'}> 
   <MdOutlineCancel />
   no</button>
   <button className={'hover:bg-[#238B98] hover:border-white uppercase border-2 border-[#238B98] flex items-center gap-1 text-white font-sm px-2'}> 
   <TiTick />
   yes</button>
 </div>
 </div>

 <lable className={'capitalize text-white tracking-wide'}>creation date of your first bank account</lable>
<input placeholder={'mm/dd/yyyy'} className={'focus:outline-none w-full text-white mt-1 pl-2 h-[37px] bg-transparent border-[1.5px] border-[#238B98]'} ></input>
 

        </div>
                   
                </div>
            </div>
        </div>
     
   


  
         
   </div>
  );
}

export default CreatePrimal;
