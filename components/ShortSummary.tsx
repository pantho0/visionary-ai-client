import Image from "next/image";
import PixelBlast from "./PixelBlast";

const ShortSummary = () => (
  <div className="relative space-y-10">
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

    <p className="text-lg font-semibold mb-6 text-primary text-center mt-20">
      Unlock Your Imagination
    </p>
    <h1 className="w-3/4 mx-auto text-center">
      With Visionary AI, <br />
      experience design features that redefine creativity
    </h1>

    <div className="flex justify-between mt-16">
      <Image
        src="/images/ex-1.jpg"
        alt="short summary"
        width={512}
        height={512}
        className="mx-auto"
      />
      <Image
        src="/images/ex-2.jpg"
        alt="short summary"
        width={512}
        height={512}
        className="mx-auto"
      />
    </div>
  </div>
);

export default ShortSummary;
