//import logo es el logo de react ya venia cuando se creó el proyecto
import logo from './logo.svg';
import './App.css';
//import MainDash from './components/MainDash/MainDash';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.!! prueba :3 prueba 2 prueba 3 prueba 4!!!!!!!!!!!!!!
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


/*
function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <MainDash/>
      </div>
    </div>
  );
}

export default App;

*/