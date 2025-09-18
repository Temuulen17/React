"use client";
import { useState } from "react";
import { Todo } from "../Component/Todo";

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
  
  const visibleTask = tasks.filter((t) => {
    if (filter === "all") return true;
    else if (filter === "active") return t.completed === false;
    else if (filter === "completed") return t.completed === true;
    else if (filter === "favourite") return t.favourite === true;
  });
  const clearCompleted = () => {
    const clear = tasks.filter((task) => !task.completed);
    setTasks(clear);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const clearAll = () => {
    setTasks([]);
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
        visibleTask={visibleTask}
        setFilter={setFilter}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
    </div>
    
  );
}