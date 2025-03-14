import { useEffect, useState } from "react";
import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import DotGroup from "./scenes/DotGroup";
import MySkills from "./scenes/MySkills";
import LineGradient from "./components/LineGradient";
import Projects from "./scenes/Projects";
import Testimonials from "./scenes/Testimonials";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [pageVisitCount, setPageVisitCount] = useState(0);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    // Check if the visit count exists in localStorage
    const storedVisitCount = localStorage.getItem("visitCount");
    
    if (storedVisitCount) {
      // If it exists, increment the count
      const newVisitCount = parseInt(storedVisitCount) + 1;
      setPageVisitCount(newVisitCount);
      // Save the new count to localStorage
      localStorage.setItem("visitCount", newVisitCount);
    } else {
      // If it's the first visit, start the count at 1
      setPageVisitCount(1);
      localStorage.setItem("visitCount", 1);
    }

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      {/* Show the page visit count */}
      <div className="fixed top-0 right-0 p-4 text-white">
        <p>Page Visits: {pageVisitCount}</p>
      </div>

      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>

      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>

      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>

      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Testimonials />
      </div>

      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Contact />
      </div>

      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;
