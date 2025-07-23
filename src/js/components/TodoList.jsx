import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const TodoList = () => {
const [task, setTask] = useState("");
const [todo, setTodo] = useState([]);

const handleKeyDown = (e) => {
if (e.key === "Enter" && task.trim() !== "") {
setTodo([...todo, task.trim()]);
setTask("");
}
};

const removeTask = (index) => {
const newTodo = [...todo];
newTodo.splice(index, 1);
setTodo(newTodo);
};

return ( 
<div className="container mt-5 d-flex justify-content-center">
  <div className="todo-box p-4 shadow-sm bg-white rounded w-50 position-relative">
  <h1 className="text-muted text-center">todos</h1>

  <input
  type="text"
  className="form-control mb-3"
  placeholder="Añadir tarea"
  value={task}
  onChange={(e) => setTask(e.target.value)}
  onKeyDown={handleKeyDown}
  />

  <ul className="list-group mb-0">
  {todo.length === 0 ? (
  <li className="list-group-item text-muted">añadir tareas</li>
  ) : (
  todo.map((t, index) => (
  <li
  key={index}
  className="list-group-item d-flex justify-content-between align-items-center todo-item"
  >
  <span>{t}</span>
  <span className="delete-icon text-danger" onClick={() => removeTask(index)}>❌</span>
  </li>
  ))
  )}
  </ul>
  {todo.length > 0 && (
  <div className="todo-footer text-start text-muted small">
  {todo.length} item{todo.length > 1 ? "s" : ""} left
  </div>
  )}
  </div>
</div>
);
};

           
export default TodoList;
