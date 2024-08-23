import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const App = () => {
  const [task, setTask] = useState("");
  const [tag, setTag] = useState("Health");
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const addItemsToList = (e) => {
    e.preventDefault();
    if (task.trim()) {
      const newItem = {
        id: uuidv4(),
        task: task,
        tag: tag,
      };
      setList([...list, newItem]);
      setTask(""); // Clear the task input
    }
  };

  const filterByTag = (tag) => {
    const filtered = list.filter((item) => item.tag === tag);
    setFilteredList(filtered);
  };

  return (
    <div className="bg-container">
      <form className="card-1" onSubmit={addItemsToList}>
        <h1 className="heading">Create a task!</h1>

        <div className="input-con-1">
          <p>Task</p>
          <input
            type="text"
            className="input-1"
            placeholder="Enter the task here"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="input-con-2">
          <p>Tags</p>
          <select
            className="input-2"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          >
            <option value="Health">Health</option>
            <option value="Education">Education</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Sports">Sports</option>
            <option value="Travel">Travel</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <button className="add-task-button" type="submit">
          Add Task
        </button>
      </form>

      <div className="card-2">
        <h1>Tags</h1>
        <div className="button-con">
          <button onClick={() => filterByTag("Health")}>Health</button>
          <button onClick={() => filterByTag("Education")}>Education</button>
          <button onClick={() => filterByTag("Entertainment")}>
            Entertainment
          </button>
          <button onClick={() => filterByTag("Sports")}>Sports</button>
          <button onClick={() => filterByTag("Travel")}>Travel</button>
          <button onClick={() => filterByTag("Others")}>Others</button>
        </div>
        <h1>Tasks</h1>
        {list.length === 0 &&(<h1>No Tasks Added Yet</h1>)}
        <ul className="unorder-list">
          {(filteredList.length > 0 ? filteredList : list).map((item) => (
            <li key={item.id} className="list-item">
              <p>{item.task}</p>
              <button>{item.tag}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
