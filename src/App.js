
import { useEffect, useState } from 'react';
import './App.css';
// import './respon.css';
import './responsive.css';
import About from './Components/About';
import Classes from './Components/Classes';
import Home from './Components/Home';
import NaveBar from './Components/NaveBar';
import OurExperts from './Components/OurExperts';
import ReadyToHelp from './Components/ReadyToHelp';
import { FaArrowUp } from "react-icons/fa";
import RecentUpdate from './Components/RecentUpdate';
import Footer from './Components/Footer';
import LastDiv from './Components/LastDiv';
import Contact from './Components/Contact';
import BmiCalulator from './Components/BmiCalulator';

function App() {


  const [showButton, setShowButton] = useState(false);



    // Wait for the page content to fully load
  window.addEventListener('load', function() {
    // Scroll the window to the top
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Use smooth scrolling animation
    });
  });


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <Home />
      <About />
      <Classes />
      <ReadyToHelp />
      <OurExperts />
      <RecentUpdate />
      <Contact/>
      <BmiCalulator/> 
      <Footer />

      <LastDiv />



      {
        showButton && (
          <div onClick={scrollToTop} className="smallbar"><FaArrowUp /></div>
        )
      }

    </>


  );
}

export default App;
