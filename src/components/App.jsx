import '../css/App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import NavBar from './NavBar';
import { useInputState, useAddTodo } from '../hooks';

const App = () => {
	const [todo, updateTodo, resetTodoField] = useInputState('');
  const [todos, submitTodo] = useAddTodo([]);

	return (
		<div className='App'>
			<NavBar />
			<TodoForm
				todo={todo}
				updateTodo={updateTodo}
				submitTodo={submitTodo}
				resetTodoField={resetTodoField}
			/>
			<TodoList todos={todos} />
		</div>
	);
};

export default App;
