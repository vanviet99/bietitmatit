
import React, { useState } from 'react';
import './App.css';
import data from './data';

function App() {
   const [list,setList] = useState(data)
  return (
    <div classNsme="App">
     <React.Fragment>
     <div classNsme="input-group mb-3">
  <span classNsme="input-group-text" id="inputGroup-sizing-default">Default</span>
  <input type="text" classNsme="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>
     </React.Fragment>
    </div>
  );
}

export default App;
