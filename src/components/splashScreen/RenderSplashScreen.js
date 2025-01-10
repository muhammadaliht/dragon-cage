import React, { useEffect, useState } from 'react';
import PrimalScreen from '../primalScreens/PrimalScreen';
import SplashScreen from './SplashScreen';

const RenderSplashScreen = () => {
    const [showPrimalScreen, setPrimalScreen] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setPrimalScreen(true);
      }, 3000);
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div className="h-screen">
        {showPrimalScreen ? <PrimalScreen /> : <SplashScreen />}
      </div>
    );
}

export default RenderSplashScreen;
