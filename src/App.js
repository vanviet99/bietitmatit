
import React, { useState } from 'react';
import './App.css';
import data from './data';
import Modal from './component/Modal';
import Thongbao from './component/Thongbao';
function App() {
   const [list,setList] = useState(data)
   const [indexx,Setindexx] = useState()
   const [bgcl,Setbgcl] = useState(true)

   function addTodo(item){
      let clone = [...list,item]
      setList(clone)
   }
   function Delete(dtodo){
    let clonee =[...dtodo]
    setList(clonee)
   }

  return (
    <div className="App">
     <Modal list={list} addTodo={addTodo} Delete={Delete} indexx={indexx} Setindexx={Setindexx}  bgcl={bgcl} Setbgcl={Setbgcl}></Modal>
     <Thongbao list={list}></Thongbao>
    </div>
  );
}

export default App;
