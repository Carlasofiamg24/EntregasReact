import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import PaginaPrincipal from './Components/PaginaPrincipal/PaginaPrincipal';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Peluqeria from './Components/Peluqueria/Peluqueria';
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/CartContext/CartContext';
import Checkout from './Components/Checkout/Checkout';
import Contacto from './Components/Contacto/contacto';



function App() {
  return (
      <CartProvider>
        <Header />
        <NavBar />
          <Routes>
            <Route path='/' element={<PaginaPrincipal />}/>
            <Route path='/categoria/productos' element={< ItemListContainer />}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
            <Route path='categoria/peluqueria' element={<Peluqeria />}/>
            <Route path='/cart' element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path='/contacto' element={<Contacto />} />
          </Routes>
        <Footer />
      </CartProvider>
  );
}

export default App;
