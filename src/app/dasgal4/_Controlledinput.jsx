import React from "react";

export const ControlledInput = (props) => {
  const { inputVal, inputChangeHandler, clickHandler, displayText } = props;
  return (
    <div className="p-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={inputVal}
          onChange={inputChangeHandler}
          className="border-black border-2 rounded"
        />
        <button
          onClick={clickHandler}
          className="bg-gray-400 px-2 rounded-text hover:bg-gray-500"
        >
          Click
        </button>
      </div>
      <p>{displayText}</p>
    </div>
  );
};
