import AboutMe from "./components/AboutMe";
import Build from "./components/Build";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MyProjects from "./components/MyProjects";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

import { useState } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className="App">
      <Navbar darkMode = {darkMode} handleDarkMode = {handleDarkMode} />
      <HeroSection darkMode = {darkMode} />
      <AboutMe darkMode = {darkMode} />
      <Project darkMode = {darkMode} />
      <MyProjects darkMode = {darkMode} />  
      <Build darkMode = {darkMode} />
      <Footer darkMode = {darkMode} />
    </div>
  );
}

export default App;
