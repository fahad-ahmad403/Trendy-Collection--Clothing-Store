import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormValidation } from "../Utils/useFormValidation";
import { faCreditCard, faLock } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import {
  isValidCardNumber,
  isValidExpiry,
  isValidCVV,
} from "../Utils/Validators";

export const PaymentForm = ({ setPaymentData }) => {
  const { values, errors, touched, handleChange, handleBlur } =
    useFormValidation(
      {
        cardNumber: "",
        expiry: "",
        cvv: "",
      },
      {
        cardNumber: {
          validate: isValidCardNumber,
          message: "Valid card number is required (16 digits)",
        },
        expiry: {
          validate: isValidExpiry,
          message: "Valid expiry date required (MM/YY)",
        },
        cvv: {
          validate: isValidCVV,
          message: "Valid CVV required (3-4 digits)",
        },
      }
    );

  const getInputClassName = (fieldName) => {
    const baseClasses = "mt-1 block w-full rounded-md shadow-sm bg-grey/10 p-2";
    const errorClasses =
      touched[fieldName] && errors[fieldName] ? "border-red" : "border-grey";
    return `${baseClasses} ${errorClasses}`;
  };

  useEffect(() => {
    setPaymentData(values);
  }, [values, setPaymentData]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <FontAwesomeIcon icon={faCreditCard} className="w-6 h-6 text-orange" />
        <h2 className="text-xl font-semibold">Payment Details</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="cardNumber"
            className="block text-sm font-medium text-black"
          >
            Card Number
          </label>
          <div className="mt-1 relative">
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={values.cardNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${getInputClassName("cardNumber")} pl-10`}
            />
            <FontAwesomeIcon
              icon={faCreditCard}
              className="absolute left-3 top-2.5 h-5 w-5 text-grey/50"
            />
          </div>
          {touched.cardNumber && errors.cardNumber && (
            <p className="mt-1 text-sm text-red">{errors.cardNumber}</p>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <label
              htmlFor="expiry"
              className="block text-sm font-medium text-black"
            >
              Expiration Date
            </label>
            <input
              type="text"
              id="expiry"
              name="expiry"
              placeholder="MM/YY"
              value={values.expiry}
              onChange={handleChange}
              onBlur={handleBlur}
              className={getInputClassName("expiry")}
            />
            {touched.expiry && errors.expiry && (
              <p className="mt-1 text-sm text-red">{errors.expiry}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="cvv"
              className="block text-sm font-medium text-black"
            >
              CVV
            </label>
            <input
              type="number"
              id="cvv"
              name="cvv"
              placeholder="123"
              value={values.cvv}
              onChange={handleChange}
              onBlur={handleBlur}
              className={getInputClassName("cvv")}
            />
            {touched.cvv && errors.cvv && (
              <p className="mt-1 text-sm text-red">{errors.cvv}</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-black mt-4">
          <FontAwesomeIcon icon={faLock} className="w-4 h-4" />
          <p>Your payment information is encrypted and secure</p>
        </div>
      </div>
    </div>
  );
};
