import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {
  const audioRef = useRef(null);
  const seekBg = useRef();
  const seekBar = useRef();
  console.log(songsData);
  

  const [trackIndex, setTrackIndex] = useState(0);
  const [track, setTrack] = useState(songsData[trackIndex]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: " --",
      minute: "-- ",
    },
    totalTime: {
      second: " --",
      minute: "-- ",
    },
  });

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width =
          (audioRef.current.currentTime / audioRef.current.duration) * 100 +
          "%";
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
    }, 1000);
  }, [audioRef]);

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playTrackById = (id) => {
    const newTrack = songsData.find((song) => song.id === id);
    if (newTrack) {
      setTrack(newTrack);
      setTrackIndex(id);
      setTimeout(() => {
        audioRef.current.load();
        play();
      }, 100); 
    }
  };

   const playNext = () => {
     const nextIndex = (trackIndex + 1) % songsData.length;
     setTrackIndex(nextIndex);
     setTrack(songsData[nextIndex]);
     setTimeout(() => {
       audioRef.current.load();
       play();
     }, 100);
   };

   const playPrevious = () => {
     const prevIndex = (trackIndex - 1 + songsData.length) % songsData.length;
     setTrackIndex(prevIndex);
     setTrack(songsData[prevIndex]);
     setTimeout(() => {
       audioRef.current.load();
       play();
     }, 100);
   };

   const seekBgClick = async (e) => {
     audioRef.current.currentTime =
       (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
       audioRef.current.duration;
   };

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playTrackById,
    playNext,
    playPrevious,
    seekBgClick,
  };
  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
