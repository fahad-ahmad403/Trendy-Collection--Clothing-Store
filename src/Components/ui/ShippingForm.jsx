import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormValidation } from "../Utils/useFormValidation";
import { isRequired, isValidZip, isValidEmail } from "../Utils/Validators";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export const ShippingForm = ({ setShippingData }) => {
  const { values, errors, touched, handleChange, handleBlur } =
    useFormValidation(
      {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
      },
      {
        firstName: { validate: isRequired, message: "First name is required" },
        lastName: { validate: isRequired, message: "Last name is required" },
        email: { validate: isValidEmail, message: "Valid email is required" },
        address: { validate: isRequired, message: "Address is required" },
        city: { validate: isRequired, message: "City is required" },
        state: { validate: isRequired, message: "State is required" },
        zip: { validate: isValidZip, message: "Valid ZIP code is required" },
      }
    );

  const getInputClassName = (fieldName) => {
    const baseClasses = "mt-1 block w-full rounded-md bg-grey/10 p-2";
    const errorClasses =
      touched[fieldName] && errors[fieldName] ? "border-red" : "border-grey";
    return `${baseClasses} ${errorClasses}`;
  };

  useEffect(() => {
    setShippingData(values);
  }, [values, setShippingData]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <FontAwesomeIcon icon={faTruckFast} className="w-6 h-6 text-orange" />
        <h2 className="text-xl font-semibold">Shipping Information</h2>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-black"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              autoComplete="given-name"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={getInputClassName("firstName")}
            />
            {touched.firstName && errors.firstName && (
              <p className="mt-1 text-sm text-red">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-black"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              autoComplete="family-name"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={getInputClassName("lastName")}
            />
            {touched.lastName && errors.lastName && (
              <p className="mt-1 text-sm text-red">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-black"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClassName("email")}
          />
          {touched.email && errors.email && (
            <p className="mt-1 text-sm text-red">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-black"
          >
            Street Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            autoComplete="street-address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClassName("address")}
          />
          {touched.address && errors.address && (
            <p className="mt-1 text-sm text-red">{errors.address}</p>
          )}
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-black"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={values.city}
              autoComplete="address-level2"
              onChange={handleChange}
              onBlur={handleBlur}
              className={getInputClassName("city")}
            />
            {touched.city && errors.city && (
              <p className="mt-1 text-sm text-red">{errors.city}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium text-black"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              autoComplete="address-level1"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
              className={getInputClassName("state")}
            />
            {touched.state && errors.state && (
              <p className="mt-1 text-sm text-red">{errors.state}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="zip"
              className="block text-sm font-medium text-black"
            >
              ZIP Code
            </label>
            <input
              type="number"
              id="zip"
              name="zip"
              autoComplete="postal-code"
              value={values.zip}
              onChange={handleChange}
              onBlur={handleBlur}
              className={getInputClassName("zip")}
            />
            {touched.zip && errors.zip && (
              <p className="mt-1 text-sm text-red">{errors.zip}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
