import '../css/App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import NavBar from './NavBar';
import { useInputState, useAddTodo, useMarkCompleted } from '../hooks';

const App = () => {
	const [todo, updateTodo, resetTodoField] = useInputState('');
	const [editedTodo, updateEditedTodo, resetEditTodoField] = useInputState('');
	const [todos, submitTodo, submitEdit, deleteTodo, toggleCompleted, toggleEdit] = useAddTodo([]);
	return (
		<div className='App'>
			<NavBar />
			<TodoForm
				todo={todo}
				updateTodo={updateTodo}
				submitTodo={submitTodo}
				resetTodoField={resetTodoField}
			/>
			<TodoList
				submitEdit={submitEdit}
				editedTodo={editedTodo}
				todos={todos}
				updateEditedTodo={updateEditedTodo}
				resetEditTodoField={resetEditTodoField}
				deleteTodo={deleteTodo}
				toggleCompleted={toggleCompleted}
				toggleEdit={toggleEdit}
			/>
		</div>
	);
};

export default App;
