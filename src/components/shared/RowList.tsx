import type { ReactNode } from "react";
import LoadingPage from "../LoadingPage";

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
    <ul className="flex gap-5 fade-in relative h-[375px]  px-[1px] pb-2 overflow-x-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary scrollbar-thumb-rounded-lg">
      {isLoading && <LoadingPage />}
      {items?.map((item) => (
        <li key={item.id} className="flex-shrink-0 w-48">
          {render(item)}
        </li>
      ))}
    </ul>
  );
}

export default RowList;
