import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
  faVolumeDown,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  audioRef,
  currentSong,
  isPlaying,
  setIsPlaying,
  setSongInfo,
  songInfo,
  songs,
  setCurrentSong,
  setSongs,
}) => {
  const [activeVolume, setActiveVolume] = useState(false);
  const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((song) => {
      if (song.id === nextPrev.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  };

  //attach media session events / data every time currentSong is updated
  useEffect(() => {
    if ("mediaSession" in navigator) {
      try {
        navigator.mediaSession.setActionHandler("play", () =>
          playSongHandler()
        );
        navigator.mediaSession.setActionHandler("pause", () =>
          playSongHandler()
        );
        navigator.mediaSession.setActionHandler("nexttrack", async () =>
          skipTrackHandler("skip-forward")
        );
        navigator.mediaSession.setActionHandler("previoustrack", async () =>
          skipTrackHandler("skip-back")
        );
        navigator.mediaSession.metadata = new MediaMetadata({
          title: currentSong.name,
          artist: currentSong.artist,
          artwork: [
            {
              src: currentSong.cover,
              sizes: "96x96",
              type: "image/jpg",
            },
            {
              src: currentSong.cover,
              sizes: "128x128",
              type: "image/jpg",
            },
            {
              src: currentSong.cover,
              sizes: "192x192",
              type: "image/jpg",
            },
            {
              src: currentSong.cover,
              sizes: "256x256",
              type: "image/jpg",
            },
            {
              src: currentSong.cover,
              sizes: "384x384",
              type: "image/jpg",
            },
            {
              src: currentSong.cover,
              sizes: "512x512",
              type: "image/jpg",
            },
          ],
        });
        mediaSessionTimeHandler();
      } catch {
        console.log("Error with MediaSession (Generic) on current device");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong, isPlaying]);

  useEffect(() => {
    mediaSessionTimeHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [songInfo]);

  //Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      audioRef.current.volume = songInfo.volume;
      setIsPlaying(!isPlaying);
    }
  };
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  //TODO: fix this
  const mediaSessionTimeHandler = () => {
    try {
      navigator.mediaSession.setPositionState({
        duration: songInfo.duration || 0,
        position: songInfo.currentTime || 0,
      });
    } catch {
      console.log(
        "Error with MediaSession (setPositionState()) on current device"
      );
    }
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
        if (isPlaying) audioRef.current.play();
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
    }
    if (isPlaying) audioRef.current.play();
  };
  //Add Styles
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  const changeVolume = (e) => {
    let value = e.target.value;
    audioRef.current.volume = value;
    setSongInfo({ ...songInfo, volume: value });
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div style={trackAnim} className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <div className="volume-control">
        <FontAwesomeIcon
          onClick={() => setActiveVolume(!activeVolume)}
          icon={faVolumeDown}
          size="2x"
        />
        {activeVolume && (
          <input
            onChange={changeVolume}
            value={songInfo.volume}
            max="1"
            min="0"
            step="0.01"
            type="range"
          />
        )}
      </div>
    </div>
  );
};

export default Player;
