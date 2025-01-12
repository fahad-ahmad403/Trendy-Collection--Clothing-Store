import Image1 from "../assets/category-1.webp";
import Image2 from "../assets/category-2.webp";
import Image3 from "../assets/category-3.webp";
import { useNavigate } from "react-router-dom";

function Category() {
  const navigate = useNavigate();

  function categoryHandle(productList) {
    navigate(`/CategoryList/${encodeURIComponent(productList)}`);
  }

  return (
    <div className="w-full h-auto my-10">
      <h2 className="pb-8 text-xl font-bold xl:text-start lg:text-start sm:text-center xs:text-center xs:text-2xl sm:text-3xl pl-0 sm:pl-9">
        Shop by Category
      </h2>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:justify-evenly">
        <div
          onClick={() => categoryHandle("men's clothing")}
          className="w-full h-[250px] xs:w-[320px] sm:w-[400px] xs:h-[280px] sm:h-[350px] relative flex justify-center items-center rounded-xl cursor-pointer group overflow-hidden"
        >
          <img
            className="w-full h-full object-cover rounded-xl object-center group-hover:scale-105 transition-transform duration-300"
            src={Image1}
            alt="Category Image 1"
          />
          <button className="absolute h-8 xs:h-10 text-sm xs:text-xl font-bold text-white bg-black w-40 xs:w-52">
            Jackets
          </button>
          <div className="absolute inset-0 duration-500 hover:bg-grey/50 mix-blend-multiply" />
        </div>
        <div
          onClick={() => categoryHandle("men's clothing")}
          className="w-[90%] h-[250px] xs:w-[320px] sm:w-[400px] xs:h-[280px] sm:h-[350px] relative flex justify-center items-center rounded-xl cursor-pointer group overflow-hidden"
        >
          <img
            className="w-full h-full object-cover rounded-xl object-center group-hover:scale-105 transition-transform duration-300"
            src={Image2}
            alt="Category Image 2"
          />
          <button className="absolute h-8 xs:h-10 text-sm xs:text-xl font-bold text-white bg-black w-40 xs:w-52">
            Casual Clothing
          </button>
          <div className="absolute inset-0 duration-500 hover:bg-grey/50 mix-blend-multiply" />
        </div>
        <div
          onClick={() => categoryHandle("men's clothing")}
          className="w-[90%] h-[250px] xs:w-[320px] sm:w-[400px] xs:h-[280px] sm:h-[350px] flex justify-center items-center rounded-xl cursor-pointer group overflow-hidden relative"
        >
          <img
            className="w-full h-full object-cover rounded-xl object-center group-hover:scale-105 transition-transform duration-300"
            src={Image3}
            alt="Category Image 3"
          />
          <button className="absolute h-8 xs:h-10 text-sm xs:text-xl font-bold text-white bg-black w-40 xs:w-52">
            Men's Clothing
          </button>
          <div className="absolute inset-0 duration-500 hover:bg-grey/50 mix-blend-multiply" />
        </div>
      </div>
    </div>
  );
}

export default Category;
