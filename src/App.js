import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />

      <img
        src="/funanani.jpg"
        alt="Funanani Ramabulana"
        style={{ width: "160px", borderRadius: "50%", marginTop: "20px" }}
      />

      <h1>Funanani Ramabulana</h1>
      <p>Aspiring Linguist | Model | Youth Advocate</p>

      <section id="about">
        <About />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="activities">
        <Activities />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
