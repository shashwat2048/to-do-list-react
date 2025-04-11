import AddTaskModal from "./components/AddTaskModal"
import ToDoSection from "./components/ToDoSection"
import NavBar from "./components/Navbar"
import { useState } from "react";
import Carousel from "./components/Carousel";

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
      {(isOpen || editTodo) && (
          <AddTaskModal
            key={editTodo ? editTodo.id : "new"}
            closeModal={closeModal}
            setTodos={setTodos}
            todos={todos}
            editTodo={editTodo}
          />
      )}
      </div>
  )
}

export default App
