import logo from './logo.svg';
// import './App.css';
import First , {Third, Fourth} from './First';
import Second from './Second';
import Add from './Add';
import ClassComp from './ClassComp';
import SecondClassComp from './SecondClassComp';
import Student from './Student';
import StudentWithState from './StudentWithState';
import DataForm from './DataForm';
import UnControlledCom from './UnControlledCom'
import App1 from './App1'
import './App1.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './NavBar ';
import FetchApiDemo from './FetchApiDemo';
function App() {
  return (
    <div className="App">
 
      <Router>
        <NavBar/>
        <Switch>
       <Route path="/">
         <FetchApiDemo/>
      </Route>
      <Route exact path="/student">
        console.log("aaa");
         <Student/>
      </Route>
      <Route path="/second">
         <Second/>
      </Route>
      
      
      </Switch> 
        {/* <First/>
      <Second/>
      <Third/>
      <Fourth/>   */}
     </Router> 
      {/* <ClassComp name="Ajay"/>
      <SecondClassComp/>
      <Add no1={2} no2={10}/>
     <h1> Hello </h1>  */}
     {/* <Student/>
     <Student name="deepak" batch="b001" marks ={90}/>
     <Student name="Sagar" batch="b002" marks ={90}/> */}
     {/* <StudentWithState batch="B001"/> */}

{/* <DataForm/> */}
{/* <UnControlledCom/> */}

{/* <App1/> */}
     </div>
  );
}

export default App;
