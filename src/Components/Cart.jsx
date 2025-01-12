import { useCart } from "./CartContext.jsx";
import emptyCart from "../assets/empty-cart.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faCartShopping,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import ProductRating from "./ui/ProductRating.jsx";
import CartCounter from "./ui/CartCounter.jsx";
import { Link } from "react-router-dom";
import { CartSummary } from "./ui/CartSummary.jsx";
import { useEffect } from "react";

function Cart({ setIsOpen }) {
  const { cartItem, setCartItem } = useCart();

  const removeCartItem = (productId) => {
    setCartItem((prev) => prev.filter((item) => item.id !== productId));
    localStorage.setItem(
      "Cart",
      JSON.stringify(cartItem.filter((item) => item.id !== productId))
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cartItem]);

  return (
    <div
      onClick={() => setIsOpen(false)}
      className="pt-20 bg-grey/10 min-h-screen"
    >
      {cartItem && cartItem.length > 0 ? (
        <div>
          <div className="flex justify-between items-center border-b-[1px] border-black/20">
            <h2 className="xl:text-3xl xs:text-xl font-bold flex items-center py-3 pl-5">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="w-8 h-8 pr-5 text-orange xs:hidden xl:block lg:block sm:block 2xl:block"
              />
              Your Cart
            </h2>
            <div className="flex items-center gap-x-10">
              <Link
                to="/checkoutpage"
                className="flex justify-center items-center xl:w-32 xl:h-10 xl:text-lg xs:w-24 xs:h-8 xs:text-[12px] bg-orange hover:bg-orange/95 text-purple font-semibold rounded-lg"
              >
                Checkout
              </Link>
              <h2 className="xl:text-xl xs:text-sm font-semibold flex py-3 pr-5">
                {cartItem.length} Item(s)
              </h2>
            </div>
          </div>
          <div className="xl:flex lg:flex justify-between">
            <div className="p-5 w-full">
              {cartItem
                .slice()
                .reverse()
                .map((item) => (
                  <div
                    key={item.id}
                    className="flex bg-white mb-5 rounded-lg w-min-screen xl:h-[200px] xs:h-[150px] sm:h-[170px] relative shadow-lg hover:shadow-xl duration-300 group"
                  >
                    <div className="flex justify-center items-center xl:px-5 xs:px-1">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="m-5 object-contain group-hover:scale-105 duration-200 xl:w-[170px] xl:h-[170px]
                        sm:w-[120px] sm:h-[120px] xs:w-[100px] xs:h-[100px]"
                      />
                    </div>
                    <div className="flex justify-between w-full xl:px-5 xs:px-3">
                      <div className="pt-10 pl-1">
                        <p className="xl:text-xl sm:text-lg font-semibold text-black mb-3 xl:w-[250px] sm:w-[150px] xs:w-[130px] line-clamp-1">
                          {item.title}
                        </p>
                        <ProductRating rating={item.rating.rate} />
                        <p className="xl:text-base xs:text-sm font-semibold text-black/70 pt-0">
                          $ {item.price}
                        </p>
                        <CartCounter productID={item.id} />
                      </div>
                      <div className="flex flex-col space-y-3 justify-center items-start font-bold xl:text-base xs:text-[12px]">
                        <p>$ {(item.price * item.count).toFixed(2)}</p>
                        <button
                          onClick={() => removeCartItem(item.id)}
                          className="text-red flex text-sm font-light"
                        >
                          <FontAwesomeIcon icon={faTrash} className="pr-2" />
                          <span className="xs:hidden sm:block">Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div>
              <CartSummary />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center sm:pt-16 xs:pt-8">
          <img
            src={emptyCart}
            alt="Empty cart illustration"
            className="w-[200px] h-[200px]"
          />
          <p className="text-black text-xl font-semibold py-3">
            Your cart is empty
          </p>
          <p className="text-grey mx-5 text-base text-center">
            Looks like you have not added anything to your cart. Go ahead &
            explore any product you want.
          </p>
          <Link
            to="/"
            className="w-[150px] h-[40px] bg-purple hover:bg-purple/95 text-orange rounded-lg
          mt-5 flex items-center justify-center gap-x-2 group"
          >
            <FontAwesomeIcon
              icon={faArrowLeftLong}
              className="group-hover:scale-125 group-hover:-translate-x-1.5 duration-300"
            />
            Explore now
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
