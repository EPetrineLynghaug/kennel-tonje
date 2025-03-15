
import { BrowserRouter as Router, Routes, Route } from "react-router";

import './index.css'

import Navbar from './components/Navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import DogsPage from "./pages/dogPage/Dogs";
import LumiPage from "./pages/dogPage/LumiPage";


function App() {
 return (
   <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/hunder" element={<DogsPage />} />

      <Route path="/lumi" element={<LumiPage />} />
    </Routes>
    <Footer />
   </Router>
   
 );
};

export default App
