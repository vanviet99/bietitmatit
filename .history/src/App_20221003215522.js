
import React, { useState } from 'react';
import './App.css';
import data from './data';
import Modal from './component/Modal';
function App() {
   const [list,setList] = useState(data)
   function addTodo(item){
      let clone = [...list,item]
      setList(clone)
   }
   function Delete(){
    let
   }
  return (
    <div className="App">
     <Modal list={list} addTodo={addTodo}></Modal>
    </div>
  );
}

export default App;
