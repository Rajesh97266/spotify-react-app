import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumDatalocal = albumsData[id];
  console.log(albumDatalocal);
  console.log(songsData);
  

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row md:items-end mt-10 gap-8 ">
        <img
          src={albumDatalocal.image}
          alt=""
          className="rounded w-48 cursor-pointer flex-shrink-0 
             transform transition-transform duration-300 ease-in-out 
             hover:scale-105 hover:shadow-lg "
        />
        <div className="flex flex-col">
          <p>PlayList</p>
          <h2 className="text-4xl font-bold mb-4 md:text-6xl">
            {albumDatalocal.name}
          </h2>
          <h4>{albumDatalocal.desc}</h4>
          <p className="mt-2 flex  items-center gap-2 ">
            <img
              src={assets.spotify_logo}
              alt=""
              className="w-5 h-5 flex-shrink-0"
            />
            <b> Spotify Clone</b> 33,62,251 likes |<b> 50 Songs </b>| about 2hr
            35 min
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden md:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-3 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer "
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img src={item.image} alt="" className="inline-block w-10 mr-5" />
            {item.name}
          </p>
          <p className="text-[15px]">{albumDatalocal.name}</p>
          <p className="text-[15px]">
            {Math.floor(Math.random() * 10) + 1} days ago
          </p>

          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
