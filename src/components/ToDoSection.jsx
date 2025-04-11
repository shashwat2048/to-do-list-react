import TodoCard from "./TodoCard";
const ToDoSection = ({openModal, todos, setTodos, setEditTodo}) =>{
    return (
        <div className="flex flex-col justify-center items-center gap-5 p-8">
            <h2 className="text-2xl font-semibold">To Do</h2>
            <button className="border border-black/5 rounded-full bg-[#806A46] p-3 text-[#fafed2] font-semibold" onClick={openModal}>Create To Do</button>
            <div className="flex flex-wrap justify-center items-center gap-5">
                {todos.length===0 && <div className="text-2xl font-semibold text-black">"No ToDo's available"</div>}
                {
                todos.map(todo => {
                    if(!todo.completed){
                        return <TodoCard key={todo.id} todo={todo} setTodos={setTodos} setEditTodo={setEditTodo}/>
                    }
                })}
                {todos.map(todo => {
                    if(todo.completed){
                        return <TodoCard key={todo.id} todo={todo} setTodos={setTodos} setEditTodo={setEditTodo}/>
                    }
                })}
            </div>
        </div>
    )
}
export default ToDoSection;