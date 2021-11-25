import './App.css';
import {useState} from 'react';
import Button from './Component/Button'
import List from './Component/List'

function App() {

  return (
    <div className="App">
      <List />
    </div>
  )


  // //***************Intro to css************* */

  // return (
  //   <div className="App App-header">
  //     <Button title="A" type="sucess"/>
  //     <Button title="B" type="error" disabled="true"/>
  //     <Button title="C" type="warning"/>
  //     <button className='button'>D</button>
  //     <img src={process.env.PUBLIC_URL +"/logo192.png"} alt="log" />
  //   </div>
  // )

  //*************Timer********* */
  // var [counter, setCounter] = useState(0);

  // const handleClick = () => {
  //   setCounter(++counter)
  // }
  //   return (
  //   <div className="App">
  //     <h1>Counter</h1>
  //     <h1>{counter}</h1>
  //     <button onClick={handleClick}>Click</button>
  //   </div>
  // );
}

export default App;
