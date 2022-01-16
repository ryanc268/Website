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
        Have Questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="What Languages Do You Know?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Earum, tempore?
            </p>
          </div>
        </Toggle>
        <Toggle title="What Dev. Programs Are You Comfortable With?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Earum, tempore?
            </p>
          </div>
        </Toggle>
        <Toggle title="What Technologies Have You Used For Your Games?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Earum, tempore?
            </p>
          </div>
        </Toggle>
        <Toggle title="What Are Your Favourite Dev. Tools?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
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
