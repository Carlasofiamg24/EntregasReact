import './App.css';
import Header from './Components/Header/Header';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <Header />
      <ItemListContainer greeting='Bienvenidos a mi pagina'/>
    </div>
  );
}

export default App;
