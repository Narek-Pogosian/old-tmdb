import type { ReactNode } from "react";
import Skeleton from "./Skeleton";

function RowList<T extends { id: number }>({
  items,
  render,
  isLoading,
}: {
  items: T[] | undefined;
  render: (item: T) => ReactNode;
  isLoading?: boolean;
}) {
  return (
    <ul className="flex gap-5 fade-in relative h-[375px] px-[1px] pb-2 overflow-x-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary scrollbar-thumb-rounded-lg">
      {isLoading
        ? new Array(10).fill(0).map((_, i) => (
            <li key={i} className="flex flex-col flex-shrink-0 w-48 h-full">
              <Skeleton className="h-[288px]" />
              <div className="pt-2">
                <Skeleton className="h-4" />
                <div className="flex items-center gap-1 mt-1">
                  <span className="mr-1 text-base text-tertiary">&#9733;</span>
                  <Skeleton className="inline w-24 h-4" />
                </div>
              </div>
            </li>
          ))
        : items?.map((item) => (
            <li key={item.id} className="flex-shrink-0 w-48">
              {render(item)}
            </li>
          ))}
    </ul>
  );
}

export default RowList;
