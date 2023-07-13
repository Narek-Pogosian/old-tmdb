import { Listbox } from "@headlessui/react";
import { sortOptions } from "../../../lib/data/sortOptions";
import { SortOptionType } from "../../../types/type";

type Props = {
  sortValue: SortOptionType;
  setSortValue: (value: SortOptionType) => void;
};

const SortOptions = ({ sortValue, setSortValue }: Props) => {
  return (
    <Listbox value={sortValue} onChange={(value) => setSortValue(value)}>
      <div className="relative z-20">
        <p className="text-sm font-semibold">Sort Results By:</p>
        <Listbox.Button className="flex items-center justify-between w-full px-4 py-2 mt-2 text-sm text-left rounded shadow bg-background">
          <span className="flex justify-between w-full">
            {sortValue.text}
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"
                fill="#fff"
              />
            </svg>
          </span>
        </Listbox.Button>
        <Listbox.Options className="absolute w-full px-1 py-2 mt-1 text-sm border rounded shadow border-primary bg-background top-16 focus:outline-none">
          {sortOptions.map((item) => (
            <Listbox.Option
              key={item.id}
              value={item}
              className={({ active }) =>
                `cursor-pointer  ${active ? "bg-primary" : ""}`
              }
            >
              {({ selected }) => (
                <>
                  <span
                    className={`block py-2 pl-4  ${
                      selected ? "font-medium bg-primary" : "font-normal"
                    }`}
                  >
                    {item.text}
                  </span>
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export default SortOptions;
