import React, { useEffect, useState } from 'react';
import logo from '../../drawable/logo.png'
import { useSelector } from 'react-redux';
import { selectComplete, selectFailure } from '../../features/counter/setupSlice';
import { Link } from 'react-router-dom';




const SetupNavbar = () => {

    const failure = useSelector(selectFailure);
    const complete = useSelector(selectComplete);
    
    const [time, setTime] = useState(10);
    
    useEffect(() => {
        if (time > 4) { // Only set timeout if time is greater than 0
            const timer = setTimeout(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);

            // Cleanup the timer
            return () => clearTimeout(timer);
        }
    }, [time]); // Dependency array

    const fourSec = String(time).padStart(2, '0') + ' seconds';

    const displayTime = () => {
        if (failure) {
          return '2 seconds'; 
        } 

        else if(complete){
          return 'completed'
        }
        else {
          return fourSec; 
        }
      };

    return (
<div>
    <div className={'flex flex-col md:flex-row h-full w-full justify-between'}>

      <div className={'flex w-full md:w-[300px] h-[80px]'}>

         <div className={"h-full w-1/3 flex justify-center items-center"}>
            <img src={logo} className={"h-[40px] md:h-[50px]"} alt="logo" />
          </div>

          
          <div className={"h-full w-2/3 flex flex-col justify-center"}>
          <Link to={'/'}>
             <p className={"uppercase font-semibold text-white tracking-[2px] md:tracking-[3px] text-sm md:text-base"}
                style={{ wordSpacing: "1px" }}> dragon cage </p>
             
             <p className={"capitalize text-white text-xs md:text-sm"}> developer edition</p>
             </Link>
          </div>
         

      </div>


      <div className={'flex flex-col justify-center items-end pr-3 h-[80px] tracking-wide font-semibold text-white text-xs md:text-base'}>
      <p className={'text-center md:text-right'}>Setup will complete in approximately:</p>
      <p className={'text-center md:text-right'}>{displayTime()}</p>

      </div>
        
    </div>

</div>
    );
}

export default SetupNavbar;
