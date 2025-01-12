import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "../CartContext";

export const CartSummary = () => {
  const { cartItem } = useCart();
  const subtotal = cartItem.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );
  const shipping = 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white p-6 md:m-5 sm:m-5 xs:m-5 lg:my-5 lg:ml-0 lg:mr-5 rounded-lg shadow-md xl:min-w-[350px] xs:min-w-[320px]">
      <div className="flex items-center gap-2 mb-6">
        <FontAwesomeIcon
          icon={faCartShopping}
          className="w-6 h-6 text-orange"
        />
        <h2 className="text-xl font-semibold">Order Summary</h2>
      </div>

      <div className="space-y-4">
        {cartItem.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <div>
              <p className="font-medium line-clamp-1">{item.title}</p>
              <p className="text-sm text-gray-500">Quantity: {item.count}</p>
            </div>
            <p className="font-medium">${item.price * item.count.toFixed(2)}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-grey/70 space-y-2">
        <div className="flex justify-between">
          <p className="text-black">Subtotal</p>
          <p className="font-medium">${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-black">Shipping</p>
          <p className="font-medium">${shipping.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-black">Tax</p>
          <p className="font-medium">${tax.toFixed(2)}</p>
        </div>
        <div className="flex justify-between pt-2 border-t border-grey/70">
          <p className="font-semibold">Total</p>
          <p className="font-semibold">${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};
