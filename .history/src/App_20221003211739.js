
import React, { useState } from 'react';
import './App.css';
import data from './data';

function App() {
   const [list,setList] = useState(data)
  return (
    <div className="App">
     <React.Fragment>
     <div className="input-group mb-3">
     <input  type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
      <input  type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
    </div>
    <button type="button" className="btn btn-primary">Primary</button>
    <div>
    <table className="table">
  <thead>
      {list.map(function(value,index){
        re
      })}
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
    </div>
     </React.Fragment>
    </div>
  );
}

export default App;
