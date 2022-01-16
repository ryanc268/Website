import React from "react";
//Import Icons
import clock from "../img/clock.svg";
import random from "../img/random.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import dragon from "../img/Snow-Dragon.png";
//Styles
import styled from "styled-components";
import { About, Description, Image } from "../styles";
//Animations
import { scrollReveal } from "../animation";
//Components
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          High <span>Quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock icon" />
              <h3>Efficient</h3>
            </div>
            <p>
              Always motivated to find the most effective ways to solve
              problems.
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="teamwork icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Well versed in team development and Agile practices.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={random} alt="random icon" />
              <h3>Placeholder</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money icon" />
              <h3>Freelance</h3>
            </div>
            <p>
              Open to any and every freelance project within (or possibly
              outside of) my skillset.
            </p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={dragon} alt="Dragon Icon" />
      </Image>
    </Services>
  );
};

//Styled Components
const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 500px) {
    display: block;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      color: white;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
