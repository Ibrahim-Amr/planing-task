import Image from "next/image";
import hero from "@/public/hero.png";
const HeroImage = () => {
  return (
    <div className="relative h-full w-full overflow-hidden lg:max-w-[50%]">
      <Image src={hero} alt="hero" className="h-full w-full object-cover" />
    </div>
  );
};

export default HeroImage;
