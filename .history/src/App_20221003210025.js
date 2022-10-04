
import './App.css';
import data from './data';

function App() {
   const [toDo, settoDo] = useState(data.lis)
   
   console.log(toDo);
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
