import React from 'react'
import "./TodoFooter.css"
import { Link } from "react-router-dom"

function TodoFooter({
    numberOfIncompleteTasks
}) {
    return (
        <div className="todo-footer">
            <p>{numberOfIncompleteTasks} {numberOfIncompleteTasks === 1 ? "tarefa restante" : "tarefas restantes"}</p>
            <Link to="/followers">Seguidores</Link>
        </div>
    )
}

export default TodoFooter
