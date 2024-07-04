import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Preloader from "./components/Preloader";
import Navigation from "./components/Navigation";
import About from "./views/About";
import Footer from "./views/Footer";
import Awards from "./views/Awards";
import Works from "./views/Works";
import Hobbies from "./views/Hobbies";
import Content from "./Layout/Content";
// import smoothScroll from "./js/utils/smoothScroll";

function App() {
  return (
    <Router>
      <Preloader />
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <Content>
              <Home />
              <About />
              <Hobbies />
              <Awards />
              <Footer />
            </Content>
          }
        />
        <Route path="/works" element={<Works />} />
      </Routes>
    </Router>
  );
}

export default App;
