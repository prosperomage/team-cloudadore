import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold">Cloudadore</h2>
          <p className="mt-3 text-gray-200">
            Building the future of cloud through community
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-200">
            <li>About</li>
            <li>Events</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-200">
            <li>Blog</li>
            <li>Help Center</li>
            <li>Documentation</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 text-center py-4">
        © 2026 Cloudadore. All rights reserved.
      </div>
    </footer>
  );
}
