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

            <div className={"pl-4 pt-6 sm:pl-8 sm:pt-10"}>
              <div
                className={
                  "w-[250px] sm:w-[310px] bg-[#18162b9e] backdrop-blur-sm h-[60px] sm:h-[80px] rounded-lg"
                }
              >
                <div className={"flex h-full w-full"}>
                  <div
                    className={
                      "h-full w-1/3 flex justify-center items-center"
                    }
                  >
                    <img
                      src={logo}
                      className={"h-[40px] sm:h-[50px] object-contain"}
                    />
                  </div>
                  <div
                    className={
                      "h-full w-2/3 flex flex-col justify-center"
                    }
                  >
                    <p
                      className={
                        "uppercase font-semibold text-white tracking-[2px] sm:tracking-[3px] text-sm sm:text-base"
                      }
                      style={{ wordSpacing: "1px" }}
                    >
                      dragon cage
                    </p>
                    <p
                      className={
                        "capitalize text-white text-xs sm:text-sm"
                      }
                    >
                      developer edition
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={"p-2 sm:p-4 empty-section"}></div>

            <div
              className={
                "flex flex-col justify-end items-center pb-4 sm:pb-6 bg-gradient-to-b from-[#c9c9c900] to-[#000000fc] space-y-2 sm:space-y-4"
              }
            >
              <p
                className={
                  "text-white capitalize text-sm sm:text-xl tracking-widest text-center px-2"
                }
              >
                unleash the power of sacred vault
              </p>
              <p
                className={
                  "text-white capitalize text-lg sm:text-2xl font-mono font-medium tracking-widest text-center px-2"
                }
              >
                A Sentinel Revered by Dragon Lords
              </p>

              <div
                className={
                  "w-[90%] sm:w-[900px] h-2 sm:h-3 bg-[rgb(109,59,166)] my-2 rounded-full overflow-hidden"
                }
              >
                <div
                  className={
                    "h-full bg-gradient-to-r from-[#EDA475] via-[#913D3B] to-[#6B3C50] rounded-full animate-progress"
                  }
                  style={{ animationDuration: "3s" }}
                ></div>
              </div>

              <p
                className={
                  "text-white text-xs sm:text-md font-medium tracking-widest text-center"
                }
              >
                Powered by @electrodragon inc
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
