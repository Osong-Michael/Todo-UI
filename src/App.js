import TodoList from './TodoList/TodoList';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1">Todo List</Typography>
        <hr />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
