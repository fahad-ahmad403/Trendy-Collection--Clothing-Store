import emptyWishlist from "../assets/empty-wishlist.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faHeart,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "./CartContext.jsx";
import TotalCounter from "./ui/TotalCounter.jsx";
import ProductRating from "./ui/ProductRating.jsx";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Wishlist( { setIsOpen } ) {
  const { wishList, setWishList } = useCart();

  const removeWishList = (productId) => {
    setWishList((prev) => prev.filter((wish) => wish.id !== productId));
    localStorage.setItem(
      "Wishlist",
      JSON.stringify(wishList.filter((wish) => wish.id !== productId))
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [wishList]);

  return (
    <div onClick={()=> setIsOpen(false)} className="pt-20 bg-grey/10 min-h-screen">
      {wishList && wishList.length > 0 ? (
        <div>
          <div className="flex justify-between items-center border-b-[1px] border-black/20">
            <h2 className="flex text-3xl font-bold py-3 pl-5">
              <FontAwesomeIcon
                icon={faHeart}
                className="w-8 h-8 pr-5 text-red xs:hidden xl:block lg:block sm:block 2xl:block"
              />
              WishList
            </h2>
            <h2 className="text-xl font-semibold py-3 pr-5">
              {wishList.length} Item(s)
            </h2>
          </div>
          <div className="py-5 px-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {wishList
              .slice()
              .reverse()
              .map((wish) => (
                <div
                  key={wish.id}
                  className="flex bg-white rounded-lg w-full xl:h-[200px] xs:h-[150px] sm:h-[170px] relative shadow-lg hover:shadow-xl duration-300 group"
                >
                  <div className="flex justify-center items-center xl:px-5 xs:px-1">
                    <img
                      src={wish.image}
                      alt={wish.title}
                      className="m-5 object-contain group-hover:scale-105 duration-300 xl:w-[170px] xl:h-[170px] sm:w-[120px] sm:h-[120px] xs:w-[100px] xs:h-[100px]"
                    />
                  </div>
                  <div className="flex justify-between w-full xl:px-5 xs:px-3">
                    <div className="pt-10 pl-1">
                      <p className="xl:text-xl sm:text-lg font-semibold text-black mb-3 xl:w-[250px] sm:w-[150px] xs:w-[130px] line-clamp-1">
                        {wish.title}
                      </p>
                      <ProductRating rating={wish.rating.rate} />
                      <p className="xl:text-base xs:text-sm font-semibold text-black pt-0">
                        $ {wish.price}
                      </p>
                      <TotalCounter productID={wish.id} />
                    </div>
                    <div className="flex flex-col space-y-3 justify-center items-start font-bold xs:text-[12px] xl:text-base">
                      <p>${(wish.price * wish.count).toFixed(2)}</p>
                      <button
                        onClick={() => removeWishList(wish.id)}
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
        </div>
      ) : (
        <div className="flex flex-col items-center sm:pt-16 xs:pt-8">
          <img
            src={emptyWishlist}
            alt="Empty wishlist illustration"
            className="w-[200px] h-[200px]"
          />
          <p className="text-black text-xl font-semibold py-3">
            Your Wishlist is empty
          </p>
          <p className="text-grey mx-5 text-base text-center">
            Looks like you have not added anything to your wishlist. Go ahead &
            add any product you want.
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

export default Wishlist;
