import SectionIntro from "./subComponents/SectionIntro.tsx";
import {solutionsData} from "../data.ts";
import blue_check from "../assets/icons/blue_check.svg";

const Solutions = () => {
  return (
    <div id="solutions" className="w-full py-20">
      <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col items-center justify-center">
        <SectionIntro header="Transform your businesses with world-class Solutions"/>
        <div className="w-full flex flex-col items-center justify-center gap-20 mt-10">
          {solutionsData.map((solution, index) => {
            return (
              <div
                key={index}
                className="w-full grid grid-cols-1 md:grid-cols-2 items-start justify-center gap-10 md:gap-5 lg:gap-10 xl:gap-24"
              >
                <div className={`w-full flex items-center justify-center p-5 bg-cover bg-center bg-no-repeat h-[380px] md:h-full lg:h-[480px] rounded-3xl ${
                  index % 2 === 0 ? "" : "md:order-2"
                }`} style={{backgroundImage: `url(${solution.image}`}}>
                  {/*<img*/}
                  {/*  src={solution.image}*/}
                  {/*  alt={solution.heading}*/}
                  {/*  className="w-full h-auto max-w-[400px]"*/}
                  {/*/>*/}
                </div>
                <div className="w-full p-5">
                  <div className='flex flex-col gap-5 mb-8'>
                    <h3 className="text-3xl sm:text-4xl lg:text-[40px] leading-12 font-bold text-[#101828]">
                      {solution.heading}
                    </h3>
                    <p className="text-[#667085] text-sm sm:text-base lg:text-lg">{solution.desc}</p>
                  </div>
                  <ul className="list-none list-inside flex flex-col gap-5">
                    {solution.list.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-[#101828] text-xs sm:text-sm md:text-base flex items-center justify-start gap-3"
                      >
                        <span className='bg-[#1A73E8] text-white text-[9px] min-w-5 min-h-5 flex items-center justify-center rounded-full'>
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
