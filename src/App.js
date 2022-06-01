import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import Home from './pages/Home/Home';
import Posts from './pages/Posts/Posts';
import Works from './pages/Works/Works';

const App = () => {

  const [dark, setDark] = useState(false);

  return (
    <div className='bg-base-100' data-theme={dark ? "dark" : "light"}>
      <div className='max-w-screen-md mx-auto'>
        <Navbar dark={dark} setDark={setDark} />
        <div>
          <img className='max-w-48 max-h-48 mx-auto ' src="https://api.lorem.space/image/face?hash=92048" alt="" />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/works' element={<Works />} />
          <Route path='/posts' element={<Posts />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;