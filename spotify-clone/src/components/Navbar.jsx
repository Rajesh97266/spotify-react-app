import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center font-bold">
      <div className="flex gap-2 items-center">
        <img
          className="w-8 rounded-2xl bg-black cursor-pointer p-2"
          src={assets.arrow_left}
          alt=""
        />
        <img
          className="w-8 rounded-2xl bg-black cursor-pointer p-2"
          src={assets.arrow_right}
          alt=""
        />
      </div>
      <div className="flex items-center gap-4">
        <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
          Explore Premium
        </p>
        <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer">
          Install App
        </p>
        <p className="bg-orange-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer">
          R
        </p>
      </div>
    </div>
  );
};

export default Navbar;
