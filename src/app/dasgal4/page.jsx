"use client";
import { useState } from "react";
import { ControlledInput } from "@/app/dasgal4/_Controlledinput";

const Page = () => {
  const [inputVal, setInputVal] = useState("");
  const [displayText, setDisplayText] = useState("");

  const inputChangeHandler = (e) => {
    setInputVal(e.target.value);
  };

  const clickHandler = () => {
    setDisplayText(inputVal);
  };

  return (
    <ControlledInput
      inputVal={inputVal}
      inputChangeHandler={inputChangeHandler}
      clickHandler={clickHandler}
      displayText={displayText}
    />
  );
};

export default Page;
