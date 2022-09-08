import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Nav from './components/Header/Nav';
import Country from './pages/Country/Country';
import Places from './pages/Places/Places';
import Restrnt from './pages/Resturant/Restrnt';
import Footer from './components/Footer/Footer';
import Flag from './pages/Flag/Flag';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Country />} />
          <Route path='/places' element={<Places/>} />
          <Route path='/res' element={<Restrnt/>} />
          <Route path='/flag/:id' element={<Flag />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
