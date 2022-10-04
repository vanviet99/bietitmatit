
import React, { useState } from 'react';
import './App.css';
import data from './data';
import Modal from './component/Modal';
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
     <Modal list></Modal>
    </div>
  );
}

export default App;
