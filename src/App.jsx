import Home from "./views/Home";
import Preloader from "./components/Preloader";
import Navigation from "./components/Navigation";
import About from "./views/About";
import Footer from "./views/Footer";
import Awards from "./views/Awards";
import Content from "./Layout/Content";
import init from "./js";
import { useEffect } from "react";
// import smoothScroll from "./js/utils/smoothScroll";

function App() {
  useEffect(() => {
    new init();
  }, []);

  return (
    <>
      <Preloader />
      <Navigation />
      <Content>
        <Home />
        <About />
        <Awards />
        <Footer />
      </Content>
    </>
  );
}

export default App;
