import React from 'react'
import { info } from './about/aboutMe'
import './style.css'
// import { Route, Routes } from "react-router-dom";

const baseLayout = () => {
    return (
        <div className='containerBaseLayout' style={{ background: info.gradient }} >
            <div className='baseLayoutBody'>
                {/* <Routes>
                    <Route exact path={'/'} element={<Home />} />
                    <Route exact path={'/about'} element={<Info />} />
                    <Route exact path={'/portfolio'} element={<Portfolio />} />
                </Routes> */}
                <span className='paragraphBaseLayout'>Home</span>
                <span className='paragraphBaseLayout'>About Me</span>
                <span className='paragraphBaseLayout'>Contact Me</span>
            </div>
        </div>
    )
}

export default baseLayout
