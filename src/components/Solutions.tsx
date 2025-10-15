import SectionIntro from "./subComponents/SectionIntro.tsx";
import { solutionsData } from "../data.ts";

const Solutions = () => {
  return (
    <div id="solutions" className="w-full pt-20 pb-10">
      <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col items-center justify-center">
        <SectionIntro header="Transform your businesses with world-class Solutions" />
        <div className="w-full flex flex-col items-center justify-center gap-20 mt-10">
          {solutionsData.map((solution, index) => {
            return (
              <div
                key={index}
                className="w-full grid grid-cols-1 md:grid-cols-2 items-start justify-center gap-10 md:gap-5 lg:gap-10 xl:gap-24"
              >
                <div
                  className={`w-full flex items-center justify-center p-5 bg-cover bg-center bg-no-repeat h-[380px] lg:h-[480px] rounded-3xl ${
                    index % 2 === 0 ? "" : "md:order-2"
                  }`}
                  style={{ backgroundImage: `url(${solution.image}` }}
                ></div>
                <div className="w-full md:px-5 lg:px-0">
                  <div className="flex flex-col gap-2.5 lg:gap-4 mb-5 lg:mb-8">
                    <h3 className="text-3xl sm:text-4xl md:text-3xl lg:text-[40px] leading-12 font-bold text-[#101828]">
                      {solution.heading}
                    </h3>
                    <p className="text-[#667085] text-sm sm:text-base md:text-sm lg:text-lg">
                      {solution.desc}
                    </p>
                  </div>
                  <ul className="list-none list-inside flex flex-col gap-5">
                    {solution.list.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-[#101828] text-xs sm:text-sm md:text-xs lg:text-base flex items-center justify-start gap-3"
                      >
                        <span className="bg-[#1A73E8] text-white text-[9px] min-w-5 min-h-5 flex items-center justify-center rounded-full">
                          &#10003;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
