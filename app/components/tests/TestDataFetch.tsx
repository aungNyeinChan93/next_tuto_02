import React from "react";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export const getTodos = async () => {
  const data = await fetch(`https://dummyjson.com/todos`, {
    next: { revalidate: 3600 },
  });
  const { todos } = await data.json();
  return todos;
};

const TestDataFetch = async () => {
  const todos = await getTodos();
  return (
    <React.Fragment>
      <section className="w-full mx-auto my-2">
        <p className="text-2xl font-bold inline-block  p-2 bg-gradient-to-r from-red-300 via-indigo-500 to-green-500 text-transparent bg-clip-text">
          Server side data fetching Test
        </p>
        <ul className="grid grid-cols-3 gap-4">
          {todos &&
            todos.map((todo: Todo) => (
              <li
                className="p-4 text-base bg-slate-200 rounded-2xl"
                key={todo.id}
              >
                {todo.todo}
              </li>
            ))}
        </ul>
      </section>
    </React.Fragment>
  );
};

export default TestDataFetch;
