import React from "react";
import drakala from "../img/Drakala.png";
//Styles
import { About, Description, Image, Hide } from "../styles";
//Animations
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Revolutionary Solutions</motion.h2>
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
        <motion.button variants={fade}>Contact Me</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={drakala} alt="Drakala" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
