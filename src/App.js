import React from 'react';
import Nav from './Compnents/Nav';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalog from './Compnents/Catalog';


function App() {
  return (
    <Router>
      <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Catalog' element={<Catalog />} />
        </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div className="container bg-secondary text-light">
      <div className='row'>
        <div className='col-1' />
        <div className='col-10 card border-secondary bg-secondary'>
          <img className='card-text' alt='scp statement' src='images/scpAdminMsg.png' />
        </div>
        <div className='col-1' />
      </div>
      <hr />
      <div className='p-3'>
        <h1>Mission Statement</h1>
        <p>Operating clandestine and worldwide, the Foundation operates beyond jurisdiction, empowered and entrusted by every major national government with the task of containing anomalous objects, entities, and phenomena. Many of these anomalies pose a significant threat to global security by threatening either physical or psychological harm. All of them undermine the natural laws that the people of the world implicitly trust in.
        <br /><br />
        The Foundation maintains an extensive database of information regarding anomalies requiring Special Containment Procedures, commonly referred to as "SCPs". The primary database contains summaries of such anomalies and emergency procedures for maintaining or re-establishing safe containment in the case of a containment breach or other event.<br /><br />
        The Foundation operates to maintain normalcy, so that the worldwide civilian population can live and go on with their daily lives without fear, mistrust, or doubt in their personal beliefs, and to maintain human independence from extraterrestrial, extradimensional, and other extranormal influence.
        </p>
        <hr />
        <h3>Our mission is three-fold:</h3>
        <h5>Secure</h5>
        <p>The Foundation secures anomalies with the goal of preventing them from falling into the hands of civilian or rival agencies, through extensive observation and surveillance and by acting to intercept such anomalies at the earliest opportunity.</p>
        <h5>Contain</h5>
        <p>The Foundation contains anomalies with the goal of preventing their influence or effects from spreading, by either relocating, concealing, or dismantling such anomalies or by suppressing or preventing public dissemination of knowledge thereof.</p>
        <h5>Protect</h5>
        <p>The Foundation protects humanity from the effects of such anomalies as well as the anomalies themselves until such time that they are either fully understood or new theories of science can be devised based on their properties and behavior. The Foundation may also neutralize or destroy anomalies as an option of last resort, if they are determined to be too dangerous to be contained.</p>
        <hr />
        <p>Additional information will have been provided upon your joining us in pursuit of our primary missions. Welcome to the Foundation, and good luck.</p>
      </div>
    </div>
  );
}

export default App;
