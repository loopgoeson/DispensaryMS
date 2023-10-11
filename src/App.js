
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Patient from './Components/Patient'

import { BrowserRouter as Router,Routes,Route   } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/"  element={<Home />} />
        <Route path='/Patient'  element={<Patient />}/>
      </Routes>
    </Router>
     
    
  );
}

export default App;
