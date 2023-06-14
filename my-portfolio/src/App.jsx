import React from 'react';

import './styles/index.css';

import Header from './components/Header';
import Home from './components/Home';
import Text from './components/Text';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Connect from './components/Connect';
function App() {
  return (
    <>
      <Header />
      <Home />
      <Text />
      <About />
      <Skills />
      <Projects />
      <Connect />
    </>
  )
}

export default App
