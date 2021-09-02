import { useState } from 'react';
import { TodoCounter } from './TodoCounter.jsx'
import { TodoSearch } from './TodoSearch.jsx'
import { TodoList } from './TodoList.jsx'
import { TodoItem } from './TodoItem.jsx';
import { CreateTodoButton } from './CreateTodoButton.jsx';
import './App.css';

const defaultTodo = [
  { id: 'a', text: 'Task 1', completed: true },
  { id: 'b', text: 'Task 2', completed: false },
  { id: 'c', text: 'Task 3', completed: true }
]

function App() {
  const [todos, setTodos] = useState(defaultTodo)
  const [searchValue, setSearchValue] = useState('');

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

  return (
    <>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
