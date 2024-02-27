import React from 'react'
import Sidebar from './Sidebar'
import RightSide from './RigtSide/RightSide';


const Layout = ({ children }) => {
    return (
        <>
            <div className="App">
                <div className="AppGlass">
                    <Sidebar />
                    { children }
                    <RightSide />
                </div>
            </div>
        </>
    )
}

export default Layout
