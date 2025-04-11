const NavBar= ()=>{
    return(
        <div className="h-16 p-5 flex justify-start item-center gap-3 bg-[#806A46]">
            <div className="flex justify-center items-center gap-2">
            <div className="h-10 w-10"><img src="src/assets/to-do-list.png" alt="" /></div>
            <span className="text-[#fafed2] text-2xl font-semibold">ToDoList</span>
            </div>
        </div>
    )
}
export default NavBar;