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
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl max-w-[250px] shadow-lg">
      <div className="flex flex-col p-10 justify-center items-center text-center">
        <Image src={imgSrc} alt="capabilities" width={50} height={50} />
        <h2 className="mt-4 text-lg font-semibold text-white">{title}</h2>
        <p className="mt-2 text-sm text-white/70">{description}</p>
      </div>
    </div>
  );
};

export default CapabilitiesCard;
