import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import logo from "../assets/logo.png";
interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt="Logi Prime" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm">
              Leading warehouse and logistics solutions provider offering comprehensive storage,
              fulfillment, and distribution services.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-teal-400 transition-colors text-sm">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-teal-400 transition-colors text-sm">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blogs')} className="hover:text-teal-400 transition-colors text-sm">
                  Blogs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-teal-400 transition-colors text-sm">
                  Gallery
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Shared Warehousing</li>
              <li>Brokerage Services</li>
              <li>3PL Solutions</li>
              <li>Distribution</li>
              <li>Fulfillment</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Dlf Corporate Greens,Tower 1-1604-05 , Gurugram,Haryana,122001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0" />
                <span>+91-8800144064</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <span>info@logiprime.com</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Logi Prime. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
