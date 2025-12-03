"use client";
import Image from "next/image";
import { Sparkles, Zap, Users, Target } from "lucide-react";

const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto container flex flex-col items-center px-5 sm:px-10">
          <p className="text-base sm:text-lg font-semibold mb-4 text-primary text-center">
            Who We Are
          </p>
          <h1 className="text-gradient mb-6 text-center">About Visionary AI</h1>
          <p className="max-w-3xl text-center text-lg sm:text-xl text-light-100 mb-12 leading-relaxed">
            We&apos;re pioneering the future of creative expression through
            cutting-edge artificial intelligence. Our platform transforms
            imagination into reality, making professional-grade image generation
            accessible to everyone.
          </p>

          {/* Hero Image Placeholder */}
          <div className="relative w-full max-w-5xl h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden glass mb-16">
            <Image
              src="/images/team.jpg"
              alt="Add a professional team photo or modern office workspace showcasing collaboration and innovation"
              fill
              className="object-cover"
              // onError={(e) => {
              //   const target = e.target as HTMLImageElement;
              //   target.style.display = "none";
              //   const parent = target.parentElement;
              //   if (parent) {
              //     parent.classList.add(
              //       "flex",
              //       "items-center",
              //       "justify-center",
              //       "bg-dark-100"
              //     );
              //     parent.innerHTML =
              //       '<div class="text-center px-6"><Sparkles class="w-16 h-16 mx-auto mb-4 text-primary" /><p class="text-light-200 text-sm">Add a professional team photo or modern office workspace showcasing collaboration and innovation</p></div>';
              //   }
              // }}
            />
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 sm:py-20 bg-linear-to-b from-transparent via-dark-100/30 to-transparent">
        <div className="mx-auto container px-5 sm:px-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Mission Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
                <Target className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  Our Mission
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gradient">
                Democratizing Creative Intelligence
              </h2>
              <p className="text-light-100 text-base sm:text-lg leading-relaxed">
                We believe creativity should be limitless and accessible to all.
                Our mission is to break down the barriers between imagination
                and creation, empowering individuals, businesses, and artists to
                bring their visions to life without the need for expensive tools
                or years of training.
              </p>
              <p className="text-light-100 text-base sm:text-lg leading-relaxed">
                Through state-of-the-art AI technology, we&apos;re building a
                platform that understands your creative intent and delivers
                professional-quality results instantly.
              </p>
            </div>

            {/* Mission Image Placeholder */}
            <div className="relative h-[350px] sm:h-[400px] rounded-2xl overflow-hidden glass">
              <div className="absolute inset-0 flex items-center justify-center bg-dark-100">
                {/* <div className="text-center px-6">
                  <Sparkles className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <p className="text-light-200 text-sm">
                    Add an inspiring image: creative workspace, digital art
                    creation, or AI visualization
                  </p>
                </div> */}
                <Image
                  src="/images/genimg.png"
                  alt="Add a professional team photo or modern office workspace showcasing collaboration and innovation"
                  fill
                  className="object-cover"
                  // onError={(e) => {
                  //   const target = e.target as HTMLImageElement;
                  //   target.style.display = "none";
                  //   const parent = target.parentElement;
                  //   if (parent) {
                  //     parent.classList.add(
                  //       "flex",
                  //       "items-center",
                  //       "justify-center",
                  //       "bg-dark-100"
                  //     );
                  //     parent.innerHTML =
                  //       '<div class="text-center px-6"><Sparkles class="w-16 h-16 mx-auto mb-4 text-primary" /><p class="text-light-200 text-sm">Add a professional team photo or modern office workspace showcasing collaboration and innovation</p></div>';
                  //   }
                  // }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto container px-5 sm:px-10">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-base sm:text-lg font-semibold mb-4 text-primary">
              Simple & Powerful
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-6">
              How Visionary AI Works
            </h2>
            <p className="max-w-2xl mx-auto text-light-100 text-base sm:text-lg">
              Transform your ideas into stunning visuals in three simple steps
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {/* Step 1 */}
            <div className="glass p-6 sm:p-8 rounded-2xl space-y-4 hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Describe Your Vision
              </h3>
              <p className="text-light-100 leading-relaxed">
                Type a detailed description of the image you want to create. Be
                as specific or creative as you like—our AI understands natural
                language.
              </p>
            </div>

            {/* Step 2 */}
            <div className="glass p-6 sm:p-8 rounded-2xl space-y-4 hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                AI Processing Magic
              </h3>
              <p className="text-light-100 leading-relaxed">
                Our advanced neural networks interpret your prompt,
                understanding context, style, and composition to generate
                unique, high-quality images.
              </p>
            </div>

            {/* Step 3 */}
            <div className="glass p-6 sm:p-8 rounded-2xl space-y-4 hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Download & Use
              </h3>
              <p className="text-light-100 leading-relaxed">
                Receive your custom-generated image in seconds. Download, share,
                or refine it further—your creative possibilities are endless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto container px-5 sm:px-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-6">
              Our Core Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Innovation */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary/30 to-blue/30 flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white">Innovation First</h3>
              <p className="text-light-100">
                Continuously pushing boundaries with cutting-edge AI research
                and development
              </p>
            </div>

            {/* Accessibility */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary/30 to-blue/30 flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white">User Empowerment</h3>
              <p className="text-light-100">
                Making professional-grade tools accessible to creators of all
                skill levels
              </p>
            </div>

            {/* Quality */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary/30 to-blue/30 flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Excellence in Quality
              </h3>
              <p className="text-light-100">
                Delivering exceptional results that exceed expectations every
                time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 sm:py-20 bg-linear-to-b from-transparent via-dark-100/30 to-transparent">
        <div className="mx-auto container px-5 sm:px-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-base sm:text-lg font-semibold text-primary">
              Looking Forward
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient">
              The Future of Creativity
            </h2>
            <p className="text-light-100 text-base sm:text-lg leading-relaxed">
              We envision a world where creativity knows no bounds—where anyone
              can transform their imagination into stunning visual reality.
              Visionary AI is continuously evolving through ongoing research and
              development, expanding artistic capabilities, enhancing AI models,
              and improving user experience.
            </p>
            <p className="text-light-100 text-base sm:text-lg leading-relaxed">
              Join us on this exciting journey as we shape the future of digital
              creation, one image at a time. Together, we&apos;re building
              tomorrow&apos;s creative tools today.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
