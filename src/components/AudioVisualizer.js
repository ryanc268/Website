import React, { useEffect, useRef } from "react";

//Styles
import styled from "styled-components";

const AudioVisualizer = ({ isPlaying, audioRef }) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;

    startVisualizer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Event Handlers
  const startVisualizer = () => {
    const audio = audioRef.current;
    console.log(audio);
    const audioContext = new AudioContext();
    const audioSource = audioContext.createMediaElementSource(audio);
    const analyser = audioContext.createAnalyser();
    audioSource.connect(analyser);
    analyser.connect(audioContext.destination);
    analyser.fftSize = 4096;
    //will be half of fftSize
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const barWidth = canvasRef.current.width / bufferLength;

    let barHeight;
    let x;

    const animate = () => {
      if (!audio.paused) {
        console.log("animating");
        x = 0;
        contextRef.current.clearRect(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        analyser.getByteFrequencyData(dataArray);
        drawVisualizer(bufferLength, x, barWidth, barHeight, dataArray);
      }
      requestAnimationFrame(animate);
    };
    animate();
  };

  const drawVisualizer = (bufferLength, x, barWidth, barHeight, dataArray) => {
    for (let i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i] / 1.7;
      contextRef.current.fillStyle = "#262626";
      contextRef.current.fillRect(
        x,
        canvasRef.current.height - barHeight,
        barWidth,
        barHeight
      );
      x += barWidth;
    }
  };

  return (
    <Visualizer>
      <canvas className="canvas1" ref={canvasRef}></canvas>
    </Visualizer>
  );
};

const Visualizer = styled.div`
  .canvas1 {
    z-index: -2;
    position: absolute;
    top: 0%;
    left: 0;
    width: 120%;
    height: 100%;
    filter: blur(2px) contrast(1);
    @media (max-width: 500px) {
      filter: blur(0) contrast(1);
    }
  }
`;

export default AudioVisualizer;
