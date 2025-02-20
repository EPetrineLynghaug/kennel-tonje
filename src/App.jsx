
import { BrowserRouter as Router, Routes, Route } from "react-router";

import './index.css'

import Navbar from './components/Navbar';
import Footer from './components/footer';
import Home from './pages/Home';


function App() {
 return (
   <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
   </Router>
   
 );
};

export default App
