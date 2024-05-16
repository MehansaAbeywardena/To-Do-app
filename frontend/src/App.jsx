import { useEffect, useState } from "react";
import "./App.css";
import Task from "./components/task/task";
import { addTask, getAllTasks } from "./utils/APIHandler";

function App() {
	const [value, setValue] = useState("");
	const[task,setTask] = useState([])
	const [isImportant, setIsImportant] = useState(false);

	useEffect(() => {
		getAllTasks(setTask)
	},[])

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<div className="app_container">
			<div className="app">
				<div className="title_box">
					<h1>Daily Task Tracker</h1>
					<h2>Manage all your daily tasks in one place</h2>
				</div>

				<div className="task_area">
					<div className="textfield_area">
						<input
							className="textfield"
							placeholder="Enter your task here"
							type="text"
							value={value}
							onChange= {(e)=> setValue(e.target.value)}
						/>
						<button className="save_button" onClick={() => addTask(value,setValue,setTask)}>Save</button>
					</div>
					<div className="buttons_box">
						{/* Shows only the important pending tasks */}
						<button className="filter_button">Important tasks</button>
						<button className="filter_button">Pending tasks</button>
						<button className="filter_button">Completed tasks</button>
					</div>

					<div className="task_display">
						{task.map((task) => (
							<Task key={task._id} taskName={task.text} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;