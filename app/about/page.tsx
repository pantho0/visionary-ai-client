const AboutUs = () => {
  return (
    <>
      <section className="py-12 sm:py-16">
        <div className="mx-auto container flex flex-col items-center px-5 sm:px-10">
          <h1 className="text-gradient mb-8 text-center">About Visionary AI</h1>
          <p className="subheading max-w-3xl text-center text-lg text-light-100 mb-8">
            Visionary AI is a cutting-edge platform that transforms your creative ideas into stunning visual realities.
            Leveraging advanced artificial intelligence, we empower users to generate unique images from simple text prompts,
            making artistic expression accessible to everyone.
          </p>
          <div className="max-w-4xl text-left text-light-100">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="mb-6">
              Our mission is to democratize digital art creation. We believe that everyone should have the ability to
              visualize their imagination without needing complex design skills or expensive software. By providing an
              intuitive and powerful AI image generation tool, we aim to inspire creativity and open new avenues for
              personal and professional projects.
            </p>

            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <p className="mb-6">
              Simply enter a textual description of the image you envision. Our AI model then processes your prompt,
              interpreting your words to construct a unique visual output. Whether you're looking for abstract art,
              realistic landscapes, character designs, or anything in between, Visionary AI brings your concepts to life.
            </p>

            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="mb-6">
              We envision a future where creativity knows no bounds. Visionary AI is continuously evolving, with ongoing
              research and development to enhance our AI models, expand artistic styles, and improve user experience.
              Join us in shaping the future of digital creation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
