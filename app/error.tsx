"use client";

import { Button } from "@/components/ui/button";
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
      <div>
        <h2 className="mb-10 text-4xl font-semibold text-red-500">
          Something went wrong!
        </h2>
        <Button onClick={() => reset()}>Try again</Button>
      </div>
    </section>
  );
}
