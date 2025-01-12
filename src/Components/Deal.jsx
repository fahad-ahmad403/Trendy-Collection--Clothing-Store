import { useNavigate } from "react-router-dom";
import ProductRating from "./ui/ProductRating.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "./CartContext.jsx";
import { toast } from "./Utils/use-toast.js";
import DealLoader from "./ui/DealLoader.jsx";
import { useProductContext } from "./ui/ProductContext.jsx";
import { useState, useEffect } from "react";

function Deal() {
  const { products } = useProductContext();
  const {
    addToCart,
    addToWishlist,
    isProductInCart,
    removeCartItem,
    isProductInWishList,
    removeWishListItem,
  } = useCart();
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  const navigateHandle = (dealday) => {
    navigate(`/productpage/${dealday}`);
  };

  const toggleCart = (product) => {
    if (isProductInCart(product.id)) {
      removeCartItem(product.id);
      toast({
        title: "Cart",
        description: "Item removed successfully!!",
      });
    } else {
      addToCart(product);
      toast({
        title: "Cart",
        description: "Item added successfully",
      });
    }
  };

  const toggleWishList = (product) => {
    if (isProductInWishList(product.id)) {
      removeWishListItem(product.id);
      toast({
        title: "Wishlist",
        description: "Item removed successfully!!",
      });
    } else {
      addToWishlist(product);
      toast({
        title: "Wishlist",
        description: "Item added successfully",
      });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const dealProducts = products.slice(0, 4);

  return (
    <div className="w-full 2xl:flex bg-purple py-12">
      <div className="xl:w-full 2xl:w-[25%] flex flex-col justify-center items-center text-orange font-bold">
        <h3 className="text-3xl sm:text-4xl text-center pb-3 sm:pb-5 2xl:pl-10">
          Deals of the Day
        </h3>
        <p className="text-white text-xl">{currentTime}</p>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8 lg:px-12 mt-6">
        {dealProducts.length === 0
          ? Array(4)
              .fill(0)
              .map((_, index) => <DealLoader key={index} />)
          : dealProducts.map((deals) => (
              <div
                key={deals.id}
                className="cursor-pointer w-full bg-white flex flex-col justify-center items-center text-center
          group rounded-lg relative p-4"
              >
                <div>
                  <img
                    onClick={() => navigateHandle(deals.id)}
                    className="w-[180px] sm:w-[200px] h-[180px] sm:h-[200px] object-contain group-hover:scale-105 duration-200"
                    src={deals.image}
                    alt={deals.title}
                  />
                </div>
                <div className="flex flex-col items-center w-full pt-3 sm:pt-5">
                  <p className="line-clamp-1 font-semibold text-lg">
                    {deals.title}
                  </p>
                  <p className="text-orange font-semibold">${deals.price}</p>
                  <ProductRating rating={deals.rating.rate} />
                  <p className="text-xs font-semibold pt-1">
                    {deals.rating.count} Sold
                  </p>
                  <button
                    className={`absolute top-2 xl:right-2 sm:right-4 xs:right-4 xl:text-[18px] sm:opacity-100 sm:text-[24px] xs:text-[24px] xl:opacity-0 group-hover:opacity-100 hover:scale-125 duration-100 ${
                      isProductInWishList(deals.id) ? "text-red" : "text-grey"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishList(deals);
                    }}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                  <button
                    className={`absolute xl:top-10 sm:top-12 xs:top-12 xl:right-2 sm:right-4 xs:right-4 xl:text-[18px] sm:opacity-100 xl:opacity-0 sm:text-[24px] xs:text-[24px] group-hover:opacity-100 hover:scale-125 duration-300 ${
                      isProductInCart(deals.id) ? "text-orange" : "text-grey"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCart(deals);
                    }}
                  >
                    <FontAwesomeIcon icon={faCartPlus} />
                  </button>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Deal;
