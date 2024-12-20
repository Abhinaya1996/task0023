import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
