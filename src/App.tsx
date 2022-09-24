import React from 'react';
 import Productlist from './list';
import { Routes, Route, Link } from "react-router-dom";
import Summery from './summerypage';
import Thankyou from './thankyou';
function App() {
  return (
    <div className="App">
       <Routes>
      <Route
      path='/' element={<Productlist/>}
      />
     <Route
      path='/checkout' element={<Summery/>}
      />
      <Route
      path='/thankyou' element={<Thankyou/>}
      />
    </Routes>
    </div>
  );
}

export default App;
