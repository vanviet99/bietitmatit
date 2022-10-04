
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
   function Delete(index){
    let clone =[...list]
    addTodo(clone)
   }
  return (
    <div className="App">
     <Modal list={list} addTodo={addTodo} Delete={Delete}></Modal>
    </div>
  );
}

export default App;
