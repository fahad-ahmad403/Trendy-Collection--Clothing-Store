import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(1);

  function incrementHandle() {
    if (count < 10) setCount((c) => c + 1);
  }

  function decrementHandle() {
    if (count > 0) setCount((c) => c - 1);
  }

  return (
    <div className="flex items-center gap-x-3">
      <p className="font-semibold">Quantity</p>
      <button
        className={`w-8 h-8 text-2xl rounded-full flex items-center justify-center ${
          count === 1
            ? "bg-grey/50 cursor-not-allowed"
            : "bg-grey/80 cursor-pointer"
        }`}
        onClick={decrementHandle}
        disabled={count === 1}
      >
        -
      </button>
      <p className="font-bold w-5 flex justify-center"> {count} </p>
      <button
        className={`w-8 h-8 text-2xl rounded-full flex items-center justify-center ${
          count === 10
            ? "bg-grey/50 cursor-not-allowed"
            : "bg-grey/80 cursor-pointer"
        }`}
        onClick={incrementHandle}
        disabled={count === 10}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
