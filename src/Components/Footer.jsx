import React from "react";

function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-black tracking-wider uppercase">
              Shop
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-grey hover:text-black"
                >
                  Top Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-grey hover:text-black"
                >
                  Deals of the Day
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-grey hover:text-black"
                >
                  Sale
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-black tracking-wider uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-grey hover:text-black"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-grey hover:text-black"
                >
                  Shipping
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-grey hover:text-black"
                >
                  Returns
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-black tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-grey hover:text-black"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-grey hover:text-black"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-grey hover:text-black"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-black tracking-wider uppercase">
              Follow Us
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-grey hover:text-black"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-grey hover:text-black"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-grey hover:text-black"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-black pt-8">
          <p className="text-base text-black/95 text-center">
            © 2024 TRENDY-COLLECTION. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
