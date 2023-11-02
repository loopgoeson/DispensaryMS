
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Patient from './Components/Patient';
import Contact from './Components/Contact';
import About from './Components/About';
import Pharmacy from './Components/Pharmacy';
import AppointmentForm from './Components/AppointmentForm';
import LoginAdmin from './Components/LoginAdmin';
import LoginDoctor from './Components/LoginDoctor';
import Appointment from './Components/Appointment';
import AppointDisplay from './Components/AppointDisplay';
import AdminPortal from './Components/AdminPortal';
import { BrowserRouter as Router,Routes,Route   } from 'react-router-dom';
function App() {
  return (
    <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/"  element={<Home />} />
        <Route path='/Patient'  element={<Patient />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/AppointmentForm' element={< AppointmentForm/>} />
        <Route path='/Pharmacy' element={< Pharmacy/>}/>
        <Route path='/LoginAdmin' element={<LoginAdmin/>}/>
        <Route path='/LoginDoctor' element={<LoginDoctor/>}/>
        <Route path='/Appointment' element={< Appointment/>} />
        <Route path='/AppointDisplay' element={<AppointDisplay/>}/>
        <Route path='/AdminPortal' element={<AdminPortal/>}></Route>
      </Routes>
    </Router>
    <footer>
      <div className='bg-red-300'>
        <p></p>
      </div>
      <div className='bg-red-400'>
        <p><strong>©Copyright. All right reserved</strong></p>
      </div>
    </footer>
    </div>
    
  );
}

export default App;
