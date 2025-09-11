"use client";
import React, { useState } from "react";
import { ProductCard } from "./_components/ProductCard";
import { AddProduct } from "./_components/AddProduct";

const data = [
  {
    id: 1,
    name: "iphone 17",
    price: 18999,
  },
  {
    id: 2,
    name: "macbook",
    price: 1234,
  },
  {
    id: 3,
    name: "car",
    price: 111111,
  },
];

const Page = () => {
  const [products, setProducts] = useState(data);
  console.log(products);

  const handleRemoveProd = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };

  const prodAddHandler = (name, price) => {
    const newProd = {
      id: products[products.length - 1].id + 1,
      name: name,
      price: price,
    };

    setProducts([...products, newProd]);
  };
  return (
    <div className="p-4 flex gap-2 flex-wrap">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.name}
            product={product}
            handleRemoveProd={handleRemoveProd}
          />
        );
      })}
      <AddProduct prodAddHandler={prodAddHandler} />
    </div>
  );
};

export default Page;
