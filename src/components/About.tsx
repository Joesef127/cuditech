import { statisticsData } from "../data";
import CountUp from "./subComponents/CountUp";

const About = () => {
  return (
    <div id="about" className="w-full py-20">
      <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center leading-snug text-black">
          We turn your groundbreaking Ideas into functional market ready MVPs,
          Focusing on Innovation and quality,{" "}
          <span className="text-[#667085]">
            our adaptable, customer centric approach ensures responsive
            experiences
          </span>
        </h1>
        <div className="w-full flex flex-col md:flex-row gap-6 items-center justify-center mt-16">
          {statisticsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-4 m-5 px-6 text-center"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#101828]">
                <CountUp end={parseInt(stat.value)} />+
              </h2>
              <p className="text-[#667085] text-sm sm:text-base lg:text-xl">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
