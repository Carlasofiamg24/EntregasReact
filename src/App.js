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



function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Routes>
        <Route path='/' element={<PaginaPrincipal />}/>
        <Route path='/productos' element={< ItemListContainer />}/>
        <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
        <Route path='/peluqueria' element={<Peluqeria />}/>
        <Route path='/cart' element={<Cart />} />
        {/*<ItemListContainer />
        <ItemDetailContainer />*/}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
