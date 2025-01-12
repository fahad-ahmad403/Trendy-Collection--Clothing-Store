import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductRating from "./ui/ProductRating.jsx";
import ListPageLoader from "./ui/ListPageLoader.jsx";
import { useProductContext } from "./ui/ProductContext.jsx";

function CategoryList({ setIsOpen }) {
  const { products } = useProductContext();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function navigateHandle(product) {
    navigate(`/productpage/${product}`);
  }

  return (
    <div
      onClick={() => setIsOpen(false)}
      className="flex flex-col gap-5 pt-20 px-5 md:px-10 lg:px-20 xs:pt-24 xs:pb-6 bg-grey/10"
    >
      {products.length === 0
        ? Array(4)
            .fill(0)
            .map((_, index) => <ListPageLoader key={index} />)
        : products.map((product) => (
            <div
              key={product.id}
              onClick={() => navigateHandle(product.id)}
              className="flex flex-col sm:flex-row bg-white rounded-lg w-full h-auto sm:h-[250px] relative shadow-lg hover:shadow-xl duration-200 group"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full sm:w-[200px] h-[200px] object-contain xl:m-5 xs:mt-5 group-hover:scale-105 duration-200"
              />
              <div className="flex flex-col justify-between flex-1 p-5">
                <div>
                  <p className="text-xl sm:text-2xl lg:text-xl font-semibold text-black mb-3 w-2/3 line-clamp-2">
                    {product.title}
                  </p>
                  <p className="text-sm sm:text-base text-grey leading-5 mb-4 xl:w-2/3 lg:2/3 md:w-2/3 xs:w-full line-clamp-3">
                    {product.description}
                  </p>
                </div>
                <div>
                  <div className="text-grey">
                    <ProductRating rating={product.rating.rate} />
                  </div>
                  <p className="pt-1 text-sm">{product.rating.count} Sold</p>
                </div>
              </div>
              <p className="absolute text-xl sm:text-2xl font-bold text-black top-5 sm:top-10 right-5">
                ${product.price}
              </p>
            </div>
          ))}
    </div>
  );
}

export default CategoryList;