import React, { useEffect, useState } from "react";
import {
  deleteTheTodo,
  editTheTodo,
  getTheTodo,
  postTheTodo,
} from "../../../services/toDoListApi";

const ToDoList = () => {
  const [data, setData] = useState([]);
  const [todo, setTodo] = useState("");
  const [completed, setCompleted] = useState(false);
  const [userId, setUserId] = useState("");
  const [returnPost, setreturnPost] = useState([]);
  const [deletRes, setDeletRes] = useState();
  const [editedRes, setEditedRes] = useState([]);

  const fetchData = async () => {
    const resp = await getTheTodo();
    setData(resp.todos);
    console.log(resp.todos);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handle = async (e) => {
    // alert("KK")
    e.preventDefault();
    const form = {
      todo,
      completed: completed === "true" || completed === true, // ensure boolean
      userId: Number(userId),
    };
    const r = await postTheTodo(form);
    setreturnPost(r);
    console.log("r", r);
  };

  const handleDeelte = async (id) => {
    // e.preventDefault();
    const r = await deleteTheTodo(id);
    console.log("deleterer", r);
    setDeletRes(r);
  };
  const handleEdit = async (id) => {
    const dataChanged = {
      todo,
      completed,
      userId,
    };
    const r = await editTheTodo(id, dataChanged);
    setEditedRes(r);
    //  setData(r);
    console.log("editor", r);

  };

  return (
    <div>
      toDoList
      {editedRes.id}
      {editedRes.completed}
      {editedRes.todo}
     
      <ul>
        {data.map((data, i) => (
          <div key={i}>
            {/* <div>{data.todo}</div> */}

            <input
              value={data.userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="todo"
            />
            <input
              value={data.todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="todo"
            />

            <input
              value={data.completed}
              onChange={(e) => setCompleted(e.target.value)}
              placeholder="completed"
            />
            {/* <div>{data.id}</div> */}
            <button onClick={() => handleDeelte(data.userId)} className="px-5">
              Delete
            </button>
            <button onClick={() => handleEdit(data.userId)}>Edit</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
