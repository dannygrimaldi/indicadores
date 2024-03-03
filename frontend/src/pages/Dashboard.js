import './App.css';
import Cards from '../components/Cards/Cards';
import Table from '../components/Table/Table'


function App() {
  return (
    <>
      <h1> </h1>
      <div style={{
        marginBottom: '20px',
        marginTop: '50px'
      }}> {/* Aplica un margen inferior de 20px */}
        <Cards />
      </div>


      <div style={{
        marginBottom: '20px',
        marginTop: '50px'
      }}>

        <Table />
        </div>
      </>
      );
}

      export default App;

