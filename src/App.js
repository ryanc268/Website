import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutMe from "./pages/AboutMe";
import MyWork from "./pages/MyWork";
import ContactMe from "./pages/ContactMe";
import MusicLibrary from "./pages/MusicLibrary";
import Nav from "./components/Nav";
import ProjectDetails from "./pages/ProjectDetails";
//Images
import logo192 from "./img/logo192.png";
import icon from "./img/favicon.ico";
//Router
import { Routes, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";
//Dynamic Meta Tag Content
import Helmet from "react-helmet";

function App() {
  const location = useLocation();
  const baseUrl = window.location.origin;
  return (
    <div className="App">
      <Helmet>
        <title>Ryan Coppa's Portfolio</title>
        <meta
          name="description"
          content="Home of all his personal programming projects and music production. Ryan Coppa is a 27 year old passionate Software Engineer who excels at finding modern solutions to any problem!"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Home Page" />
        <meta
          property="og:description"
          content="Landing Page for Ryan's Portfolio. Find out what he's been up to by visiting today!"
        />
        <meta property="og:image" content="https://i.imgur.com/xfS8kP2.png" />
        <meta property="og:url" content="https://www.ryancoppa.com/" />
        <meta property="og:site_name" content="Ryan Coppa's Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home Page" />
        <meta
          name="twitter:description"
          content="Home of all his personal programming projects and music production. Ryan Coppa is a 27 year old passionate Software Engineer who excels at finding modern solutions to any problem!"
        />
        <meta name="twitter:image" content="https://i.imgur.com/xfS8kP2.png" />
        <meta name="twitter:site" content="@Ryanc268" />
        <meta name="twitter:creator" content="@Ryanc268" />

        <link rel="apple-touch-icon" href={baseUrl + logo192} />
        <link rel="icon" href={baseUrl + icon} />
      </Helmet>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<AboutMe />} />
          <Route path="/work" exact element={<MyWork />} />
          <Route path="/work/:id" exact element={<ProjectDetails />} />
          <Route path="/contact" exact element={<ContactMe />} />
          <Route path="/music" exact element={<MusicLibrary />}>
            <Route path=":id" element={<MusicLibrary />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
