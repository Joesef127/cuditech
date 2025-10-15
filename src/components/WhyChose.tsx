import SectionIntro from "./subComponents/SectionIntro";
import { testimonialsData, whyChoseData } from "../data.ts";

const WhyChose = () => {
  return (
    <div id="why-us" className="w-full py-20 overflow-hidden">
      {/* WHY CHOOSE SECTION */}
      <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col items-center justify-center">
        <SectionIntro header="Why Choose Us" />

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mt-10">
          {whyChoseData.map((item, index) => {
            // custom placements
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
                className={`flex flex-col items-center justify-between pt-10 rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ${item.bgColor} ${gridStyles}`}
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
                <img src={item.image} alt="background image" />
              </div>
            );
          })}
        </div>
        {/* Mobile Carousel */}
        <div className="md:hidden mt-10 w-[90%] max-w-[1200px] mx-auto flex flex-col items-start gap-12">
          {/* Carousel */}
          <div
            id="whyChooseCarousel"
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth w-full"
          >
            {whyChoseData.map((item, index) => (
              <div
                key={index}
                className={`w-full flex-shrink-0 rounded-3xl overflow-hidden flex flex-col items-center justify-between pt-10 shadow-md hover:shadow-lg transition-shadow duration-300 ${item.bgColor} snap-center`}
              >
                <div className="px-6">
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      index === 0 || index === 3
                        ? "text-white"
                        : "text-[#101828]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      index === 0 || index === 3
                        ? "text-white/90"
                        : "text-gray-600"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
                <img src={item.image} alt="background image" />
              </div>
            ))}
          </div>

          {/* Scroll Buttons */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <button
              onClick={() => {
                const carousel = document.getElementById("whyChooseCarousel");
                if (carousel)
                  carousel.scrollBy({ left: -300, behavior: "smooth" });
              }}
              className="w-16 h-16 rounded-full flex items-center justify-center text-3xl font-light bg-[#F0F1F3] hover:bg-[#E7ECFC] focus:bg-[#E7ECFC] active:bg-[#E7ECFC] hover:text-[#0D41E1] focus:text-[#0D41E1] active:text-[#0D41E1] shadow-md transition-colors"
            >
              &lt;
            </button>

            <button
              onClick={() => {
                const carousel = document.getElementById("whyChooseCarousel");
                if (carousel)
                  carousel.scrollBy({ left: 300, behavior: "smooth" });
              }}
              className="w-16 h-16 rounded-full flex items-center justify-center text-3xl font-light bg-[#F0F1F3] hover:bg-[#E7ECFC] focus:bg-[#E7ECFC] active:bg-[#E7ECFC] hover:text-[#0D41E1] focus:text-[#0D41E1] active:text-[#0D41E1] shadow-md transition-colors"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS SECTION */}
      <div className="py-20 bg-[#F9F9F9] w-full flex flex-col items-center justify-center gap-10 lg:gap-16 ">
        <SectionIntro
          header="What Clients say about us"
          customClass="max-w-[382px] md:max-w-[560px] lg:max-w-[637px]"
        />
        <div className="w-[90%] mr-[5%] ml-[5%] max-w-[1200px] mx-auto overflow-x-scroll sm:overflow-x-hidden scroll-smooth snap-x snap-mandatory scrollbar-hide">
          {/* Horizontally scrollable testimonials */}
          <div className="grid grid-cols-2 gap-6 w-max sm:w-full pb-4">
            {testimonialsData.map((item, index) => (
              <div
                key={index}
                className="bg-white py-6 px-6 md:py-8 md:px-6 lg:py-16 lg:px-12 xl:px-16 flex flex-col gap-10 lg:gap-16 rounded-2xl justify-between items-start max-w-[320px] sm:max-w-full snap-center"
              >
                <h3 className="font-medium text-[#1A1A1A] sm:text-base lg:text-[20px] leading-6 align-middle">
                  {item.text}
                </h3>
                <div className="flex justify-start items-center gap-2 w-full">
                  <span className="rounded-full">
                    <img src={item.image} alt="dp" className="w-10 h-10 sm:w-14 sm:h-14" />
                  </span>
                  <div>
                    <h5 className="text-sm sm:text-base lg:text-[20px] leading-5 sm:leading-[30px] align-middle font-bold text-[#1A1A1A] ">
                      {item.name}
                    </h5>
                    <p className="text-[#1A1A1A]/80 text-xs sm:text-sm md:text-xs lg:text-base leading-6 align-middle">
                      {item.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChose;
