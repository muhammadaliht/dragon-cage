import React, { useEffect, useState } from 'react';
import logo from '../../drawable/logo.png';
import { useSelector } from 'react-redux';
import { selectCollectInfo, selectComplete, selectEncryptionPre, selectFailure, selectFirebaseConfig, selectGeneratingPre, selectPassword, selectPreservingCred } from '../../features/counter/setupSlice';

const SetupFooter = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 5); // Loop through images
        }, 200); // Change every 1 second

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    const text1 = "assembling information!";
    const text2 = "initiating tink primitive config";

    const generatingPre = useSelector(selectGeneratingPre);
    const encryptionPre = useSelector(selectEncryptionPre);
    const collectInfo = useSelector(selectCollectInfo);
    const preservingCred = useSelector(selectPreservingCred);
    const firebaseConfig = useSelector(selectFirebaseConfig);
    const password = useSelector(selectPassword);
    const failure = useSelector(selectFailure);
    const complete = useSelector(selectComplete);
 


   

    const renderContent = ()=>{
        if(generatingPre || encryptionPre){
            return(
                <>
                     <p className={'uppercase text-white font-bold tracking-widest'} >{text2}</p>
                     <p className={'capitalize text-white'}>please wait...</p>
                </>
            )
        }

        else if(collectInfo){
            return(
                <>
                     <p className={'uppercase text-white font-bold tracking-widest'} >{text1}</p>
                     <p className={'capitalize text-white'}>please wait...</p>
                </>
            )

        }
    }



    return (
        <div className={`flex flex-col md:flex-row w-full
         ${preservingCred || firebaseConfig || password || failure || complete ? 'bg-[#291d33]' : 'bg-[#4a385fb5]'} h-full`}>

            <div className="flex-1 h-full flex flex-col justify-center pl-2 md:pl-4">
               {renderContent()}
            </div>
            <div className="flex flex-1 flex-row items-center justify-center md:justify-end pr-2 md:pr-4 h-full gap-1">
                {[...Array(5)].map((_, index) => (
                    <img
                        key={index}
                        src={logo}
                        className={`h-[20px] md:h-[28px] w-auto image ${currentImageIndex === index ? 'pop' : ''}`}
                        alt="logo"
                    />
                ))}
            </div>
        </div>
    );
};

export default SetupFooter;
