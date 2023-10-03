
import './App.css'
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ColorSchemesExample from './components/navBar/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <ColorSchemesExample/>
      <ItemListContainer greetings = "Hola, estas es mi primer Pre Entrega" />
    </>
  )
}

export default App
