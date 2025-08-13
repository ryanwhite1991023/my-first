import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ThemeToggle from './components/ThemeToggle';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import GitHubActivity from './components/GitHubActivity';
import ResumeDownload from './components/ResumeDownload';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <ThemeToggle />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Testimonials />
      <GitHubActivity />
      <ResumeDownload />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
