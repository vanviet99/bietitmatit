
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
    <button type="button" className="btn btn-primary">Them</button>
    <div>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">STT</th>
      <th scope="col">Date</th>
      <th scope="col">Todo</th>
      <th scope="col">Acction</th>
    </tr>
  </thead>
  <tbody>
  {list.map(function(value,index){
        return (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{value.date}</td>
            <td>{value.do}</td>
            <td>
            <button type="button" className="btn btn-primary bg">Sửa</button>
            <button type="button" className="btn btn-primary bg">Xóa</button>
            </td>
          </tr>
        )
      })}
  </tbody>
</table>
    </div>
     </React.Fragment>
    </div>
  );
}

export default App;
