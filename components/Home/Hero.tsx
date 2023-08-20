import Wrapper from "../Wrapper";
import HeroHeader from "./HeroHeader";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="flex items-center justify-start bg-neutral-100 px-2 py-5">
      <Wrapper>
        <div className="flex h-full flex-col items-center justify-between lg:flex-row">
          <HeroHeader />
          <HeroImage />
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
