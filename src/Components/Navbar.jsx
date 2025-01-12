import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartPlus,
  faHome,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext.jsx";
import { Sidebar } from "./ui/Sidebar.jsx";

function Navbar({
  handleLogout,
  isLoggedIn,
  setIsLoggedIn,
  isOpen,
  setIsOpen,
}) {
  const navigate = useNavigate();
  const { cartItem } = useCart();

  function handleLogout() {
    setIsLoggedIn(false);
    navigate("/");
    localStorage.removeItem("userToken");
  }

  return (
    <header>
      <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />
      <nav
        className="fixed top-0 left-0 overflow-hidden z-10 bg-purple text-orange w-full h-20
        flex items-center justify-between xl:px-20 xs:px-6 sm:px-12"
      >
        <li className="flex justify-center items-center gap-x-5 font-bold text-2xl xs:text-xl">
          <button
            onClick={() => setIsOpen(true)}
            className="xl:hidden sm:hidden xs:block"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <Link to="/" className="sevillana xl:text-2xl xs:text-xl">
            Trendy <br /> Collection
          </Link>
        </li>
        <ul
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-x-10 font-semibold"
        >
          <li className="text-white hover:text-orange duration-300 xs:hidden xl:block sm:block">
            <Link to="/">
              <FontAwesomeIcon
                icon={faHome}
                className="xl:hidden xs:hidden sm:block"
              />
              <span className="xs:hidden sm:hidden xl:block">Home</span>
            </Link>
          </li>
          <li className="text-white hover:text-orange duration-300 xs:hidden sm:block xl:block">
            <Link to="/contact">
              <FontAwesomeIcon
                icon={faPhone}
                className="xl:hidden xs:hidden sm:block"
              />
              <span className="xs:hidden sm:hidden xl:block">Contact</span>
            </Link>
          </li>
          <li className="text-white hover:text-orange duration-300 xs:hidden sm:block xl:block">
            <Link className="flex items-center" to="/wishlist">
              <FontAwesomeIcon
                icon={faHeart}
                className="xl:block xs:hidden sm:block pr-2"
              />
              <span className="xs:hidden sm:hidden xl:block">Wishlist</span>
            </Link>
          </li>
          <li className="text-white hover:text-orange duration-300 relative">
            <Link className="flex items-center" to="/cart">
              <FontAwesomeIcon
                icon={faCartPlus}
                className="xl:block xs:block xl:pr-4 xs:pr-0"
              />
              <span
                className="w-4 h-4 bg-orange text-white absolute bottom-3 left-4 text-[10px] flex items-center
              justify-center rounded-full"
              >
                {cartItem.length}
              </span>
              <span className="xs:hidden sm:hidden xl:block">Cart</span>
            </Link>
          </li>
          <button
            className="xl:w-[100px] xl:h-[40px] sm:w-[100px] sm:h-[40px] rounded-lg bg-orange text-purple hover:bg-orange/90 duration-300
            xs:w-[80px] xs:h-[35px] xs:text-base"
            onClick={isLoggedIn ? handleLogout : () => navigate("/loginpage")}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
}

export default Navbar;
