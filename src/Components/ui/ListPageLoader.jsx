import { Skeleton } from "../ui/Skeleton.jsx";

function ListPageLoader() {
  return (
    <div>
      <Skeleton className="w-full xl:h-[250px] lg:h-[250px] md:h-[250px] sm:h-[250px] xs:h-[420px] rounded-xl" />
    </div>
  );
}

export default ListPageLoader;
