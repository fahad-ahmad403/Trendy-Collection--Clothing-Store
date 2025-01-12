import React from "react";
import { Skeleton } from "../ui/Skeleton.jsx";

function ProductPageLoader() {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-5 p-5
      mt-20 xl:pr-56 lg:pr-56 md:pr-32 sm:pr-5 xs:pr-5"
    >
      <Skeleton className="w-full md:w-[30%] h-[300px] xs:h-[200px] rounded-lg" />
      <div className="flex flex-col w-full gap-3">
        <Skeleton className="w-[70%] h-6 rounded-md" />
        <Skeleton className="w-full h-4 rounded-md" />
        <Skeleton className="w-full h-4 rounded-md" />
        <Skeleton className="w-[30%] h-6 rounded-md" />
        <Skeleton className="w-[50%] h-6 rounded-md" />
        <div className="flex gap-3">
          <Skeleton className="w-24 h-10 rounded-md" />
          <Skeleton className="w-24 h-10 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default ProductPageLoader;
