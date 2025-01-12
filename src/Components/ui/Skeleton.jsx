import { cn } from "../Utils/utils.js";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-grey/50 dark:bg-grey", className)}
      {...props}
    />
  );
}

export { Skeleton };
