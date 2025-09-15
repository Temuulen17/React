
import React from "react";

export const ControlledTodo = (props) => {
  const { inputVal, inputChangeHandler, addHandler, displayText } = props;
  return (
<div className="px-2 py-2  bg-gray-200">
  <p></p>
<div className="p-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={inputVal}
          onChange={inputChangeHandler}
          className="border-blue border-2 rounded"
        />
        <button
          onClick={addHandler}
          className="bg-blue-500 px-4 rounded-text border-2  hover:bg-blue-300"
        >
          Add
        </button>
      </div>
      <p>{displayText}</p>
    </div>
</div>
  );
};
