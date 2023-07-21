import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import MotivationalBooks from './component/MotivationalBooks';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/motivationalbooks' element={<MotivationalBooks/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
