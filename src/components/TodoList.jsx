export default function TodoList({todoList, handleTodoList}){
    const subject = "Subject : TodoList";
    const toggleComplete = (index) => {
        const updatedTodo = [...todoList]
        updatedTodo[index].completed = !updatedTodo[index].completed 
        handleTodoList(updatedTodo)
    }

    const toggleRemove = (index) => {
        const updatedTodo = [...todoList]
        updatedTodo[index].removed = !updatedTodo[index].removed
        handleTodoList(updatedTodo)
    }
    return(
        <>
            <div>{subject}</div>
            <div>
                <ol>
                    {todoList.map((todo, index) => (
                        <li key={index} style={{ textDecoration: todo.removed ? 'line-through' : 'none' }}>
                            <input 
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleComplete(index)} 
                            />
                            <span onClick={() => toggleRemove(index)} style={{ cursor: 'pointer' }}>
                                {todo.username}: {todo.message}
                            </span>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    )
};