import { useState } from 'react';
import { nanoid } from 'nanoid'
import { TodoCounter } from './../components/TodoCounter.jsx'
import { TodoSearch } from './../components/TodoSearch.jsx'
import { TodoList } from './../components/TodoList.jsx'
import { TodoItem } from './../components/TodoItem.jsx';
import { CreateTodoButton } from './../components/CreateTodoButton.jsx';
import { TodoForm } from '../components/TodoForm.jsx';
import { Modal } from './Modal.jsx';

function Main({ defaultTodo = [] }) {
    const [todos, setTodos] = useState(defaultTodo)
    const [searchValue, setSearchValue] = useState('');
    const [openMondal, setOpenModal] = useState(false);

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;
    let searchedTodos = [];

    if (searchValue.length) {
        searchedTodos = todos.filter(todo => {
            const searchToFilter = searchValue.toLowerCase();
            const todoToFilter = todo.text.toLowerCase();
            return todoToFilter.includes(searchToFilter);
        })
    } else {
        searchedTodos = todos;
    }

    const handleCompleteTodo = (index, status) => {
        const newTodos = [...todos];
        newTodos[index].completed = !status;
        setTodos(newTodos);
    }

    const handleDeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    const handleCreateTodo = () => {
        setOpenModal(state => !state);
    }

    const handleCloseAddTodo = () => {
        setOpenModal(false);
    }

    const handleAddTodo = (text) => {
        const id = nanoid();
        const newTodos = [...todos];
        newTodos.push({
            id,
            completed: false,
            text
        });
        setTodos(newTodos);
    }

    return (
        <>
            <TodoCounter
                total={totalTodos}
                completed={completedTodos}
            />
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

            <TodoList>
                {searchedTodos.map((todo, index) => (
                    <TodoItem
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onCompleted={() => handleCompleteTodo(index, todo.completed)}
                        onDeleted={() => handleDeleteTodo(index)}
                    />
                ))}
            </TodoList>


            {
                openMondal && (
                    <Modal>
                        <TodoForm
                            onAddTodo={handleAddTodo}
                            onCancelAddTodo={handleCloseAddTodo}
                        />
                    </Modal>
                )
            }
            <CreateTodoButton onCreateTodo={handleCreateTodo} />
        </>
    )
}

export { Main }