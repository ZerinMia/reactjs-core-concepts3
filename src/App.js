import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Todos></Todos>
    </div>
  );
}


/* load comment api 
step1= create function
step2: call useEffect(arrowfunction(fetch,res,data),[])
step3= set useState
step4=return a div */
function Todos() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])

  return (
    <div>
      <h2>Todos</h2>
      <p>{todos.length}</p>
      {
        todos.map(todo => <TodosUser userId={todo.userId} title={todo.title}></TodosUser>)
      }
    </div>
  )
}
function TodosUser(props) {
  return (
    <div>
      <h2>User Id:{props.userId}</h2>
      <h3>Title: {props.title}</h3>
    </div>
  )
}


function Counter() {
  const [count, setCount] = useState(0)
  const handelIncrease = () => setCount(count + 1)
  const handelDecrease = () => {
    if (count > 0) {
      setCount(count - 1)
    }

  }
  return (
    <div className="counter">
      <h1>Counter:{count}</h1>
      <button id="increase" onClick={handelIncrease}>Increase</button>
      <button id="decrease" onClick={handelDecrease}>Decrease</button>
    </div>
  )
}

export default App;
