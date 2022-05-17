import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const PlayerNav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h3>Music Time Machine</h3>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon icon={faMusic}/>
      </button>
    </nav>
  );
};

export default PlayerNav;
