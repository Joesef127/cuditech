import Button from "./subComponents/Button.tsx";
import hero_image from "../assets/images/hero_image.svg";

const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col items-center justify-center gap-14 pt-16 sm:pt-24 md:pt-28 lg:pt-30">
        <div className="flex flex-col items-center justify-center gap-5 sm:gap-8 w-fit max-w-[975px] text-center">
          <p
            className="text-[#101828] text-xs sm:text-sm leading-5 tracking-normal py-2.5 px-4 border border-[#101828] rounded-full">
            Your Trusted B2B Technology Partner
          </p>
          <h1 className="text-[#101828] text-3xl sm:text-[60px] leading-10 sm:leading-[72px] tracking-[-2%] align-middle font-bold">
            Empowering Businesses with AI That Thinks for Itself.
          </h1>
          <p className="max-w-[794px] text-wrap text-sm sm:text-xl leading-5 sm:leading-7 tracking-normal text-[#667085]">
            Cuditech delivers Agentic AI, self-directed, adaptive AI agents that
            automate decisions, detect threats, and optimise operations. All in
            one subscription.
          </p>
          <div className="h-full flex items-center justify-between gap-4">
            <Button
              children="Explore our services"
              className="bg-[#000513] hover:bg-transparent border border-[#101828]  text-xs sm:text-base leading-6 text-white hover:text-[#101828] py-1.5 px-3 sm:py-4 sm:px-7 rounded-full"
            />
            <Button
              children="Book a demo"
              className="bg-transparent hover:bg-[#000513] border border-[#101828]  text-xs sm:text-base leading-6 text-[#101828] hover:text-white py-1.5 px-3 sm:py-4 sm:px-7 rounded-full"
            />
          </div>
        </div>
        <div className="bg-cover bg-top bg-no-repeat w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[620px] xl:h-[716px]" style={{backgroundImage: `url(${hero_image})`}}></div>
      </div>
    </section>
  );
};

export default HeroSection;
