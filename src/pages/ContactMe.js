import React from "react";
//Dynamic Meta Tag Content
import Helmet from "react-helmet";
//Styles
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
//Resume
import resume from "../resources/resume.pdf";
//Social Icons
import { SocialIcon } from "react-social-icons";

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
          <motion.h2 variants={titleAnim}>
            Contact <span>Me</span>
          </motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <a
              className="buttonClass"
              href={resume}
              download="Ryan_Coppa_Resume_Public.pdf"
            >
              Download My Public Resume
            </a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <SocialIcon
              url="https://www.linkedin.com/in/ryan-coppa"
              style={{ height: 80, width: 80 }}
            />
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <p>🚧 Page Still Under Construction 🚧</p>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  text-align: center;
  color: white;
  .buttonClass {
    text-decoration: none;
  }
  @media (max-width: 500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  color: white;
  @media (max-width: 500px) {
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;

export default ContactMe;
