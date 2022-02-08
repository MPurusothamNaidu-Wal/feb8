import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import Average from './Average';
import Addnos from './Addnos';
import MiniCalculator from './MiniCalculator';

function App() {
  return (
    <div className="App">
      <Todo
      time={new Date().getHours().toString()}
      minutes={new Date().getMinutes().toString()}
      >
      </Todo>
      <Average></Average><br/>
      <Addnos 
      One = {18}
      Two= {20}
      ></Addnos><br/>
      <MiniCalculator 
      numOne = {20}
      numTwo = {10}
      operation= "add"
      ></MiniCalculator>
    </div>
  );
}

export default App;
