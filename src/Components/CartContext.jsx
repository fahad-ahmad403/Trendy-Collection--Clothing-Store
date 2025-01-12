import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create Context
const CartContext = createContext();
export const AuthContext = createContext();

// Provider Component
export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const [wishList, setWishList] = useState([]);
  const navigate = useNavigate();

  // Wishlist component functions

  useEffect(() => {
    const storedWishList = localStorage.getItem("Wishlist");
    if (storedWishList !== "undefined" && storedWishList !== null) {
      setWishList(JSON.parse(storedWishList));
    } else {
      setWishList([]);
    }
  }, []);

  const addToWishlist = (product) => {
    setWishList((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev;
      const prevList = [
        ...prev,
        { ...product, count: 1, price: product.price },
      ];
      localStorage.setItem("Wishlist", JSON.stringify(prevList));
      return prevList;
    });
  };

  const removeWishListItem = (productId) => {
    const removeWishList = (prev) =>
      prev.filter((wish) => wish.id !== productId);
    setWishList(removeWishList);
    localStorage.setItem("Wishlist", JSON.stringify(removeWishList));
  };

  const isProductInWishList = (productId) => {
    return wishList.some((wish) => wish.id === productId);
  };

  const incrementHandle = (id) => {
    setWishList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: (item.count || 0) + 1 } : item
      )
    );
  };

  const decrementHandle = (id) => {
    setWishList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: (item.count || 0) - 1 } : item
      )
    );
  };

  // Cart component functions

  const incrementHandle2 = (id) => {
    setCartItem((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: (item.count || 0) + 1 } : item
      )
    );
  };

  const decrementHandle2 = (id) => {
    setCartItem((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: (item.count || 0) - 1 } : item
      )
    );
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("Cart");
    if (storedCart !== "undefined" && storedCart !== null) {
      setCartItem(JSON.parse(storedCart));
    } else {
      setCartItem([]);
    }
  }, []);

  const addToCart = (product) => {
    setCartItem((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev;
      const prevState = [
        ...prev,
        { ...product, count: 1, price: product.price },
      ];
      setCartItem(prevState);
      localStorage.setItem("Cart", JSON.stringify(prevState));
      return prevState;
    });
  };

  const removeCartItem = (productId) => {
    const removeFromStorage = (prev) =>
      prev.filter((item) => item.id !== productId);
    setCartItem(removeFromStorage);
    localStorage.setItem("Cart", JSON.stringify(removeFromStorage));
  };

  const isProductInCart = (productId) => {
    return cartItem.some((item) => item.id === productId);
  };

  // Logout from app

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
  };

  return (
    <CartContext.Provider
      value={{
        cartItem,
        removeCartItem,
        isProductInCart,
        removeWishListItem,
        isProductInWishList,
        setCartItem,
        addToCart,
        handleLogout,
        wishList,
        setWishList,
        addToWishlist,
        incrementHandle,
        decrementHandle,
        incrementHandle2,
        decrementHandle2,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook to use the context
export const useCart = () => useContext(CartContext);
