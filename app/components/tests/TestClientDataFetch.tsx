"use client";

import React, { useEffect, useState } from "react";
import { getTodos } from "./TestDataFetch";

const TestClientDataFetch = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodos();
      setTodos(data);
    };
    fetchTodos();
  }, []);
  return (
    <section>
      <h4>Client Data fetching . . .</h4>
      {todos &&
        Array.isArray(todos) &&
        todos?.map((todo: any) => (
          <div className="p-2 my-2 text-base " key={todo.id}>
            {todo.todo}
          </div>
        ))}
    </section>
  );
};

export default TestClientDataFetch;
