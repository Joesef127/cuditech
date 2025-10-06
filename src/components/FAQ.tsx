import { useState } from "react";
import { faqData } from "../data";
import SectionIntro from "./subComponents/SectionIntro";
import Button from "./subComponents/Button";
import youths from "../assets/images/youths.svg";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="w-full py-20">
      <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col items-center justify-center gap-16">
        <SectionIntro
          header="Frequently asked questions?"
          customClass="max-w-[871px]"
        />
        <div className="w-full max-w-4xl rounded-lg">
          <div className="space-y-0">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border-b-[0.5px] border-gray-200 last:border-b-0"
                data-aos="fade-up"
              >
                <button
                  className={`w-full ${
                    index === 0 ? "pt-4  " : "pt-10"
                  } pb-5 flex items-center justify-between text-left focus:outline-none`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-gray-900 font-medium text-sm sm:text-base md:text-lg pr-4">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-blue-500"
                      >
                        <path
                          d="M18 12H6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-blue-500"
                      >
                        <path
                          d="M12 6v12M6 12h12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </div>
                </button>

                {openIndex === index && item.answer && (
                  <div className="pb-4 pr-2 sm:pr-6 max-w-3xl">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 w-full">
        <div className="bg-[#1A73E8] py-12 sm:py-20 lg:py-28 px-10 sm:px-14 lg:px-16 xl:px-28 flex flex-col gap-8">
          <h1 className="text-white text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl sm:leading-12 lg:leading-16 xl:leading-[72px] font-bold">
            Ready to Pursue Opportunity?
          </h1>
          <p className="text-[#FAFCFF] text-lg leading-7">
            We help businesses embrace digital transformation with AI, cloud,
            and cybersecurity solutions that deliver real results.
          </p>
          <Button
            children="Book a demo"
            className="border border-white rounded-full py-3 px-6 text-white w-fit"
          />
        </div>
        <div
          className="bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${youths})` }}
        ></div>
      </div>
    </div>
  );
};

export default FAQ;
