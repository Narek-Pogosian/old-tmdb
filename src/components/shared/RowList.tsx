import type { ReactNode } from "react";

function RowList<T>({
  items,
  render,
}: {
  items: T[] | undefined;
  render: (item: T) => ReactNode;
}) {
  return (
    <div className="relative">
      <ul className="flex gap-5 fade-in h-[380px] px-[1px] pb-2 overflow-x-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary scrollbar-thumb-rounded-lg">
        {items?.map((item, index) => (
          <li key={index} className="flex-shrink-0 w-48">
            {render(item)}
          </li>
        ))}
        {/* <span className="absolute top-0 right-0 w-16 h-full pointer-events-none bg-gradient-to-r from-transparent via-white/20 to-white/40"></span> */}
      </ul>
    </div>
  );
}

export default RowList;
