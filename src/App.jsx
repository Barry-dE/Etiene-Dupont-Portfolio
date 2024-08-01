import Home from "./views/Home";
import Preloader from "./components/Preloader";
import Navigation from "./components/Navigation";
import About from "./views/About";
import Hobbies from "./views/Hobbies";
import Footer from "./views/Footer";
import Awards from "./views/Awards";
import Init from "./js";
import { useEffect } from "react";
import Works from "./views/Works";

function App() {
  useEffect(() => {
    new Init();
  }, []);

  return (
    <>
      <Preloader />
      <Navigation />
      <main className="content">
        <Home />
        <About />
        <Hobbies />
        <Awards />
        <Works />
        <Footer />
      </main>
    </>
  );
}

export default App;
