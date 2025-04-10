import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";

function Display() {
  const displayref = useRef();
  const loc = useLocation();
  const isAlbum = loc.pathname.includes("album");
  const albumId = isAlbum ? loc.pathname.slice(-1) : null;
  const bgclr = albumsData[Number(albumId)]?.bgColor;

  useEffect(() => {
    if (isAlbum) {
      displayref.current.style.background = `linear-gradient(${bgclr},#121212)`;
    } else {
      displayref.current.style.background = "#121212";
    }
  });

  return (
    <div
      ref={displayref}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
}

export default Display;
