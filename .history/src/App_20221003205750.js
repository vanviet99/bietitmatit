
import './App.css';
import data from './data';

function App() {
   const [toDo, settoDo] = useState(data.soft(function(a,b){
    if(a.date - b.date){
      return -111
    }
   })])
   console.log(toDo);
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
