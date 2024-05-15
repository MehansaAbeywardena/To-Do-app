App.jsx
import { useState } from "react";
import "./App.css";
import Task from "./components/task/task";

function App() {
	const [value, setValue] = useState("");

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const tasks = [
		"Do laundry",
		"Buy groceries",
		"Clean room",
		"Walk the dog",
		"Clean the house",
		"Service the car",
		"Pay bills",
	];

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
							onChange={handleChange}
						/>
						<button className="save_button">Save</button>
					</div>
					<div className="buttons_box">
						{/* Shows only the important pending tasks */}
						<button className="filter_button">Important tasks</button>
						<button className="filter_button">Pending tasks</button>
						<button className="filter_button">Completed tasks</button>
					</div>

					<div className="task_display">
						{tasks.map((task, index) => (
							<Task key={index} taskName={task} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;