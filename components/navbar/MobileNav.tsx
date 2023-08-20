"use client";
import { BiSearch } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NavSearch from "./NavSearch";

const MobileNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="">
        <Button
          variant="outline"
          size="icon"
          className="border-none bg-transparent outline-none hover:bg-background active:bg-background xl:hidden"
          title="user menu"
        >
          <BiSearch title="search" className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-none bg-transparent shadow-none">
        <NavSearch />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNav;
