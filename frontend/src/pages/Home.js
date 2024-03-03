//import logo es el logo de react ya venia cuando se creó el proyecto
//import logo from './logo.svg';
import './App.css';
import CustomerReview from '../components/CustomerReview/CustomerReview';
import RightSide from '../components/RigtSide/RightSide';
import Sidebar from '../components/Sidebar1';
import Cards from '../components/Cards/Cards';

import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> PRUEBA PARA CONFIRMAR QUE FUNCIONA CARPETA PUBLIC :3 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React aiuda
        </a>
      </header>
    </div>
  );
}

export default App;
*/

function App() {
  return (
    <>
      <h1> </h1>
      <div style={{
        marginBottom: '20px',
        marginTop: '40px'
      }}> {/* Aplica un margen inferior de 20px */}
      
        <Cards />
      </div>
      <CustomerReview />
    </>
  );
}

export default App;

