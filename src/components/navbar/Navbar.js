import React from 'react';
import logo from '../../drawable/logo.png';
import { Link } from 'react-router-dom';
import hoverSound from '../../audio/buttonSound.mp3';

const Navbar = ({ title, btn1, btn2, btn1Icon, btn2Icon, btn1Path, btn2Path }) => {


    const playHoverSound = () => {
        const audio = new Audio(hoverSound);
        audio.play().catch(error => {
            console.error("Audio playback", error);
        });
    };
 
   

    return (
        <div className="bg-[#1a1a1a]">
            <div className={'grid grid-cols-2 h-[60px] sm:h-[70px] px-2 sm:px-3'}>
                <div className='flex items-center gap-1'>
                    <img src={logo} className='h-[30px] sm:h-[38px]' alt="Logo" />
                    <Link to={'/'} className={'text-white uppercase font-semibold text-sm sm:text-md tracking-widest'}>
                        {title}
                    </Link>
                </div>


                <div className='flex items-center justify-end gap-2 sm:gap-3 text-white'>
                    <Link
                        to={btn1Path}
                        onMouseEnter={playHoverSound}
                        className={'hover:border-white py-1 uppercase hover:bg-[#238B98] flex items-center gap-1 sm:gap-2 tracking-widest px-2 sm:px-3 font-mono border-2 border-[#238B98] text-xs sm:text-sm'}
                    >
                        {btn1Icon && React.createElement(btn1Icon)} 
                        {btn1}
                    </Link>
                    <Link
                        to={btn2Path}
                        onMouseEnter={playHoverSound}
                        className={'hover:border-white py-1 uppercase hover:bg-[#238B98] flex items-center gap-1 sm:gap-2 tracking-widest px-2 sm:px-3 font-mono border-2 border-[#238B98] text-xs sm:text-sm'}
                    >
                        {btn2Icon && React.createElement(btn2Icon)} 
                        {btn2}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
