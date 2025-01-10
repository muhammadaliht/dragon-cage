import React, { useState, useEffect } from 'react';
import RenderSplashScreen from './components/splashScreen/RenderSplashScreen';
import { Outlet } from 'react-router-dom';

function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    // Timer to simulate splash screen duration (3 seconds or however long you want)
    const timer = setTimeout(() => {
      setShowSplashScreen(false); // Hide splash screen after 3 seconds
    }, 3000);

    // Cleanup the timer if component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Conditionally render splash screen only initially */}
      {showSplashScreen ? <RenderSplashScreen /> : <Outlet />}
    </>
  );
}

export default App;
