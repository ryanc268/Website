import React from "react";
//Dynamic Meta Tag Content
import Helmet from "react-helmet";

const Song = ({ currentSong, isPlaying }) => {
  return (
    <div className="song-container">
      <Helmet>
        <title>
          {(isPlaying ? "\u25B6" : "\u25A0") +
            " - " +
            currentSong.name +
            " (" +
            currentSong.year +
            ")"}
        </title>
        <meta
          name="description"
          content="Hear all of my old and new music projects in one convenient music library!"
        />
        <meta property="og:title" content="My Music Library" />
        <meta
          property="og:description"
          content="Hear all of my old and new music projects in one convenient music library!"
        />
        <meta property="og:url" content="https://ryanc268.github.io/#/music" />
        <meta name="twitter:title" content="My Music Library" />
        <meta
          name="twitter:description"
          content="Hear all of my old and new music projects in one convenient music library!"
        />
      </Helmet>
      <img
        className={isPlaying ? "rotateSong" : ""}
        alt={currentSong.name}
        src={currentSong.cover}
      ></img>
      <h2>{currentSong.name}</h2>
      <h3>
        {currentSong.artist} ({currentSong.year})
      </h3>
    </div>
  );
};

export default Song;
