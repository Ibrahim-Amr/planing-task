"use client";
import CountUp from "react-countup";
import { Button } from "../ui/button";

const HeroHeader = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-8 overflow-hidden lg:max-w-[50%] lg:items-start">
      <div>
        <h1 className="max-w-[55ch] text-center text-fluid-2 font-semibold leading-none tracking-tighter lg:text-start">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
      </div>
      <div>
        <p className="max-w-[70ch] text-center font-medium leading-6 text-neutral-500 dark:text-neutral-300 lg:text-start">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
      </div>
      <div className="flex items-center justify-center lg:justify-start">
        <Button className="rounded-[62px] px-12 py-5 text-xl font-medium">
          Shop Now
        </Button>
      </div>
      <div className="flex items-center justify-center gap-2 text-center lg:justify-start">
        <div>
          <h3 className="text-xl font-bold sm:text-3xl md:text-4xl">
            <CountUp end={200} start={150} />+
          </h3>
          <p className="text-sm dark:text-neutral-300  sm:text-xl">
            International Brands
          </p>
        </div>
        <div className="border-x border-neutral-400 px-2">
          <h3 className="text-xl font-bold sm:text-3xl md:text-4xl">
            <CountUp end={2000} start={1900} />+
          </h3>
          <p className="text-sm dark:text-neutral-300  sm:text-xl">
            High-Quality Products
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold sm:text-3xl md:text-4xl">
            <CountUp end={30000} start={29900} />+
          </h3>
          <p className="text-sm dark:text-neutral-300  sm:text-xl">
            Happy Customers
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
