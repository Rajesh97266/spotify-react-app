
import React, { useRef, useState, useCallback } from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItems from "./AlbumItems";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SongItems from "./SongItems";

const DisplayHome = () => {
  const albumScrollRef = useRef();
  const songScrollRef = useRef();
  const [scrollInterval, setScrollInterval] = useState(null);

  const startScroll = useCallback(
    (ref, direction) => {
      if (scrollInterval) clearInterval(scrollInterval);
      const newInterval = setInterval(() => {
        if (ref.current) {
          ref.current.scrollBy({
            left: direction === "left" ? -10 : 10,
            behavior: "auto",
          });
        }
      }, 10);
      setScrollInterval(newInterval);
    },
    [scrollInterval]
  );

  const stopScroll = useCallback(() => {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      setScrollInterval(null);
    }
  }, [scrollInterval]);

  return (
    <>
      <Navbar />
      <div className="mb-4">
        <div className="my-5 font-bold text-2xl">Your Top Playlist</div>

        {/* Relative container for scrollable area and buttons */}
        <div className="relative">
          {/* Left Chevron Button */}
          <button
            onMouseDown={() => startScroll(albumScrollRef, "left")}
            onMouseUp={stopScroll}
            onMouseLeave={stopScroll}
            className="absolute z-10 left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Scrollable Content */}
          <div
            className="flex overflow-x-auto scrollbar-hide"
            ref={albumScrollRef}
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
            onMouseDown={() => startScroll(albumScrollRef, "right")}
            onMouseUp={stopScroll}
            onMouseLeave={stopScroll}
            className="absolute z-10 right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      <div className="mb-4">
        <div className="my-5 font-bold text-2xl">Recently Played</div>

        {/* Relative container for scrollable area and buttons */}
        <div className="relative">
          {/* Left Chevron Button */}
          <button
            onMouseDown={() => startScroll(songScrollRef, "left")}
            onMouseUp={stopScroll}
            onMouseLeave={stopScroll}
            className="absolute z-10 left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Scrollable Content */}
          <div
            className="flex overflow-x-auto scrollbar-hide"
            ref={songScrollRef}
          >
            {songsData.map((item, index) => (
              <SongItems
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
            onMouseDown={() => startScroll(songScrollRef, "right")}
            onMouseUp={stopScroll}
            onMouseLeave={stopScroll}
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
