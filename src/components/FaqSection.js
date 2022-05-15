import React from "react";
//Styles
import styled from "styled-components";
import { About } from "../styles";
//Components
import Toggle from "./Toggle";
import { useScroll } from "./useScroll";
//Animation
import { AnimateSharedLayout } from "framer-motion";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>
        Have questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="What Languages Do You Know?">
          <div className="answer">
            <p>In order of experience: </p>
            <p>
              Java, C#, NodeJS, SQL, Javascript/JQuery, React, Kotlin, Typescript, HTML5
            </p>
          </div>
        </Toggle>
        <Toggle title="What Did You Use to Make This Website?">
          <div className="answer">
            <p>
              This website is entirely made using React with following
              libraries:
            </p>
            <p>
              React, Framer-Motion, Styled-Components,
              React-Intersection-Observer and React-Router-Dom
            </p>
          </div>
        </Toggle>
        <Toggle title="What Technologies Have You Used For Your Games?">
          <div className="answer">
            <p>Placeholder</p>
            <p>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Earum, tempore?
            </p>
          </div>
        </Toggle>
        <Toggle title="What Are Your Favourite Dev. Tools?">
          <div className="answer">
            <p>Placeholder</p>
            <p>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Earum, tempore?
            </p>
          </div>
        </Toggle>
        <Toggle title="What Type of Freelance Work Are You Open to Take?">
          <div className="answer">
            <p>Placeholder</p>
            <p>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Earum, tempore?
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #01c4fa;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
