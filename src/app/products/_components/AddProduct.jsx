"use client";
import React, { useState } from "react";

export const AddProduct = (props) => {
  const { prodAddHandler } = props;
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setPrice(Number(e.target.value));
  };
  return (
    <div>
      <input
        value={name}
        onChange={nameChangeHandler}
        type="text"
        placeholder="name"
        className="border-2"
      />
      <input
        value={price}
        onChange={priceChangeHandler}
        type="number"
        placeholder="price"
        className="border-2"
      />
      <button onClick={() => prodAddHandler(name, price)} className="border-2">
        Add
      </button>
    </div>
  );
};
