//Styled
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";

//Styled Components
export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 500px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 500px) {
    padding: 0;
    text-align: center;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  position: sticky;
  img {
    width: 80%;
    height: auto;
    object-fit: cover;
  }
  @media (max-width: 500px) {
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
