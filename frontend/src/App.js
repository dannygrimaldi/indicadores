
/* import Course from './pages/Course'
import Profile from './pages/Profile'
import Login from './pages/LoginPage'; 
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './utils/PrivateRoute'
*/

import Layout from './components/Layout'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Diaria from './pages/EstDiaria'
import { cardsData as diariaData } from './Data/DataDiaria';


function App() {
    return (
        <Router>
            {/* <AuthProvider>
                */}
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/estadisticas' element={<Diaria data={diariaData} />} />
                    <Route path='/e' element={<Dashboard />} />
                </Routes>
            </Layout>
            {/* 
            </AuthProvider> */}
            {/* si */}
        </Router>
    )
}

export default App
