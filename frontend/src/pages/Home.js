import './App.css';
import CustomerReview from '../components/CustomerReview/CustomerReview';
import Cards from '../components/Cards/Cards';
import { cardsData as diariaCardsData } from "../Data/Data"; 
import { datax } from "../Data/Data"; 
import Table from '../components/Table/Table'
import '../styles/index.css'
import Card from '@nextui-org/react';


function App() {
  return (
    <>
      <h1> </h1>

      <div style={{
        overflowY: 'scroll',
        overflowX: 'none',
        height: '98vh',
        width: '150vh',
        overflow: 'auto'

      }} > 
      <div style={{
        marginBottom: '20px',
        marginTop: '40px',
        
      }}> 
      <Cards data={diariaCardsData} uniqueData={datax} />
      </div>
      <CustomerReview />
      <div style={{
        overflowX: 'scroll',
        overflow: 'auto',
        width: '93rem', /*1640px  */
        marginBottom: '20px',
        marginTop: '40px',
        }}>

      <Table/>
      </div>
      </div>
    </>
  );
}

export default App;

