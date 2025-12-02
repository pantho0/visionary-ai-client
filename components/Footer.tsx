import Aurora from "./Aurora";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-gray-300 py-14">
      <div className="relative">
        <div className="w-full">
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <svg
              width="45"
              height="45"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white/90"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 ..."></path>
            </svg>
            <h2 className="text-xl font-semibold text-white">Visionary AI</h2>
          </div>

          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Empowering creators with intelligent image generation and next-gen
            design tools.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm list-none">
            <li>
              <a className="hover:text-white cursor-pointer transition">
                AI Image Generation
              </a>
            </li>
            <li>
              <a className="hover:text-white cursor-pointer transition">
                Brand Design
              </a>
            </li>
            <li>
              <a className="hover:text-white cursor-pointer transition">
                Creative Editing
              </a>
            </li>
            <li>
              <a className="hover:text-white cursor-pointer transition">
                Visual Marketing
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm list-none">
            <li>
              <a className="hover:text-white cursor-pointer transition">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-white cursor-pointer transition">
                Contact
              </a>
            </li>
            <li>
              <a className="hover:text-white cursor-pointer transition">
                Careers
              </a>
            </li>
            <li>
              <a className="hover:text-white cursor-pointer transition">
                Press
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-400 text-sm list-none">
            <li>
              <a className="hover:text-white cursor-pointer transition">
                Terms of Use
              </a>
            </li>
            <li>
              <a className="hover:text-white cursor-pointer transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:text-white cursor-pointer transition">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* bottom line */}
      <div className="border-t border-white/10 mt-14 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Visionary AI — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
