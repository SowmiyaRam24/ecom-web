import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarS from './compounts/Header/navibar';
import About from './compounts/About/About';
import Store from './compounts/Store/Store';
import Home from './compounts/Home/Home';

function App() {
  return (<>
    <Router>
      
      <Routes>
        <Route path='/Home'  element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Store' element={<Store/>} />
      </Routes>
    </Router>
      
  </>
      
  );
}

export default App;
