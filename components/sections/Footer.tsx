import FacebookIcon from "@/assets/facebook";
import InstagramIcon from "@/assets/instagram";
import TwitterIcon from "@/assets/twitter";
import React from "react";

const companyLinks = ["About us", "Team", "Careers", "Blog"];
const contactLinks = ["Help & Support", "Partner with us", "Ride with us"];
const legalLinks = [
  "Terms & Conditions",
  "Refund & Cancellation",
  "Privacy Policy",
  "Cookie Policy",
];

const Footer = () => {
  return (
    <footer className="bg-[#282828] text-[#AAAAAA] py-12 px-8 md:px-16 lg:px-32 xl:px-40">
      <div className="flex flex-col lg:flex-row justify-between gap-12 mb-8">
        <div className="flex flex-col sm:flex-row gap-12 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-white">Company</h2>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-base font-semibold text-white">Contact</h2>
            <ul className="space-y-3 text-sm">
              {contactLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-base font-semibold text-white">Legal</h2>
            <ul className="space-y-3 text-sm">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-white">FOLLOW US</h2>
            <div className="flex gap-4 text-white">
              <a href="#" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Twitter">
                <TwitterIcon />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm">Receive exclusive offers in your mailbox</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#AAAAAA]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <input
                  type="email"
                  placeholder="Enter Your email"
                  className="w-full bg-[#444444] text-white placeholder-[#AAAAAA] pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F9A826]"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#F9A826] to-[#FBC02D] text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-[#444444] my-8"></div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#AAAAAA]">
        <p>
          All rights Reserved ©{" "}
          <span className="font-semibold">Your Company, 2021</span>
        </p>
        <p className="flex items-center gap-1">
          Made with{" "}
          <span
            className="text-[#F9A826] text-base"
            role="img"
            aria-label="heart"
          >
            💛
          </span>{" "}
          by <span className="font-semibold">Themewagon</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
