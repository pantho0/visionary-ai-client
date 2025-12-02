import CapabilitiesCard from "./CapabilityCard";

const Capabilities = () => {
  return (
    <div className="mt-20 sm:mt-24 md:mt-30 min-h-screen relative px-4">
      <p className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-primary text-center">
        Capabilities
      </p>
      <h1 className="text-center flex justify-center w-full sm:w-11/12 md:w-3/4 mx-auto px-4">
        Generate ultra HD images ready for web, print, or presentations.
      </h1>

      <div className="mt-16 sm:mt-20 md:mt-26 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
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
