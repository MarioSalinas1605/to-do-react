import React from 'react';
import './styles/TodoCounter.css'

function TodoCounter({ total, completed }) {
    return (
        <h1 className="TodoCounter">Haz completado {completed} de {total} todo's</h1>
    )
}

export { TodoCounter }