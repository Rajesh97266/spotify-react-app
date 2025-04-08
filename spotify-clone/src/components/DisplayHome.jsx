import React, { useRef } from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import AlbumItems from "./AlbumItems";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DisplayHome = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="mb-4">
        <div className="my-5 font-bold text-2xl">Your Top Playlist</div>

        {/* Relative container for scrollable area and buttons */}
        <div className="relative">
          {/* Left Chevron Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute z-10 left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Scrollable Content */}
          <div
            className="flex overflow-x-auto scrollbar-hide"
            ref={scrollRef}
          >
            {albumsData.map((item, index) => (
              <AlbumItems
                key={index}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            ))}
          </div>

          {/* Right Chevron Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute z-10 right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
