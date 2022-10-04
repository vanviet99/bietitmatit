
import React, { useState } from 'react';
import './App.css';
import data from './data';

function App() {
   const [list,setList] = useState(data)
   function addTodo(){
      let todo = document.querySelector('#todoo')
      let date = document.querySelector('#date')
      let clone = [...list,{date: date, do: todo}]
      setList(clone)
   }
  return (
    <div className="App">
     <React.Fragment>
     <
    </div>
  );
}

export default App;
