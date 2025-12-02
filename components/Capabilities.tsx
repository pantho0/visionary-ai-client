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

const Capabilities = () => {
  return (
    <div className="mt-30 min-h-screen relative">
      <p className="text-lg font-semibold mb-6 text-primary text-center">
        Capabilities
      </p>
      <h1 className="text-center flex justify-center w-3/4 mx-auto">
        Generate ultra HD images ready for web, print, or presentations.
      </h1>

      <div className="mt-26 flex flex-wrap gap-8 justify-center">
        <CapabilitiesCard
          imgSrc="/images/collection-img1.png"
          title="Intelligent"
          description="Adipiscing elit, sed do eiusmod labore dolore magna aliqua."
        />
        <CapabilitiesCard
          imgSrc="/images/collection-img2.png"
          title="Visualization"
          description="Adipiscing elit, sed do eiusmod labore dolore magna aliqua."
        />
        <CapabilitiesCard
          imgSrc="/images/collection-img3.png"
          title="Creativity"
          description="Adipiscing elit, sed do eiusmod labore dolore magna aliqua."
        />
        <CapabilitiesCard
          imgSrc="/images/collection-img4.png"
          title="Flexible"
          description="Adipiscing elit, sed do eiusmod labore dolore magna aliqua."
        />
      </div>
    </div>
  );
};

export default Capabilities;
