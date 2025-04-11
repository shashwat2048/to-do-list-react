import AddTaskModal from "./components/AddTaskModal"
import ToDoSection from "./components/ToDoSection"
import Carousel from "./components/carousel"
import NavBar from "./components/navbar"
import { useState } from "react";

let todosInitial = JSON.parse(localStorage.getItem("todosList")) || [];


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [todos, setTodos] = useState(todosInitial);
  const [editTodo, setEditTodo] = useState(null);


  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setEditTodo(null);
  };
  return (
    <div>
      <NavBar />
      <Carousel/>
      <ToDoSection openModal={openModal} todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
      {isOpen && <AddTaskModal closeModal={closeModal} setTodos={setTodos} todos={todos} setEditTodo={setEditTodo}/>}
      {editTodo && <AddTaskModal closeModal={closeModal} setTodos={setTodos} todos={todos} editTodo={editTodo} setEditTodo={setEditTodo}/>}
      </div>
  )
}

export default App
