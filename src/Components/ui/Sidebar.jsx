import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faHome,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Outlet, useNavigate } from "react-router-dom";

export function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  function navigateToHomePage() {
    navigate("/");
    setIsOpen(false);
  }

  function navigateToContactPage() {
    navigate("/contact");
    setIsOpen(false);
  }

  function navigateToWishlistPage() {
    navigate("/wishlist");
    setIsOpen(false);
  }

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-20 ${
        isOpen ? "-translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center p-4 border-b border-black/30">
          <h3 className="sevillana text-2xl xs:text-xl text-orange">
            <span className="text-xl sevillana">Trendy</span> <br /> Collection
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl font-semibold absolute top-6 right-4"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <nav className="flex-1 flex flex-col justify-start pt-10">
          <ul className="space-y-8 pl-5">
            <li onClick={navigateToHomePage} className="font-semibold cursor-pointer">
              <FontAwesomeIcon icon={faHome} className="pr-2 text-orange" />
              Home
            </li>
            <li onClick={navigateToContactPage} className="font-semibold cursor-pointer">
              <FontAwesomeIcon icon={faPhone} className="pr-2 text-orange" />
              Contact
            </li>
            <li onClick={navigateToWishlistPage} className="font-semibold cursor-pointer">
              <FontAwesomeIcon icon={faHeart} className="pr-2 text-orange" />
              Wishlist
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-black/30">
          <p className="text-sm text-black">© 2024 Trendy Collection</p>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
