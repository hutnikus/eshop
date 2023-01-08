// import { useState } from 'react';
// import Product from './components/Product';
// import ProductForm from './components/ProductForm';
import  About from './pages/About'
import Catalog from './pages/Catalog'
import Landing from './pages/Landing';
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';


function App() {


  return (
    <>
    <nav>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/Catalog'>Products</Link></li>
      <li><Link to='About'>About</Link></li>
    </nav>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Catalog' element={<Catalog/>}/>
        <Route path='/About' element={<About />}/>
        <Route />
      </Routes>
      </>
  );
}

export default App;
