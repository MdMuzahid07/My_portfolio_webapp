import React from 'react';
import Navbar from './components/Header/Navbar';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <div>
      <div className='max-w-screen-md mx-auto'>
        <Navbar />
        <Home />
      </div>
    </div>
  );
};

export default App;