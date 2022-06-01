import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import PostBlogs from './components/Dashboard/PostBlogs';
import PostWork from './components/Dashboard/PostWork';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import Error from './pages/Error';
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
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='postblog' element={<PostBlogs />} />
            <Route path='postwork' element={<PostWork />} />
          </Route>
          <Route path='/*' element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;