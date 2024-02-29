import React from 'react'
import Sidebar from './Sidebar'
import RightSide from './RigtSide/RightSide';
import Cards from './Cards/Cards'
import CustomerReview from './CustomerReview/CustomerReview'


const Layout = ({ children }) => {
    return (
        <>
            <div className="App">
                <div className="AppGlass">
                    <Sidebar />
                    <div>
                        <h1> </h1>
                    {/* <Cards />         */}
                    
                    <h1></h1>   
                           
                    { children } 
                    </div>
                    
                    {/* <RightSide /> */}
                </div>
            </div>
        </>
    )
}

export default Layout
