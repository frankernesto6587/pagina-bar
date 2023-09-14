import { useEffect } from "react";
import "../public/assets/vendor/aos/aos.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Specials from "./components/Specials";
import Events from "./components/Events";
import Menu from "./components/Menu";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  useEffect(() => {
    const headerScrolled = () => {
      const selectHeader = document.querySelector('#header');
      const selectTopbar = document.querySelector('#topbar');
      
      if (selectHeader) {
        console.log(window.scrollY + 'px');
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled');
          if (selectTopbar) {
            selectTopbar.classList.add('topbar-scrolled');
          }
        } else {
          selectHeader.classList.remove('header-scrolled');
          if (selectTopbar) {
            selectTopbar.classList.remove('topbar-scrolled');
          }
        }
      }
    };

    window.addEventListener('load', headerScrolled);
    window.addEventListener('scroll', headerScrolled);

    return () => {
      window.removeEventListener('load', headerScrolled);
      window.removeEventListener('scroll', headerScrolled);
    };}, []); 
  return (
    <>
      <NavBar cel="+58638862"/>
      <Hero />
      <main id="main">
        <About/>
        <WhyUs/>
        <Menu/>
       <Specials/>
       <Events/>
       <Gallery/>
       <Contact/>
       <Footer/>
           
      </main>

    

     
    </>
  )
}

export default App
