import React, { useEffect } from 'react';
import backgroundImage from '../../drawable/bg.jpeg';
import SetupNavbar from '../navbar/SetupNavbar';
import SetupFooter from '../footer/SetupFooter';
import { MdPhonelinkSetup } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { BiSolidShow } from "react-icons/bi";
import { RiFirebaseFill } from "react-icons/ri";
import { TbLockPassword } from "react-icons/tb";
import { IoIosWarning } from "react-icons/io";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { resetSetup, selectCollectInfo, selectComplete, selectEncryptionPre, selectFailure, selectFirebaseConfig, selectGeneratingPre, selectPassword, selectPreservingCred, setCollectInfo, setComplete, setEncryptionPre, setFailure, setFirebaseConfig, setGeneratingPre, setPassword, setPreservingCred } from '../../features/counter/setupSlice';
import { useDispatch, useSelector } from 'react-redux';

const SetupPrimal = () => {
   const welcomeTitle = "Welcome To The Developer Edition Setup Wizard";
   const welcomeText = "Thank You For Choosing The Developer Edition Of Our Software! This Version Is Tailored To Meet The Needs Of Developers Like You, Offering Enhanced Speed, Reliability, And Performance. With Features Designed To Streamline Your Development Workflow And A Track Record Of Being Beloved By Developers For Decades, We're Confident That You'll Find The Developer Edition To Be A Valuable Tool In Your Arsenal. Let's Get Started With The Setup Process And Unlock The Full Potential Of Your Development Environment.";

   const collectInfoTitle = "Preparing Data Sets";
   const collectInfoText = "In This Initial Step, We're Gathering The Information You've Provided And Structuring It Into Organized Data Sets. This Process Ensures That Your Preferences And Settings Are Captured Accurately And Efficiently. Whether It's User Preferences, Configuration Details, Or System Requirements, We're Here To Ensure That All Relevant Information Is Collected And Processed Effectively.XxxOnce The Data Is Collected, Our Systern Meticulously Organizes It. Verifying The Completeness And Accuracy Of Each Data Point. We Understand The Importance Of Starting With Accurate And Well-Structured Data To Facilitate A Smooth Installation Process. Rest Assured, Your Information Is Handled With The Utmost Care And Confidentiality. Sit Back And Relax While We Prepare Your Data Sets For The Next Steps Of The Setup Process.";

   const generatingTitle = "Initializing Cryptographic Operations"
   const generatingText = "In This Step. Our System is Leveraging The Power Of The Tink Library To Generate Cryptographic Primitives. These Primitives Are Essential For Ensuring The Security And Integrity Of Your Data Throughout The Installation Process And Beyond. By Utilizing Industry-Standard Cryptographic Techniques, We're Able To Provide Robust Encryption And Authentication Mechanisms To Protect Your Sensitive Information.Our Team Has Carefully Designed And Implemented The Cryptographic Operations To Meet The Highest Standards Of Security And Reliability. Each Cryptographic Primitive Is Generated With Precision And Care, Ensuring That Your Data Remains Safe From Unauthorized Access Or Tampering. As We Progress Through This Step, Rest Assured That Your Data Is In Good Hands. We're Committed To Providing You With A Secure And Trustworthy Installation Experience."

   const encryptionPreTitle = "Enhancing Security With AES Encryption";
   const encryptionPreText = "Our System Utilizes The Advanced Encryption Standard (AES) Algorithm, A Robust And Widely Adopted Encryption Method, To Encrypt The AEAD Primitive Configuration. The Information Provided Earlier Serves As The Key To The AES Algorithm, Ensuring That Only Authorized Parties With Access To The Correct Key Can Decrypt The Encrypted Data. By Encrypting The AEAD Primitive Configuration, We're Safeguarding Sensitive Cryptographic Details And Enhancing The Overall Security Posture Of Your Installation.Rest Assured, Our Encryption Process Follows Industry Best Practices And Standards To Ensure The Confidentiality And Integrity Of Your Data. Your AEAD Primitive Configuration Is Encrypted Securely, Providing Peace Of Mind That Your Cryptographic Operations Are Protected Against Potential Threats."
   
   const completeTitle = "Primal Setup Complete";
   const completeText = "Congratulations! the setup Wizard has successfully configured Primal. you are now ready to explore the capabilities of primal";

  const dispatch = useDispatch();
   const collectInfo = useSelector(selectCollectInfo);
   const generatingPre = useSelector(selectGeneratingPre);
   const encryptionPre = useSelector(selectEncryptionPre);
   const preservingCred = useSelector(selectPreservingCred);
   const firebaseConfig = useSelector(selectFirebaseConfig);
   const password = useSelector(selectPassword);
   const failure = useSelector(selectFailure);
   const complete = useSelector(selectComplete);

  useEffect(() => {
   const timers = [];
   
   timers.push(setTimeout(() =>{
      dispatch(setCollectInfo(true))
   },2000));
   
   timers.push(setTimeout(() => {
     dispatch(setCollectInfo(false));
     dispatch(setGeneratingPre(true));
   }, 3000));

   timers.push(setTimeout(() => {
     dispatch(setGeneratingPre(false));
     dispatch(setEncryptionPre(true));
   }, 4000));

   timers.push(setTimeout(() => {
      dispatch(setCollectInfo(false));
      dispatch(setGeneratingPre(false));
      dispatch(setEncryptionPre(false));
      dispatch(setPreservingCred(true));
    }, 6000));


   return () => {
     timers.forEach(clearTimeout);
     dispatch(resetSetup());
   };
 }, [dispatch])



   const renderContent = () => {
      console.log(`firebaseConfig ${firebaseConfig}`)
      if (collectInfo) {
         return (
            <>
               <p className="text-white tracking-wider font-bold capitalize">{collectInfoTitle}</p>
               <p className="tracking-wide text-zinc-100 mt-3 capitalize">{collectInfoText}</p>
            </>
         );
      }
      else if (generatingPre) {
         return (
            <>
               <p className="text-white tracking-wider font-bold capitalize">{generatingTitle}</p>
               <p className="tracking-wide text-zinc-100 mt-3 capitalize">{generatingText}</p>
            </>
         );
      }
      else if (encryptionPre) {
         return (
            <>
               <p className="text-white tracking-wider font-bold capitalize">{encryptionPreTitle}</p>
               <p className="tracking-wide text-zinc-100 mt-3 capitalize">In This Step, We're Taking The Configuration Of The AEAD Primitive Generated In The Previous Step And Applying Advanced Encryption Techniques To Secure It Further. The JSON Configuration Of The AEAD Primitive Contains Critical Information Necessary For Cryptographic Operations, And Encrypting It Adds An Extra Layer Of Protection Against Unauthorized Access.<br></br> <br></br>{encryptionPreText}</p>
            </>
         );
      }
      else if(preservingCred){
         return(
            <>
            <div className={'flex justify-center items-center w-full h-full'}>
            <div className={'w-4/6 h-full '}>

            <div className={'flex justify-between w-full h-1/7 p-2 bg-[#1E2936]'}>
            <p className={'capitalize text-white tracking-wider font-semibold'}>Primal Setup</p>
            <MdPhonelinkSetup className={'text-white text-xl'} />
            </div>

           <div className="w-full h-3/7 py-8 px-3 bg-black flex items-center">
             <div className="flex items-start gap-4 w-full px-8">
               <FaGithub className="text-white text-8xl flex-shrink-0" />
             <div>
             <p className="text-white text-xl font-bold mb-1"> Configure GitHub Repository Remote Origin</p>
             <p className="text-gray-300 text-[13px] leading-relaxed"> The GitHub repository link serves as the connection point for accessing and managing your project codebase. Please provide the link to your GitHub repository for seamless collaboration and version control.</p>
            </div>
           </div>
          </div>

          <div className="w-full h-3/7 bg-gray-900 flex flex-col justify-center pt-5 pb-3 px-3">
  <p className="text-white font-semibold mb-2">GitHub Remote Origin Address</p>

  <div className="flex items-center bg-gray-800 border border-teal-500 p-1">
   
    <span className="text-gray-400 text-lg">
    <BiSolidShow />
    </span>

    <input
      type="text"
      placeholder="git@github.com:username/repository.git"
      className="bg-transparent text-white text-sm flex-1 outline-none px-2"
    />
  </div>


  <div className="flex justify-end gap-3 mt-3">

    <button className="flex items-center text-md text-white py-[2px] px-2 border-2 border-teal-600 hover:bg-teal-600"
     onClick={()=>{
         dispatch(setFirebaseConfig(false))
         dispatch(setPreservingCred(true))
       }}
       >
      <span className={'text-2xl'}><MdOutlineKeyboardArrowLeft /></span> BACK
    </button>

    <button className="flex items-center text-md text-white py-[2px] px-2 bg-teal-600"
       onClick={()=>{
         dispatch(setFirebaseConfig(true))
         dispatch(setPreservingCred(false))
       }}
   >
    <span className={'text-2xl'}><MdKeyboardArrowRight /></span> NEXT 
    </button>
  </div>

</div>
            </div>
            </div>
            </>
         )
      }

      else if(firebaseConfig){
         return(
            <>
           <div className={'flex justify-center items-center w-full h-full'}>
            <div className={'w-4/6 h-full  bg-green-300'}>

            <div className={'flex justify-between w-full h-1/7 px-2 py-1 bg-[#1E2936]'}>
            <p className={'capitalize text-white tracking-wider font-semibold'}>Primal Setup</p>
            <MdPhonelinkSetup className={'text-white text-xl'} />
            </div>

           <div className="w-full h-2/7 py-2 bg-black flex items-center">
             <div className="flex items-start gap-4 w-full px-8">
               <RiFirebaseFill className="text-white text-8xl flex-shrink-0" />
             <div>
             <p className="text-white text-xl font-bold mb-1">Firebase Configuration Setup</p>
             <p className="text-gray-300 text-[13px] leading-relaxed">Enter your Firebase configuration details below. This will include API keys, authentication details, and other settings required for Firebase integration.</p>
            </div>
           </div>
          </div>

          <div className="w-full h-4/7 bg-gray-900 flex px-3 pb-2 flex-col justify-center">
  <p className="text-white">Firebase Configuration (JSON)</p>
  <p className='text-white text-[12px] border border-teal-600 px-3 py-1'>
  "apiKey": "your-api-key",<br></br>
"authDomain": "your-auth-domain",<br></br>
"projectId": "your-project-id",<br></br>
"storageBucket": "your-storage-bucket",<br></br>
"messagingSenderId": "your-messaging-sender-id",<br></br>
"appId": "your-app-id",<br></br>
"measurementId": "your-measurement-id"


  </p>

 


  <div className="flex justify-end gap-3 mt-2">

    <button className="flex items-center text-md text-white py-[2px] px-2 border-2 border-teal-600 hover:bg-teal-600"
      onClick={()=>{
         dispatch(setPreservingCred(true))
         dispatch(setPassword(false))
       }}
    >
      <span className={'text-2xl'}><MdOutlineKeyboardArrowLeft /></span> BACK
    </button>

    <button className="flex items-center text-md text-white py-[2px] px-2 bg-teal-600"
       onClick={()=>{
         dispatch(setFirebaseConfig(false))
         dispatch(setPassword(true))
       }}
   >
    <span className={'text-2xl'}><MdKeyboardArrowRight /></span> NEXT 
    </button>
  </div>

</div>
            </div>
            </div>
            </>
         )
        

      }

      else if(password){
         return(
            <>
<div className={'flex justify-center items-center w-full h-full'}>
            <div className={'w-4/6 h-full  bg-green-300'}>

            <div className={'flex justify-between w-full h-1/7 p-2 bg-[#1E2936]'}>
            <p className={'capitalize text-white tracking-wider font-semibold'}>Primal Setup</p>
            <MdPhonelinkSetup className={'text-white text-xl'} />
            </div>

           <div className="w-full h-3/7 py-3 px-1 bg-black flex items-center">
             <div className="flex items-start gap-4 w-full px-8">
               <TbLockPassword className="text-white text-8xl flex-shrink-0" />
             <div>
             <p className="text-white text-xl font-bold mb-1"> </p>
             <p className="text-gray-300 text-[13px] leading-relaxed">This password acts as your gateway to the primal realm and will be utilized for all in-primal actions henceforth. It provides both initial access and ongoing security within the primal environment.</p>
            </div>
           </div>
          </div>

          <div className="w-full h-3/7 bg-gray-900 flex flex-col justify-center p-2">
  <p className="text-white font-light mb-2">Administrator Password</p>

  <div className="flex items-center justify-between bg-gray-800 border border-teal-500 p-1">
   
    <input
      type="text"
      placeholder="Cryptic"
      className="bg-transparent text-white text-sm flex-1 outline-none px-2"
    />

     <span className="text-gray-400 text-lg">
    <BiSolidShow />
    </span>
  </div>

  <p className="text-white font-light my-2">Confirm Password</p>

<div className="flex items-center justify-between bg-gray-800 border border-teal-500 p-1">
 
  <input
    type="text"
    placeholder="Confirm Cryptic"
    className="bg-transparent text-white text-sm flex-1 outline-none px-2"
  />

   <span className="text-gray-400 text-lg">
  <BiSolidShow />
  </span>
</div>


  <div className="flex justify-end gap-3 mt-3">

    <button className="flex items-center text-md text-white py-[2px] px-2 border-2 border-teal-600 hover:bg-teal-600"
    onClick={()=>{
         dispatch(setFirebaseConfig(true))
         dispatch(setFailure(false))
       }}
    >
      <span className={'text-2xl'}><MdOutlineKeyboardArrowLeft /></span> BACK
    </button>

    <button className="flex items-center text-md text-white py-[2px] px-2 bg-teal-600"
       onClick={()=>{
         dispatch(setPassword(false))
         dispatch(setFailure(true))
       }}
   >
    <span className={'text-2xl'}><MdKeyboardArrowRight /></span> NEXT 
    </button>
  </div>

</div>
            </div>
            </div>            </>
         )

      }

      else if(failure){
         return(
            <>
               <div className={'flex justify-center items-center w-full h-full'}>
            <div className={'w-4/6 h-full  bg-green-300'}>

            <div className={'flex justify-between w-full h-1/4 p-2 bg-gray-900'}>
            <p className={'capitalize text-white tracking-wider font-semibold'}>Github Push Failure</p>
            <MdPhonelinkSetup className={'text-white text-xl'} />
            </div>

           <div className="w-full h-2/4 py-3 px-3 bg-[#1E2936] flex items-center">
             <div className="flex items-start gap-4 w-full px-8">
               <IoIosWarning className="text-white text-8xl flex-shrink-0" />
             <div>
             <p className="text-white text-xl font-bold mb-1">Something Went Wrong</p>
             <p className="text-gray-300 text-[13px] leading-relaxed"> Application was attempting to push the code to the GitHub Repository, but encountered an issue. The data was not successfully pushed. Please ensure that you have a stable internet connection and review the terminal output for further diagnosis.</p>
            </div>
           </div>
          </div>

          <div className="w-full h-1/4 bg-gray-900 flex flex-col justify-center pt-5 pb-3 px-3">




  <div className="flex justify-end gap-3 mt-3">

    <button className="flex items-center text-md text-white py-[2px] px-2 border-2 border-teal-600 hover:bg-teal-600"
     onClick={()=>{
         dispatch(setPassword(true))
         dispatch(setFailure(false))
       }}
       >
      <span className={'text-2xl'}><MdOutlineKeyboardArrowLeft /></span> BACK
    </button>

    <button className="flex items-center text-md text-white py-[2px] px-2 bg-teal-600"
       onClick={()=>{
         dispatch(setComplete(true))
         dispatch(setFailure(false))
       }}
   >
    <span className={'text-2xl'}><MdKeyboardArrowRight /></span> NEXT 
    </button>
  </div>

</div>
            </div>
            </div>
            </>
         )

      }

      else if(complete){
         return(
            <>
                <p className="text-white tracking-wider font-bold capitalize">{completeTitle}</p>
               <p className="tracking-wide text-zinc-100 mt-3 capitalize">{completeText}</p>
         
            </>
         )
         
      }
      else{
      return (
         <>
            <p className="text-white tracking-wider font-bold capitalize">{welcomeTitle}</p>
            <p className="tracking-wide text-zinc-100 mt-3 capitalize">{welcomeText}</p>
         </>
      );
   }
   };

   return (
      <div>
         <div
            className="h-screen w-screen absolute bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
         >
            <div className="relative inset-0 overflow-hidden h-full w-full">
               <div className="w-full h-1/6 bg-[#4A385F] opacity-95">
                  <SetupNavbar />
               </div>

               <div className="flex h-4/6 w-full">
                  <div className="w-1/5 h-full bg-[#54426bdb] pl-5 flex flex-col gap-4 justify-center">
                  
                  <div className={'flex items-center gap-3'}>
                    <input type='radio'  className={'w-[20px] h-[20px] '} checked={complete || failure || password || collectInfo || generatingPre || encryptionPre || preservingCred || firebaseConfig} readOnly ></input>
                    <p className={`leading-5 ${complete || failure || password || collectInfo || generatingPre || encryptionPre || preservingCred || firebaseConfig ? 'text-[#ffdb1c]' : 'text-white'} font-bold tracking-wide capitalize`}>
                    Collecting<br></br>information</p>
                 </div>

                 <div className={'flex items-center gap-3'}>
                    <input type='radio' className={'w-[20px] h-[20px]'} checked={complete || failure || password || generatingPre || encryptionPre || preservingCred || firebaseConfig}></input>
                    <p className={`${complete || failure || password || generatingPre || encryptionPre || preservingCred || firebaseConfig ? 'text-[#ffdb1c]' : 'text-white'} leading-5 font-bold tracking-wide capitalize`}>
                    generating<br></br>premitive(AEAD)</p>
                 </div>

                    
                 <div className={'flex items-center gap-3'}>
                    <input type='radio' className={'w-[20px] h-[20px]'}checked={complete || failure || password || encryptionPre || preservingCred || firebaseConfig}></input>
                    <p className={`${complete || failure || password || encryptionPre || preservingCred || firebaseConfig ? 'text-[#ffdb1c]' : 'text-white'} leading-5 font-bold tracking-wide capitalize`}>
                    encrypting<br></br>premitive</p>
                 </div>

                 <div className={'flex items-center gap-3'}>
                    <input type='radio' className={'w-[20px] h-[20px]'} checked={complete || failure || password || preservingCred || firebaseConfig}></input>
                    <p className={`${complete || failure || password || preservingCred || firebaseConfig ? 'text-[#ffdb1c]' : 'text-white'} leading-5 font-bold tracking-wide capitalize`}>
                    preserving<br></br>credentials</p>
                 </div>

                 <div className={'flex items-center gap-3'}>
                    <input type='radio' className={`w-[20px] h-[20px]`} readOnly checked={complete}></input>
                    <p className={`${failure ? 'text-red-600' : complete ? 'text-[#ffdb1c]' : 'text-white' }  leading-5 font-bold tracking-wide capitalize`}>
                    finalizing<br></br>build</p>
                 </div>
                 

                  </div>

                  <div className="w-4/5 h-full bg-[#4a385fb5]  py-5 px-4">{renderContent()}</div>
               </div>

               <div className="w-full h-1/6 bg-[#4A385F]">
                  <div className={'w-full h-[6px] bg-[#453259]'}>
                  <div className={`${collectInfo ? 'w-[10%]' :generatingPre ? 'w-[15%]' 
                  :encryptionPre ? 'w-[35%]' :preservingCred ? 'w-[45%]'
                  :firebaseConfig ? 'w-[70%]' :password ? 'w-[95%]' 
                  :failure ? 'w-[95%]'
                  :complete ? 'w-[100%]'
                  : 'w-[5%]'} h-full bg-[#00B2B4] transition-all duration-500`}></div>

                  </div>
                  <SetupFooter/>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SetupPrimal;
