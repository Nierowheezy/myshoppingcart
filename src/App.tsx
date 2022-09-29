import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Cart from './pages/Cart';
// import Home from './pages/Home';
import Cart from './components/cart/Cart';
import Navbar from './components/navbar/Navbar';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Showcase from './pages/showcase/Showcase';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Showcase />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/details/:id' element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
