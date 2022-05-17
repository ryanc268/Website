import React from "react";
//Styles
import styled from "styled-components";
//Router
import { Link, useLocation } from "react-router-dom";
//Animations
import { motion } from "framer-motion";

const Nav = () => {
  const location = useLocation();
  const url = location.pathname;
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Ryan Coppa
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Me</Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{ width: url === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/work">My Work</Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{ width: url === "/work" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{ width: url === "/contact" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/music">Music Prod</Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{ width: url === "/music" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 2.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-color: #01c4fa;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 2rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      a {
        font-size: 1.3rem;
      }
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #01c4fa;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  border-radius: 2px;
  @media (max-width: 500px) {
    left: 0%;
  }
`;

export default Nav;
