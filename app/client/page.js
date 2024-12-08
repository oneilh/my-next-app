"use client";
import { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-row gap-8 mx-auto justify-center">
      <button className="text-6xl" onClick={() => setCount(count - 1)}>-</button>
      <h1 className="text-9xl font-bold w-40 text-center">{count}</h1>
      <button className="text-6xl" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};

export default ClientPage;
