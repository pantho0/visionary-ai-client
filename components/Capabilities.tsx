import CapabilitiesCard from "./CapabilityCard";

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
