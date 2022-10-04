
import React, { useState } from 'react';
import './App.css';
import data from './data';

function App() {
   const [list,setList] = useState(data)
  return (
    <div className="App">
     <React.Fragment>
     <div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default">Default</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
     </React.Fragment>
    </div>
  );
}

export default App;
