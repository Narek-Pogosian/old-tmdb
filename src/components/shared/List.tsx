import type { ReactNode } from "react";

function List<T extends { id: number }>({
  items,
  render,
}: {
  items: T[];
  render: (item: T) => ReactNode;
}) {
  return (
    <ul className="grid gap-4 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((item, i) => (
        <li key={i}>{render(item)}</li>
      ))}
    </ul>
  );
}

export default List;
