import Skeleton from "./Skeleton";

const SkeletonCard = () => {
  return (
    <li className="flex flex-col flex-shrink-0 w-48 h-full">
      <Skeleton className="h-[288px]" />
      <div className="pt-2">
        <Skeleton className="h-4" />
        <div className="flex items-center gap-1 mt-1">
          <span className="mr-1 text-base text-tertiary">&#9733;</span>
          <Skeleton className="inline w-24 h-4" />
        </div>
      </div>
    </li>
  );
};

export default SkeletonCard;
