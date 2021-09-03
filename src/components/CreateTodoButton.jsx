import React from 'react';
import '../assets/styles/CreateTodoButton.css'

function CreateTodoButton(params) {
    const onClickButton = () => {
        alert('Here should be a modal')
    }

    return (
        <button
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    )
}

export { CreateTodoButton }