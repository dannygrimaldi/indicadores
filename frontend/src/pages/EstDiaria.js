import './App.css';
import CustomerReview from '../components/CustomerReview/CustomerReview';
import Cards from '../components/Cards/Cards';
import { cardsData as diariaCardsData } from "../Data/DataDiaria"; 
import { datax } from "../Data/DataDiaria"; 
import Table from '../components/Table/Table'



function App() {
  return (
    <>

      <h1> </h1>
      <div style={{
        overflowY: 'scroll',
        height: '850px',
        overflow: 'auto',
      }} > 
      <div style={{
        marginBottom: '20px',
        marginTop: '40px',
      }}> 
        <Cards data={diariaCardsData} uniqueData={datax} />
      </div>
      <CustomerReview />
      </div>
    </>
  );
}

export default App;

