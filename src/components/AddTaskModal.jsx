import React, { useState, useEffect } from 'react';
const AddTaskModal = ({closeModal, setTodos, todos, editTodo, setEditTodo}) =>{
    const [title ,setTitle] = useState(editTodo ? editTodo.title : "");
    const [description, setDescription] = useState(editTodo ? editTodo.description : "");

    useEffect(() => {
        if (editTodo) {
            setTitle(editTodo.title);
            setDescription(editTodo.description);
        }else{
            setTitle("");
            setDescription("");
        }
    }, [editTodo]);

    function addTodo(){
        const newTodo = {
        title,
        description,
        completed : false,
        id : Date.now()
        }
        const updatedTodos = [newTodo, ...todos];
        setTodos(updatedTodos);
        localStorage.setItem("todosList", JSON.stringify(updatedTodos));
    }
    
    function editTodoHandler(){
        const updatedTodos = todos.map((todo) => {
            if (todo.id === editTodo.id) {
                return { ...todo, title, description };
            }
            return todo;
        });
        setTodos(updatedTodos);
        localStorage.setItem("todosList", JSON.stringify(updatedTodos));
    }

    function handleAddOrEdit() {
        if(title === "" || description === ""){
            alert("Please fill all the fields");
            return;
        }
        if (editTodo) {
            editTodoHandler();
        } else {
            addTodo();
        }
        closeModal();
    }
    return (
        <div onClick={closeModal} className="fixed top-0 left-0 w-screen h-screen bg-black/20 backdrop-blur-sm flex justify-center items-center border border-black/30">
            <div className="h-[60vh] w-[40vw] bg-[#F5ECE0] rounded-lg flex flex-col gap-3 p-5" onClick={(e)=>e.stopPropagation()}>
                <div className="flex w-[100%] justify-between">
                    <h2 className="text-2xl font-semibold">Add Task Details</h2>
                    <button onClick={closeModal} className="text-xl">❌</button>
                </div>
                <input value={title} onInput={(e)=>setTitle(e.target.value)} type="text" name="task" id="task-title" placeholder="Enter the task title.." className="w-full p-2 rounded-md" />
                <textarea value={description} onInput={(e)=>setDescription(e.target.value)} name="task-description" id="task-desc" placeholder="Add a description..." className="w-full h-full max-h-full p-3 rounded-md"></textarea>
                <button className="w-full bg-[#FE4F2D] text-[#FDFAF6] p-2 rounded-lg" onClick={handleAddOrEdit}>Add Task</button>
            </div>
        </div>
    )
}
export default AddTaskModal;