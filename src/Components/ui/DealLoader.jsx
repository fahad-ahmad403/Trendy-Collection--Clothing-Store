import { Skeleton } from "../ui/Skeleton.jsx";

function DealLoader() {
  return (
    <div className="flex justify-center items-center">
      <Skeleton className="w-full xl:h-[330px] lg:h-[330px]  md:h-[330px]  sm:h-[330px]  xs:h-[290px] rounded-xl" />
    </div>
  );
}

export default DealLoader;
