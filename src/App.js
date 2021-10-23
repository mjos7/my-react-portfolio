import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Connect from './components/Connect';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <Connect></Connect>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
