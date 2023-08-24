import { useState } from 'react';
import './App.css';
import { ShowTasks } from './component/showTasks';
import { AddTasks } from './component/addTasks';

function App() {
  const [arr, setArr] = useState([
    { id: 1, name: "Task1" },
    { id: 2, name: "Task2" },
    { id: 3, name: "Task3" }

  ])
  const addTest = (data) => {
    arr.push({ ...data, id: Date.now() })
    setArr([...arr])
    console.log(arr);

  }
  const deleteById = (id) => {
    setArr([...arr.filter(e => e.id != id)])
  }
  return (
    <div className='dv1' style={{ display: 'block', justifyContent: "center", alignItems: "center", width: "1000px", }} >
      <h1 style={{ display: "flex", justifyContent: "center" }}>Tasks</h1>
      <div className=''>
        <ShowTasks arr={arr} deleteById={deleteById} />
      </div>
      <hr />

      <div className=''>
        <AddTasks addTest={addTest} />
      </div>


    </div >
  );
}

export default App;
