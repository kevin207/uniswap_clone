import React, { useRef, useState } from "react";
import styles from "../styles";
import { useOnClickOutside } from "../utils";

const HowToButton = () => {
  const [info, setInfo] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setInfo(false));

  return (
    <div ref={ref}>
      {/* BUTTON INFO */}
      <button
        className={styles.howToButton}
        onClick={() => {
          setInfo(!info);
        }}
      >
        How To Use
      </button>

      {/* MODAL INFO */}
      <div
        className={`absolute w-fit h-fit inset-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-site-black text-white p-8 sm:p-12 rounded-2xl sm:text-sm text-xs font-poppins border-white  border-2 ${
          !info && "hidden"
        }`}
      >
        <div className="text-lg font-bold text-center text-pink-600">
          THIS DEMO APP USING SEPOLIA TEST NETWORK
        </div>
        <br />

        {/* STEP */}
        <div className="font-semibold text-[#18b2de]">
          Follow this step below to use this demo app:
        </div>
        <ul className="list-disc ml-5 font-light">
          <li>Install metamask extension to your browser</li>
          <li>SignIn / SignUp to your metamask wallet</li>
          <li>Change network to sepolia test network in metamask wallet</li>
          <li>Use sepolia faucet to obtain some sepoliaETH</li>
          <li>Swap the sepoliaETH to WETH at official uniswap</li>
          <li>Import some test token listed below to your metamask wallet</li>
          <li>Done, try swapping the WETH to other token</li>
        </ul>
        <br />

        {/* TOKEN INFO */}
        <div className="flex flex-col gap-1">
          <div>
            <strong className="text-[#fde94e]">PINTOKEN: </strong>
            0xdE4dea02D641aC6E2358AF99eaEe5fbC3bcc03c9
          </div>
          <div>
            <strong className="text-[#fde94e]">WANTOKEN: </strong>
            0x3cAB98ED4498acE62ab032fB307699B0066aF349
          </div>
          <div>
            <strong className="text-[#fde94e]">SHIBA INU PIN: </strong>
            0x8E8eb62E71B7070e553642305896928b743d5554
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToButton;
