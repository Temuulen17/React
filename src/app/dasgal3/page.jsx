"use client";
import { useState } from "react";

export default function dasgal3() {
  const [bgcolor, setbgcolor] = useState("white");

  return (
    <div
      className="flex gap-5 w-full h-screen items-center justify-center"
      style={{ backgroundColor: bgcolor }}
    >
      <button
        className="py-[40px] px-[40px] bg-green-600 text-4xl font-bold hover:bg-green-400 hover:text-white"
        onClick={() => setbgcolor("green")}
      >
        green
      </button>
      <button
        className="py-[40px] px-[40px] bg-red-600 text-4xl font-bold hover:bg-red-400 hover:text-white"
        onClick={() => setbgcolor("red")}
      >
        red
      </button>
    </div>
  );
}
