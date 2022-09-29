import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Cart from './pages/Cart';
// import Home from './pages/Home';
import Cart from './components/cart/Cart';
import Navbar from './components/navbar/Navbar';
import Showcase from './pages/showcase/Showcase';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Showcase />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
