import { Main } from "./containers/Main";

const defaultTodo = [
  { id: 'a', text: 'Task 1', completed: true },
  { id: 'b', text: 'Task 2', completed: false },
  { id: 'c', text: 'Task 3', completed: true }
]

function App() {

  return (
    <Main defaultTodo={defaultTodo} />
  );
}

export default App;
