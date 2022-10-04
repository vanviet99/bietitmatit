
import React, { useState } from 'react';
import './App.css';
import data from './data';

function App() {
   const [list,setList] = useState(data)
  return (
    <div className="App">
     <React.Fragment>
     <div className="input-group mb-3">
  <input input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
</div>
     </React.Fragment>
    </div>
  );
}

export default App;
