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
        <Toggle title="What Languages / Frameworks Do You Know?">
          <div className="answer">
            <p>In order of experience: </p>
            <p>
              Java, Javascript/Typescript (front and back-end), C#, SQL, React,
              Kotlin, HTML5
            </p>
            <p>Future Interests: </p>
            <p>
              Rust, NextJS, PrismaDB and TailwindCSS
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
              React-Intersection-Observer, React-Helmet and React-Router-Dom
            </p>
          </div>
        </Toggle>
        <Toggle title="What Technologies Have You Used For Your Games?">
          <div className="answer">
            <p>
              Right now the only game I've made officially is Valerian X which
              is a mobile game made in Unity with C# but I plan on eventually
              exploring Rust as a language and making games built directly into
              my websites. I could write Typescript games but Rust seems to be
              the latest and greatest for web-based games (picture a Javascript
              + C++ hybrid)
            </p>
          </div>
        </Toggle>
        <Toggle title="What Are Your Favourite Dev. Tools?">
          <div className="answer">
            <p>
              VSCode for everything Javascript/Typescript (front and back-end)
            </p>
            <p>IntelliJ for Java/Kotlin</p>
            <p>Unity with Visual Studio for C#</p>
          </div>
        </Toggle>
        <Toggle title="What Type of Freelance Work Are You Open to Take?">
          <div className="answer">
            <p>
              Right now I'm mainly focused on my regular 9-5 job while learning
              Typescript in my free time HOWEVER I will always take freelance
              requests both front and back-end and we can discuss from there
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
