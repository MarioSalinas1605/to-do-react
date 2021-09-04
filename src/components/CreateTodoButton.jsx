import React from 'react';
import '../assets/styles/CreateTodoButton.css'

function CreateTodoButton({ onCreateTodo }) {
    return (
        <button
            className="CreateTodoButton"
            onClick={onCreateTodo}
        >
            +
        </button>
    )
}

export { CreateTodoButton }