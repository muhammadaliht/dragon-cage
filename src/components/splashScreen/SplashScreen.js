/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import backgroundImage from "../../drawable/bg.jpeg";
import logo from "../../drawable/logo.png";

const SplashScreen = () => {
  return (
    <div>
      <div
        className={"h-screen w-screen absolute bg-cover bg-center"}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={"relative inset-0 h-screen w-screen"}>
          <div className={"grid grid-cols-1 h-screen "}>

            <div className={"pl-8 pt-10  "}>
              <div
                className={"w-[310px] bg-[#18162b9e] backdrop-blur-sm h-[80px]"}
              >
                <div className={"flex h-full w-full"}>
                  <div
                    className={"h-full w-1/3 flex justify-center items-center "}
                  >
                    <img src={logo} className={"h-[50px]"} />
                  </div>
                  <div className={"h-full w-2/3 flex flex-col justify-center"}>
                    <p
                      className={
                        "uppercase font-semibold text-white tracking-[3px]"
                      }
                      style={{ wordSpacing: "2px" }}
                    >
                      dragon cage
                    </p>
                    <p className={"capitalize text-white text-sm"}>
                      developer edition
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={" p-4 empty-section"}></div>

            <div className={"flex flex-col justify-end items-center pb-4 bg-gradient-to-b from-[#c9c9c900] to-[#000000fc] "}>
            <p className={'text-white capitalize text-xl tracking-widest'}>unleash the power of sacred vault</p>
            <p className={'text-white capitalize text-2xl font-mono font-medium tracking-widest'}>A Sentinel Revered by Dragon Lords</p>
            
            <div className="w-[900px] h-3 bg-[rgb(109,59,166)] my-2 rounded-full overflow-hidden">
             <div className="h-full bg-gradient-to-r from-[#EDA475] via-[#913D3B] to-[#6B3C50] rounded-full animate-progress"
            style={{ animationDuration: "3s" }}></div>
            </div>

            <p className={'text-white text-md font-medium tracking-widest'}>Powered by @electrodragon inc</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
