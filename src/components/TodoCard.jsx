import AddTaskModal from "./AddTaskModal";
import pen from "../assets/pen.png";
import bin from "../assets/bin.png";
import square from "../assets/square.png";

const TodoCard = ({todo, setTodos, setEditTodo})=>{
    const {id, title, description, completed} = todo;
    function toggleCompleted() {
        setTodos((prevTds) => {
          const updatedTodos = prevTds.map((td) => {
            if (td.id === id) {
              return { ...td, completed: !td.completed };
            }
            return td;
          });
          localStorage.setItem("todosList", JSON.stringify(updatedTodos));
          return updatedTodos;
        });
      }

      function handleDelete() {
        setTodos((prevTds) => {
            const updatedTodos = prevTds.filter((td) => td.id !== id);
            localStorage.setItem("todosList", JSON.stringify(updatedTodos));
            return updatedTodos;
        })
      }

      function handleEdit() {
        setEditTodo(todo);
      }


    return(
        <div className=" flex flex-col justify-between hover:translate-y-1 transition rounded-lg h-[300px] w-[300px] border border-black/10 bg-[#5B644D] hover:bg-[#6A725D] text-[#FDFBEE] p-6 shadow-lg shadow-brown-500/50 hover:shadow-black-500/40">
            <div className="flex justify-between w-[100%]">
                <div className="text-2xl text-semibold text-[#DCE2AA]">{title}</div>
                <div onClick={toggleCompleted}>{completed ? <div className="border border-black/10 rounded-lg h-10 w-10 shadow-xl shadow-white-500/40"><img src={square} alt="" /></div>:<div className="bg-[#FDFBEE] border border-black/10 rounded-lg h-10 w-10 shadow-xl shadow-white-500/40 text-black"></div>}</div>
            </div>
            <div className="text-left text-[#C9B17D]">{description}</div>
            <div className="flex justify-between p-2 w-[100%] gap-4">
                <button onClick={handleEdit}  className="h-10 w-10 rounded-full shadow-sm shadow-[#00000034] hover:bg-[#b1feb1] text-[black]"><img src={pen} alt="" /></button>
                <button onClick={handleDelete}  className="h-10 w-10 rounded-full shadow-sm shadow-[#00000034] hover:bg-[#fea9a9] text-[black]"><img src={bin} alt="" /></button>
            </div>
        </div>
    )
}
export default TodoCard;