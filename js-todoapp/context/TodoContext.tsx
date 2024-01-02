"use client";
import React from "react";
import { Todo } from "@/lib/definitions";

type TodoContextProps = {
  todo: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
  addTodo: (title: string, desc: string, date: string) => void;
  deleteTodo: (id: number) => void;
};

export const TodoContext = React.createContext<TodoContextProps | null>(null);

export default function TodoContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todo, setTodo] = React.useState<Todo[]>([]);

  const addTodo = (title: string, desc: string, date: string) => {
    setTodo((prev) => [
      ...prev,
      { id: todo.length + 1, title: title, desc: desc, date: date },
    ]);
  };

  const deleteTodo = (id: number) => {
    setTodo((prevTodo) => prevTodo.filter((e) => e.id !== id));
  };

  const allvalue = {
    todo,
    setTodo,
    addTodo,
    deleteTodo,
  };

  return (
    <TodoContext.Provider value={allvalue}>{children}</TodoContext.Provider>
  );
}
