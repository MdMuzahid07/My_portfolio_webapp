import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Home from './pages/Home/Home';
import Posts from './pages/Posts/Posts';
import Works from './pages/Works/Works';

const App = () => {
  return (
    <div>
      <div className='max-w-screen-md mx-auto'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/works' element={<Works />} />
          <Route path='/posts' element={<Posts />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;