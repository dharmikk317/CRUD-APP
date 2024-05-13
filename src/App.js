import './App.css';
import Create from './comoponentes/Create';
import Navbar from './comoponentes/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Read from './comoponentes/Read';
import Update from './comoponentes/Update';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Create />} />
          <Route path='/all' element={<Read/>} />
          <Route path='/edit/:id' element={<Update/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
