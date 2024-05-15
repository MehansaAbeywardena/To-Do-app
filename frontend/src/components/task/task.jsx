task.jsx
import React from "react";
import { useState } from "react";
import s from "./task.module.css";
function Task(props) {
	const [isDone, setisDone] = useState(false);

	const handleCheckboxChange = () => {
		setisDone(!isDone);
	};

	return (
		<div className={s.task}>
			<div className={s.task_name}>
				<input
					type="checkbox"
					checked={isDone}
					onChange={handleCheckboxChange}
				/>
				<p>{props.taskName}</p>
			</div>

			<div className={s.task_actions}>
				<button className={s.edit_button}>edit</button>
				<button className={s.delete_button}>delete</button>
			</div>
		</div>
	);
}

export default Task;