import Home from "./views/home";
import Preloader from "./components/Preloader";
import About from "./views/About";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Preloader />
      <Navigation />
      <main className="content">
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;
