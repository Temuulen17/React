"use client";
import { useState } from "react";
import { Buttons } from "@/app/Component/Buttons";

import Todo from "@/app/Todo/";
export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputvalue] = useState("");
  const [isVisible, setIsVisible] = useState(false)

  function handleChange(e) {
    setInputvalue(e.target.value);
  }
  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputvalue("");
      setIsVisible(!isVisible)

    }
  };
  const [filter, setFilter] = useState("all");

  const deleteTasks = (deleteIndex) => {
    const deleteTask = tasks.filter((_, i) => i !== deleteIndex);
    setTasks(deleteTask);
  };

  return (
    <div className=" flex flex-col w-full h-screen justify-center items-center">
      <Todo
        tasks={tasks}
        setTasks={setTasks}
        inputValue={inputValue}
        setInputvalue={setInputvalue}
        handleChange={handleChange}
        addTask={addTask}
        deleteTasks={deleteTasks}
        filter={filter}
        setFilter={setFilter}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
    </div>
  );
}