import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, useEffect, useState } from "react";
import { CartProvider } from "./Components/CartContext.jsx";
import Wishlist from "./Components/Wishlist.jsx";
import Cart from "./Components/Cart.jsx";
import Contact from "./Components/Contact.jsx";
import Category from "./Components/Category.jsx";
import CategoryList from "./Components/CategoryList.jsx";
import ProductPage from "./Components/ProductPage.jsx";
import TopProducts from "./Components/TopProducts.jsx";
import Deal from "./Components/Deal.jsx";
import Newsletter from "./Components/Newsletter.jsx";
import Footer from "./Components/Footer.jsx";
import LoginPage from "./Components/LoginPage.jsx";
import CheckoutPage from "./Components/CheckoutPage.jsx";
import { ConfirmationPage } from "./Components/ConfirmationPage.jsx";
import { ToastProvider } from "@radix-ui/react-toast";
import { Toaster } from "./Components/ui/Toaster.jsx";
import ContactForm from "./Components/ui/ContactForm.jsx";
import Lenis from "lenis";
import HomePageLoader from "./Components/ui/HomePageLoader.jsx";
import { ProductProvider } from "./Components/ui/ProductContext.jsx";
import { TopProductsProvider } from "./Components/ui/TopProductsContext.jsx";

const Navbar = React.lazy(() => import("./Components/Navbar.jsx"));
const Slider = React.lazy(() => import("./Components/Slider.jsx"));

function App() {
  const loginSaved = JSON.parse(localStorage.getItem("LogIn")) || "";
  const [isLoggedIn, setIsLoggedIn] = useState(loginSaved);
  const [token, setToken] = useState(localStorage.getItem("userToken") || null);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    localStorage.setItem("LogIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  new Lenis({
    autoRaf: true,
  });

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<HomePageLoader />}>
          <CartProvider>
            <ProductProvider>
              <TopProductsProvider>
                <ToastProvider>
                  <Toaster />
                  <Routes>
                    <Route
                      path="/loginpage"
                      element={
                        <LoginPage
                          token={token}
                          setToken={setToken}
                          setIsLoggedIn={setIsLoggedIn}
                        />
                      }
                    />
                    <Route
                      path="/"
                      element={
                        <Navbar
                          isLoggedIn={isLoggedIn}
                          setIsLoggedIn={setIsLoggedIn}
                          handleLogout={handleLogout}
                          isOpen={isOpen}
                          setIsOpen={setIsOpen}
                        />
                      }
                    >
                      <Route
                        path="/"
                        element={
                          <Slider isOpen={isOpen} setIsOpen={setIsOpen} />
                        }
                      />
                      <Route path="/category" element={<Category />} />
                      <Route
                        path="/categorylist/:list"
                        element={<CategoryList setIsOpen={setIsOpen} />}
                      />
                      <Route
                        path="/topproducts/:top"
                        element={<TopProducts />}
                      />
                      <Route
                        path="/productpage/:product"
                        element={<ProductPage setIsOpen={setIsOpen} />}
                      />
                      <Route
                        path="/checkoutpage"
                        element={<CheckoutPage setIsOpen={setIsOpen} />}
                      />
                      <Route path="/dealday" element={<Deal />} />
                      <Route
                        path="/wishlist"
                        element={<Wishlist setIsOpen={setIsOpen} />}
                      />
                      <Route
                        path="/cart"
                        element={<Cart setIsOpen={setIsOpen} />}
                      />
                      <Route
                        path="/contact"
                        element={<Contact setIsOpen={setIsOpen} />}
                      />
                      <Route path="/newsletter" element={<Newsletter />} />
                      <Route path="/footer" element={<Footer />} />
                      <Route path="/contactform" element={<ContactForm />} />
                      <Route
                        path="/confirmationpage"
                        element={<ConfirmationPage setIsOpen={setIsOpen} />}
                      />
                    </Route>
                  </Routes>
                </ToastProvider>
              </TopProductsProvider>
            </ProductProvider>
          </CartProvider>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
