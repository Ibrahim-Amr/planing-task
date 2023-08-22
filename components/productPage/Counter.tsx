"use client";
import { Button } from "../ui/button";
import { HiMinusSm } from "react-icons/hi";
import { BiPlus } from "react-icons/bi";
import { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div className="flex w-full items-center justify-start gap-5">
      {counter ? (
        <div className="flex w-[50%] items-center justify-between gap-x-8 rounded-[62px] bg-neutral-100 p-3 text-black">
          <div onClick={() => setCounter((prevState) => prevState - 1)}>
            <HiMinusSm
              size={25}
              className="cursor-pointer transition-all duration-200 ease-in-out active:scale-90"
            />
          </div>
          <span className="text-lg font-medium">{counter}</span>
          <div onClick={() => setCounter((prevState) => prevState + 1)}>
            <BiPlus
              size={25}
              className="cursor-pointer transition-all duration-200 ease-in-out active:scale-90"
            />
          </div>
        </div>
      ) : (
        <Button
          onClick={() => setCounter((prevState) => prevState + 1)}
          className="w-full rounded-[62px] p-6 text-sm font-medium transition-all duration-300 ease-in-out active:scale-95"
        >
          Add to Cart
        </Button>
      )}
    </div>
  );
};

export default Counter;
