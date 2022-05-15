import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "../styles/app.scss";

import Player from "../components/musicplayer/Player";
import Song from "../components/musicplayer/Song";
import Library from "../components/musicplayer/Library";
import Nav from "../components/musicplayer/PlayerNav";

import data from "../data";

function MusicPlayer() {
  //Ref
  const audioRef = useRef(null);
  //States
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercerntage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  //Event Handlers
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage: animation,
    });
  };
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };

  const location = useLocation();
  const navigate = useNavigate();
  const url = location.pathname;

  //On load this figures out if the user is looking for a specific song to load up initially
  //If it doesn't exist, redirect to the default music page
  useEffect(() => {
    const currentSong = songs.filter((song) => song.url === url);
    if (currentSong.length !== 0) {
      songs.forEach((song) => {
        if (song.active === true) song.active = false;
      });
      currentSong[0].active = true;
      setCurrentSong(currentSong[0]);
    } else if (url.includes("/music/")) {
      navigate("/music");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return (
    <div className="MusicPlayer">
      <div className={`App ${libraryStatus ? "library-active" : ""}`}>
        <Nav
          libraryStatus={libraryStatus}
          setLibraryStatus={setLibraryStatus}
        />
        <Song currentSong={currentSong} isPlaying={isPlaying} />
        <Player
          audioRef={audioRef}
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
          currentSong={currentSong}
          setSongInfo={setSongInfo}
          songInfo={songInfo}
          songs={songs}
          setCurrentSong={setCurrentSong}
          setSongs={setSongs}
        />
        <Library
          audioRef={audioRef}
          songs={songs}
          setCurrentSong={setCurrentSong}
          isPlaying={isPlaying}
          setSongs={setSongs}
          libraryStatus={libraryStatus}
        />
        <audio
          onTimeUpdate={timeUpdateHandler}
          onLoadedMetadata={timeUpdateHandler}
          ref={audioRef}
          src={currentSong.audio}
          onEnded={songEndHandler}
        ></audio>
      </div>
    </div>
  );
}

export default MusicPlayer;
