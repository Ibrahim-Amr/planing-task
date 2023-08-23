"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-10 text-4xl font-semibold text-red-500">
          Something went wrong!
        </h2>
        <div className="flex items-center justify-center gap-x-3">
          <Button onClick={() => reset()}>Try again</Button>
          <Link href={"/"}>
            <Button onClick={() => reset()}>Return Home</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
