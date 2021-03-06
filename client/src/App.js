import React from 'react';
import './App.css';
import {Header, BodyCars, BodyInfo, Hero, Footer} from './components/index';
import InfoTable from './components/hero/info-table/InfoTable';

function App() {


  return (
    <div className='container'>

      <div className='header'>
        <Header />
      </div>

      <div className='hero'>
        <Hero />
      </div>

      <div className='infotable'>
        <InfoTable />
      </div>

      <div className='body-cars'>
        <BodyCars />
      </div>

      <div className='body-info'>
        <BodyInfo />
      </div>

      <div className='footer'>
        <Footer />
      </div>

    </div>
  );
}

export default App;
