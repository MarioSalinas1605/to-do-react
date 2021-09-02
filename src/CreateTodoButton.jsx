import React from 'react';
import './styles/CreateTodoButton.css'

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