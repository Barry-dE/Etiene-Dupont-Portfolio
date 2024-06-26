import Home from "./views/Home";
import Preloader from "./components/Preloader";

import Navigation from "./components/Navigation";
import Footer from "./views/Footer";
import About from "./views/About";
import Hobbies from "./views/Hobbies";

function App() {
  return (
    <>
      <Preloader />
      <Navigation />
      <main className="content">
        <Home />
        <About />
        <Hobbies />
        <Footer />
      </main>
    </>
  );
}

export default App;
