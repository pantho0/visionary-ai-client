import DomeGallery from "./DomeGallery";

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <p className="text-lg font-semibold mb-6 text-primary text-center">
        Gallery
      </p>
      <h1 className="text-center flex justify-center w-3/4 mx-auto">
        Discover beautifully generated images, designed to bring your vision to
        life.
      </h1>

      <div style={{ height: "100vh" }}>
        <DomeGallery />
      </div>
    </div>
  );
};

export default Gallery;
