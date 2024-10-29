import { useState } from "react";
import TodoList from "../components/TodoList";
import TodoWrite from "../TodoWrite";

export default function TodoPage(){
    const _KEY = 'todolist';

    const [todoList, setTodoList] = useState(() => {
        if(localStorage.getItem(_KEY)){
            const saveData = JSON.parse(localStorage.getItem(_KEY));
            return saveData;
        }else{
            return [];
        }
    });

    const handleTodoList = (arr) => {
        localStorage.setItem(_KEY, JSON.stringify(arr));
        setTodoList(arr);
    }

    console.log(localStorage.getItem(_KEY));

    return(
        <>
            <TodoWrite todoList={todoList} handleTodoList={handleTodoList} />
            <TodoList todoList={todoList} handleTodoList={handleTodoList}/>
        </>
    )
}