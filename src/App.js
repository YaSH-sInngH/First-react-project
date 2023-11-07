import React from 'react';
import Home from './mainfolder/basic/Home';
import About from './mainfolder/basic/About';
import Services from './mainfolder/basic/Services'

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <div className='footer'>
        <h1>Thankyou for visiting</h1>
      </div>
    </div>
  );
};

export default App;
