import "./App.css";
import FirstNav from "./components/FirstNav/FirstNav";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";
import Services from "./pages/Services/Services";
import FeatureBanner from "./components/FeatureBanner/FeatureBanner";
import Team from "./pages/Team/Team";
import Contact from "./pages/Contact/Contact";
import OurPatern from "./components/OurPatern/OurPatern";
import Footer from "./components/Footer/Footer";
import CopyRight from "./components/CopyRight/CopyRight";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <FirstNav />
          <Navbar />
          <Home />
          <About />
          <FeatureBanner />
          <Services />
          <Team />
          <Contact />
          <OurPatern />
          <Footer />
          <CopyRight />
        </>
      )}
    </>
  );
}

export default App;
