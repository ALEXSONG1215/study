import { component, useState } from 'react'

export default function TodoWrite({ todoList, handleTodoList }) {
    const initWrite = {
        username: '',
        message: '',
        removed: false, 
        completed: false,    
    }

    const [write, setWrite] = useState(initWrite)

    const handleChangeWrite = (e) => {
        const { name, value } = e.target
        console.info(name, value)

        setWrite({
            ...write,
            [name]: value,
        })
    }

    const handleClick = () => {
        alert(write.username + ': ' + write.message)
        const newTodoList = [...todoList, write]
        handleTodoList(newTodoList)
        setWrite(initWrite)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleClick()
        }
    }

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

    return (
        <div>
            <h1>TODOLIST</h1>
            <input
                type="text"
                name="username"
                value={write.username}
                onChange={handleChangeWrite}
                placeholder="Username"
            />
            <input
                type="text"
                name="message"
                value={write.message}
                onChange={handleChangeWrite}
                onKeyDown={handleKeyPress}
                placeholder="Assignments"
            />
            <button onClick={handleClick}>Confirm</button>
        </div>
    )
}