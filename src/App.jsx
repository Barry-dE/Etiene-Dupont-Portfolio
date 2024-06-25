import Home from "./views/Home";
import Preloader from "./components/Preloader";

import Navigation from "./components/Navigation";
import Footer from "./views/Footer";
import About from "./views/About";

function App() {
  return (
    <>
      <Preloader />
      <Navigation />
      <main className="content">
        <Home />
        <About />
        <Footer />
      </main>
    </>
  );
}

export default App;
