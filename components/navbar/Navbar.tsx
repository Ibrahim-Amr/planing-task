import { ModeToggle } from "../toggleTheme";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import Navmenu from "./Navmenu";
import ProfileMenu from "./ProfileMenu";
import Cart from "./Cart";
import MobileNav from "./MobileNav";

const navLinks: string[] = ["On Sale", "New Arrivals", "Brands"];

const Navbar = () => {
  return (
    <header className="bg-white px-2 py-4 dark:bg-neutral-800">
      <nav className="mx-auto flex max-w-[1536px] items-center justify-between gap-10">
        <div className="flex flex-1 items-center gap-10">
          <Logo />
          <Navmenu Links={navLinks} />
        </div>
        <div className="flex items-center justify-between gap-x-10 xl:flex-1">
          <NavSearch hidden />
          <div className="flex items-center justify-between gap-x-2">
            <MobileNav />
            <Cart />
            <ProfileMenu />
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
