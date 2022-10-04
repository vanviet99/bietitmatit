
import { useState } from 'react';
import './App.css';
import data from './data';

function App() {
   const [list,setList] = useState([data.soft(function(a,b){
    if(a.date - b.date){
      return -111
    }
   }))]
   
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
