import React from "react";
import portrait from "../img/portrait.png";
//Styles
import { About, Description, Image, Hide } from "../styles";
//Animations
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Revolutionary solutions</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              where <span>Passion</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>comes first.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact me for any inquiries or further interest in my projects.
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>Contact Me</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={portrait} alt="Self Portrait" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
