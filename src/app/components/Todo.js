"use client";

import { supabase } from "@/config/supabase";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/todo");
        setTodos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTodo = async (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      try {
        const response = await axios.post("/api/todo/create", {
          text: inputValue,
        });
        console.log(response);
        setTodos(response.data.allTodos);
        setInputValue("");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const toggleStatus = async (id) => {
    try {
      const response = await axios.put(`/api/todo/update/${id}`);
      if (response.statusText !== "OK") {
        throw new Error("Network response was not ok");
      }
      // console.log(response);

      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`/api/todo/delete/${id}`);
      if (response.statusText !== "OK") {
        throw new Error("Network response was not ok");
      }
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }

    // setTodos(newTodos);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        width: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Todo App</h1>

      <form method="post" onSubmit={addTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === "Enter" && addTodo(e)}
          placeholder="Add a new todo"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            boxSizing: "border-box",
            color: "black",
            outline: "none",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Add
        </button>
      </form>

      <ul style={{ listStyleType: "none", padding: "0" }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              padding: "10px",
              borderBottom: "1px solid #ccc",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.description}
            <div>
              <button
                onClick={() => toggleStatus(todo.id)}
                style={{
                  marginRight: "10px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "5px 10px",
                }}
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "5px 10px",
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
