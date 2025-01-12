import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const TopProductsContext = createContext();

export const TopProductsProvider = ({ children }) => {
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      const filteredProducts = res.data.filter((product) =>
        [
          "casual slim fit",
          "t-shirt",
          "backpack",
          "mens cotton jacket",
          "rain jacket",
          "jacket",
          "danvouy",
        ].some((keyword) => product.title.toLowerCase().includes(keyword))
      );
      setTopProducts(filteredProducts);
    });
  }, []);

  return (
    <TopProductsContext.Provider value={{ topProducts }}>
      {children}
    </TopProductsContext.Provider>
  );
};

export const useTopProductsContext = () => useContext(TopProductsContext);
