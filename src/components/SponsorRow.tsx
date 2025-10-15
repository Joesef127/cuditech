import { sponsorsData } from "../data.ts";

const SponsorRow = () => {
  // Duplicate the array for seamless infinite scroll
  const logos = [...sponsorsData, ...sponsorsData, ...sponsorsData, ...sponsorsData, ...sponsorsData, ...sponsorsData];
  return (
    <div className="w-full overflow-hidden bg-white">
      <div className="w-[90%] max-w-[1200px] mx-auto overflow-hidden">
        <div className="flex items-center p-4 lg:py-8 animate-scroll-row whitespace-nowrap" style={{animationDuration: '30s'}}>
          {logos.map((img, i) => (
            <img
              src={img}
              alt="logo"
              key={i}
              className="mx-6 md:mx-8 hover:grayscale grayscale-0 transition-all duration-300 inline-block w-28 md:w-36 lg:h-12"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorRow;