import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Counter from "./ui/Counter.jsx";
import ProductRating from "./ui/ProductRating.jsx";
import { useCart } from "./CartContext.jsx";
import ProductPageLoader from "./ui/ProductPageLoader.jsx";
import { toast } from "./Utils/use-toast.js";
import { useProductContext } from "./ui/ProductContext.jsx";

function ProductPage({ setIsOpen }) {
  const { product } = useParams();
  const { addToCart } = useCart();
  const { products } = useProductContext();
  const navigate = useNavigate();
  const [productp, setProductp] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(product));
    if (foundProduct) {
      setProductp(foundProduct);
    } else {
      axios
        .get(`https://fakestoreapi.com/products/${product}`)
        .then((res) => setProductp(res.data))
        .catch((e) => console.error(e));
    }
  }, [product, products]);

  if (!productp) return <ProductPageLoader />;

  function navigateToCheckoutPage() {
    navigate("/cart");
  }

  return (
    <div onClick={() => setIsOpen(false)} className="xs:pb-5">
      <div className="flex flex-col md:flex-row bg-white h-auto md:h-screen pt-20 px-5">
        <div className="xl:w-[500px] md:w-[400px] pt-5">
          <img
            src={productp.image}
            alt={productp.title}
            className="w-full p-5 object-cover"
          />
        </div>
        <div className="pt-5 md:pt-12 md:pl-5">
          <h3 className="text-xl md:text-2xl font-semibold text-black mb-3 xl:w-[70%] xs:w-[90%]">
            {productp.title}
          </h3>
          <p className="text-sm md:text-base md:w-[90%] text-grey xl:w-[70%] xs:w-[90%]">
            {productp.description}
          </p>
          <p className="font-bold text-lg md:text-xl my-2 text-black">
            ${productp.price}
          </p>
          <div className="flex gap-x-3">
            <ProductRating rating={productp.rating.rate} />
            <p className="text-black">{productp.rating.count} Sold</p>
          </div>
          <div className="pt-10 md:pt-16">
            <Counter />
          </div>
          <button
            onClick={() => {
              navigateToCheckoutPage();
              addToCart(productp);
            }}
            className="w-full md:w-32 h-10 bg-purple hover:bg-purple/95 text-white rounded-lg mt-5 mr-0 md:mr-5 font-semibold"
          >
            Buy Now
          </button>
          <button
            onClick={() => {
              addToCart(productp);
              toast({
                title: "Cart",
                description: "Item added successfully!!",
              });
            }}
            className="w-full md:w-32 h-10 bg-orange hover:bg-orange/90 text-white rounded-lg mt-5 mr-0 md:mr-5 font-semibold"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
