import './App.css'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { List } from './components/List'
import { LIST_TODO } from './utils/constants'
import { useState } from 'react'
import Task from './interfaces/todo.interface'
  
function App() {
  const [todos, setTodos] = useState<Task[]>(LIST_TODO);
  const [filter, setFilter] = useState<string>('all');

  const addTodo = (title: string) => {
    const newTask = {
      id: todos.length + 1,
      title: title,
      completed: false,
    }
    
    setTodos([...todos, newTask]);
  }

  const toggleTodo = (id : number) => {
    const newTodos = todos.map(todo =>{
      if(todo.id == id){
        return {...todo, completed: !todo.completed}
      }
      return todo;
    })
    setTodos(newTodos);
  }

  const deleteTodo = (id : number) => {
    const newTodos = todos.filter(todo =>{
      return todo.id !== id;
    })
    setTodos(newTodos);
  }

  const filterTodos = todos.filter(todo => {
    if(filter === 'all') return true;
    if(filter === 'completed') return todo.completed;
    if(filter === 'incompleted') return !todo.completed;
  })

  return (
    <>
      <Header/>
      <Form addTodo = {addTodo}/>
      <List tasks = {filterTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} filterTodos={setFilter}/>
    </>
  )
}

export default App
