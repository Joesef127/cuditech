export interface SectionIntroType {
  header: string;
  subHeader?: string;
  customClass?: string;
  headerStyle?: string;
  subHeaderStyle?: string;
}

const SectionIntro = ({
  header,
  subHeader,
  customClass,
  headerStyle,
  subHeaderStyle,
}: SectionIntroType) => {
  return (
    <div
      className={`flex flex-col gap-2 sm:gap-4 justify-center items-center w-full relative text-center ${customClass}`}
    >
      <h1
        className={`
        text-4xl md:text-5xl lg:text-6xl 
         lg:max-w-[970px] font-bold text-center
        text-[#101828] relative flex justify-center flex-row-reverse
        ${headerStyle}`}
        data-aos="fade-left"
      >
        {header}
      </h1>
      <p
        className={`${subHeaderStyle} 
          text-[#8E8E8E] text-center
          text-sm sm:text-base md:text-lg 
          leading-6 sm:leading-7 
          font-normal mx-3 sm:mx-5 md:mx-10 lg:mx-0`}
        data-aos="fade-right"
      >
        {subHeader}
      </p>
    </div>
  );
};

export default SectionIntro;
