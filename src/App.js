import React, {useState} from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "title",
    }
  ])

  const [title, setTitle] = useState('');

  const titleHandler = (title) => {
    setTitle(title.target.value)
  }

  const addBtnHandler = () => {
    const newTodo = {
      id: todo.length+1,
      title,
    }
    setTodo([...todo, newTodo]);
    setTitle('')
}

  return (
    <div>
      <div className="todo_list">
        <input placeholder="자바스크립트를 배워 봅시다" type='text' value ={title} onChange={titleHandler}/>
        <button onClick={addBtnHandler}>추가하기</button><br/>
        <h1>Todo List</h1>
      </div>

      <div>
        {todo.map(todo => {
        return(
          <div key={todo.id}>
            <h5 className="todo_cont">{todo.title}</h5>
          </div>
        )
        })}
      </div>

    </div>
  )
}

export default App
