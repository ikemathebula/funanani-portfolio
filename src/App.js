import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DownloadCV from './components/DownloadCV'; // ✅ You already imported it

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div className="intro">
        <img
          src={process.env.PUBLIC_URL + "/funanani.jpg"}
          alt="Funanani Ramabulana"
          className="profile-pic"
        />
        <div className="intro-text">
          <h1>Funanani Ramabulana</h1>
          <p>Aspiring Linguist | Model | Youth Advocate</p>
        </div>
      </div>

      {/* ✅ CV Download Button */}
      <DownloadCV />

      <section id="about" data-aos="fade-up">
        <About />
      </section>

      <section id="education" data-aos="fade-right">
        <Education />
      </section>

      <section id="experience" data-aos="fade-left">
        <Experience />
      </section>

      <section id="skills" data-aos="zoom-in">
        <Skills />
      </section>

      <section id="activities" data-aos="fade-up">
        <Activities />
      </section>

      <section id="contact" data-aos="fade-up">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
