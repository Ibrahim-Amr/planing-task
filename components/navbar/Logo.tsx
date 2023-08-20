import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={"/"} title="logo" about="logo">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          ShopSpectrum
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
