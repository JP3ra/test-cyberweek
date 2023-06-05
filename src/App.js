
import './App.css';
import Landing from './components/landing/Landing';
import Navbar from './components/landing/Navbar';
import Events from './components/even/Events';
import Sponsors from './components/landing/Sponsors';
import Committee from './components/landing/Committee';
import Contact from './components/landing/Contact';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
      {/* <Landing /> */}
      <Navbar />

      {/* <Landing /> */}
        <Routes>
          <Route path='/' Component = {Landing} exact></Route>
          <Route path='/events' Component={Events} exact></Route>
          <Route path='/sponsors' Component={Sponsors} exact></Route>
          <Route path='/committee' Component={Committee} exact></Route>
          <Route path='/contact' Component={Contact} exact></Route>
        </Routes>
      </Router>

      {/* <Events/>  */}
    </>
  );
}

export default App;
