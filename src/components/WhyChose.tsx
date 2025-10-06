import SectionIntro from "./subComponents/SectionIntro";
import { testimonialsData, whyChoseData } from "../data.ts";

const WhyChose = () => {
  return (
    <div id="why-us" className="w-full py-20">
      <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col items-center justify-center">
        <SectionIntro header="Why Choose Us" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mt-10">
          {whyChoseData.map((item, index) => {
            // Custom grid placement
            let gridStyles = "";
            if (index === 0) gridStyles = "md:row-span-2 md:col-span-1";
            if (index === 1)
              gridStyles = "md:row-span-1 md:col-span-1 md:row-start-3";
            if (index === 2)
              gridStyles = "md:row-span-1 md:col-span-1 md:col-start-2";
            if (index === 3)
              gridStyles =
                "md:row-span-2 md:col-span-1 md:col-start-2 md:row-start-2";
            return (
              <div
                key={index}
                className={`flex flex-col items-center justify-between pt-10 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${item.bgColor} ${gridStyles}`}
              >
                <div className="max-w-[410px] px-4 md:px-6 lg:px-3">
                  <h3
                    className={`text-xl sm:text-3xl md:text-2xl lg:text-3xl leading-9 tracking-[-2%] font-semibold mb-2 ${
                      index === 0 || index === 3
                        ? "text-white"
                        : "text-[#101828]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-base lg:text-lg leading-snug lg:leading-7 ${
                      index === 0 || index === 3
                        ? "text-white/90"
                        : "text-gray-600"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
                <img src={item.image} alt="background image" className="" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-20 bg-[#F9F9F9] w-full">
        <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col items-center justify-center gap-16">
          <SectionIntro
            header="What Clients say about us"
            customClass="max-w-[637px]"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonialsData.map((item, index) => {
              return (
                <div key={index} className="bg-white py-6 px-6 md:py-8 md:px-6 lg:py-16 lg:px-12 xl:px-16 flex flex-col gap-10 lg:gap-16 rounded-2xl justify-between items-start">
                  <h3 className="font-medium text-[#1A1A1A] sm:text-base lg:text-[20px] leading-6 align-middle">{item.text}</h3>
                  <div className="flex justify-between items-center gap-8 w-full">
                    <div>
                      <h5 className="sm:text-base lg:text-[20px] leading-[30px] align-middle font-bold text-[#1A1A1A] ">{item.name}</h5>
                      <p className="text-[#1A1A1A]/80 text-xs sm:text-sm md:text-xs lg:text-base leading-6 align-middle">{item.position}</p>
                    </div>
                    <span className="rounded-full">
                      <img src={item.image} alt="dp" className="w-16 h-16" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChose;
