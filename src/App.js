import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './component/About';
import Contactme from './component/Contactme';
import Header from './component/Header';
import Resume from './component/Resume';
import Portfolio from './component/Portfolio';
import resumeData from './resumeData';
import Slider from './component/slider';
import Footer from './component/Footer';
import Usestatefunc from './component/usestate'
function App() {

  return (
    <div className="App">
      <Header resumeData={resumeData} />
      <Slider resumeData={resumeData} />
      <About resumeData={resumeData} />
      <Resume resumeData={resumeData} />
      <Portfolio resumeData={resumeData} />
      <Contactme resumeData={resumeData} />
      <Footer resumeData={resumeData} />
      {/* <Usestatefunc /> */}
    </div>

  );
}

export default App;

