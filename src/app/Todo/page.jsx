"use client";
import { useState } from "react";
import {ControlledTodo} from "@/app/Todo/_ControlledTodo"

const Page = () => {
  const [inputVal, setInputVal] = useState("");
  const [displayText, setDisplayText] = useState("");

  const inputChangeHandler = (e) => {
    setInputVal(e.target.value);
  };

  const addHandler = () => {
    setDisplayText(inputVal);
  };

  return (
    <ControlledTodo
      inputVal={inputVal}
      inputChangeHandler={inputChangeHandler}
      addHandler={addHandler}
      displayText={displayText}
    />
  );
};

export default Page;
