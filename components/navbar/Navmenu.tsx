import { NavMenuLinks } from "@/types/types";
import MegaMenu from "./MegaMenu";
const Navmenu: React.FC<NavMenuLinks> = ({ Links }) => {
  return (
    <div className="hidden md:inline-flex">
      <ul className="flex items-center justify-between gap-x-6 font-medium">
        <MegaMenu />
        {Links.map((li) => (
          <li
            key={li}
            className="
              cursor-pointer
              underline-offset-2
              transition-all
              duration-150
              ease-in-out
              hover:underline
              "
          >
            {li}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navmenu;
