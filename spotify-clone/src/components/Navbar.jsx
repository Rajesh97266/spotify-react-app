import React from "react";
import { assets } from "../assets/assets";
import CategorySelector from "./CategorySelector";
import InstallApp from "./InstallApp";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const nav = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-bold">
        <div className="flex gap-2 items-center">
          <img
            onClick={() => nav(-1)}
            className="w-8 rounded-2xl bg-black cursor-pointer p-2"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => nav(1)}
            className="w-8 rounded-2xl bg-black cursor-pointer p-2"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-green-950 text-green-400 border border-green-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            <span className="bg-green-400 shadow-green-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Explore Premium
          </button>
          <div className="scale-[0.75] md:scale-75">
            <InstallApp />
          </div>
          <p className="bg-orange-500 text-black w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300 ease-out">
            R
          </p>
        </div>
      </div>
      <CategorySelector />
    </>
  );
};

export default Navbar;
