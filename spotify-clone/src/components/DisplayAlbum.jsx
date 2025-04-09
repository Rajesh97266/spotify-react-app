import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumDatalocal = albumsData[id];
  console.log(albumDatalocal);

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
    </>
  );
};

export default DisplayAlbum;
