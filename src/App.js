import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Formations from './components/Formations';
import Competences from './components/Competences';
import Projets from './components/Projets';
import Divers from './components/Divers';
import Video from './components/Video';
import CV from './components/CV';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Formations />
      <Competences />
      <Projets />
      <Divers />
      <Video />
      <CV />
      <Contact />
    </div>
  );
}

export default App;
