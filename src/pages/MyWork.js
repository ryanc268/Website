import React from "react";
//Dynamic Meta Tag Content
import Helmet from "react-helmet";
//Styles
import styled from "styled-components";
//Images
import card from "../img/valerianX-card.jpg";
import goonIcon from "../img/goonbot-small.png";
//Router
import { Link } from "react-router-dom";
//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";
//Components
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const MyWork = () => {
  const [element, controls] = useScroll();
  //const [element2, controls2] = useScroll();
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#1b1b1b" }}
    >
      <Helmet>
        <title>My Projects</title>
        <meta
          name="description"
          content="Find out what projects I've been creating lately, stay up-to-date!"
        />
        <meta property="og:title" content="My Projects" />
        <meta
          property="og:description"
          content="See what projects I've been up to!"
        />
        <meta property="og:url" content="https://www.ryancoppa.com/work" />
        <meta name="twitter:title" content="My Projects" />
        <meta
          name="twitter:description"
          content="See what projects I've been up to!"
        />
      </Helmet>
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <Title variants={fade}>
          <span>Valerian X</span> C# Mobile Game
        </Title>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/valerianX">
          <Hide>
            <motion.img variants={photoAnim} src={card} alt="ValerianX Card" />
          </Hide>
        </Link>
      </Movie>
      <Movie variants={fade} animate={controls} initial="hidden" ref={element}>
        <Title>
          <span>Goon Bot</span> NodeJS Discord Bot
        </Title>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/goon-bot">
          <img
            src={goonIcon}
            alt="Goon Bot Icon"
          />
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  //min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 500px) {
    padding: 7rem 2rem;
  }
`;

const Title = styled(motion.h2)`
  color: white;
  @media (max-width: 1300px) {
    font-size: 3rem;
  }
`;

const Movie = styled(motion.div)`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #01c4fa;
    margin-bottom: 3rem;
  }
  img {
    width: 70%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
  }
  @media (max-width: 500px) {
    img {
      width: 90%;
      height: auto;
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//Frame animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #1f2b64;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #219fcd;
`;

const Frame3 = styled(Frame1)`
  background: #2f1051;
`;

const Frame4 = styled(Frame1)`
  background: #4dd9ff;
`;

export default MyWork;
