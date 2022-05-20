import React from "react";
//Dynamic Meta Tag Content
import Helmet from "react-helmet";
//Styles
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
//Components

const ContactMe = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#1b1b1b" }}
    >
      <Helmet>
        <title>Contact</title>
        <meta
          name="description"
          content="Contact me for any inquiries or further interest in my projects!"
        />
        <meta property="og:title" content="Contact Me" />
        <meta
          property="og:description"
          content="Contact page of my portfolio!"
        />
        <meta property="og:url" content="https://www.ryancoppa.com/contact" />
        <meta name="twitter:title" content="Contact Me" />
        <meta
          name="twitter:description"
          content="Contact me for any inquiries or further interest in my projects!"
        />
      </Helmet>
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>UNDER CONSTRUCTION</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Not Ready Yet</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>In Progress</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Another UNDER CONSTRUCTION</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: white;
  min-height: 90vh;
  @media (max-width: 500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: white;
  @media (max-width: 500px) {
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: white;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactMe;
