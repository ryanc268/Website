//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutMe from "./pages/AboutMe";
import MyWork from "./pages/MyWork";
import ContactMe from "./pages/ContactMe";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
//Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutMe />} />
        <Route path="/work" exact element={<MyWork />} />
        <Route path="/work/:id" exact element={<MovieDetail />} />
        <Route path="/contact" exact element={<ContactMe />} />
      </Routes>
    </div>
  );
}

export default App;
