
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Patient from './Components/Patient';
import Contact from './Components/Contact';
import About from './Components/About';
import Pharmacy from './Components/Pharmacy';
import AppointmentForm from './Components/AppointmentForm';

import { BrowserRouter as Router,Routes,Route   } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/"  element={<Home />} />
        <Route path='/Patient'  element={<Patient />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/AppointmentForm' element={< AppointmentForm/>} />
        <Route path='/Pharmacy' element={< Pharmacy/>}/>
      </Routes>
    </Router>
     
    
  );
}

export default App;
