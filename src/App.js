import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../component/Header';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
