import "./App.css";
import FirstNav from "./components/FirstNav/FirstNav";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/Home/About/About";
import Home from "./pages/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <FirstNav />
      <Navbar />
      <Home />
      <About />
    </>
  );
}

export default App;
