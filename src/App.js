import React,{Fragment} from 'react';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import NadVar from './components/nadVar';
import Home from './components/home';
import Footer from './components/footer';
import NavCard from './components/navCard';
const App = () => {
    return ( 
        <Fragment>
            <Router>
                <NadVar/>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/blog" element={<NavCard/>}></Route>
                </Routes>
                <Footer/>
            </Router>
        </Fragment>
     );
}
 
export default App;