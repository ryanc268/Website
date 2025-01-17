import React, { useEffect, useRef } from "react";

//Styles
import styled from "styled-components";

const audioContext = new AudioContext();

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

  useEffect(() => {
    audioContext.resume();
  }, [isPlaying]);

  //Event Handlers
  const startVisualizer = () => {
    const audio = audioRef.current;
    const audioSource = audioContext.createMediaElementSource(audio);
    const analyser = audioContext.createAnalyser();
    audioSource.connect(analyser);
    analyser.connect(audioContext.destination);
    analyser.fftSize = 1024;
    //will be half of fftSize
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const barWidth = canvasRef.current.width / bufferLength;

    let barHeight;
    let x;

    const animate = () => {
      x = 0;
      contextRef.current.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      if (!audio.paused) {
        //console.log("animating");
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
      //top of the bar design
      contextRef.current.fillStyle = "#666666";
      contextRef.current.fillRect(
        x,
        canvasRef.current.height - barHeight - 3,
        barWidth,
        barHeight > 0 ? 2 : 0
      );
      //main bar design
      contextRef.current.fillStyle = "#333333";
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
    filter: blur(0) contrast(1.1);
  }
`;

export default AudioVisualizer;
