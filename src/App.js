import React from 'react';
import './App.css';
import Eight from './components/EigthPage/Eigth';
import Fifth from './components/FifthPage/Fifth';
import FirstPage from './components/FirstPage/First';
import Footer from './components/Footer/Footer';
import Fourth from './components/FourthPage/Fourth';
import Second from './components/SecondPage/Second';
import Seven from './components/SeventhPage/Seven';
import Sixth from './components/SixthPage/Sixth';

import Third from './components/ThirdPage/Third';


function App() {
  return (
    <div className="app">
    <FirstPage/>
    <Second/>
    <Third/>
    <Fourth/>
    <Fifth/>
    <Sixth/>
    <Seven/>
    <Eight/>
    <Footer/>
    </div>
  );
}

export default App;
