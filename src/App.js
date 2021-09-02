import { TodoCounter } from './TodoCounter.jsx'
import { TodoSearch } from './TodoSearch.jsx'
import { TodoList } from './TodoList.jsx'
import { TodoItem } from './TodoItem.jsx';
import { CreateTodoButton } from './CreateTodoButton.jsx';
import './App.css';

const todo = [
  { id: 'a', text: 'Task 1', completed: true },
  { id: 'b', text: 'Task 2', completed: false },
  { id: 'c', text: 'Task 3', completed: true }
]

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todo.map(todo => (
          <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
