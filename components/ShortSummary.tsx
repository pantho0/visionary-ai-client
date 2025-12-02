import Image from "next/image";
import PixelBlast from "./PixelBlast";

const ShortSummary = () => (
  <div className="relative space-y-6 sm:space-y-8 md:space-y-10 px-4">
    <div className="absolute inset-0 z-[-1] min-h-screen">
      <PixelBlast
        variant="circle"
        pixelSize={6}
        color="#B1EFDB"
        patternScale={3}
        patternDensity={1}
        pixelSizeJitter={0.5}
        enableRipples
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        liquid
        liquidStrength={0.12}
        liquidRadius={1.2}
        liquidWobbleSpeed={5}
        speed={0.6}
        edgeFade={0.25}
        transparent
      />
    </div>

    <p className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-primary text-center mt-12 sm:mt-16 md:mt-20">
      Unlock Your Imagination
    </p>
    <h1 className="w-full sm:w-11/12 md:w-3/4 mx-auto text-center">
      With Visionary AI, <br className="hidden sm:block" />
      experience design features that redefine creativity
    </h1>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 mt-10 sm:mt-12 md:mt-16">
      <Image
        src="/images/ex-1.jpg"
        alt="short summary"
        width={512}
        height={512}
        className="w-full sm:w-1/2 md:w-auto max-w-[300px] sm:max-w-[400px] md:max-w-[512px] h-auto rounded-lg"
      />
      <Image
        src="/images/ex-2.jpg"
        alt="short summary"
        width={512}
        height={512}
        className="w-full sm:w-1/2 md:w-auto max-w-[300px] sm:max-w-[400px] md:max-w-[512px] h-auto rounded-lg"
      />
    </div>
  </div>
);

export default ShortSummary;
