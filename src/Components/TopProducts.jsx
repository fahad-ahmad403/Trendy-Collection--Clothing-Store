import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import ProductRating from "./ui/ProductRating.jsx";
import { useCart } from "./CartContext.jsx";
import { toast } from "./Utils/use-toast.js";
import TopProductLoader from "./ui/TopProductLoader.jsx";
import { useTopProductsContext } from "./ui/TopProductsContext.jsx";

function TopProducts() {
  const { topProducts } = useTopProductsContext();
  const {
    addToCart,
    addToWishlist,
    removeCartItem,
    isProductInCart,
    removeWishListItem,
    isProductInWishList,
  } = useCart();

  const navigate = useNavigate();

  function navigateHandle(top) {
    navigate(`/productpage/${top}`);
  }

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

  return (
    <div className="w-full h-auto bg-grey/15 py-10 px-5 flex flex-col items-center gap-8">
      <div className="w-full text-left">
        <h1 className="xl:text-3xl lg:text-3xl lg:text-start xl:text-start sm:text-2xl xs:text-2xl sm:text-center xs:text-center font-bold">
          Top Products
        </h1>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topProducts.length === 0
          ? Array(8)
              .fill(0)
              .map((_, index) => <TopProductLoader key={index} />)
          : topProducts.map((topP) => (
              <div
                key={topP.id}
                className="cursor-pointer w-full bg-white flex flex-col justify-center items-center text-center rounded-lg relative group p-4"
              >
                <div>
                  <img
                    onClick={() => navigateHandle(topP.id)}
                    className="w-[180px] sm:w-[200px] h-[180px] sm:h-[200px] object-contain group-hover:scale-105 duration-200"
                    src={topP.image}
                    alt={topP.title}
                  />
                </div>
                <div className="flex flex-col items-center w-full pt-3">
                  <p className="line-clamp-1 font-semibold text-lg">
                    {topP.title}
                  </p>
                  <p className="text-orange font-semibold">${topP.price}</p>
                  <ProductRating rating={topP.rating.rate} />
                  <p className="text-xs font-semibold pt-1">
                    {topP.rating.count} Sold
                  </p>
                  <button
                    className={`absolute top-2 xl:right-3 sm:right-4 xs:right-4 xl:text-[18px] sm:opacity-100 sm:text-[24px] xs:text-[24px] xl:opacity-0 group-hover:opacity-100 hover:scale-125 duration-300 ${
                      isProductInWishList(topP.id) ? "text-red" : "text-grey"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishList(topP);
                    }}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                  <button
                    className={`absolute xl:top-10 sm:top-12 xs:top-12 xl:right-3 sm:right-4 xs:right-4 xl:text-[18px] sm:opacity-100 xl:opacity-0 xs:text-[24px] sm:text-[24px] group-hover:opacity-100 hover:scale-125 duration-300 ${
                      isProductInCart(topP.id) ? "text-orange" : "text-grey"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCart(topP);
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

export default TopProducts;
