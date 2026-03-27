import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-(--color-primary-blue) text-white mt-20">
      
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">
            Cloud<span className="text-(--color-accent-orange)">Adore</span>
          </h2>

          <p className="mt-4 text-gray-200">
            Building the future of cloud through community. Learn, connect, and grow together.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Company</h3>

          <ul className="space-y-2 text-gray-200">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Events</li>
            <li className="hover:text-white cursor-pointer">Community</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Resources</h3>

          <ul className="space-y-2 text-gray-200">
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Documentation</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Follow Us</h3>

          <div className="flex gap-4 text-lg">
            <div className="p-2 bg-white/10 rounded-lg hover:bg-(--color-accent-orange) transition cursor-pointer">
              <FaFacebookF />
            </div>

            <div className="p-2 bg-white/10 rounded-lg hover:bg-(--color-accent-orange) transition cursor-pointer">
              <FaTwitter />
            </div>

            <div className="p-2 bg-white/10 rounded-lg hover:bg-(--color-accent-orange) transition cursor-pointer">
              <FaInstagram />
            </div>

            <div className="p-2 bg-white/10 rounded-lg hover:bg-(--color-accent-orange) transition cursor-pointer">
              <FaLinkedin />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 text-center py-5 text-gray-200">
        © 2026 CloudAdore. All rights reserved.
      </div>

    </footer>
  );
}