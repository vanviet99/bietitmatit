
import { useState } from 'react';
import './App.css';
import data from './data';

function App() {
   const [list,setList] = useState(data)
   console.log(list);
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
