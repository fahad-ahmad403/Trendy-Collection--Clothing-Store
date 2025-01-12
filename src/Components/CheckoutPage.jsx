import { ShippingForm } from "./ui/ShippingForm.jsx";
import { PaymentForm } from "./ui/PaymentForm.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "./CartContext.jsx";

function CheckoutPage( { setIsOpen } ) {
  const navigate = useNavigate();
  const { setCartItem } = useCart();
  const [shippingData, setShippingData] = useState({});
  const [paymentData, setPaymentData] = useState({});

  function validateForms() {
    const isShippingValid =
      shippingData.firstName &&
      shippingData.lastName &&
      shippingData.email &&
      shippingData.city &&
      shippingData.state &&
      shippingData.zip &&
      shippingData.address;
    const isPaymentValid =
      paymentData.cardNumber && paymentData.expiry && paymentData.cvv;
    return isShippingValid && isPaymentValid;
  }

  function navigateToConfirmationPage() {
    if (localStorage.getItem("userToken") === null) {
      alert("Please login to complete purchase.");
    } else if (validateForms()) {
      navigate("/");
      localStorage.removeItem("Cart");
      setCartItem([]);
      navigate("/confirmationpage")
    } else {
      alert("Please fill in all required fields.");
    }
  }

  return (
    <div onClick={() => setIsOpen(false)} className="min-h-screen bg-grey/10 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-black">Checkout</h1>
          <div className="flex items-center gap-2 text-green">
            <FontAwesomeIcon icon={faUserLock} className="w-5 h-5" />
            <span className="text-sm font-medium">Secure Checkout</span>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="space-y-6">
            <ShippingForm setShippingData={setShippingData} />
            <PaymentForm setPaymentData={setPaymentData} />

            <button
              onClick={navigateToConfirmationPage}
              className="w-full bg-orange text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange/95 transition-colors"
            >
              Complete Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
