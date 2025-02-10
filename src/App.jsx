
import './App.css'
import Button from '@mui/material/Button';
import Navbar from './components/Navbar';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
 

  return (
    <>
    <Navbar />
 <div style={{ padding: '2rem' }}>
      <h1>Hei, velkommen til Kennel Tonje!</h1>
      <Button variant="contained" color="primary">
        Klikk meg
      </Button>
    </div>
    </>
  )
}

export default App
