"use client";
import { useState } from "react";
export default function Home(props) {
  const [display, setDisplay] = useState("");
  const name = () => {
    setDisplay("Temuulen");
  };
  const age = () => {
    setDisplay("30 years old");
  };
  const gender = () => {
    setDisplay("male");
  };
  return (
    <div className="flex gap-[10px]">
      <input
        type="text"
        value={display}
        readOnly
        className="bg-black w-[300px] h-[50px] border-2 rounded-2xl text-white text-4xl"
      ></input>
      <div className=" flex gap-[10px]">
        <button
          className="py-[20px] px-[20px] bg-green-600 rounded-2xl cursor-pointer hover:bg-green-300 text-2xl"
          onClick={name}
        >
          name
        </button>
        <button
          className="py-[20px] px-[20px] bg-amber-600 rounded-2xl cursor-pointer hover:bg-amber-200 text-2xl"
          onClick={age}
        >
          age
        </button>
        <button
          className="py-[20px] px-[20px] bg-red-500 rounded-2xl cursor-pointer hover:bg-red-200 text-2xl"
          onClick={gender}
        >
          gender
        </button>
      </div>
    </div>
  );
}
