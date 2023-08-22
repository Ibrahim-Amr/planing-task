import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="flex h-auto min-h-screen flex-col items-center justify-center">
      <div className="mb-5 text-center text-fluid-2 font-semibold leading-none">
        <h2 className="text-red-700">404</h2>
        <h3 className="text-red-500">Page not found</h3>
      </div>
      <Link href={"/"} title="Return Home">
        <Button size={"lg"}>Home</Button>
      </Link>
    </section>
  );
};

export default NotFound;
