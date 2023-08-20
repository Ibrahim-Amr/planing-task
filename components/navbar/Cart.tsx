"use client";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Cart = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="border-none bg-transparent outline-none hover:bg-background active:bg-background"
          title="Cart"
        >
          <MdOutlineShoppingCart
            title="search"
            className="h-[1.2rem] w-[1.2rem] cursor-pointer"
          />
          <span className="sr-only">Cart</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Item1</DropdownMenuItem>
        <DropdownMenuItem>Item2</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Cart;
