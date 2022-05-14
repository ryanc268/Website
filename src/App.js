//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutMe from "./pages/AboutMe";
import MyWork from "./pages/MyWork";
import ContactMe from "./pages/ContactMe";
import MusicLibrary from "./pages/MusicLibrary";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
//Router
import { Routes, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<AboutMe />} />
          <Route path="/work" exact element={<MyWork />} />
          <Route path="/work/:id" exact element={<MovieDetail />} />
          <Route path="/contact" exact element={<ContactMe />} />
          <Route path="/music" exact element={<MusicLibrary />}>
            <Route path=":id" element={ <MusicLibrary />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
