// import logo from './logo.svg';
// import './App.css';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinkes from "./components/SocialLinkes";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>     
      <SocialLinkes/> 
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
    </div>
  )
}