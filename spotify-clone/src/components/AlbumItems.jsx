import React from "react";

const AlbumItems = ({ name, desc, image, id }) => {
  return (
    <div className="min-w-[200px] max-w-[300px] p-2 px-3 rounded cursor-pointer  transform transition duration-300 hover:scale-105">
      <img src={image} alt="" className="rounded" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default AlbumItems;
