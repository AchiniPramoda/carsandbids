import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import Create_vehicle from './Components/Vehicles/Create_vehicle/Create_vehicle';
function App() {
  return (
  
    <Router>
      <Routes>
        <Route path="/users/createVehicle" element={<Create_vehicle />} />
      </Routes>
    </Router>


    
  );
}

export default App;
