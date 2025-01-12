import { useCart } from "../CartContext";

function TotalCounter({ productID }) {
  const { wishList, incrementHandle, decrementHandle } = useCart();
  const product = wishList.find((item) => item.id === productID);

  return (
    <div className="flex items-center text-black/80 pt-1">
      <button
        className={`w-8 h-8 text-2xl rounded-full flex items-center justify-center xl:mr-1 xs:mr-0 ${
          product.count === 1
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-gray-300 cursor-pointer"
        }`}
        onClick={() => decrementHandle(productID)}
        disabled={product.count === 1}
      >
        -
      </button>
      <p className="font-bold flex justify-center items-center w-8 h-7">
        {product.count}
      </p>
      <button
        className={`w-8 h-8 text-2xl rounded-full flex items-center justify-center xl:ml-1 xs:ml-0 ${
          product.count === 10
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-gray-300 cursor-pointer"
        }`}
        onClick={() => incrementHandle(productID)}
        disabled={product.count === 10}
      >
        +
      </button>
    </div>
  );
}

export default TotalCounter;
