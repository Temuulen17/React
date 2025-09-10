"use client";
import { useState } from "react";
export default function Home() {
  const [number, setNumber] = useState(10);

  const handleIncrease = () => {
    setNumber(number + 1);
  };
  const Xacax = () => {
    setNumber(number - 1);
  };
  const Reset = () => {
    setNumber(0);
  };
  return (
    <div className=" flex justify-center items-center gap-[10px]">
      <p className="text-2xl">Hello-{number}</p>
      <button
        className="px-4 py-2 bg-green-500 cursor-pointer rounded-md hover:bg-green-300"
        onClick={handleIncrease}
      >
        Increase
      </button>
      <button
        className="px-4 py-2 bg-blue-500 cursor-pointer rounded-md hover:bg-blue-300"
        onClick={Reset}
      >
        Reset
      </button>
      <button
        className="px-4 py-2 bg-yellow-500 cursor-pointer rounded-md hover:bg-yellow-300"
        onClick={Xacax}
      >
        Xacax
      </button>
    </div>
  );
}
