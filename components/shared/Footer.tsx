import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
   <footer className="relative mt-32 bg-(--color-primary-blue) text-white">
        
        {/* The Overlapping CTA Card */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-6">
          <div className="bg-linear-to-br from-(--color-primary-blue) to-(--color-secondary-blue) rounded-4xl p-8 md:p-16 text-center shadow-2xl border border-white/10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Get Involved</h2>
            <p className="max-w-2xl mx-auto mb-8 text-blue-50/90 text-sm md:text-base leading-relaxed">
              CloudAdore is powered by people like you. Volunteer your skills, partner with us, and help shape the future of cloud innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-(--color-accent-orange) rounded-xl font-bold hover:brightness-110 transition-all">
                Get Involved
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Footer Links - Padded top to account for the overlapping card */}
        <div className="max-w-7xl mx-auto px-6 pt-52 md:pt-64 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Cloud<span className="text-(--color-accent-orange)">Adore</span></h2>
            <p className="text-blue-100/70 text-sm leading-relaxed">
              Building the future of cloud through community. Learn, connect, and grow together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3 text-blue-100/70 text-sm">
              <li className="hover:text-white cursor-pointer transition">About Us</li>
              <li className="hover:text-white cursor-pointer transition">Events</li>
              <li className="hover:text-white cursor-pointer transition">Community</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3 text-blue-100/70 text-sm">
              <li className="hover:text-white cursor-pointer transition">Blog</li>
              <li className="hover:text-white cursor-pointer transition">Documentation</li>
              <li className="hover:text-white cursor-pointer transition">Help Center</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="font-bold text-lg mb-6">Follow Us</h3>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-white/10 rounded-lg hover:bg-(--color-accent-orange) transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8 text-center text-blue-100/40 text-xs uppercase tracking-widest">
          © 2026 CloudAdore. All rights reserved.
        </div>
      </footer>
  );
}