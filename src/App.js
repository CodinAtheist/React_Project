import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import SignUpPage from './Pages/SignUpPage';
import kids_banner from './Components/Assets/Kids_banner.png';
import adults_banner from './Components/Assets/Adult_banner.png';

function App() {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
}

function MainContent() {
  const location = useLocation();
  const noHeaderFooterRoutes = ['/login','/signup'];

  return (
    <div>
      {!noHeaderFooterRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/adults' element={<ShopCategory banner={adults_banner} category="adults" />} />
        <Route path='/kids' element={<ShopCategory banner={kids_banner}category="kids" />} />
        <Route path="product" element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
      {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
