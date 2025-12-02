import Image from "next/image";

const CapabilitiesCard = ({
  imgSrc,
  title,
  description,
}: {
  imgSrc: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl w-full sm:max-w-[280px] shadow-lg hover:scale-105 transition-transform duration-300">
      <div className="flex flex-col p-6 sm:p-8 md:p-10 justify-center items-center text-center">
        <Image src={imgSrc} alt="capabilities" width={50} height={50} className="w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px]" />
        <h2 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-white">{title}</h2>
        <p className="mt-2 text-xs sm:text-sm text-white/70">{description}</p>
      </div>
    </div>
  );
};

export default CapabilitiesCard;
