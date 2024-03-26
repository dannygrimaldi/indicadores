import { Box, Container, Typography, Grid } from '@mui/material';
import CustomerReview from '../components/CustomerReview/CustomerReview';
import Cards from '../components/Cards/Cards';
import { cardsData as diariaCardsData } from "../Data/Data"; 
import { datax } from "../Data/Data"; 
import Table from '../components/Table/Table'
import '../styles/index.css'
import Leads from '../components/CustomerReview/Leads';


function App() {
  return (
    <Container>
      <Box my={4}>
        

        <Grid container spacing={4}>
          <Grid item xs={1} sm={12}>
         
            <Cards data={diariaCardsData} uniqueData={datax} />
            <CustomerReview />
            <Leads/>
            <Table />
          </Grid>
       
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
