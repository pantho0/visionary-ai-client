import Link from "next/link";

const Banner = () => (
  <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8 -mt-16">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold w-full sm:w-11/12 md:w-3/4 leading-tight">
      Reimagine Creativity with AI Graphics
    </h1>
    <p className="mt-6 sm:mt-8 md:mt-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-light-100">
      Generate Beautiful Images Anytime
    </p>
    <Link href="/generate">
      <button className="bg-primary text-black px-6 py-4 sm:px-8 sm:py-5 md:p-6 rounded-sm text-base sm:text-lg md:text-xl mt-8 sm:mt-10 cursor-pointer hover:scale-105 transition-transform duration-200 font-semibold">
        Generate Image Now
      </button>
    </Link>
  </div>
);

export default Banner;
