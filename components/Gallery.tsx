import DomeGallery from "./DomeGallery";

const Gallery = () => {
  return (
    <div className="min-h-screen px-4">
      <p className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-primary text-center">
        Gallery
      </p>
      <h1 className="text-center flex justify-center w-full sm:w-11/12 md:w-3/4 mx-auto px-4">
        Discover beautifully generated images, designed to bring your vision to
        life.
      </h1>

      <div className="h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen">
        <DomeGallery />
      </div>
    </div>
  );
};

export default Gallery;
