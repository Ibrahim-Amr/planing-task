import { BiSearch } from "react-icons/bi";
import { Input } from "@/components/ui/input";

const NavSearch = ({ hidden }: { hidden?: boolean }) => {
  return (
    <div
      className={`
        relative
        w-full
        overflow-hidden
        rounded-[62px]
        text-neutral-400
        focus-within:shadow-md
        ${hidden && "hidden xl:inline-block"}
        `}
    >
      <BiSearch
        size={25}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2"
      />
      <Input
        id="search"
        placeholder="Search for products..."
        type="text"
        className="
          bg-neutral-100
          dark:bg-white
        "
      />
    </div>
  );
};

export default NavSearch;
