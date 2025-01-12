import Image1 from "../assets/hero-image-1.webp";
import Image2 from "../assets/hero-image-2.webp";
import Image3 from "../assets/hero-image-3.webp";
import Image4 from "../assets/hero-image-4.webp";
import Image5 from "../assets/hero-image-5.webp";
import Image6 from "../assets/hero-image-6.webp";
import Category from "./Category.jsx";
import TopProducts from "./TopProducts.jsx";
import Deal from "./Deal.jsx";
import Newsletter from "./Newsletter.jsx";
import Footer from "./Footer.jsx";
import { useNavigate } from "react-router-dom";
import { register } from "swiper/element/bundle";
register();
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel.jsx";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

function Slider({ setIsOpen }) {
  const navigate = useNavigate();

  function heroNavigationHandle() {
    navigate("/CategoryList/men's%20clothing");
  }

  const carouselData = [
    {
      id: 1,
      desktopImg: Image2,
      mobileImg: Image5,
      heading: "SweatShirts",
      subHeading: "Layers that redefine comfort",
      alternate: "Hero Image 1",
    },
    {
      id: 2,
      desktopImg: Image1,
      mobileImg: Image4,
      heading: "Formal Shirts",
      subHeading: "Tailored for memorable moments",
      alternate: "Hero Image 2",
    },
    {
      id: 3,
      desktopImg: Image3,
      mobileImg: Image6,
      heading: "Jackets",
      subHeading: "A style that truly impresses",
      alternate: "Hero Image 3",
    },
  ];

  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <div onClick={() => setIsOpen(false)}>
      <div className="mt-20">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent>
            {carouselData.map((data) => (
              <CarouselItem key={data.id} className="relative">
                <picture>
                  <source media="(max-width: 640px)" srcSet={data.mobileImg} />
                  <img
                    src={data.desktopImg}
                    alt={data.alternate}
                    className="w-full xl:h-[525px] xs:h-[250px] sm:h-[350px] lg:h-[450px] object-cover"
                  />
                </picture>
                <div className="absolute text-center xl:top-40 xl:translate-x-[50%] xs:top-16 xs:translate-x-[25%] sm:top-28 lg:top-40">
                  <h1 className="xl:text-6xl xs:text-xl sm:text-3xl lg:text-4xl font-bold text-black uppercase">
                    {data.heading}
                  </h1>
                  <p className="xl:text-xl xs:text-[10px] sm:text-sm lg:text-xl font-semibold text-black uppercase">
                    {data.subHeading}
                  </p>
                  <button
                    onClick={heroNavigationHandle}
                    className="xl:w-[180px] xl:h-[50px] xs:w-[90px] xs:h-[35px] bg-purple hover:bg-purple/95 text-orange rounded-lg
          xl:mt-10 xs:mt-5 font-semibold xl:text-xl xs:text-xs sm:w-[120px] sm:h-[40px] sm:text-sm lg:w-[180px] lg:h-[50px] lg:text-xl"
                  >
                    Shop Now
                  </button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-orange text-purple xs:w-6 xs:h-6 xs:left-5 sm:w-8 sm:h-8 sm:left-12" />
          <CarouselNext className="bg-orange text-purple xs:w-6 xs:h-6 xs:right-5 sm:w-8 sm:h-8 sm:right-12" />
        </Carousel>
      </div>
      <Category />
      <TopProducts />
      <Deal />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Slider;
