import logo from './logo.svg';
import './App.css';
import First , {Third, Fourth} from './First';
import Second from './Second';
import Add from './Add';
function App() {
  return (
    <div className="App">
      <First/>
      <Second/>
      <Third/>
      <Fourth/>
      <Add no1={2} no2={10}/>
     <h1> Hello </h1> 
     </div>
  );
}

export default App;
