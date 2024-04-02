interface Props<T> {
  title: string;
  items: T[];
  selectedItem: T;
  setItem: (item: T) => void;
}

export default function ChipList<T>({
  title,
  items,
  selectedItem,
  setItem,
}: Props<T>) {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-medium text-sm">{title}</div>
      <div className="flex gap-[10px]">
        {items.map((item, index) => {
          const isSelected = selectedItem === item;
          return (
            <span
              key={index}
              onClick={() => setItem(item)}
              className={`font-medium text-sm rounded-lg cursor-pointer select-none leading-6 py-1 px-2 ${
                isSelected ? "bg-lightPrimary" : "bg-secondary"
              } ${!isSelected && "hover:bg-gray-200"}`}
            >
              {item as string}
            </span>
          );
        })}
      </div>
    </div>
  );
}
