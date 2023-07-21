import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import MotivationalBooks from './component/MotivationalBooks';
import BestSeller from './component/BestSeller';
import InternationalBooks from './component/InternationalBooks';
import Cart from './component/Cart';
import { useState } from 'react';

function App() {
  const [cart,setCart] = useState('');
  const [additem,setAddItem] = useState();
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/motivational' element={<MotivationalBooks/>}/>
      <Route path='/bestseller' element={<BestSeller/>}/>
      <Route path='/international' element={<InternationalBooks/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
