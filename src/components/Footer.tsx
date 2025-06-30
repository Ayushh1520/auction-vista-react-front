
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Buy */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Buy</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Registration</a></li>
              <li><a href="#" className="hover:text-white">eBay Money Back Guarantee</a></li>
              <li><a href="#" className="hover:text-white">Bidding & buying help</a></li>
              <li><a href="#" className="hover:text-white">Stores</a></li>
              <li><a href="#" className="hover:text-white">eBay for Charity</a></li>
            </ul>
          </div>

          {/* Sell */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Sell</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Start selling</a></li>
              <li><a href="#" className="hover:text-white">Learn to sell</a></li>
              <li><a href="#" className="hover:text-white">Affiliates</a></li>
              <li><a href="#" className="hover:text-white">Business sellers</a></li>
              <li><a href="#" className="hover:text-white">Seller protection</a></li>
            </ul>
          </div>

          {/* Tools & Apps */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Tools & Apps</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Developers</a></li>
              <li><a href="#" className="hover:text-white">Security center</a></li>
              <li><a href="#" className="hover:text-white">Site map</a></li>
              <li><a href="#" className="hover:text-white">eBay official time</a></li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Connected</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">eBay's Blogs</a></li>
              <li><a href="#" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>

          {/* About eBay */}
          <div>
            <h3 className="font-semibold text-lg mb-4">About eBay</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Company info</a></li>
              <li><a href="#" className="hover:text-white">News</a></li>
              <li><a href="#" className="hover:text-white">Investors</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Diversity & Inclusion</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-4">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-4">
                <a href="#" className="hover:text-white">Privacy</a>
                <a href="#" className="hover:text-white">User Agreement</a>
                <a href="#" className="hover:text-white">Community</a>
              </div>
              <p>&copy; 2024 eBay Inc. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
