import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ProductRating({ rating }) {
  return (
    <div className="sm:flex items-center xs:hidden">
      {[...Array(5)].map((_, i) => (
        <FontAwesomeIcon
          icon={faStar}
          key={i}
          className={`w-4 h-4 ${
            i < Math.floor(rating) ? "fill-yellow text-yellow" : "text-grey"
          }`}
        />
      ))}
      <span className="ml-2 text-sm text-grey">({rating.toFixed(1)})</span>
    </div>
  );
}

export default ProductRating;
