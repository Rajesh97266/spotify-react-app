import React from "react";
import { useNavigate } from "react-router-dom";

const AlbumItems = ({ name, desc, image, id }) => {
  const nav = useNavigate();
  return (
    <div
      onClick={() => nav(`/album/${id}`)}
      className="min-w-[200px] max-w-[300px] p-2 px-3 rounded cursor-pointer transform transition duration-300 hover:scale-105 bg-[#ffffff08] hover:bg-[#ffffff15]"
    >
      <img
        src={image}
        alt={name}
        className="w-[180px] h-[180px] object-cover rounded"
      />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm ">{desc}</p>
    </div>
  );
};

export default AlbumItems;
