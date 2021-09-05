import { useState } from 'react';

import '../assets/styles/TodoForm.css';
function TodoForm({ onAddTodo, onCancelAddTodo }) {
    const [newTodoValue, setNewTodoValue] = useState('');

    const onCancel = () => {
        onCancelAddTodo();
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('onSubmit');
        onAddTodo(newTodoValue);
        onCancelAddTodo();
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                onChange={onChange}
                placeholder="Cortar la cebolla para el almuerzo"
            ></textarea>
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button-cancel"
                    value={newTodoValue}
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button-add"
                    disabled={newTodoValue ? false : true}
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }